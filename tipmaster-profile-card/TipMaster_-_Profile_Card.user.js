// ==UserScript==
// @name        TipMaster - Profile Card
// @namespace   http://feherke.github.io/
// @description Display brief profile information on mouse over the member profile link.
// @match       http://*.tek-tips.com/*
// @match       http://*.eng-tips.com/*
// @grant       GM_addStyle
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_deleteValue
// @grant       GM_listValues
// @version     0.0
// ==/UserScript==


GM_addStyle('a.gm_profilecard { box-shadow: 0 3px 2px -1px #c66; }')
GM_addStyle('table.gm_profilecard { position: absolute; max-width: 400px; color: darkred; background-color: #fee; border-style: solid; border-width: thin; border-color: darkred; border-radius: 5px; padding: 5px; }')
GM_addStyle('td.gm_profiledata { text-align: right; vertical-align: top; white-space: nowrap; padding-right: 5px; opacity: .5; }')


// part 1 : collecting data on user profile page

var data=undefined
if (location.pathname=='/userinfo.cfm' && (data=location.search.match(/\bmember=(\w+)/))) { // // // // //

// only when logged in
if (!document.cookie.match(/\bCHANDLE=/)) return

var member=data[1]
var card={ earned: 0, given: 0, date: new Date() }

// profile page paragraph
var list=Array.prototype.slice.call(document.querySelectorAll('div#bodycontent p'))

// if the first paragraph has no links, it is the about
if (!list[0].querySelector('a')) card['about']=list.shift().textContent

// followed by the general info
if (data=list[0].textContent.match(/joining .+? on (\w+ \d+, \d+)/)) card['join']=new Date(data[1])
if (data=list[0].textContent.match(/last login was on \w+, (\w+ \d+, \d+)/)) card['last']=new Date(data[1])
if (data=list[0].textContent.match(/logged in ([\d,]+)/)) card['login']=number(data[1])
if (list[0].textContent.match(/Round Table/)) card['knight']=true
if (data=list[0].textContent.match(/started ([\d,]+)/)) card['post']=number(data[1])
if (data=list[0].textContent.match(/posted ([\d,]+)/)) card['reply']=number(data[1])
if (data=list[0].textContent.match(/written ([\d,]+)/)) card['faq']=number(data[1])

// if the next paragraph has link, it is the moderation
if (data=list[1].querySelector('a')) card['owner']=data.textContent

// received votes column
list=document.querySelectorAll('table#mtable tr td:nth-of-type(5)')
card['forum']=list.length
for (var i=0;i<card['forum'];i++) card['earned']+=number(list[i].textContent)

// given votes column
list=document.querySelectorAll('table#mtable tr td:nth-of-type(6)')
for (var i=0;i<card['forum'];i++) card['given']+=number(list[i].textContent)

// save it
GM_setValue(member,JSON.stringify(card))

// that's all folks
return

} // // // // //


// part 2 : display data on all other pages

// for relative time calculation
var timeunit=[
  ['decade',10*365.25*24*60],
  ['year',365.25*24*60],
  ['month',30.4366666666*24*60],
  ['week',7*24*60],
  ['day',24*60],
]
var now=new Date().getTime()

// the floated card object
var profilecard=undefined

// all member profile link
var list=document.querySelectorAll('a[href*="userinfo.cfm?member="]')
for (var i=0,l=list.length;i<l;i++) {
// skip those without profile card
  if (!GM_getValue(list[i].textContent)) continue

  list[i].classList.add('gm_profilecard')
  list[i].addEventListener('mouseover',showprofilecard,true)
  list[i].addEventListener('mousemove',showprofilecard,true)
  list[i].addEventListener('mouseout',showprofilecard,true)
}


// handle mouse events
function showprofilecard(event)
{
// create the card object if not exist
  if (!profilecard) {
    profilecard=document.createElement('div')
    profilecard=document.createElement('table')
    profilecard.className='gm_profilecard'
    document.body.appendChild(profilecard)
  }

// handle various events
  if (event.type=='mouseover') {
// remove previous table rows
    while (profilecard.rows.length) profilecard.deleteRow(-1)

// add new table rows
    var card=JSON.parse(GM_getValue(event.target.textContent))
    addprofiledata('handle',event.target.textContent)
    addprofiledata('introduction',card['about'])
    addprofiledata('join date',card['join'],relativetime)
    addprofiledata('last login',card['last'],relativetime)
    addprofiledata('login #',card['login'])
    addprofiledata('post #',card['post'])
    addprofiledata('reply #',card['reply'])
    addprofiledata('faq #',card['faq'])
    addprofiledata('forum #',card['forum'])
    addprofiledata('earned &#x2605;',card['earned'])
    addprofiledata('given &#x2605;',card['given'])
    addprofiledata('knight of',card['knight']?'Round Table':'')
    addprofiledata('owner of',card['owner'])
    addprofiledata('card age',card['date'],relativetime)
    profilecard.style.display='block'
  } else if (event.type=='mouseout') {
    profilecard.style.display='none'
  } else if (event.type=='mousemove') {
    profilecard.style.left=event.pageX-10+'px'
    profilecard.style.top=event.pageY+20+'px'
  }
}

// add one profile card table row
function addprofiledata(which,what,how)
{
// add nothing if no value
  if (!what) return

  var row=profilecard.insertRow(-1)
  var cell=row.insertCell(-1)
  cell.innerHTML=which
  cell.className='gm_profiledata'

  cell=row.insertCell(-1)
  if (typeof how=='function') what=how(what)
  cell.textContent=what
}

// calculate relative time
function relativetime(what)
{
  var date=new Date(what)
  var time=Math.floor((now-date)/60/1000)

  for (var i=0,l=timeunit.length;i<l;i++) {
    if (time>=timeunit[i][1] || i==l-1) {
      var amount=time/(timeunit[i][1]?timeunit[i][1]:1)
      return amount.toFixed(1).replace(/\.0$/,'')+' '+timeunit[i][0]+(amount>=2?'s':'')
    }
  }
}

// converts string with thousand separator into number
function number(what)
{
  return parseInt(what.replace(/,/g,''),10) || 0
}

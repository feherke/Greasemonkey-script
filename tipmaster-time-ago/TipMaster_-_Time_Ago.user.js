// ==UserScript==
// @name           TipMaster - Time Ago
// @namespace      http://feherke.github.com/
// @description    Adds relative approximative equivalent after dates.
// @match          http://*.tek-tips.com/threadminder.cfm?pid=*
// @match          http://*.tek-tips.com/viewthread.cfm?qid=*
// @match          http://*.tek-tips.com/faq.cfm?pid=*
// @match          http://*.tek-tips.com/tipmasters.cfm?pid=*
// @match          http://*.tek-tips.com/search.cfm?*
// @match          http://*.tek-tips.com/userthreads.cfm?*
// @match          http://*.tek-tips.com/userthreadparticipate.cfm?*
// @match          http://*.eng-tips.com/threadminder.cfm?pid=*
// @match          http://*.eng-tips.com/viewthread.cfm?qid=*
// @match          http://*.eng-tips.com/faq.cfm?pid=*
// @match          http://*.eng-tips.com/tipmasters.cfm?pid=*
// @match          http://*.eng-tips.com/search.cfm?*
// @match          http://*.eng-tips.com/userthreads.cfm?*
// @match          http://*.eng-tips.com/userthreadparticipate.cfm?*
// @version        0.0
// ==/UserScript==


GM_addStyle('td.date div { white-space: nowrap; }')
GM_addStyle('table.faqtable td[align] { white-space: nowrap; }')
GM_addStyle('span.gm_timeago { color: #930; font-size: smaller; }')


var unit=[
  ['decade',10*365.25*24*60],
  ['year',365.25*24*60],
  ['month',30.4366666666*24*60],
  ['week',7*24*60],
  ['day',24*60],
  ['hour',60],
  ['minute',0],
]


var serverzone=-5
var servertime=new Date()
servertime=servertime.getTime()+servertime.getTimezoneOffset()*60*1000+serverzone*60*60*1000

var list=document.querySelectorAll('td.date div')

if (list.length)
  servertime=human2unix(list[0].title.replace(/Current Server Time: /,''))
else
  list=document.querySelectorAll('div.date,table.faqtable td[align="right"],table#mtable td[nowrap]')

var serverdate=new Date()
serverdate.setTime(servertime)
serverdate.setHours(0)
serverdate.setMinutes(0)
serverdate.setSeconds(0)
serverdate.setMilliseconds(0)
serverdate=serverdate.getTime()

var expr=/\d+\s+[A-Z][a-z]{2}\s+\d+(\s+\d+:\d+)?/g

for (var i=0,elem;elem=list[i++];) {
  var text=elem.textContent,result='',pos=0,match
  while (match=expr.exec(text)) {
    result+=text.substring(pos,expr.lastIndex)+' <span class="gm_timeago">'+timeago(human2unix(match[0]),match[1])+'</span>'
    pos=expr.lastIndex
  }
  result+=text.substring(pos)
  elem.innerHTML=result
}


function human2unix(what)
{
  return new Date(what.replace(/\s+/g,' ').replace(/([a-z] )(\d+)/,function(p0,p1,p2){return p1+(p2<50?20:19)+p2})).getTime()
}

function timeago(what,withhour)
{
  var time=Math.floor(((withhour?servertime:serverdate)-what)/60/1000)

  for (var i=0,l=unit.length;i<l;i++) {
    if (time>=unit[i][1] || (unit[i][0]=='day' && !withhour)) {
      var amount=time/(unit[i][1]?unit[i][1]:1)
      return amount.toFixed(1).replace(/\.0$/,'')+' '+unit[i][0]+(amount>=2?'s':'')
    }
  }
}

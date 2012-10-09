// ==UserScript==
// @name           TipMaster - Show/Hide Spoiler
// @namespace      http://feherke.github.com/
// @description    Adds links to show/hide spoiler tag's content.
// @match          http://*.tek-tips.com/viewthread.cfm?qid=*
// @match          http://*.eng-tips.com/viewthread.cfm?qid=*
// @version        0.0
// ==/UserScript==


GM_addStyle('a.gm_spoiler { float: right; color: #930; background-color: pink; padding-left: 5px; padding-right: 5px; }')


var list=document.querySelectorAll('div.spoiler h4')
if (!list) return


for (var i=0,tag;tag=list[i++];) {
  var link=document.createElement('a')
  link.className='gm_spoiler'
  link.href='#'
  link.title='Show this spoiler\'s content'
  link.textContent='show'
  link.addEventListener('click',clickhandler,false)
  tag.appendChild(link)
}


function clickhandler(event)
{
  event.preventDefault()

  var link=event.target
  var spoiler=link
  while (spoiler!=null) {
    if (spoiler.nodeType==1 && spoiler.nodeName.toLowerCase()=='div' && spoiler.classList.contains('spoiler')) break
    spoiler=spoiler.parentNode
  }
  if (!spoiler) return

  spoiler=spoiler.querySelector('div.body')

  link.hash=link.hash=='#1'?'':'#1'

  link.textContent=link.hash?'hide':'show'
  link.title=link.textContent[0].toUpperCase()+link.textContent.substr(1)+' this spoiler\'s content'

  spoiler.style.setProperty('color',link.hash?'#930':'transparent','important')
}

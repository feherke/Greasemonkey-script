// ==UserScript==
// @name           TipMaster - Author Highlight
// @namespace      http://feherke.github.io/
// @description    Highlights the OP's and own messages in a thread.
// @match          http://*.tek-tips.com/viewthread.cfm?qid=*
// @match          http://*.eng-tips.com/viewthread.cfm?qid=*
// @grant          GM_addStyle
// @version        0.3
// ==/UserScript==


GM_addStyle('table.gm_own { background-image: -moz-linear-gradient(left,rgba(153,51,0,.5),rgba(153,51,0,0) 15px), -moz-element(#gm_ownbg); background-repeat: no-repeat; }')
GM_addStyle('table.gm_op { background-image: -moz-linear-gradient(right,rgba(153,51,0,.5),rgba(153,51,0,0) 15px), -moz-element(#gm_opbg); background-repeat: no-repeat; background-position: right top; }')

GM_addStyle('div.gm_bg { position: absolute; top: -1000px; display: inline; color: #930; font-size: 150pt; opacity: .15; }')
GM_addStyle('div#gm_ownbg { -moz-transform: rotate(-10deg); }')
GM_addStyle('div#gm_opbg { -moz-transform: rotate(10deg); }')

GM_addStyle('.tgml blockquote { border-color: rgba(205,205,255,.66); !important; }')
GM_addStyle('blockquote { background-color: rgba(238,238,255,.75) !important; }')
GM_addStyle('.tgml blockquote h4 { background-color: transparent !important; }')

GM_addStyle('div.code, div#code { border-color: rgba(0,0,0,.66); }')
GM_addStyle('div.code .body, div#code .body { background-color: rgba(255,255,255,.75) !important; }')
GM_addStyle('.tgml div.code h4, .tgml div#code h4 { background-color: rgba(119,119,119,.75) !important; }')

GM_addStyle('div.spoiler { background-color: transparent !important; border-color: rgba(0,0,0,.66); }')
GM_addStyle('div.spoiler .body { color: transparent !important; background-color: rgba(255,255,255,.75) !important; }')
GM_addStyle('.tgml div.spoiler h4 { background-color: rgba(255,0,0,.75) !important; }')


var ownhandle=document.querySelector('div.tagline+div:not(.wrapper)')
if (ownhandle) ownhandle=ownhandle.textContent.replace(/^Hi /,'')

var ophandle=document.querySelector('td.handle a[href],td.handle b').textContent

var list=document.querySelectorAll('table.post')

for (var i=0,post;post=list[i++];) {
  var handle=post.querySelector('td.handle a[href],td.handle b').textContent

  if (handle==ownhandle) post.classList.add('gm_own')
  if (handle==ophandle) post.classList.add('gm_op')
}


['own','OP'].forEach(function (one) {
  var div=document.createElement('div')
  div.innerHTML=one
  div.id='gm_'+one.toLowerCase()+'bg'
  div.className='gm_bg'
  document.body.appendChild(div)
})

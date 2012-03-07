// ==UserScript==
// @name           TipMaster - Author Highlight
// @namespace      http://feherke.github.com/
// @description    Highlights the OP's and own messages in a thread.
// @match          http://*.tek-tips.com/viewthread.cfm?qid=*
// @match          http://*.eng-tips.com/viewthread.cfm?qid=*
// @version        0.0
// ==/UserScript==


GM_addStyle('table.gm_own { background-image: -moz-linear-gradient(left,#930 3px,rgba(153,51,0,0) 10px); }')
GM_addStyle('table.gm_op { box-shadow: #930 -10px 0 3px -3px; }')


var ownhandle=document.querySelector('div.tagline+div:not(.wrapper)')
if (ownhandle) ownhandle=ownhandle.textContent.replace(/^Hi /,'')

var ophandle=document.querySelector('td.handle a[href],td.handle b').textContent

var list=document.querySelectorAll('table.post')

for (var i=0,post;post=list[i++];) {
  var handle=post.querySelector('td.handle a[href],td.handle b').textContent

  if (handle==ownhandle) post.classList.add('gm_own')
  if (handle==ophandle) post.classList.add('gm_op')
}

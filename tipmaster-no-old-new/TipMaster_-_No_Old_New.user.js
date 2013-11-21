// ==UserScript==
// @name        TipMaster - No Old New
// @namespace   http://feherke.github.io/
// @description Remove the NEW icon from the old posts.
// @match       http://*.tek-tips.com/viewthread.cfm?qid=*
// @match       http://*.eng-tips.com/viewthread.cfm?qid=*
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_deleteValue
// @grant       GM_listValues
// @version     0.1
// ==/UserScript==


// keep last seen times this long
var expire=365.25*24*60*60*1000


// part 1 : remove NEW icons

// current thread ID - used in the saved GM value
var qid=location.search.match(/\bqid=(\d*)/)[1]
if (!qid) return

// list of posts in this thread
var post=document.querySelectorAll('table.post')
if (!post) return

var nrpost=post.length
if (!nrpost) return

// this thread's last seen post's time
var last=GM_getValue(qid)
if (last) {
// remove NEW icons from posts older than last seen time
  for (var i=0;i<nrpost;i++) {
    var newp=post[i].querySelector('a[name="newpost"]')
    if (!newp) continue

    var time=human2unix(post[i].querySelector('td.date').textContent)
    if (time<=last) newp.parentNode.removeChild(newp)
  }
}

// save current last seen time
last=human2unix(post[nrpost-1].querySelector('td.date').textContent)
GM_setValue(qid,last.toString())

// reposition to the first new post
if (location.hash=='#newpost') location.hash=location.hash


// part 2 : clean up old last seen times

var now=new Date().getTime()

// last clean up time
last=parseInt('0'+GM_getValue('lastcleanup'),10)
console.log('LAST',last)

// run clean up no more often than once a day
if (now-last<24*60*60*1000) return

// all last seen times
var list=GM_listValues()
// remove expired last seen times
for (var i=0,l=list.length;i<l;i++) {
  if (list[i]=='lastcleanup') continue

  var value=GM_getValue(list[i])
  if (now-value<expire) continue

  GM_deleteValue(list[i])
}

GM_setValue('lastcleanup',now.toString())


// convert TipMaster's "dd mmm yy hh:nn" date format to the closest parsable format
// ( WebKit handles it as is, Gecko, Presto and Trident needs the century )
function human2unix(what)
{
  return new Date(what.replace(/([a-z] )/,'$120')).getTime()
}

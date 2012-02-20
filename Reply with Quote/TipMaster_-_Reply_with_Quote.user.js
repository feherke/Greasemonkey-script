// ==UserScript==
// @name           TipMaster - Reply with Quote
// @namespace      http://feherke.github.com/
// @description    Adds a reply link below each post to easily quote the answered message.
// @match          http://*.tek-tips.com/viewthread.cfm?qid=*
// @match          http://*.eng-tips.com/viewthread.cfm?qid=*
// @version        0.0
// ==/UserScript==


GM_addStyle('table.postinst td { width: 25%; padding: 5px !important; }')
GM_addStyle('table.postinst td>br { display: none; }')
GM_addStyle('a.gm_reply { color: #930; }')
GM_addStyle('a.gm_reply::before { content: url(data:image/gif;base64,R0lGODlhCgAKAKEDAJ5Ek9JSvu9Y2P///yH5BAEKAAMALAAAAAAKAAoAAAIbnIVoO+HODJgBLHHrwUenXz0iNEzmxKDRYkUFADs=); margin-right: 5px; }')


var markup=[
  {html:'ul',param:'type',break:'oc'},
  {html:'ol',param:'type',break:'oc'},
  {html:'li',line:'c'},
  {html:'div',attr:'align',value:'center',tgml:'center',break:'c'},
  {html:'div',attr:'align',value:'right',tgml:'right',break:'c'},
  {html:'div',attr:'class',value:'spoiler',tgml:'spoiler',param:'>h4',part:/\((.+)\)/,text:'>div.body',break:'c'},
  {html:'div',attr:'id',value:'code',tgml:'code',param:'>h4',part:/^CODE --&gt; (.+)/,text:'>div.body',break:'oCc'},
  {html:'blockquote',tgml:'quote',param:'>h4',part:/\((.+)\)/,text:'>div.body',break:'c'},
  {html:'i'},
  {html:'u'},
  {html:'s'},
  {html:'sub'},
  {html:'sup'},
  {html:'span',attr:'class',value:'small',tgml:'small'},
  {html:'span',attr:'style',value:/monospace/,tgml:'tt'},
  {html:'span',attr:'style',value:/bold.+italic/,tgml:'bi'},
  {html:'span',attr:'style',value:/bold.+color:red/,tgml:'!'},
  {html:'span',attr:'style',value:/bold/,tgml:'b'},
  {html:'span',attr:'style',value:/color:([#\w]+).+color:([#\w]+)/,tgml:'color',param:'~'},
  {html:'span',attr:'style',value:/(?:^|[^-])color:([#\w]+)/,tgml:'color',param:'~'},
  {html:'span',attr:'style',value:/background-color:([#\w]+)/,tgml:'highlight',param:'~'},
  {html:'a',attr:'@',value:/^((?:forum|thread|FAQ|link).+?):/,tgml:'',param:'~',text:null},
  {html:'a',tgml:'link',param:'href'},
  {html:'img',attr:'title',tgml:'',param:'title',text:null},
  {html:'img',param:'src',text:null},
  {html:'br',tgml:'',text:null,break:'o'},
//  {tgml:'ERROR'}, // debug
  {},
]


var area=document.querySelector('textarea[name="post"]')
if (!area) return


var post=document.querySelectorAll('table.postinst')
for (var i=0,l=post.length;i<l;i++) {
  var cell=post[i].rows[0].insertCell(-1)
  var link=document.createElement('a')
  link.className='gm_reply'
  link.href='#'
  link.title='Copy this post in the reply form\'s message field, surrounded with quote tag.'
  link.innerHTML='Reply with quote<br>to this post'
  link.addEventListener('click',clickhandler,false)
  cell.appendChild(link)
}


function clickhandler(event)
{
  event.preventDefault()

  var post=event.target
  while (post!=null) {
    if (post.nodeType==1 && post.nodeName.toLowerCase()=='table' && post.classList.contains('post')) break
    post=post.parentNode
  }
  if (!post) return

  var handle=post.querySelector('td.handle a[href],td.handle b').textContent
  var message=html2tgml(post.querySelector('td.tgml div.wordwrap'))

  area.value+='[quote '+handle+']'+message+'[/quote]\n'
}

function html2tgml(what)
{
  var result=''

  for (var i=0,child;child=what.childNodes[i++];) {
    if (child.nodeType==3) result+=child.textContent
    else if (child.nodeType==1) {

      for (var j=0,tag;tag=markup[j++];) {
        var attr=undefined,match=undefined
        if (tag.html && child.nodeName.toLowerCase()!=tag.html) continue
        if (tag.attr) {
          if (tag.attr=='@' && !child.textContent) continue
          else if (tag.attr!='@' && !child.hasAttribute(tag.attr)) continue
          attr=tag.attr=='@'?child.textContent:child.getAttribute(tag.attr)
        }
        if (tag.value) {
          if (typeof(tag.value)=='string' && attr!=tag.value) continue
          else if (tag.value instanceof RegExp && !(match=attr.match(tag.value))) continue
        }

        var tgml='tgml' in tag?tag.tgml:tag.html

        if (tag.break && tag.break.indexOf('O')!=-1) result+='\n'

        if (tgml) result+='['+tgml

        if (tag.param) {
          var param=''
          if (tag.param=='~') {
            if (match) param=match.slice(1).join(' ')
          } else if (tag.param[0]=='>') {
            var sub=child.querySelector(tag.param.substring(1))
            if (sub) param=sub.textContent
          } else if (tag.param=='@') {
            param=child.textContent
          } else {
            if (child.hasAttribute(tag.param)) param=child.getAttribute(tag.param)
          }

          if (tag.part) {
            var match=param.match(tag.part)
            param=match?match.slice(1).join(' '):''
          }

          if (param) result+=(tgml?' ':'')+param
        }

        if (tgml) result+=']'

        if (tag.break && tag.break.indexOf('o')!=-1) result+='\n'

        if ('text' in tag) {
          if (tag.text!==null) {
            if (tag.text[0]=='>') {
              var sub=child.querySelector(tag.text.substring(1))
              if (sub) result+=html2tgml(sub)
            } else result+=tag.text
          }
        } else result+=html2tgml(child)

        if (tag.break && tag.break.indexOf('C')!=-1) result+='\n'

        if (tgml && tag.text!==null) result+='[/'+tgml+']'

        if (tag.break && tag.break.indexOf('c')!=-1) result+='\n'

        break
      }

    }
  }

  return result
}

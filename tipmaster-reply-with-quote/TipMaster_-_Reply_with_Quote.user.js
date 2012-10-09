// ==UserScript==
// @name           TipMaster - Reply with Quote
// @namespace      http://feherke.github.com/
// @description    Adds a reply link below each post to easily quote the answered message.
// @match          http://*.tek-tips.com/viewthread.cfm?qid=*
// @match          http://*.eng-tips.com/viewthread.cfm?qid=*
// @version        0.5
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
  {html:'div',attr:'class',value:'code',tgml:'code',param:'>h4',part:/^CODE --> (.+)/,text:'>div.body',break:'oCc'},
  {html:'div',attr:'id',value:'code',tgml:'code',param:'>h4',part:/^CODE --> (.+)/,text:'>div.body',break:'oCc'}, /* backward compatibility */
  {html:'div',attr:'class',value:'left',tgml:'floatl'},
  {html:'div',attr:'class',value:'right',tgml:'floatr'},
  {html:'div',attr:'class',value:'box',tgml:'bbox'},
  {html:'div',attr:'class',value:'indent',tgml:'indent'},
  {html:'blockquote',tgml:'quote',param:'>h4',part:/\((.+)\)/,text:'>div.body',break:'c'},
  {html:'b'},
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
  {html:'span',attr:'class',value:'box',tgml:'box'},
  {html:'span',attr:'class',value:'ignore',tgml:'ignore'},
  {html:'pre',attr:'class',value:'pre'},
  {html:'a',attr:'@',value:/^((?:forum|thread|FAQ|link).+?):/,tgml:'',param:'~',text:null},
  {html:'a',tgml:'link',param:'href'},
  {html:'img',attr:'title',tgml:'',param:'title',text:null},
  {html:'img',param:'src',text:null},
  {html:'br',tgml:'',text:null,break:'o'},
  {html:'p',attr:'class',value:'sig',tgml:null,text:null},
  {html:'wbr',tgml:null},
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


/*

Markup conversion data description

The markup array's items are conversion rules. The first matching rule is executed, the remaining are skipped.

Each rule may contain the following fields :
  - html - HTML tag name, if specified, the given attibute must be set
  - attr - HTML tag attribute name, if specified, the given attibute must be set; may be
    '@' - HTML tag text content, not attribute
    anything else - HTML tag attribute name
  - value - HTML tag attribute value, if specified, the value is verified; may be of type
    string - the value must be the same; exception is the class attribute, which must contain the value
    regular expression - the value must match, captured substrings are kept for later
  - tgml - TGML tag name, if missing, is considered identical with the HTML tag name; may be
    null - no proper tag, no delimiting brackets
    anything else - is considered TGML tag name
  - param - TGML tag attribute value; may be
    '>' + selector - content of the specified child node
    '~' - substrings captured while matching the HTML tag attribute value against the value regular expression
    '@' - HTML tag text content
    anything else - is considered HTML tag attribute name
  - part - regular expression matching the part of param to extract as TGML attribute value
  - text - TGML tag content, may be
    '>' + selector - content of the specified child node
    null - no content and no closing TGML tag
    anything else - is considered fixed string content
  - break - where to insert line break around the TGML tag; may contain the letters
    'O' - before open tag
    'o' - after open tag
    'C' - before close tag
    'c' - after close tag

*/

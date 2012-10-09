// ==UserScript==
// @name        TipMaster - markItUp! Setting
// @namespace   http://feherke.github.com/
// @description Improved settings for the markItUp! editor.
// @match       http://*.tek-tips.com/threadminder.cfm?pid=*
// @match       http://*.tek-tips.com/viewthread.cfm?qid=*
// @match       http://*.eng-tips.com/threadminder.cfm?pid=*
// @match       http://*.eng-tips.com/viewthread.cfm?qid=*
// @version     0.4
// ==/UserScript==


GM_addStyle( // all
  '.markItUpHeader ul a { background-position: center center; }'+
  '.markItUpHeader ul a:hover { background-color: rgba(0,0,0,.1); }'
)

GM_addStyle( // separator
  '.markItUpHeader ul .markItUpSeparator { margin-left: 5px; margin-right: 5px; }'
)

GM_addStyle( // color
  '.markItUp .colors ul { width: 108px !important; }'+
  '.markItUp .colors li a { background-image: none !important; }'+
  '.markItUp .colors .col1-1 a { background-color: black !important; }'+
  '.markItUp .colors .col1-2 a { background-color: silver !important; }'+
  '.markItUp .colors .col1-3 a { background-color: gray !important; }'+
  '.markItUp .colors .col1-4 a { background-color: white !important; }'+
  '.markItUp .colors .col2-1 a { background-color: maroon !important; }'+
  '.markItUp .colors .col2-2 a { background-color: red !important; }'+
  '.markItUp .colors .col2-3 a { background-color: purple !important; }'+
  '.markItUp .colors .col2-4 a { background-color: fuchsia !important; }'+
  '.markItUp .colors .col3-1 a { background-color: green !important; }'+
  '.markItUp .colors .col3-2 a { background-color: lime !important; }'+
  '.markItUp .colors .col3-3 a { background-color: olive !important; }'+
  '.markItUp .colors .col3-4 a { background-color: yellow !important; }'+
  '.markItUp .colors .col4-1 a { background-color: navy !important; }'+
  '.markItUp .colors .col4-2 a { background-color: blue !important; }'+
  '.markItUp .colors .col4-3 a { background-color: teal !important; }'+
  '.markItUp .colors .col4-4 a { background-color: aqua !important; }'
)

GM_addStyle( // highlight
  '.markItUp .hilite a { background-color: rgba(255,255,0,.5); background-image: url(http://tek-tips.com/js/markitup/sets/bbcode/images/color.png); }'+
  '.markItUp .hilite ul { width: 81px; padding: 1px !important; }'+
  '.markItUp .hilite li { float: left !important; width: 25px !important; height: 25px !important; overflow: hidden; border-style: solid !important; border-color: white !important; border-width: 1px !important; padding: 0; margin: 0; }'+
  '.markItUp .hilite li a { background-image: none; }'+
  '.markItUp .hilite .hilite1 a { background-color: #fcc !important; }'+
  '.markItUp .hilite .hilite2 a { background-color: #cfc !important; }'+
  '.markItUp .hilite .hilite3 a { background-color: #ccf !important; }'+
  '.markItUp .hilite .hilite4 a { background-color: #fcf !important; }'+
  '.markItUp .hilite .hilite5 a { background-color: #ffc !important; }'+
  '.markItUp .hilite .hilite6 a { background-color: #cff !important; }'
)

GM_addStyle( // align
  '.markItUp .markalign a { background-image: url(http://tek-tips.com/js/markitup/sets/bbcode/images/text_align_left.png); }'
)

GM_addStyle( // float
  '.markItUp .markfloat a,'+
  '.markItUp .markfleft a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAChSURBVCjPpZExCgIxEEVfZI/jGWy8gFewX6w9h7C1V1iwXRsvYCN4DUEEJ3HzLbIRF4zNZsq8/+bDOPH/zZgKVABHASzdVj0vAp6A4bH60CBEp5s6iV9TZZWAjULO0rqvFekbdq7QQUQisFZKG08Mw+prMwL2JUOkJwIr2Sd/cSMgGdqyIZVcDIbUJBDqR+6QgFPJAGcA5spZz32A3eRrvgFwMGHf7+AlJwAAAABJRU5ErkJggg==); }'+
  '.markItUp .markfright a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAChSURBVCjPY/zPgB8wMVCqgAVEFP7/w/CH4TcY/gLh59ul9oLtdmZk+I8D7vn/4f+e//8hJqT/h+kGwqu/GA7oQIz/D7NiJiM22/8j3BD9/xdMPwQ+vyL1n+EfEEIVLGXEph9Jge9/JN1XfzPcAbrhH8NfhILNWEz4h2yCPZIJYP88fyf1D9mRB7G6AUmBAdQXYN1X/zB8AYfDebACRopjEwDsBmruXDxiUwAAAABJRU5ErkJggg==); }'
)

GM_addStyle( // box
  '.markItUp .markbox a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAALCAYAAACtWacbAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AUZDRkaImMioAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAVElEQVQY041QbQ5AIQhC11np/iegP9qr9fXYGrYATRMgPFCC7aKRZ1VJ2aCuZO/gO+sSK0BpYbiTFe9dlIfkdF9EzyQOg2JOlOMHLJZ53VP5PnlGA9fcN61NqaLZAAAAAElFTkSuQmCC); }'+
  '.markItUp .markibox a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAJCAYAAADtj3ZXAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AUZDRwskK5DfAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAcElEQVQoz6WRUQ6AIAxDO+NZy5noZeuHDAnBSGI/37bSscAkA8ZaERM4SfZmSVmP0ni9mQtpPHWQNMZhkjbgL5b8wKaqFGlA0pLi7BFa7Pq+M9QMcr0joQbnN+Vg9m3HLsOLabCMXaXA9NvL2/258wUFRlc0p5TnxgAAAABJRU5ErkJggg==); }'+
  '.markItUp .markbbox a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AUZDR0MsttS9QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAZ0lEQVQ4y9WTQQqAMAwEJ+Jb8yf72fXioYRUosGDAz20h2WypAbg7mJijGE8IQbE+x32fwMTiAb7pWGzxbEwiI8CIVClg0xToI0mJlA2QqKbjtAusbwHqoa4uxaF1U1eBUSD7HzyF07IiU/WJjSeggAAAABJRU5ErkJggg==); }'
)

GM_addStyle( // object
  '.markItUp .marktube a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIfSURBVDjLpZNPaBNBGMXfbrubzBqbg4kL0lJLgiVKE/AP6Kl6UUFQNAeDIAjVS08aELx59GQPAREV/4BeiqcqROpRD4pUNCJSS21OgloISWMEZ/aPb6ARdNeTCz92mO+9N9/w7RphGOJ/nsH+olqtvg+CYJR8q9VquThxuVz+oJTKeZ63Uq/XC38E0Jj3ff8+OVupVGLbolkzQw5HOqAxQU4wXWWnZrykmYD0QsgAOJe9hpEUcPr8i0GaJ8n2vs/sL2h8R66TpVfWTdETHWE6GRGKjGiiKNLii5BSLpN7pBHpgMYhMkm8tPUWz3sL2D1wFaY/jvnWcTTaE5DyjMfTT5J0XIAiTRYn3ASwZ1MKbTmN7z+KaHUOYqmb1fcPiNa4kQBuyvWAHYfcHGzDgYcx9NKrwJYHCAyF21JiPWBnXMAQOea6bmn+4ueYGZi8gtymNVobF7BG5prNpjd+eW6X4BSUD0gOdCpzA8MpA/v2v15kl4+pK0emwHSbjJGBlz+vYM1fQeDrYOBTdzOGvDf6EFNr+LYjHbBgsaCLxr+moNQjU2vYhRXpgIUOmSWWnsJRfjlOZhrexgtYDZ/gWbetNRbNs6QT10GJglNk64HMaGgbAkoMo5fiFNy7CKDQUGqE5r38YktxAfSqW7Zt33l66WtkAkACjuNsaLVaDxlw5HdJ/86aYrG4WCgUZD6fX+jv/U0ymfxoWVZomuZyf+8XqfGP49CCrBUAAAAASUVORK5CYII=); }'
)

GM_addStyle( // text
  '.markItUp .markpre a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AoJBTIf+CO6sAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAQ0lEQVQoz72RMQ4AIAgDW+P/v1xHF1SsxBsJDRdKAMKEWKPdQNlggwlNVZ706lX75b7wCrOPyF6Luq3r0VHlf1W7xwHrehUGwAc8iAAAAABJRU5ErkJggg==); }'+
  '.markItUp .marksmall a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAFCAYAAACaTbYsAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AUZDCc3J7sPnwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAL0lEQVQY02NggID/DAjwH42PV/4/uTQTFpNhfEY0MXQ+AxMOCUYCTmfA52yi/AwAyZsY8FEKCZUAAAAASUVORK5CYII=); }'+
  '.markItUp .markattn a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAOCAYAAAAMn20lAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AUZDC0oUFzq4AAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAUklEQVQY04WQQQ6AMAzDnH2c8nJz2ugEiBxduVGLiopVHiAzEwoK97DDPoxdbxlUPWABUSHZrEBGErq1+Sqz+O74y+PAtcqdjQXO88V4e8lXxwUs91BKx+mvgAAAAABJRU5ErkJggg==); }'
)

GM_addStyle( // other
  '.markItUp .markignore a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AUdDSs0nKfsSQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAnklEQVQoz42SUQ7DMAhDn6ueNTsTuaz3AUxpuk21FCkgTIyJAgwwbLFhKlOvJdf1BNh0lOjYNsEdAT6y0kxw1Kn4L47lrpIlHuAAkMSw19l29XzUrETbqIyIMmrYqgYEeFdyfgyxmVI6mE38aMa2fjF2TSi2RklcSAZGki6FP6WO1KtuMkCUfNKYC/kEmGlID/vt59xW1C9a0qP99axvcORKdyRlD1oAAAAASUVORK5CYII=); }'
)

GM_addStyle( // composed
  '.markItUp .markkey a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AUdDSUKw0XcbAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAe0lEQVQoz6WSyw3EIAwFxyhd0Ib7oAuKogv34Z7YExLJOqBl38lYvPEHBMDMOgcqpYiYWc85n/hprZHGQVWJ4p0Sf+oLoKq4O6vO5lzamd19OdINEF1+QrcjPCGzOSqwXOIwvAEBrrdKUTxAc+765cmiXQhArbUf/kT5AH6NOufu8OjLAAAAAElFTkSuQmCC); }'+
  '.markItUp .markoff a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAICAYAAAAm06XyAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AYGDyQaBNWDaQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAATElEQVQY042PSQ4AIAgDp/z/z3gwxCWAcmEJQ4vAHQAkviOYVXRLSe/ewDGvs/VK2TurtxOUEmvl8V05QP2o3jAn+A7bLN+86sPT/gCOFSf3RktrDAAAAABJRU5ErkJggg==); }'+
  '.markItUp .markfind a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJGSURBVDjLjdJLSNRBHMDx78yqLZaKS75DPdgDDaFDbdJmde5QlhCJGxgpRJfqEEKnIsJLB7skQYQKZaSmdLaopPCgEvSCShCMzR5a7oq7/3l12RVtjfzBMA/4fWZ+MyOccwBM3g8HEbIdfCEhfAFnLVapOa28Uevpjrqz/WOsERJgsu9Uq5CZQzgqrJfo9BajNd5irEYn4p3OUiFExtCLmw2tawFi4l5zUMjMIau9u7K+qxeoAcoAA0wDb2OPwmfA16LiiaOHLj1edRLpkO3WmIis7+oBDgJbgQ2AH6gC6jY19N62RkcctKeVIJAhp9QgUA3kJXdONZVcq9JxPSgQoXRAyIDRth8oAXQyKdWnoCKrTD9CBv4GMqx1WGNZkeRWJKbG2hiD1Cb9FbTnzWFdY/LCdLKlgNQ84gyNKqHm0gDjqVHnxDHgA/B9RQkpaB6YklkZl62np9KBhOqwjpKFgeY2YAz4BESBWHI8Hhs6PVVSvc3v98ye4fP7T676B845nt040ip98qpWJmI9PWiU6bfWgXGN2YHcKwU7tsuc4kpUPMbU0+f8+vKt+Pitl7PLAMDI9cNBoB0hQwICzjqUp6MZvsy8yvp95BRuQUjJ75mPvH4wYo1NlJ64Mza7DPwrhi8cCOeXl/aUB4P4c/NJxKLMvpngycCrzxVFG2v/CwAMnguF80oLe8p27cQh+fnpPV/fTc95S6piXQDAw7a9YbWkezZXFbAwMx/xPFXb1D3+Y90AQF/L7kAsri9mZ4lrTd0TcYA/Kakr+x2JSPUAAAAASUVORK5CYII=); }'
)

GM_addStyle( // emoticon
  '.markItUp .markemot ul a { padding-left: 50px; }'+
  '.markItUp .emot2thumbsup a { background-image: url(http://tipmaster.com/images/2thumbsup.gif); }'+
  '.markItUp .emot3eyes a { background-image: url(http://tipmaster.com/images/3eyes.gif); }'+
  '.markItUp .emotbanghead a { background-image: url(http://tipmaster.com/images/banghead.gif); }'+
  '.markItUp .emotblush a { background-image: url(http://tipmaster.com/images/blush.gif); }'+
  '.markItUp .emotcry a { background-image: url(http://tipmaster.com/images/cry.gif); }'+
  '.markItUp .emotflame a { background-image: url(http://tipmaster.com/images/flame.gif); }'+
  '.markItUp .emothairpull3 a { background-image: url(http://tipmaster.com/images/hairpull3.gif); }'+
  '.markItUp .emotmad a { background-image: url(http://tipmaster.com/images/mad.gif); }'+
  '.markItUp .emotmedal a { background-image: url(http://tipmaster.com/images/medal.gif); }'+
  '.markItUp .emotmorning a { background-image: url(http://tipmaster.com/images/morning.gif); }'+
  '.markItUp .emotnosmiley a { background-image: url(http://tipmaster.com/images/nosmiley.gif); }'+
  '.markItUp .emotpeace a { background-image: url(http://tipmaster.com/images/peace.gif); }'+
  '.markItUp .emotponder a { background-image: url(http://tipmaster.com/images/ponder.gif); }'+
  '.markItUp .emotsadeyes a { background-image: url(http://tipmaster.com/images/sadeyes.gif); }'+
  '.markItUp .emotsleeping a { background-image: url(http://tipmaster.com/images/sleeping.gif); }'+
  '.markItUp .emotthumbsup2 a { background-image: url(http://tipmaster.com/images/thumbsup2.gif); }'+
  '.markItUp .emotupsidedown a { background-image: url(http://tipmaster.com/images/upsidedown.gif); }'
)

unsafeWindow.mySettings = {
  previewParserPath: '/tools/post.cfm',
  previewParserVar: 'post',
  resizeHandle: true,
  onShiftEnter: { keepDefault: false, call: 'preview' },
  markupSet: [
    { name: 'Bold',          openWith: '[b]',                 closeWith: '[/b]',         className: 'markb',     key: 'B' },
    { name: 'Italic',        openWith: '[i]',                 closeWith: '[/i]',         className: 'marki',     key: 'I' },
    { name: 'Underline',     openWith: '[u]',                 closeWith: '[/u]',         className: 'marku' },
    { name: 'Strikethrough', openWith: '[s]',                 closeWith: '[/s]',         className: 'marks' },
    { name: 'Superscript',   openWith: '[sup]',               closeWith: '[/sup]',       className: 'marksup',   key: 'S' },
    { name: 'Subscript',     openWith: '[sub]',               closeWith: '[/sub]',       className: 'marksub' },
    { separator: '---------------' },
    { name: 'Color',         openWith: '[color [![Color]!]]', closeWith: '[/color]',     className: 'colors',    dropMenu: [
      { name: 'Black',       openWith: '[black]',             closeWith: '[/black]',     className: 'col1-1' },
      { name: 'Silver',      openWith: '[silver]',            closeWith: '[/silver]',    className: 'col1-2' },
      { name: 'Gray',        openWith: '[gray]',              closeWith: '[/gray]',      className: 'col1-3' },
      { name: 'White',       openWith: '[white]',             closeWith: '[/white]',     className: 'col1-4' },
      { name: 'Maroon',      openWith: '[maroon]',            closeWith: '[/maroon]',    className: 'col2-1' },
      { name: 'Red',         openWith: '[red]',               closeWith: '[/red]',       className: 'col2-2' },
      { name: 'Purple',      openWith: '[purple]',            closeWith: '[/purple]',    className: 'col2-3' },
      { name: 'Fuchsia',     openWith: '[fuchsia]',           closeWith: '[/fuchsia]',   className: 'col2-4' },
      { name: 'Green',       openWith: '[green]',             closeWith: '[/green]',     className: 'col3-1' },
      { name: 'Lime',        openWith: '[lime]',              closeWith: '[/lime]',      className: 'col3-2' },
      { name: 'Olive',       openWith: '[olive]',             closeWith: '[/olive]',     className: 'col3-3' },
      { name: 'Yellow',      openWith: '[yellow]',            closeWith: '[/yellow]',    className: 'col3-4' },
      { name: 'Navy',        openWith: '[navy]',              closeWith: '[/navy]',      className: 'col4-1' },
      { name: 'Blue',        openWith: '[blue]',              closeWith: '[/blue]',      className: 'col4-2' },
      { name: 'Teal',        openWith: '[teal]',              closeWith: '[/teal]',      className: 'col4-3' },
      { name: 'Aqua',        openWith: '[aqua]',              closeWith: '[/aqua]',      className: 'col4-4' },
    ] },
    { name: 'Highlight',     openWith: '[highlight]',         closeWith: '[/highlight]', className: 'hilite',    dropMenu: [
      { name: 'Red',         openWith: '[highlight #fcc]',    closeWith: '[/highlight]', className: 'hilite1' },
      { name: 'Green',       openWith: '[highlight #cfc]',    closeWith: '[/highlight]', className: 'hilite2' },
      { name: 'Blue',        openWith: '[highlight #ccf]',    closeWith: '[/highlight]', className: 'hilite3' },
      { name: 'Fuchsia',     openWith: '[highlight #fcf]',    closeWith: '[/highlight]', className: 'hilite4' },
      { name: 'Yellow',      openWith: '[highlight #ffc]',    closeWith: '[/highlight]', className: 'hilite5' },
      { name: 'Aqua',        openWith: '[highlight #cff]',    closeWith: '[/highlight]', className: 'hilite6' },
    ] },
    { separator: '---------------' },
    { name: 'Align',                                                                     className: 'markalign', dropMenu: [
      { name: 'Left',        openWith: '[left]',              closeWith: '[/left]',      className: 'markleft' },
      { name: 'Center',      openWith: '[center]',            closeWith: '[/center]',    className: 'markcenter' },
      { name: 'Right',       openWith: '[right]',             closeWith: '[/right]',     className: 'markright' },
    ] },
    { name: 'Float',                                                                     className: 'markfloat', dropMenu: [
      { name: 'Left',        openWith: '[floatl]',            closeWith: '[/floatl]',    className: 'markfleft' },
      { name: 'Right',       openWith: '[floatr]',            closeWith: '[/floatr]',    className: 'markfright' },
    ] },
    { name: 'Indent',        openWith: '[indent]',            closeWith: '[/indent]',    className: 'markindent' },
    { name: 'Box',                                                                       className: 'markbox',   dropMenu: [
      { name: 'Inline',      openWith: '[box]',               closeWith: '[/box]',       className: 'markibox' },
      { name: 'Block',       openWith: '[bbox]',              closeWith: '[/bbox]',      className: 'markbbox' },
    ] },
    { separator: '---------------' },
    { name: 'Picture',       replaceWith: '[img [![URL ?:!:http://]!]]',                 className: 'markimg',   beforeInsert: function(m) { if (!m.original) m.original=m.replaceWith; if (m.selection) m.replaceWith=m.replaceWith.replace(/:!:.*\]!\]/,':!:'+m.selection+']!]') }, afterInsert: function(m) { m.replaceWith=m.original } },
    { name: 'YouTube',       openWith: '[youtube [![Movie ID?]!]]', closeWith: '[/youtube]', className: 'marktube' },
    { name: 'Link',          openWith: '[link [![Url]!]]',    closeWith: '[/link]',      className: 'marklink',  placeHolder: 'Link Text' },
    { name: 'Emoticon',                                                                  className: 'markemot',  beforeInsert: function() { unsafeWindow.$('<iframe src="/tools/tgmlemotes.htm" style="width:500px;height:350px;"></iframe>').modal({overlayClose:true}) }, dropMenu: [
      { name: '2 Thumbs Up', replaceWith: '[2thumbsup]',                                 className: 'emot2thumbsup' },
      { name: '3 Eyes',      replaceWith: '[3eyes]',                                     className: 'emot3eyes' },
      { name: 'Bang Head',   replaceWith: '[banghead]',                                  className: 'emotbanghead' },
      { name: 'Blush',       replaceWith: '[blush]',                                     className: 'emotblush' },
      { name: 'Cry',         replaceWith: '[cry]',                                       className: 'emotcry' },
      { name: 'Flame',       replaceWith: '[flame]',                                     className: 'emotflame' },
      { name: 'Hair Pull',   replaceWith: '[hairpull3]',                                 className: 'emothairpull3' },
      { name: 'Mad',         replaceWith: '[mad]',                                       className: 'emotmad' },
      { name: 'Medal',       replaceWith: '[medal]',                                     className: 'emotmedal' },
      { name: 'Morning',     replaceWith: '[morning]',                                   className: 'emotmorning' },
      { name: 'No Smiley',   replaceWith: '[nosmiley]',                                  className: 'emotnosmiley' },
      { name: 'Peace',       replaceWith: '[peace]',                                     className: 'emotpeace' },
      { name: 'Ponder',      replaceWith: '[ponder]',                                    className: 'emotponder' },
      { name: 'Sad Eyes',    replaceWith: '[sadeyes]',                                   className: 'emotsadeyes' },
      { name: 'Sleeping',    replaceWith: '[sleeping]',                                  className: 'emotsleeping' },
      { name: 'Thumbs Up',   replaceWith: '[thumbsup2]',                                 className: 'emotthumbsup2' },
      { name: 'Upside Down', replaceWith: '[upsidedown]',                                className: 'emotupsidedown' },
    ] },
    { separator: '---------------' },
    { name: 'Monospaced',    openWith: '[tt]',                closeWith: '[/tt]',        className: 'marktt',  key: 'M' },
    { name: 'Preformatted',  openWith: '[pre]',               closeWith: '[/pre]',       className: 'markpre'  },
    { name: 'Small',         openWith: '[small]',             closeWith: '[/small]',     className: 'marksmall' },
    { name: 'Attention',     openWith: '[!]',                 closeWith: '[/!]',         className: 'markattn' },
    {separator:'---------------' },
    { name: 'Bulleted list', openBlockWith: '[ul]\n',         closeBlockWith:'\n[/ul]',  openWith: '[li]', closeWith: '[/li]', className: 'markul', key: 'U', multiline: true },
    { name: 'Numeric list',  openBlockWith: '[ol [![1 I i A a ?]!]]\n', closeBlockWith:'\n[/ol]', openWith: '[li]', closeWith: '[/li]', className: 'markol', multiline: true },
    { name: 'List item',     openWith: '[li]',                closeWith:'[/li]',         className: 'markli' },
    { separator:'---------------' },
    { name: 'Quotes',        openWith: '[quote [![Who ?]!]]', closeWith:'[/quote]',      className: 'markquote' },
    { name: 'Code',          openWith: '[code [![Language ?]!]]', closeWith: '[/code]',  className: 'markcode' },
    { name: 'Spoiler',       openWith: '[spoiler [![Hint ?]!]]', closeWith: '[/spoiler]', className: 'markspoil' },
    { separator:'---------------' },
    { name: 'Ignore',        openWith: '[ignore]',            closeWith: '[/ignore]',    className: 'markignore' },
    { separator:'---------------' },
    { name: 'Key',           replaceWith: function(m) { if (s=m.selection||prompt('Key(s) ?')) return s.split(/\s+/).map(function(o) { return '[color silver gainsboro][box][black]'+o+'[/black][/box][/color]' }).join('-') }, className: 'markkey' },
    { name: 'Off Topic',     openBlockWith: '[tt][blue][small][off-topic][/small][/blue][/tt]\n', closeBlockWith: '\n[tt][blue][small][/off-topic][/small][/blue][/tt]', className: 'markoff', placeHolder: 'Off Topic' },
    { name: 'Web Search',    replaceWith: function(m) { if (s=m.selection||prompt('Term ?')) return '[link http://google.com/search?q='+encodeURIComponent(s)+']search the web for "'+s+'"[/link]' }, className: 'markfind' },
    { separator:'---------------' },
    { name: 'Clean',         replaceWith: function(m) { return m.selection.replace(/\[(.*?)\]/g,'') }, className: 'clean' },
    { name: 'Preview',       call: 'preview',                                            className: 'preview' },
    { name: 'Submit Post',   call: '$("#postform").submit()',                            className: 'subpost' },
    { separator: '---------------' },
    { name: 'Help',          call: 'openindex(450,450,"http://tipmaster.com/includes/tgmlinfo.cfm?w=450&h=450",1)', className: 'help' },
  ]
}

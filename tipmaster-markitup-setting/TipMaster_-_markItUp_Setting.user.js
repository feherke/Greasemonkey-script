// ==UserScript==
// @name        TipMaster - markItUp! Setting
// @namespace   http://feherke.github.com/
// @description Improved settings for the markItUp! editor.
// @match       http://*.tek-tips.com/threadminder.cfm?pid=*
// @match       http://*.tek-tips.com/viewthread.cfm?qid=*
// @match       http://*.eng-tips.com/threadminder.cfm?pid=*
// @match       http://*.eng-tips.com/viewthread.cfm?qid=*
// @version     0.5
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
  '.markItUp .hilite a { background-color: rgba(255,255,0,.5); background-image: url(/js/markitup/sets/bbcode/images/color.png); }'+
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
  '.markItUp .markalign a { background-image: url(/js/markitup/sets/bbcode/images/text_align_left.png); }'+
  '.markItUp .markleft a { background-image: url(/js/markitup/sets/bbcode/images/text_align_left.png); }'+
  '.markItUp .markcenter a { background-image: url(/js/markitup/sets/bbcode/images/text_align_center.png); }'+
  '.markItUp .markright a { background-image: url(/js/markitup/sets/bbcode/images/text_align_right.png); }'
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
  '.markItUp .markpre a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAQCAYAAADAvYV+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AoMESoRsXH0cAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAWElEQVQoz7XQwQ2AMAxD0UdZhE1g86zCJuFUDqiirQSWcoiUWPZf9JUmlVBmPoo/lQjsL3udu2082keLxqhzk2PXubVnK/PntCDXgeMDJ7ZZ964qxpjKfAHtgyUfSIOzJAAAAABJRU5ErkJggg==); }'+
  '.markItUp .marksmall a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAFCAYAAACaTbYsAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AUZDCc3J7sPnwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAL0lEQVQY02NggID/DAjwH42PV/4/uTQTFpNhfEY0MXQ+AxMOCUYCTmfA52yi/AwAyZsY8FEKCZUAAAAASUVORK5CYII=); }'+
  '.markItUp .markattn a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAOCAYAAAAMn20lAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AUZDC0oUFzq4AAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAUklEQVQY04WQQQ6AMAzDnH2c8nJz2ugEiBxduVGLiopVHiAzEwoK97DDPoxdbxlUPWABUSHZrEBGErq1+Sqz+O74y+PAtcqdjQXO88V4e8lXxwUs91BKx+mvgAAAAABJRU5ErkJggg==); }'
)

GM_addStyle( // composed
  '.markItUp .markkey a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AUdDSUKw0XcbAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAe0lEQVQoz6WSyw3EIAwFxyhd0Ib7oAuKogv34Z7YExLJOqBl38lYvPEHBMDMOgcqpYiYWc85n/hprZHGQVWJ4p0Sf+oLoKq4O6vO5lzamd19OdINEF1+QrcjPCGzOSqwXOIwvAEBrrdKUTxAc+765cmiXQhArbUf/kT5AH6NOufu8OjLAAAAAElFTkSuQmCC); }'+
  '.markItUp .markfake a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AoPEA47iFUZ2QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABwElEQVQoz4XTv2tTURQH8E9eWkkTq1JSsVChghSHOoi4SV82F7u6dOjgUHTSxcVNcBF0101F6KSDf4AvdFAQqaggaKsWixZrUWtNmjTJdUjTvojoFy6cc+653/OD7xVCiMMO0vb//DhCIo1ymUymKySTace7kQghhJAkO8yE7RNCHOK420/ltx8TQpIEeDl73MTjSy7evunDDVZmmBsn5EdBSJIOUZCuBFc3JsHCuYz5a3y+w/IFyv3tXtP5EUqdIYL3LufueTrVI7cnyA0TfrFriMETnL8ynZ65FN1iexOZFyOenDmgWGhoHKNvnZ4aay2KR5h6d3dnh5SjDguMLzywv76sd5TCDyoVslWaVTb3UpyoS+dH8Oz+6TKMPb8OWnla39hVoV6jr4oa2fkGeHNKeebsUdmHxGvR28XiK8nY2sfFzTz5YRpVGjVqFbI1mj8Js+xbknxtWowffYkzW1suLU0rr75m92H6h2jWiQ7SWiUs0vhEc6Xd86E5MZJIkkCyvsLgSQpFmhvkvrM5QmGSTK1doWeA3oEtdSWJtMLijli67I6y/rS3FdaRZlqmf/sQHeItdIlEHPsnuu9LvwFfSHBLFIuO3QAAAABJRU5ErkJggg==); }'+
  '.markItUp .markoff a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAJCAYAAADtj3ZXAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AoPEBIbVUxkTAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAWUlEQVQoz6WRwQ3AIAwDLywG+y/lPgothBKQmg9YcLKTGEgAYMZxNea9+A/5flNeaEWwdmdaO7Xy7Qw6cuhTzTq5qD67RbqHS6XLIfvE+XD2gxwiA5L92fMFqkVCznBaRuoAAAAASUVORK5CYII=); }'+
  '.markItUp .markfire a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AoPEBo7pvvOjAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAACeUlEQVQ4y5WSS0hUcRTGf///vTPNy0EbH6RGhdUiCUESJAqjh0Qbe0EQRYskkYiKIqJVBpm1sk2UUKARRGDSRoI2PQh6QGkEtpCklHEadcbXzHjnztzTImaw0EUfnNU534/vHA4so59Pufqtj5sAk238v76849hYH9mJDnoBPtG05JxeDvD+MxG/BTLNwcGNq1trebY04B5IrgCG2v80GmN0xuOk8ZOJ+Udvy35CpzgFwF+enHGxIi10Dl1Eoj2kog9If6xH3teYnbn+YtBfK9wpRsdP05z0cta3CdvOomUCp6SebLA0cxigo3Zf+T3p4tbzf27QxBUObjabRuLcLarGVhnEFUOyBtpbAvgJTnZxctu1/kcPX7Pl0t4/PjMH6GlpZ3iYu6UbYNYAlYIMGCTAtqCgGh1ew4W1/VTV+GgHGvMJXhxla/I+q6bclHj9yIo4jjGHlhRkF8CZAeXBVfqEKqsXd/wNe74eZ2c+QeAnR2LFNBdboEGySQydBlKIN4lOK5S8xkyG0baC+A9wR9iRT1AYgsIDuCsrcKYSKDUFYiNTl4lYNo4VRc9ZaMcLZgAKDNAxXZQHpCZBuUGXQDCCcqXRMwEoUhR6GtAK8PrBFQJPOSwoyCYK4nmAkYDMZ8zpDxjZ7xhjYfTK7ZiiCKhdKHcd4lSCax1kQmBnYLjC6csDLMFJJYA0iA1luxFPGVI0jsz/QhkbIFCB+HwwNwrzMboPfZ8dyB+xso63CR+yMML54HrErEISYZQSCM4gc7MocwVEwxAe4FUgc6L1DCcEQC1+5YY2rnuTnHMKcHkN0mnB7Qg4UdT4S8Lzg5U3HstYd70ilfP8BmmpA1Av9C+KAAAAAElFTkSuQmCC); }'+
  '.markItUp .markdoc a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAJCAYAAAACTR1pAAAABmJLR0QAAAAAAP/UQVTyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AoNDyE0t4UQ4wAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAX0lEQVQoz6WRQQrAIAwEJ9IfNXf9P+mb0oNaUrEe7IIwziFsiJgZAKongJtdwkdU9eE0isirJPbjGdzDG12eOJcK9L06L5z8q3oApU2Lia68XdP9HGY25dmf2tl9p+oNExE84pswXhcAAAAASUVORK5CYII=); }'+
  '.markItUp .markdocperl a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AoNDxce5SJIQAAAAYdJREFUKM91ky2u6zAQhb9U3UBZkKXIzLgswCq/3UQCC8pLghpUUFKaJYRkAVFAFxASZlky6h4MfMmzX9rXZ2nA/B2fGR9n3nuAwPvJvsRiHIBtLFiWBQClVAIahoFpmiiKgtPpFOMZwHZZFsZxxFqLMYbr9YpSimEYqOuasiwxxgC8NW+UUgghEpdxHBmGga7rkFIipaSqKqy1iVWkCpBQAdq25XK5AOCcewONo2xiMqJba8nzPPkxX1UV611sAIQQPJ9PtNZorXm9XhhjGMeRmDfGYK2l67q/jcfjkbIsmaYJ5xzGGNq2RQiBtZa2banrGmMMRVGkxgzgdruhtcZaC0Ce5wkdoGmaRB0A73204L0P8zyH/X4f+r4Pu90u3O/3cD6fg/c+/Pz8hFi3+VSFMYayLHHO0TQNh8Mh0ZNSpuVsPzUlpcQ5x+FwWCsJAK118jdf9IgQAqUUxhgej0cqXs2YrRvD+tZ41oqJz/PPcuZ5Dn3fpwV82ipH9udb/e9r8Y0RkP0CuTL9RqDaY0AAAAAASUVORK5CYII=); }'+
  '.markItUp .markdocphp a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAYAAACgu+4kAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH3AoNDxMoTvQY3QAAAJZJREFUKM+lU8ENxCAMcxA7dAamuDEYp3ScbtFO4RluitzjrhUNhJ5US5GCZREnBCllg4GihcBB7JE5T2e+rm+MEH4V6wAApJSsqybm+fV1MKqY83RyVrcsuwpJrauRbByMuFATJBvRHRfwEI8viHbqR28erC7aoRwTJ3nJPd2lhfoJvdycJXZs99ZWPZ2Usukfe+/+jw8wp2Pi/Rd2gwAAAABJRU5ErkJggg==); }'+
  '.markItUp .markdoctcltk a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAANCAYAAACZ3F9/AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AoNDxE5FnJarQAAAHtJREFUKM+dksERwyAQA1cet8LDqSKdO13kkWLkR0wMzsFgi+EDt3MgnYwZ0SO9qsJ5FHh/nsWpwJ21pNXgYN+EjLkIdcASsmPoDxyFjGNXbZAOB43FKTblHPNNDZVgrandqQ39BkDg8/P4hqXWYMy5MEPRfyJpd0tc1AZb8a3a6lCUYgAAAABJRU5ErkJggg==); }'+
  '.markItUp .markfind a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJGSURBVDjLjdJLSNRBHMDx78yqLZaKS75DPdgDDaFDbdJmde5QlhCJGxgpRJfqEEKnIsJLB7skQYQKZaSmdLaopPCgEvSCShCMzR5a7oq7/3l12RVtjfzBMA/4fWZ+MyOccwBM3g8HEbIdfCEhfAFnLVapOa28Uevpjrqz/WOsERJgsu9Uq5CZQzgqrJfo9BajNd5irEYn4p3OUiFExtCLmw2tawFi4l5zUMjMIau9u7K+qxeoAcoAA0wDb2OPwmfA16LiiaOHLj1edRLpkO3WmIis7+oBDgJbgQ2AH6gC6jY19N62RkcctKeVIJAhp9QgUA3kJXdONZVcq9JxPSgQoXRAyIDRth8oAXQyKdWnoCKrTD9CBv4GMqx1WGNZkeRWJKbG2hiD1Cb9FbTnzWFdY/LCdLKlgNQ84gyNKqHm0gDjqVHnxDHgA/B9RQkpaB6YklkZl62np9KBhOqwjpKFgeY2YAz4BESBWHI8Hhs6PVVSvc3v98ye4fP7T676B845nt040ip98qpWJmI9PWiU6bfWgXGN2YHcKwU7tsuc4kpUPMbU0+f8+vKt+Pitl7PLAMDI9cNBoB0hQwICzjqUp6MZvsy8yvp95BRuQUjJ75mPvH4wYo1NlJ64Mza7DPwrhi8cCOeXl/aUB4P4c/NJxKLMvpngycCrzxVFG2v/CwAMnguF80oLe8p27cQh+fnpPV/fTc95S6piXQDAw7a9YbWkezZXFbAwMx/xPFXb1D3+Y90AQF/L7kAsri9mZ4lrTd0TcYA/Kakr+x2JSPUAAAAASUVORK5CYII=); }'+
  '.markItUp .markfindgoogle a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AoMEi83HE07kQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAACgklEQVQozwXBXUhTURwA8P8559593g2dujn8tmW1oflRmZrgg6CFRFAmZiH0Ir30GL31GhgRSFkRBVlJ9GZCD1YP0cSirE1nOMOV09nmnPtw93P3nH4/hFqulDKiMb4ME9g87tS3ehqoYCVgTMmg2t2Q23PyuR/7xIWHzKyD8kpwrJv+5S8ADchIQk4QLX2gp3sQC4qcMDPL5V1TTNp+VQXplX4goTnimp63VNWpUuLGvpayXmeMEmJTk5i47YRtmmpAU4uIIaI6Om1qITCmeCqSnwDbv4Amn1CypXbc+MvFIKe7gXMcMFtLrM2L15g2Ok4gmdwFTVoBaY8yLWrGSx4DA0GWQHdZpLTvWMw7IZSHH4Lk5SyQjnuARr/xBZwhbfJjY5H3WWpnubgEENedCJ8nom03nv5e2QeSvwQbf0+ba5UNkhvKmAwMZ3TpX0A1JvKk4BIKu61NrLDebjC/f151cCvIOts17EtSVrl+CHVcfpJ4uXHvwZH1wTuAaBkgW6kmDrZR20XOnUjpqPrUpK157DaaG39bJ61KvZhmGqgx1wi6LgArTwEV/bUnZ+5y0rktfmZibgAigdNECPwkptiUWXdkZbD7lB3+EmDW/ydUHiai6VErhNeGcfrNIjIuTFt90c2urmDK6Qgsb+ePxnS+vgPyX+0YQmo95JUig4VGz7ZW7/WGb8ora8MF75ki4/2njX6g6TAwUeYQSBamOSpUfaBpgVuaj22ORBECmPwAmtOTbQExXmzGkdfI2vKiJr+q3AImtIO9PowE0yrI2ymUlR1UTziAj/qrq6Y/k5GrESXlEhcyEcsyiDsFUOIY5XYop+6HTMLsu8O2j8E24+jufy5OOhVlNHUnAAAAAElFTkSuQmCC); }'+
  '.markItUp .markfindyahoo a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKBAMAAABPkMOvAAAALVBMVEUAAIG7d8yqZruIEZmqVbt3AJndu+7///+ZIqqZRLvu3e53AIjMmd1mAGaIIqqsWOpJAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfcCgwSJTvvFJ8wAAAAYElEQVQI12NgEDI2dmRgDWVgNDY2NhUAMoTTy1pDA1kjGZyNCsOrdrAGMhgbH3eXvs0BYlgV3r3KGcDgbGxYe/cGUwODaGh6lWwgAwMD4927d68KsE5gYBB6e9mRga8BANugGTGiYbDnAAAAAElFTkSuQmCC); }'+
  '.markItUp .markfindlycos a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AoMEigbYdTBtQAAAdtJREFUKM+N0z+LXVUUBfDfPvfeSYb73uT5Z0MagwQRiyAIUTAgaWztLP0GCn4FEQQrwSZ+hIB+Am0s1DogYhdIYaEcx8QRLzHz3j0W7z6dTjccDiwWa6+19zmBUWaotaWMan9DTVIFKpU44rkn/IlTmTrykhHTdGkybWHMKeo0tZymqGMaTeqkXda/Nmt3O/F2p7zQT4+PSmJd6+WONzOFzKhVs7hQa6tVs3l+eKx7F79hTXtrZ7cpVW1/cbWwrgevuUTgECfKo5/e8+yNm+fd+pmm3Rkc39pxt4cnnA3KLXX+HOtBzcaq021O1eu9uB12N+PXe213cr1su2s/bvtfzhj1Uqge4nwQ3+AEJTCbdfZJoGjK2X2zNu/kglVNZmvmL7BB8R8V/J4H0STU2kK54X9VfLnl+6o2aushZTx0eryY3c3a+8EUyst4vZmvhbi6b+4KepyTIeUKm0G5M4gHPR9h/PfkCqvB8OogvhvEg4FXLnDkIL7uxQ8d7zzNiczV/oVaXRAZez4clE+xWhqPpeMN4mfa/R1fdcxZD3mTFPwDXFlQdSGV4DbzJ/gMRXLxP+zpmr2VD5r20iNeXLYXJUiG7VN8iz/qst/9lA9G9mJH8pz2ceP40OBv9k2qUIGiOEYAAAAASUVORK5CYII=); }'+
  '.markItUp .markcan a { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIkSURBVDjLpVNNiFJRFP7eU1E0KSLTMpAwYSxyaidDtChm0WYQ3NSutv2s2kwwm2igNgMtooUQEQhhA9GqhSDTQsZZFDbNDBgVg5bSw9J8rzFF33udc+HGg0ladOHj3nPe+b7zc99VbNvG/yy30yiVSl4SnCNcsixrivYEgY7WJu0faX9EKGUyGVNyFFkBkY/T+WkoFEpFIhEEAgH4/X7w916vB8Mw0Gg00G63y+S7mM1mm4LIAYxisbhSr9c5nT1pjUYju1qt2oVC4YnkqbIUMk6Ew+F/9hyNRkFJLuyaATmFoqZp8Pl88Hq98Hg8wtfv99HpdNBsNhGPx0XsRAG3241ut4vBYCDs8XgMXdcxHA7FN/b9VUD25HK5RAUczKC+hYgcNpNN05xcAQdLkqIoIlj6VFWdXIEUkAQGV8M2k2vaG3z6sYGfVR39XzsHlm/dX3h5d31xlwAHM5goBd5+LuO75z3OnU3jyP4EVrZeKGub2p309cP7VKcAQ2Znoiz3deMVTk1Nw1RNTB+ahamMkD45w7RrfwSYwFdFf6K4Quf6pmvwKHswl7wh7Jvnc4gfTPHR52zhcqVSeZZMJgOxWEyI8BC5CmOnh63WKtZbZczPPsa94hX4XCLJQHG+xnw+f5SEFghZmvhefgvcTqn2HN3gBmZSZ5CInMaHr1Wsvivjy3ZvSZn0nHO5XJDIxwgWDbW2vL10m9xXCUGCQXi49qA1/xvyq6BCh7yZeQAAAABJRU5ErkJggg==); }'+
  '.markItUp .markcan .response a { background-image: none; padding-left: 5px; }'
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

// web search object
var websearch=unsafeWindow.websearch={
  url:{
    'TipMaster': location.protocol+'//'+location.host+'/search.cfm?q={{text}}&action=search',
    'Google': 'http://google.com/search?q={{text}}',
    'Yahoo!': 'http://search.yahoo.com/search?p={{text}}',
    'Lycos': 'http://search.lycos.com/web?q={{text}}',
  },
  search: function(m) { var s=m.selection,n=m.name.replace(/\s*Search\s*/,''); if (s||(s=prompt('Term ?'))) return '[link '+websearch.url[n].replace(/\{\{text\}\}/g,encodeURIComponent(s))+']search '+n+' for "'+s+'"[/link]' }
}

// documentation link object
var documentation=unsafeWindow.documentation={
  url:{
    'Perl': 'http://perldoc.perl.org/functions/{{text}}.html',
    'PHP': 'http://php.net/{{text}}/',
    'Tcl': 'http://tcl.tk/man/tcl8.5/TclCmd/{{text}}.htm',
    'Tk': 'http://tcl.tk/man/tcl8.5/TkCmd/{{text}}.htm',
  },
  link: function(m) { var s=m.selection; if (s||(s=prompt('Term ?'))) return '[link '+documentation.url[m.name].replace(/\{\{text\}\}/g,s.replace(/\(\)$/,'')) +'][tt]'+s+'[/tt][/link]' }
}

// finalize pending canned response operations
for (var i=sessionStorage.length-1;i>=0;i--) {
  var key=sessionStorage.key(i)
  if (key.indexOf('cannedresponse ')!=0) continue
  var value=sessionStorage[key]
  sessionStorage.removeItem(key)
  key=key.substr(15)
  if (value) GM_setValue(key,value); else GM_deleteValue(key)
}

// canned response object
var cannedresponse=unsafeWindow.cannedresponse={
  response: {},
  menu: [],
  save: function(m) { var t=document.getElementById('post').value,s; if (t && (s=prompt('Save post as canned response ?\n\nTitle : ',m.shiftKey?m.name:''))) { sessionStorage['cannedresponse '+s]=t; cannedresponse.warn('Save') } },
  remove: function(m) { if (confirm('Remove canned response '+m.name+' ?')) { sessionStorage['cannedresponse '+m.name]=''; cannedresponse.warn('Remove') } },
  insert: function(m) { if (m.shiftKey) return cannedresponse.save(m); if (m.ctrlKey) return cannedresponse.remove(m); return cannedresponse.response[m.name].replace(/\{\{text\}\}/g,m.selection) },
  warn: function(w) { alert(w+' operation prepared.\nReload this page to finalize it.') },
}

// load canned responses
var stored=GM_listValues().sort(function(a,b) { a=a.toLowerCase(); b=b.toLowerCase(); return a==b?0:a<b?-1:1 })
for (var i=0,l=stored.length;i<l;i++) {
  cannedresponse.response[stored[i]]=GM_getValue(stored[i])
  cannedresponse.menu.push({name:stored[i],replaceWith:cannedresponse.insert,className:'response'})
}

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
    { name: 'Emoticons',                                                                 className: 'markemot',  beforeInsert: function() { unsafeWindow.$('<iframe src="/tools/tgmlemotes.htm" style="width:500px;height:350px;"></iframe>').modal({overlayClose:true}) }, dropMenu: [
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
    { name: 'Key',           replaceWith: function(m) { var s=m.selection; if (s||(s=prompt('Key(s) ?'))) return s.split(/\s+/).map(function(o) { return '[color silver gainsboro][box][black]'+o+'[/black][/box][/color]' }).join('-') }, className: 'markkey' },
    { name: 'Fake TGML',                                                                 className: 'markfake', dropMenu: [
      { name: 'Off Topic',   openBlockWith: '[tt][blue][small][off-topic][/small][/blue][/tt]\n', closeBlockWith: '\n[tt][blue][small][/off-topic][/small][/blue][/tt]', className: 'markoff', placeHolder: 'Off Topic' },
      { name: 'Flame',       openBlockWith: '[tt][red][small][ignore][flame][/ignore][/small][/red][/tt]\n', closeBlockWith: '\n[tt][red][small][/flame][/small][/red][/tt]', className: 'markfire', placeHolder: 'Flame' },
    ] },
    { name: 'Documentation',                                                             className: 'markdoc', dropMenu: [
      { name: 'Perl',        replaceWith: documentation.link,                            className: 'markdocperl' },
      { name: 'PHP',         replaceWith: documentation.link,                            className: 'markdocphp' },
      { name: 'Tcl',         replaceWith: documentation.link,                            className: 'markdoctcltk' },
      { name: 'Tk',          replaceWith: documentation.link,                            className: 'markdoctcltk' },
    ] },
    { name: 'TipMaster Search',replaceWith: websearch.search,                            className: 'markfind', dropMenu: [
      { name: 'Google',      replaceWith: websearch.search,                              className: 'markfindgoogle' },
      { name: 'Yahoo!',      replaceWith: websearch.search,                              className: 'markfindyahoo' },
      { name: 'Lycos',       replaceWith: websearch.search,                              className: 'markfindlycos' },
    ] },
    { name: 'Canned Response',replaceWith: cannedresponse.save,                          className: 'markcan', dropMenu: cannedresponse.menu },
    { separator:'---------------' },
    { name: 'Clean',         replaceWith: function(m) { return m.selection.replace(/\[(.*?)\]/g,'') }, className: 'clean' },
    { name: 'Preview',       call: 'preview',                                            className: 'preview' },
    { name: 'Submit Post',   call: '$("#postform").submit()',                            className: 'subpost' },
    { separator: '---------------' },
    { name: 'Help',          call: 'openindex(450,450,"http://tipmaster.com/includes/tgmlinfo.cfm?w=450&h=450",1)', className: 'help' },
  ],
}

var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},t={},o=e.parcelRequire052b;null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in t){var o=t[e];delete t[e];var n={id:e,exports:{}};return i[e]=n,o.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,i){t[e]=i},e.parcelRequire052b=o),(0,o.register)("2Yl7J",function(e,i){!function(t,o){var n="function",r="undefined",a="object",s="string",l="major",c="model",d="name",b="type",u="vendor",w="version",p="architecture",m="console",h="mobile",f="tablet",v="smarttv",g="wearable",y="embedded",x="Amazon",k="Apple",A="ASUS",S="BlackBerry",_="Browser",L="Chrome",E="Firefox",q="Google",T="Huawei",C="Microsoft",z="Motorola",N="Opera",O="Samsung",j="Sharp",U="Sony",M="Xiaomi",P="Zebra",H="Facebook",D="Chromium OS",R="Mac OS",B=function(e,i){var t={};for(var o in e)i[o]&&i[o].length%2==0?t[o]=i[o].concat(e[o]):t[o]=e[o];return t},V=function(e){for(var i={},t=0;t<e.length;t++)i[e[t].toUpperCase()]=e[t];return i},I=function(e,i){return typeof e===s&&-1!==$(i).indexOf($(e))},$=function(e){return e.toLowerCase()},W=function(e,i){if(typeof e===s)return e=e.replace(/^\s\s*/,""),typeof i===r?e:e.substring(0,500)},F=function(e,i){for(var t,r,s,l,c,d,b=0;b<i.length&&!c;){var u=i[b],w=i[b+1];for(t=r=0;t<u.length&&!c&&u[t];)if(c=u[t++].exec(e))for(s=0;s<w.length;s++)d=c[++r],typeof(l=w[s])===a&&l.length>0?2===l.length?typeof l[1]==n?this[l[0]]=l[1].call(this,d):this[l[0]]=l[1]:3===l.length?typeof l[1]!==n||l[1].exec&&l[1].test?this[l[0]]=d?d.replace(l[1],l[2]):void 0:this[l[0]]=d?l[1].call(this,d,l[2]):void 0:4===l.length&&(this[l[0]]=d?l[3].call(this,d.replace(l[1],l[2])):void 0):this[l]=d||o;b+=2}},G=function(e,i){for(var t in i)if(typeof i[t]===a&&i[t].length>0){for(var n=0;n<i[t].length;n++)if(I(i[t][n],e))return"?"===t?o:t}else if(I(i[t],e))return"?"===t?o:t;return e},Y={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Z={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[w,[d,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[w,[d,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[d,w],[/opios[\/ ]+([\w\.]+)/i],[w,[d,N+" Mini"]],[/\bopr\/([\w\.]+)/i],[w,[d,N]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[w,[d,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[d,w],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[w,[d,"UC"+_]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[w,[d,"WeChat"]],[/konqueror\/([\w\.]+)/i],[w,[d,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[w,[d,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[w,[d,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[w,[d,"Smart Lenovo "+_]],[/(avast|avg)\/([\w\.]+)/i],[[d,/(.+)/,"$1 Secure "+_],w],[/\bfocus\/([\w\.]+)/i],[w,[d,E+" Focus"]],[/\bopt\/([\w\.]+)/i],[w,[d,N+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[w,[d,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[w,[d,"Dolphin"]],[/coast\/([\w\.]+)/i],[w,[d,N+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[w,[d,"MIUI "+_]],[/fxios\/([-\w\.]+)/i],[w,[d,E]],[/\bqihu|(qi?ho?o?|360)browser/i],[[d,"360 "+_]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[d,/(.+)/,"$1 "+_],w],[/samsungbrowser\/([\w\.]+)/i],[w,[d,O+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[d,/_/g," "],w],[/metasr[\/ ]?([\d\.]+)/i],[w,[d,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[d,"Sogou Mobile"],w],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[d,w],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[d],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[d,H],w],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[d,w],[/\bgsa\/([\w\.]+) .*safari\//i],[w,[d,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[w,[d,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[w,[d,L+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[d,L+" WebView"],w],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[w,[d,"Android "+_]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[d,w],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[w,[d,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[w,d],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[d,[w,G,{"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[d,w],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[d,"Netscape"],w],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[w,[d,E+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[d,w],[/(cobalt)\/([\w\.]+)/i],[d,[w,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,$]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows (ce|mobile); ppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[p,/ower/,"",$]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,$]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[c,[u,O],[b,f]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[c,[u,O],[b,h]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[c,[u,k],[b,h]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[u,k],[b,f]],[/(macintosh);/i],[c,[u,k]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[c,[u,j],[b,h]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[c,[u,T],[b,f]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[c,[u,T],[b,h]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[c,/_/g," "],[u,M],[b,h]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[c,/_/g," "],[u,M],[b,f]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[c,[u,"OPPO"],[b,h]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[c,[u,"Vivo"],[b,h]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[c,[u,"Realme"],[b,h]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[c,[u,z],[b,h]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[c,[u,z],[b,f]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[c,[u,"LG"],[b,f]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[c,[u,"LG"],[b,h]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[c,[u,"Lenovo"],[b,f]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[c,/_/g," "],[u,"Nokia"],[b,h]],[/(pixel c)\b/i],[c,[u,q],[b,f]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[c,[u,q],[b,h]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[u,U],[b,h]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[c,"Xperia Tablet"],[u,U],[b,f]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[c,[u,"OnePlus"],[b,h]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[c,[u,x],[b,f]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[c,/(.+)/g,"Fire Phone $1"],[u,x],[b,h]],[/(playbook);[-\w\),; ]+(rim)/i],[c,u,[b,f]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[c,[u,S],[b,h]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[c,[u,A],[b,f]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[c,[u,A],[b,h]],[/(nexus 9)/i],[c,[u,"HTC"],[b,f]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[u,[c,/_/g," "],[b,h]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[c,[u,"Acer"],[b,f]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[c,[u,"Meizu"],[b,h]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[c,[u,"Ulefone"],[b,h]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[u,c,[b,h]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[u,c,[b,f]],[/(surface duo)/i],[c,[u,C],[b,f]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[c,[u,"Fairphone"],[b,h]],[/(u304aa)/i],[c,[u,"AT&T"],[b,h]],[/\bsie-(\w*)/i],[c,[u,"Siemens"],[b,h]],[/\b(rct\w+) b/i],[c,[u,"RCA"],[b,f]],[/\b(venue[\d ]{2,7}) b/i],[c,[u,"Dell"],[b,f]],[/\b(q(?:mv|ta)\w+) b/i],[c,[u,"Verizon"],[b,f]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[c,[u,"Barnes & Noble"],[b,f]],[/\b(tm\d{3}\w+) b/i],[c,[u,"NuVision"],[b,f]],[/\b(k88) b/i],[c,[u,"ZTE"],[b,f]],[/\b(nx\d{3}j) b/i],[c,[u,"ZTE"],[b,h]],[/\b(gen\d{3}) b.+49h/i],[c,[u,"Swiss"],[b,h]],[/\b(zur\d{3}) b/i],[c,[u,"Swiss"],[b,f]],[/\b((zeki)?tb.*\b) b/i],[c,[u,"Zeki"],[b,f]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[u,"Dragon Touch"],c,[b,f]],[/\b(ns-?\w{0,9}) b/i],[c,[u,"Insignia"],[b,f]],[/\b((nxa|next)-?\w{0,9}) b/i],[c,[u,"NextBook"],[b,f]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[u,"Voice"],c,[b,h]],[/\b(lvtel\-)?(v1[12]) b/i],[[u,"LvTel"],c,[b,h]],[/\b(ph-1) /i],[c,[u,"Essential"],[b,h]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[c,[u,"Envizen"],[b,f]],[/\b(trio[-\w\. ]+) b/i],[c,[u,"MachSpeed"],[b,f]],[/\btu_(1491) b/i],[c,[u,"Rotor"],[b,f]],[/(shield[\w ]+) b/i],[c,[u,"Nvidia"],[b,f]],[/(sprint) (\w+)/i],[u,c,[b,h]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[u,C],[b,h]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[u,P],[b,f]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[u,P],[b,h]],[/smart-tv.+(samsung)/i],[u,[b,v]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[u,O],[b,v]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[u,"LG"],[b,v]],[/(apple) ?tv/i],[u,[c,k+" TV"],[b,v]],[/crkey/i],[[c,L+"cast"],[u,q],[b,v]],[/droid.+aft(\w+)( bui|\))/i],[c,[u,x],[b,v]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[c,[u,j],[b,v]],[/(bravia[\w ]+)( bui|\))/i],[c,[u,U],[b,v]],[/(mitv-\w{5}) bui/i],[c,[u,M],[b,v]],[/Hbbtv.*(technisat) (.*);/i],[u,c,[b,v]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[u,W],[c,W],[b,v]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[b,v]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[u,c,[b,m]],[/droid.+; (shield) bui/i],[c,[u,"Nvidia"],[b,m]],[/(playstation [345portablevi]+)/i],[c,[u,U],[b,m]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[c,[u,C],[b,m]],[/((pebble))app/i],[u,c,[b,g]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[c,[u,k],[b,g]],[/droid.+; (glass) \d/i],[c,[u,q],[b,g]],[/droid.+; (wt63?0{2,3})\)/i],[c,[u,P],[b,g]],[/(quest( 2| pro)?)/i],[c,[u,H],[b,g]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[u,[b,y]],[/(aeobc)\b/i],[c,[u,x],[b,y]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[c,[b,h]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[c,[b,f]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[b,f]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[b,h]],[/(android[-\w\. ]{0,9});.+buil/i],[c,[u,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[w,[d,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[w,[d,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[d,w],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[w,d]],os:[[/microsoft (windows) (vista|xp)/i],[d,w],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[d,[w,G,Y]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[w,G,Y],[d,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[w,/_/g,"."],[d,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[d,R],[w,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[w,d],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[d,w],[/\(bb(10);/i],[w,[d,S]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[w,[d,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[w,[d,E+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[w,[d,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[w,[d,"watchOS"]],[/crkey\/([\d\.]+)/i],[w,[d,L+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[d,D],w],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[d,w],[/(sunos) ?([\w\.\d]*)/i],[[d,"Solaris"],w],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[d,w]]},X=function(e,i){if(typeof e===a&&(i=e,e=o),!(this instanceof X))return new X(e,i).getResult();var m=typeof t!==r&&t.navigator?t.navigator:o,v=e||(m&&m.userAgent?m.userAgent:""),g=m&&m.userAgentData?m.userAgentData:o,y=i?B(Z,i):Z,x=m&&m.userAgent==v;return this.getBrowser=function(){var e,i={};return i[d]=o,i[w]=o,F.call(i,v,y.browser),i[l]=typeof(e=i[w])===s?e.replace(/[^\d\.]/g,"").split(".")[0]:o,x&&m&&m.brave&&typeof m.brave.isBrave==n&&(i[d]="Brave"),i},this.getCPU=function(){var e={};return e[p]=o,F.call(e,v,y.cpu),e},this.getDevice=function(){var e={};return e[u]=o,e[c]=o,e[b]=o,F.call(e,v,y.device),x&&!e[b]&&g&&g.mobile&&(e[b]=h),x&&"Macintosh"==e[c]&&m&&typeof m.standalone!==r&&m.maxTouchPoints&&m.maxTouchPoints>2&&(e[c]="iPad",e[b]=f),e},this.getEngine=function(){var e={};return e[d]=o,e[w]=o,F.call(e,v,y.engine),e},this.getOS=function(){var e={};return e[d]=o,e[w]=o,F.call(e,v,y.os),x&&!e[d]&&g&&"Unknown"!=g.platform&&(e[d]=g.platform.replace(/chrome os/i,D).replace(/macos/i,R)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return v},this.setUA=function(e){return v=typeof e===s&&e.length>500?W(e,500):e,this},this.setUA(v),this};X.VERSION="1.0.37",X.BROWSER=V([d,w,l]),X.CPU=V([p]),X.DEVICE=V([c,u,b,m,h,v,f,g,y]),X.ENGINE=X.OS=V([d,w]),typeof i!==r?(e.exports&&(i=e.exports=X),i.UAParser=X):typeof define===n&&define.amd?define(function(){return X}):typeof t!==r&&(t.UAParser=X);var J=typeof t!==r&&(t.jQuery||t.Zepto);if(J&&!J.ua){var K=new X;J.ua=K.getResult(),J.ua.get=function(){return K.getUA()},J.ua.set=function(e){K.setUA(e);var i=K.getResult();for(var t in i)J.ua[t]=i[t]}}}("object"==typeof window?window:this)});var n={};function r(e){let i={eventLabel:e.eventLabel,eventLocation:e.eventLocation||null,eventContext:e.eventContext||null,hitsTime:Date.now(),requestId:function(e){let i=new Uint8Array(3.5);return window.crypto.getRandomValues(i),Array.from(i,t).join("")}(0),firingOptions:"onesPerEvent",event:"event",eventStream:"flight",eventAction:e.eventAction,eventCategory:e.eventCategory,eventContent:e.eventContent||null,eventValue:e.eventValue||null,ecommerce:null,ecommerceAction:!1,noninteraction:!1};function t(e){return`0${e.toString(16)}`.substr(-2)}try{dataLayer.push(i)}catch(e){console.log(i)}}/*! WOW - v0.1.4 - 2014-03-03
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var e,i=function(e,i){return function(){return e.apply(i,arguments)}};e=function(){function e(){}return e.prototype.extend=function(e,i){var t,o;for(t in e)null!=(o=e[t])&&(i[t]=o);return i},e.prototype.isMobile=function(e){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)},e}(),this.WOW=function(){function t(e){null==e&&(e={}),this.scrollCallback=i(this.scrollCallback,this),this.scrollHandler=i(this.scrollHandler,this),this.start=i(this.start,this),this.scrolled=!0,this.config=this.util().extend(e,this.defaults)}return t.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},t.prototype.init=function(){var e;return this.element=window.document.documentElement,this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length?this.disabled()?this.resetStyle():"interactive"===(e=document.readyState)||"complete"===e?this.start():document.addEventListener("DOMContentLoaded",this.start):void 0},t.prototype.start=function(){var e,i,t,o;for(o=this.boxes,i=0,t=o.length;t>i;i++)e=o[i],this.applyStyle(e,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)},t.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},t.prototype.show=function(e){return this.applyStyle(e),e.className=""+e.className+" "+this.config.animateClass},t.prototype.applyStyle=function(e,i){var t,o,n;return o=e.getAttribute("data-wow-duration"),t=e.getAttribute("data-wow-delay"),n=e.getAttribute("data-wow-iteration"),e.setAttribute("style",this.customStyle(i,o,t,n))},t.prototype.resetStyle=function(){var e,i,t,o,n;for(o=this.boxes,n=[],i=0,t=o.length;t>i;i++)e=o[i],n.push(e.setAttribute("style","visibility: visible;"));return n},t.prototype.customStyle=function(e,i,t,o){var n;return n=e?"visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;":"visibility: visible;",i&&(n+="-webkit-animation-duration: "+i+"; -moz-animation-duration: "+i+"; animation-duration: "+i+";"),t&&(n+="-webkit-animation-delay: "+t+"; -moz-animation-delay: "+t+"; animation-delay: "+t+";"),o&&(n+="-webkit-animation-iteration-count: "+o+"; -moz-animation-iteration-count: "+o+"; animation-iteration-count: "+o+";"),n},t.prototype.scrollHandler=function(){return this.scrolled=!0},t.prototype.scrollCallback=function(){var e;return this.scrolled&&(this.scrolled=!1,this.boxes=(function(){var i,t,o,n;for(o=this.boxes,n=[],i=0,t=o.length;t>i;i++)(e=o[i])&&(this.isVisible(e)?this.show(e):n.push(e));return n}).call(this),!this.boxes.length)?this.stop():void 0},t.prototype.offsetTop=function(e){var i;for(i=e.offsetTop;e=e.offsetParent;)i+=e.offsetTop;return i},t.prototype.isVisible=function(e){var i,t,o,n,r;return t=e.getAttribute("data-wow-offset")||this.config.offset,n=(r=window.pageYOffset)+this.element.clientHeight-t,i=(o=this.offsetTop(e))+e.clientHeight,n>=o&&i>=r},t.prototype.util=function(){return this._util||(this._util=new e)},t.prototype.disabled=function(){return!1===this.config.mobile&&this.util().isMobile(navigator.userAgent)},t}()}).call(n);var a=o("2Yl7J");const s=()=>{let e=navigator.platform||navigator.vendor||window.opera,i=new a.UAParser;return"Huawei"===i.getDevice().vendor?"huawei":/android/i.test(e)?"android":"Apple"===i.getDevice().vendor?"ios":"unknown"},l=document,c=document.querySelector("body");l.addEventListener("DOMContentLoaded",()=>{function e(e){let i=l.querySelectorAll(".article"),t=l.querySelectorAll(".js-next"),o=l.querySelectorAll(".js-prev"),n="_hidden";0===e&&o.forEach(e=>{e.classList.add(n)}),1===e&&o.forEach(e=>{e.classList.remove(n)}),e===i.length-2&&t.forEach(e=>{e.classList.remove(n)}),e===i.length-1&&t.forEach(e=>{e.classList.add(n)}),e>=0?i[e].classList.add("_viewed"):(l.querySelector(".controls").classList.remove("_viewed"),c.classList.remove("noscroll"))}!function(){let e=s();document.querySelector("body").classList.add(`platform_${e}`);let i={};i.ios="https://redirect.appmetrica.yandex.com/serve/315401363163010541",i.android="https://redirect.appmetrica.yandex.com/serve/388180713033187193",i.huawei="https://redirect.appmetrica.yandex.com/serve/244065662866049837",i.android,"ios"===e&&i.ios,"huawei"===e&&i.huawei}(),new(0,n.WOW)().init(),function(){document.querySelector("body").addEventListener("click",e=>{let i="js-gtm-event",t=e.target.classList.contains(i)?e.target:e.target.closest(`.${i}`);t&&r({eventAction:"click",eventLabel:t.getAttribute("data-event")||null,eventLocation:t.getAttribute("data-section")||null,eventContext:t.getAttribute("data-context")||null,eventCategory:t.getAttribute("data-event-category")||"Interactions"})});let e=!1;document.addEventListener("scroll",t=>{let o=100*window.scrollY/(document.body.scrollHeight-window.innerHeight);e||(window.requestAnimationFrame(()=>{Object.entries(i).forEach(([e,t])=>{~~o>=e&&(delete i[e],r({eventAction:"scroll",eventLabel:`scrollPage-${e}%`,eventCategory:"Interactions"}))}),e=!1}),e=!0)});let i={10:"",30:"",50:"",70:"",90:""}}(),c.addEventListener("click",e=>{let i="js-show-article",t=e.target.classList.contains(i)?e.target:e.target.closest(`.${i}`);if(t){let e=t.getAttribute("data-article");c.classList.add("noscroll"),l.querySelectorAll(".article").forEach(i=>{i.getAttribute("data-article")===e?i.classList.add("_viewed"):i.classList.remove("_viewed")}),l.querySelector(".controls").classList.add("_viewed")}}),l.querySelectorAll(".js-next-article").forEach(i=>i.addEventListener("click",t=>{t.preventDefault(),function(i){let t=l.querySelectorAll(".article"),o=0;console.log(0),t.forEach(e=>{let i=e.getAttribute("data-article");e.classList.contains("_viewed")&&(o=Number(i),e.classList.remove("_viewed"))}),"next"===i?e(o):e(o-2)}(i.classList.contains("js-prev")?"prev":"next")}))});
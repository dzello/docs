webpackJsonp([0],[,,,,,,function(e,t){e.exports=function(e){return e?e.replace(/[ _]/g,"-").toLowerCase():e}},,,function(e,t,n){function r(e){return e.replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&")}function s(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var i=n(24),a=n(6),l=n(15);e.exports=function(e,t){e=e.replace(/\[\[([^\]]+?)\s*\|\s*([a-z0-9 \-_\.]+)\]\]/gi,function(e){var t=/\[\[([^\]]+?)\s*\|\s*([a-z0-9 \-_\.]+)\]\]/gi.exec(e),n=a(t[2]);return"["+t[1]+"]("+n+".html)"}).replace(/\[\[([a-z0-9 \-_\.]+)\]\]/gi,function(e){var t=/\[\[(.+)\]\]/gi.exec(e),n=a(t[1]);return"["+t[1]+"]("+n+".html)"});var n=[],o=new i.Renderer;o.code=function(e,t){var n=!1;"html"===t&&(t="xml");try{n=t?l.highlight(t,e).value:l.highlightAuto(e).value}catch(r){n=s(e)}return"<pre><code>"+n+"</code></pre>"},o.codespan=function(e){e=r(e);var t=l.highlight("javascript",e).value;return"<code>"+t+"</code>"},o.heading=function(e,r,s,i){if(t)return"<h"+r+">"+e+"</h"+r+">\n";var a=e.toLowerCase().replace(/\(.*?\)/g,"").trim().replace(/<.*?>|\&.*?;/g,"").replace(/[^\w]+/g,"-").replace(/^\-+|\-+$/g,"");return n.push({anchor:a,text:e.replace(/\(.*?\)/g,""),level:r}),"<h"+r+' id="'+a+'"><a class="anchor" href="#'+a+'">&rarr;</a>'+e+"</h"+r+">\n"},o.table=function(e,t){return'<table class="table table-bordered table-striped table-hover">\n<thead>\n'+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"};var c=i(e,{renderer:o,gfm:!0,tables:!0,breaks:!1,smartLists:!0,smartypants:!0}),u=[],h=n.map(function(e){return e.level}).reduce(function(e,t){return Math.min(e,t)},1e3)-1;for(n.forEach(function(e){if(h===e.level)u.push("</li><li>");else{if(h<e.level-1)return;if(h<e.level)u.push("<ul><li>"),h++;else if(h>e.level){for(;h>e.level;)u.push("</li></ul>"),h--;u.push("</li><li>")}}u.push('<a href="#',e.anchor,'">',e.text,"</a>")});n.length>0&&h>0;)u.push("</li></ul>"),h--;return u=u.join(""),u?'<div class="contents">'+u+"</div>"+c:c}},,,,function(e,t){e.exports=function(e){var t={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",reserved:"case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",built_in:"npm require console print module exports global window document"},n="[A-Za-z$_][0-9A-Za-z$_]*",r={className:"title",begin:n},s={className:"subst",begin:"#\\{",end:"}",keywords:t},i=[e.BINARY_NUMBER_MODE,e.inherit(e.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",relevance:0}}),{className:"string",begin:"'''",end:"'''",contains:[e.BACKSLASH_ESCAPE]},{className:"string",begin:"'",end:"'",contains:[e.BACKSLASH_ESCAPE],relevance:0},{className:"string",begin:'"""',end:'"""',contains:[e.BACKSLASH_ESCAPE,s]},{className:"string",begin:'"',end:'"',contains:[e.BACKSLASH_ESCAPE,s],relevance:0},{className:"regexp",begin:"///",end:"///",contains:[e.HASH_COMMENT_MODE]},{className:"regexp",begin:"//[gim]*",relevance:0},{className:"regexp",begin:"/\\S(\\\\.|[^\\n])*?/[gim]*(?=\\s|\\W|$)"},{className:"property",begin:"@"+n},{begin:"`",end:"`",excludeBegin:!0,excludeEnd:!0,subLanguage:"javascript"}];return s.contains=i,{keywords:t,contains:i.concat([{className:"comment",begin:"###",end:"###"},e.HASH_COMMENT_MODE,{className:"function",begin:"("+n+"\\s*=\\s*)?(\\(.*\\))?\\s*[-=]>",end:"[-=]>",returnBegin:!0,contains:[r,{className:"params",begin:"\\(",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:t,contains:["self"].concat(i)}]}]},{className:"class",beginWithKeyword:!0,keywords:"class",end:"$",illegal:"[:\\[\\]]",contains:[{beginWithKeyword:!0,keywords:"extends",endsWithParent:!0,illegal:":",contains:[r]},r]},{className:"attribute",begin:n+":",end:":",returnBegin:!0,excludeEnd:!0}])}}},function(e,t){e.exports=function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*",n={className:"function",begin:t+"\\(",end:"\\)",contains:["self",e.NUMBER_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]};return{case_insensitive:!0,illegal:"[=/|']",contains:[e.C_BLOCK_COMMENT_MODE,{className:"id",begin:"\\#[A-Za-z0-9_-]+"},{className:"class",begin:"\\.[A-Za-z0-9_-]+",relevance:0},{className:"attr_selector",begin:"\\[",end:"\\]",illegal:"$"},{className:"pseudo",begin:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{className:"at_rule",begin:"@(font-face|page)",lexems:"[a-z-]+",keywords:"font-face page"},{className:"at_rule",begin:"@",end:"[{;]",contains:[{className:"keyword",begin:/\S+/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,contains:[n,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE]}]},{className:"tag",begin:t,relevance:0},{className:"rules",begin:"{",end:"}",illegal:"[^\\s]",relevance:0,contains:[e.C_BLOCK_COMMENT_MODE,{className:"rule",begin:"[^\\s]",returnBegin:!0,end:";",endsWithParent:!0,contains:[{className:"attribute",begin:"[A-Z\\_\\.\\-]+",end:":",excludeEnd:!0,illegal:"[^\\s]",starts:{className:"value",endsWithParent:!0,excludeEnd:!0,contains:[n,e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{className:"hexcolor",begin:"#[0-9A-Fa-f]+"},{className:"important",begin:"!important"}]}}]}]}]}}},function(e,t,n){var r=new function(){function e(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){for(var t=e.firstChild;t;t=t.nextSibling){if("CODE"==t.nodeName.toUpperCase())return t;if(3!=t.nodeType||!t.nodeValue.match(/\s+/))break}}function n(e,t){return Array.prototype.map.call(e.childNodes,function(e){return 3==e.nodeType?t?e.nodeValue.replace(/\n/g,""):e.nodeValue:"BR"==e.nodeName.toUpperCase()?"\n":n(e,t)}).join("")}function s(e){var t=(e.className+" "+(e.parentNode?e.parentNode.className:"")).split(/\s+/);t=t.map(function(e){return e.replace(/^language-/,"")});for(var n=0;n<t.length;n++)if(d[t[n]]||"no-highlight"==t[n])return t[n]}function i(e){var t=[];return function n(e,r){for(var s=e.firstChild;s;s=s.nextSibling)3==s.nodeType?r+=s.nodeValue.length:"BR"==s.nodeName.toUpperCase()?r+=1:1==s.nodeType&&(t.push({event:"start",offset:r,node:s}),r=n(s,r),t.push({event:"stop",offset:r,node:s}));return r}(e,0),t}function a(t,n,r){function s(){return t.length&&n.length?t[0].offset!=n[0].offset?t[0].offset<n[0].offset?t:n:"start"==n[0].event?t:n:t.length?t:n}function i(t){function n(t){return" "+t.nodeName+'="'+e(t.value)+'"'}c+="<"+t.nodeName.toLowerCase()+Array.prototype.map.call(t.attributes,n).join("")+">"}function a(e){c+="</"+e.nodeName.toLowerCase()+">"}function l(e){("start"==e.event?i:a)(e.node)}for(var o=0,c="",u=[];t.length||n.length;){var h=s();if(c+=e(r.substr(o,h[0].offset-o)),o=h[0].offset,h==t){u.reverse().forEach(a);do l(h.splice(0,1)[0]),h=s();while(h==t&&h.length&&h[0].offset==o);u.reverse().forEach(i)}else"start"==h[0].event?u.push(h[0].node):u.pop(),l(h.splice(0,1)[0])}return c+e(r.substr(o))}function l(e){function t(e){return e&&e.source||e}function n(n,r){return RegExp(t(n),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}function s(i,a){function l(t,n){e.case_insensitive&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");c[n[0]]=[t,n[1]?Number(n[1]):1],o.push(n[0])})}if(!i.compiled){i.compiled=!0;var o=[];if(i.keywords){var c={};if(i.lexemsRe=n(i.lexems||"\\b"+r.IDENT_RE+"\\b(?!\\.)",!0),"string"==typeof i.keywords)l("keyword",i.keywords);else for(var u in i.keywords)i.keywords.hasOwnProperty(u)&&l(u,i.keywords[u]);i.keywords=c}a&&(i.beginWithKeyword&&(i.begin="\\b("+o.join("|")+")\\b(?!\\.)\\s*"),i.beginRe=n(i.begin?i.begin:"\\B|\\b"),i.end||i.endsWithParent||(i.end="\\B|\\b"),i.end&&(i.endRe=n(i.end)),i.terminator_end=t(i.end)||"",i.endsWithParent&&a.terminator_end&&(i.terminator_end+=(i.end?"|":"")+a.terminator_end)),i.illegal&&(i.illegalRe=n(i.illegal)),void 0===i.relevance&&(i.relevance=1),i.contains||(i.contains=[]);for(var h=0;h<i.contains.length;h++)"self"==i.contains[h]&&(i.contains[h]=i),s(i.contains[h],i);i.starts&&s(i.starts,a);for(var g=[],h=0;h<i.contains.length;h++)g.push(t(i.contains[h].begin));i.terminator_end&&g.push(t(i.terminator_end)),i.illegal&&g.push(t(i.illegal)),i.terminators=g.length?n(g.join("|"),!0):{exec:function(e){return null}}}}s(e)}function o(t,n,r,s){function i(e,t){for(var n=0;n<t.contains.length;n++){var r=t.contains[n].beginRe.exec(e);if(r&&0==r.index)return t.contains[n]}}function a(e,t){return e.end&&e.endRe.test(t)?e:e.endsWithParent?a(e.parent,t):void 0}function u(e,t){return!r&&t.illegal&&t.illegalRe.test(e)}function h(e,t){var n=_.case_insensitive?t[0].toLowerCase():t[0];return e.keywords.hasOwnProperty(n)&&e.keywords[n]}function g(){var t=e(E);if(!v.keywords)return t;var n="",r=0;v.lexemsRe.lastIndex=0;for(var s=v.lexemsRe.exec(t);s;){n+=t.substr(r,s.index-r);var i=h(v,s);i?(N+=i[1],n+='<span class="'+i[0]+'">'+s[0]+"</span>"):n+=s[0],r=v.lexemsRe.lastIndex,s=v.lexemsRe.exec(t)}return n+t.substr(r)}function p(){if(v.subLanguage&&!d[v.subLanguage])return e(E);var t="continuous"==v.subLanguageMode?v.top:void 0,n=v.subLanguage?o(v.subLanguage,E,!0,t):c(E);return v.relevance>0&&(N+=n.keyword_count,y+=n.relevance),v.top=n.top,'<span class="'+n.language+'">'+n.value+"</span>"}function f(){return void 0!==v.subLanguage?p():g()}function b(t,n){var r=t.className?'<span class="'+t.className+'">':"";t.returnBegin?(k+=r,E=""):t.excludeBegin?(k+=e(n)+r,E=""):(k+=r,E=n),v=Object.create(t,{parent:{value:v}})}function m(t,n){if(E+=t,void 0===n)return k+=f(),0;var r=i(n,v);if(r)return k+=f(),b(r,n),r.returnBegin?0:n.length;var s=a(v,n);if(s){var l=v;l.returnEnd||l.excludeEnd||(E+=n),k+=f();do v.className&&(k+="</span>"),y+=v.relevance,v=v.parent;while(v!=s.parent);return l.excludeEnd&&(k+=e(n)),E="",s.starts&&b(s.starts,""),l.returnEnd?0:n.length}if(u(n,v))throw new Error('Illegal lexem "'+n+'" for mode "'+(v.className||"<unnamed>")+'"');return E+=n,n.length||1}var _=d[t];if(!_)throw new Error('Unknown language: "'+t+'"');l(_);for(var v=s||_,k="",x=v;x!=_;x=x.parent)x.className&&(k='<span class="'+x.className+'">'+k);var E="",y=0,N=0;try{for(var w,S,A=0;;){if(v.terminators.lastIndex=A,w=v.terminators.exec(n),!w)break;S=m(n.substr(A,w.index-A),w[0]),A=w.index+S}m(n.substr(A));for(var x=v;x.parent;x=x.parent)x.className&&(k+="</span>");return{relevance:y,keyword_count:N,value:k,language:t,top:v}}catch(M){if(-1!=M.message.indexOf("Illegal"))return{relevance:0,keyword_count:0,value:e(n)};throw M}}function c(t){var n={keyword_count:0,relevance:0,value:e(t)},r=n;for(var s in d)if(d.hasOwnProperty(s)){var i=o(s,t,!1);i.language=s,i.keyword_count+i.relevance>r.keyword_count+r.relevance&&(r=i),i.keyword_count+i.relevance>n.keyword_count+n.relevance&&(r=n,n=i)}return r.language&&(n.second_best=r),n}function u(e,t,n){return t&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,n,r,s){return n.replace(/\t/g,t)})),n&&(e=e.replace(/\n/g,"<br>")),e}function h(e,t,r){var l=n(e,r),h=s(e);if("no-highlight"!=h){var g=h?o(h,l,!0):c(l);h=g.language;var p=i(e);if(p.length){var d=document.createElementNS("http://www.w3.org/1999/xhtml","pre");d.innerHTML=g.value,g.value=a(p,i(d),l)}g.value=u(g.value,t,r);var f=e.className;f.match("(\\s|^)(language-)?"+h+"(\\s|$)")||(f=f?f+" "+h:h),e.innerHTML=g.value,e.className=f,e.result={language:h,kw:g.keyword_count,re:g.relevance},g.second_best&&(e.second_best={language:g.second_best.language,kw:g.second_best.keyword_count,re:g.second_best.relevance})}}function g(){g.called||(g.called=!0,Array.prototype.map.call(document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml","pre"),t).filter(Boolean).forEach(function(e){h(e,r.tabReplace)}))}function p(){window.addEventListener("DOMContentLoaded",g,!1),window.addEventListener("load",g,!1)}var d={};this.LANGUAGES=d,this.highlight=o,this.highlightAuto=c,this.fixMarkup=u,this.highlightBlock=h,this.initHighlighting=g,this.initHighlightingOnLoad=p,this.IDENT_RE="[a-zA-Z][a-zA-Z0-9_]*",this.UNDERSCORE_IDENT_RE="[a-zA-Z_][a-zA-Z0-9_]*",this.NUMBER_RE="\\b\\d+(\\.\\d+)?",this.C_NUMBER_RE="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",this.BINARY_NUMBER_RE="\\b(0b[01]+)",this.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",this.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},this.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[this.BACKSLASH_ESCAPE],relevance:0},this.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[this.BACKSLASH_ESCAPE],relevance:0},this.C_LINE_COMMENT_MODE={className:"comment",begin:"//",end:"$"},this.C_BLOCK_COMMENT_MODE={className:"comment",begin:"/\\*",end:"\\*/"},this.HASH_COMMENT_MODE={className:"comment",begin:"#",end:"$"},this.NUMBER_MODE={className:"number",begin:this.NUMBER_RE,relevance:0},this.C_NUMBER_MODE={className:"number",begin:this.C_NUMBER_RE,relevance:0},this.BINARY_NUMBER_MODE={className:"number",begin:this.BINARY_NUMBER_RE,relevance:0},this.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gim]*/,illegal:/\n/,contains:[this.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[this.BACKSLASH_ESCAPE]}]},this.inherit=function(e,t){var n={};for(var r in e)n[r]=e[r];if(t)for(var r in t)n[r]=t[r];return n}};r.LANGUAGES.coffeescript=n(13)(r),r.LANGUAGES.css=n(14)(r),r.LANGUAGES.javascript=n(16)(r),r.LANGUAGES.json=n(17)(r),r.LANGUAGES.xml=n(18)(r),e.exports=r},function(e,t){e.exports=function(e){return{keywords:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const",literal:"true false null undefined NaN Infinity"},contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{begin:/</,end:/>;/,subLanguage:"xml"}],relevance:0},{className:"function",beginWithKeyword:!0,end:/{/,keywords:"function",contains:[{className:"title",begin:/[A-Za-z$_][0-9A-Za-z$_]*/},{className:"params",begin:/\(/,end:/\)/,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:/["'\(]/}],illegal:/\[|%/}]}}},function(e,t){e.exports=function(e){var t={literal:"true false null"},n=[e.QUOTE_STRING_MODE,e.C_NUMBER_MODE],r={className:"value",end:",",endsWithParent:!0,excludeEnd:!0,contains:n,keywords:t},s={begin:"{",end:"}",contains:[{className:"attribute",begin:'\\s*"',end:'"\\s*:\\s*',excludeBegin:!0,excludeEnd:!0,contains:[e.BACKSLASH_ESCAPE],illegal:"\\n",starts:r}],illegal:"\\S"},i={begin:"\\[",end:"\\]",contains:[e.inherit(r,{className:null})],illegal:"\\S"};return n.splice(n.length,0,s,i),{contains:n,keywords:t,illegal:"\\S"}}},function(e,t){e.exports=function(e){var t="[A-Za-z0-9\\._:-]+",n={endsWithParent:!0,relevance:0,contains:[{className:"attribute",begin:t,relevance:0},{begin:'="',returnBegin:!0,end:'"',contains:[{className:"value",begin:'"',endsWithParent:!0}]},{begin:"='",returnBegin:!0,end:"'",contains:[{className:"value",begin:"'",endsWithParent:!0}]},{begin:"=",contains:[{className:"value",begin:"[^\\s/>]+"}]}]};return{case_insensitive:!0,contains:[{className:"pi",begin:"<\\?",end:"\\?>",relevance:10},{className:"doctype",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},{className:"comment",begin:"<!--",end:"-->",relevance:10},{className:"cdata",begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{title:"style"},contains:[n],starts:{end:"</style>",returnEnd:!0,subLanguage:"css"}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{title:"script"},contains:[n],starts:{end:"</script>",returnEnd:!0,subLanguage:"javascript"}},{begin:"<%",end:"%>",subLanguage:"vbscript"},{className:"tag",begin:"</?",end:"/?>",relevance:0,contains:[{className:"title",begin:"[^ /><]+"},n]}]}}},,,,,,function(e,t,n){(function(t){(function(){function t(e){this.tokens=[],this.tokens.links={},this.options=e||u.defaults,this.rules=h.normal,this.options.gfm&&(this.options.tables?this.rules=h.tables:this.rules=h.gfm)}function n(e,t){if(this.options=t||u.defaults,this.links=e,this.rules=g.normal,this.renderer=this.options.renderer||new r,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=g.breaks:this.rules=g.gfm:this.options.pedantic&&(this.rules=g.pedantic)}function r(e){this.options=e||{}}function s(e){this.tokens=[],this.token=null,this.options=e||u.defaults,this.options.renderer=this.options.renderer||new r,this.renderer=this.options.renderer,this.renderer.options=this.options}function i(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function a(e){return e.replace(/&([#\w]+);/g,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function l(e,t){return e=e.source,t=t||"",function n(r,s){return r?(s=s.source||s,s=s.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,s),n):new RegExp(e,t)}}function o(){}function c(e){for(var t,n,r=1;r<arguments.length;r++){t=arguments[r];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function u(e,n,r){if(r||"function"==typeof n){r||(r=n,n=null),n=c({},u.defaults,n||{});var a,l,o=n.highlight,h=0;try{a=t.lex(e,n)}catch(g){return r(g)}l=a.length;var p=function(e){if(e)return n.highlight=o,r(e);var t;try{t=s.parse(a,n)}catch(i){e=i}return n.highlight=o,e?r(e):r(null,t)};if(!o||o.length<3)return p();if(delete n.highlight,!l)return p();for(;h<a.length;h++)!function(e){return"code"!==e.type?--l||p():o(e.text,e.lang,function(t,n){return t?p(t):null==n||n===e.text?--l||p():(e.text=n,e.escaped=!0,void(--l||p()))})}(a[h])}else try{return n&&(n=c({},u.defaults,n)),s.parse(t.lex(e,n),n)}catch(g){if(g.message+="\nPlease report this to https://github.com/chjj/marked.",(n||u.defaults).silent)return"<p>An error occured:</p><pre>"+i(g.message+"",!0)+"</pre>";throw g}}var h={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:o,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:o,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:o,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};h.bullet=/(?:[*+-]|\d+\.)/,h.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,h.item=l(h.item,"gm")(/bull/g,h.bullet)(),h.list=l(h.list)(/bull/g,h.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+h.def.source+")")(),h.blockquote=l(h.blockquote)("def",h.def)(),h._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",h.html=l(h.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,h._tag)(),h.paragraph=l(h.paragraph)("hr",h.hr)("heading",h.heading)("lheading",h.lheading)("blockquote",h.blockquote)("tag","<"+h._tag)("def",h.def)(),h.normal=c({},h),h.gfm=c({},h.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),h.gfm.paragraph=l(h.paragraph)("(?!","(?!"+h.gfm.fences.source.replace("\\1","\\2")+"|"+h.list.source.replace("\\1","\\3")+"|")(),h.tables=c({},h.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),t.rules=h,t.lex=function(e,n){var r=new t(n);return r.lex(e)},t.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},t.prototype.token=function(e,t,n){for(var r,s,i,a,l,o,c,u,g,e=e.replace(/^ +$/gm,"");e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e))e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:i.replace(/\n+$/,"")});else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if(t&&(i=this.rules.nptable.exec(e))){for(e=e.substring(i[0].length),o={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/\n$/,"").split("\n")},u=0;u<o.align.length;u++)/^ *-+: *$/.test(o.align[u])?o.align[u]="right":/^ *:-+: *$/.test(o.align[u])?o.align[u]="center":/^ *:-+ *$/.test(o.align[u])?o.align[u]="left":o.align[u]=null;for(u=0;u<o.cells.length;u++)o.cells[u]=o.cells[u].split(/ *\| */);this.tokens.push(o)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t,!0),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),a=i[2],this.tokens.push({type:"list_start",ordered:a.length>1}),i=i[0].match(this.rules.item),r=!1,g=i.length,u=0;g>u;u++)o=i[u],c=o.length,o=o.replace(/^ *([*+-]|\d+\.) +/,""),~o.indexOf("\n ")&&(c-=o.length,o=this.options.pedantic?o.replace(/^ {1,4}/gm,""):o.replace(new RegExp("^ {1,"+c+"}","gm"),"")),this.options.smartLists&&u!==g-1&&(l=h.bullet.exec(i[u+1])[0],a===l||a.length>1&&l.length>1||(e=i.slice(u+1).join("\n")+e,u=g-1)),s=r||/\n\n(?!\s*$)/.test(o),u!==g-1&&(r="\n"===o.charAt(o.length-1),s||(s=r)),this.tokens.push({type:s?"loose_item_start":"list_item_start"}),this.token(o,!1,n),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:i[0]});else if(!n&&t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),this.tokens.links[i[1].toLowerCase()]={href:i[2],title:i[3]};else if(t&&(i=this.rules.table.exec(e))){for(e=e.substring(i[0].length),o={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/(?: *\| *)?\n$/,"").split("\n")},u=0;u<o.align.length;u++)/^ *-+: *$/.test(o.align[u])?o.align[u]="right":/^ *:-+: *$/.test(o.align[u])?o.align[u]="center":/^ *:-+ *$/.test(o.align[u])?o.align[u]="left":o.align[u]=null;for(u=0;u<o.cells.length;u++)o.cells[u]=o.cells[u].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(o)}else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var g={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:o,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:o,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};g._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,g._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,g.link=l(g.link)("inside",g._inside)("href",g._href)(),g.reflink=l(g.reflink)("inside",g._inside)(),g.normal=c({},g),g.pedantic=c({},g.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),g.gfm=c({},g.normal,{escape:l(g.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:l(g.text)("]|","~]|")("|","|https?://|")()}),g.breaks=c({},g.gfm,{br:l(g.br)("{2,}","*")(),text:l(g.gfm.text)("{2,}","*")()}),n.rules=g,n.output=function(e,t,r){var s=new n(t,r);return s.output(e)},n.prototype.output=function(e){for(var t,n,r,s,a="";e;)if(s=this.rules.escape.exec(e))e=e.substring(s[0].length),a+=s[1];else if(s=this.rules.autolink.exec(e))e=e.substring(s[0].length),"@"===s[2]?(n=":"===s[1].charAt(6)?this.mangle(s[1].substring(7)):this.mangle(s[1]),r=this.mangle("mailto:")+n):(n=i(s[1]),r=n),a+=this.renderer.link(r,null,n);else if(this.inLink||!(s=this.rules.url.exec(e))){if(s=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(s[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(s[0])&&(this.inLink=!1),e=e.substring(s[0].length),a+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):i(s[0]):s[0];else if(s=this.rules.link.exec(e))e=e.substring(s[0].length),this.inLink=!0,a+=this.outputLink(s,{href:s[2],title:s[3]}),this.inLink=!1;else if((s=this.rules.reflink.exec(e))||(s=this.rules.nolink.exec(e))){if(e=e.substring(s[0].length),t=(s[2]||s[1]).replace(/\s+/g," "),t=this.links[t.toLowerCase()],!t||!t.href){a+=s[0].charAt(0),e=s[0].substring(1)+e;continue}this.inLink=!0,a+=this.outputLink(s,t),this.inLink=!1}else if(s=this.rules.strong.exec(e))e=e.substring(s[0].length),a+=this.renderer.strong(this.output(s[2]||s[1]));else if(s=this.rules.em.exec(e))e=e.substring(s[0].length),a+=this.renderer.em(this.output(s[2]||s[1]));else if(s=this.rules.code.exec(e))e=e.substring(s[0].length),a+=this.renderer.codespan(i(s[2],!0));else if(s=this.rules.br.exec(e))e=e.substring(s[0].length),a+=this.renderer.br();else if(s=this.rules.del.exec(e))e=e.substring(s[0].length),a+=this.renderer.del(this.output(s[1]));else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),a+=this.renderer.text(i(this.smartypants(s[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(s[0].length),n=i(s[1]),r=n,a+=this.renderer.link(r,null,n);return a},n.prototype.outputLink=function(e,t){var n=i(t.href),r=t.title?i(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,i(e[1]))},n.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},n.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,s=0;r>s;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},r.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+i(t,!0)+'">'+(n?e:i(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:i(e,!0))+"\n</code></pre>"},r.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},r.prototype.html=function(e){return e},r.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},r.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},r.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},r.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},r.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},r.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},r.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},r.prototype.tablecell=function(e,t){var n=t.header?"th":"td",r=t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">";return r+e+"</"+n+">\n"},r.prototype.strong=function(e){return"<strong>"+e+"</strong>"},r.prototype.em=function(e){return"<em>"+e+"</em>"},r.prototype.codespan=function(e){return"<code>"+e+"</code>"},r.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},r.prototype.del=function(e){return"<del>"+e+"</del>"},r.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(a(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(s){return""}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:"))return""}var i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>"},r.prototype.image=function(e,t,n){var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},r.prototype.text=function(e){return e},s.parse=function(e,t,n){var r=new s(t,n);return r.parse(e)},s.prototype.parse=function(e){this.inline=new n(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},s.prototype.next=function(){return this.token=this.tokens.pop()},s.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},s.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},s.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,s,i="",a="";for(n="",e=0;e<this.token.header.length;e++)r={header:!0,align:this.token.align[e]},n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(i+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",s=0;s<t.length;s++)n+=this.renderer.tablecell(this.inline.output(t[s]),{header:!1,align:this.token.align[s]});a+=this.renderer.tablerow(n)}return this.renderer.table(i,a);case"blockquote_start":for(var a="";"blockquote_end"!==this.next().type;)a+=this.tok();return this.renderer.blockquote(a);case"list_start":for(var a="",l=this.token.ordered;"list_end"!==this.next().type;)a+=this.tok();return this.renderer.list(a,l);case"list_item_start":for(var a="";"list_item_end"!==this.next().type;)a+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(a);case"loose_item_start":for(var a="";"list_item_end"!==this.next().type;)a+=this.tok();return this.renderer.listitem(a);case"html":var o=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(o);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},o.exec=o,u.options=u.setOptions=function(e){return c(u.defaults,e),u},u.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new r,xhtml:!1},u.Parser=s,u.parser=s.parse,u.Renderer=r,u.Lexer=t,u.lexer=t.lex,u.InlineLexer=n,u.inlineLexer=n.output,u.parse=u,e.exports=u}).call(function(){return this||("undefined"!=typeof window?window:t)}())}).call(t,function(){
return this}())}]);
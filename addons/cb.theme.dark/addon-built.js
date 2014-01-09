define("require-tools/less/normalize",[],function(){function r(e,r,i){if(e.indexOf("data:")===0)return e;e=t(e);var u=i.match(n),a=r.match(n);return a&&(!u||u[1]!=a[1]||u[2]!=a[2])?s(e,r):o(s(e,r),i)}function s(e,t){e.substr(0,2)=="./"&&(e=e.substr(2));if(e.match(/^\//)||e.match(n))return e;var r=t.split("/"),i=e.split("/");r.pop();while(curPart=i.shift())curPart==".."?r.pop():r.push(curPart);return r.join("/")}function o(e,t){var n=t.split("/");n.pop(),t=n.join("/")+"/",i=0;while(t.substr(i,1)==e.substr(i,1))i++;while(t.substr(i,1)!="/")i--;t=t.substr(i+1),e=e.substr(i+1),n=t.split("/");var r=e.split("/");out="";while(n.shift())out+="../";while(curPart=r.shift())out+=curPart+"/";return out.substr(0,out.length-1)}var e=/([^:])\/+/g,t=function(t){return t.replace(e,"$1/")},n=/[^\:\/]*:\/\/([^\/])*/,u=function(e,n,i){n=t(n),i=t(i);var s=/@import\s*("([^"]*)"|'([^']*)')|url\s*\(\s*(\s*"([^"]*)"|'([^']*)'|[^\)]*\s*)\s*\)/ig,o,u,e;while(o=s.exec(e)){u=o[3]||o[2]||o[5]||o[6]||o[4];var a;a=r(u,n,i);var f=o[5]||o[6]?1:0;e=e.substr(0,s.lastIndex-u.length-f-1)+a+e.substr(s.lastIndex-f-1),s.lastIndex=s.lastIndex+(a.length-u.length)}return e};return u.convertURIBase=r,u.absoluteURI=s,u.relativeURI=o,u}),define("require-tools/less/less",["require"],function(e){var t={};t.pluginBuilder="./less-builder";if(typeof window=="undefined")return t.load=function(e,t,n){n()},less;t.normalize=function(e,t){return e.substr(e.length-5,5)==".less"&&(e=e.substr(0,e.length-5)),e=t(e),e};var n=document.getElementsByTagName("head")[0],r=window.location.href.split("/");r[r.length-1]="",r=r.join("/");var i;window.less=window.less||{env:"development"};var s=0,o;t.inject=function(e){s<31&&(o=document.createElement("style"),o.type="text/css",n.appendChild(o),s++),o.styleSheet?o.styleSheet.cssText+=e:o.appendChild(document.createTextNode(e))};var u;return t.load=function(n,s,o,a){e(["./lessc","./normalize"],function(a,f){if(!i){var l=e.toUrl("base_url").split("/");l[l.length-1]="",i=f.absoluteURI(l.join("/"),r)+"/"}var c=s.toUrl(n+".less");c=f.absoluteURI(c,i),u=u||new a.Parser(window.less),u.parse('@import "'+c+'";',function(e,n){if(e)return o.error(e);t.inject(f(n.toCSS(),c,r)),setTimeout(o,7)})})},t}),define("require-tools/less/less!ace/theme",[],function(){}),define("ace/theme",["less!ace/theme.less"],function(e){return{isDark:!0,cssClass:"ace-codebox-dark",cssText:e}}),define("main",["ace/theme"],function(e){var t=codebox.require("core/themes"),n="#1a1d24",r="#65737d",i="#2b303b",s="#dfe0e6",o="#343c45",u="#dadfe6";t.add({id:"dark",title:"Dark",editor:{theme:e},styles:{menubar:{background:i,color:s,"border-color":"#111"},lateralbar:{commands:{background:n,color:u},body:{background:n,color:r}},tabs:{section:{"border-color":n},header:{background:n,color:r},content:{background:o},tab:{"&.active":{background:o,color:u}}}}})}),function(e){var t=document,n="appendChild",r="styleSheet",i=t.createElement("style");i.type="text/css",t.getElementsByTagName("head")[0][n](i),i[r]?i[r].cssText=e:i[n](t.createTextNode(e))}(".ace_editor.ace-codebox-dark .ace_gutter{background:#343c45;color:#c5c8c6}.ace_editor.ace-codebox-dark .ace_print-margin{width:1px;background:#25282c}.ace_editor.ace-codebox-dark{background-color:#343c45;color:#c5c8c6}.ace_editor.ace-codebox-dark .ace_cursor{color:#aeafad}.ace_editor.ace-codebox-dark .ace_marker-layer .ace_selection{background:#373b41}.ace_editor.ace-codebox-dark.ace_multiselect .ace_selection.ace_start{box-shadow:0 0 3px 0 #1D1F21;border-radius:2px}.ace_editor.ace-codebox-dark .ace_marker-layer .ace_step{background:#665200}.ace_editor.ace-codebox-dark .ace_marker-layer .ace_bracket{margin:-1px 0 0 -1px;border:1px solid #4b4e55}.ace_editor.ace-codebox-dark .ace_marker-layer .ace_active-line{background:#282a2e}.ace_editor.ace-codebox-dark .ace_gutter-active-line{background-color:#343c45}.ace_editor.ace-codebox-dark .ace_marker-layer .ace_selected-word{border:1px solid #373b41}.ace_editor.ace-codebox-dark .ace_invisible{color:#4b4e55}.ace_editor.ace-codebox-dark .ace_keyword,.ace_editor.ace-codebox-dark .ace_meta,.ace_editor.ace-codebox-dark .ace_storage,.ace_editor.ace-codebox-dark .ace_storage.ace_type{color:#b294bb}.ace_editor.ace-codebox-dark .ace_keyword.ace_operator{color:#8abeb7}.ace_editor.ace-codebox-dark .ace_constant.ace_character,.ace_editor.ace-codebox-dark .ace_constant.ace_language,.ace_editor.ace-codebox-dark .ace_constant.ace_numeric,.ace_editor.ace-codebox-dark .ace_keyword.ace_other.ace_unit,.ace_editor.ace-codebox-dark .ace_support.ace_constant,.ace_editor.ace-codebox-dark .ace_variable.ace_parameter{color:#de935f}.ace_editor.ace-codebox-dark .ace_constant.ace_other{color:#ced1cf}.ace_editor.ace-codebox-dark .ace_invalid{color:#CED2CF;background-color:#df5f5f}.ace_editor.ace-codebox-dark .ace_invalid.ace_deprecated{color:#CED2CF;background-color:#b798bf}.ace_editor.ace-codebox-dark .ace_fold{background-color:#81A2BE;border-color:#c5c8c6}.ace_editor.ace-codebox-dark .ace_entity.ace_name.ace_function,.ace_editor.ace-codebox-dark .ace_support.ace_function{color:#81a2be}.ace_editor.ace-codebox-dark .ace_support.ace_class,.ace_editor.ace-codebox-dark .ace_support.ace_type{color:#f0c674}.ace_editor.ace-codebox-dark .ace_heading,.ace_editor.ace-codebox-dark .ace_string{color:#b5bd68}.ace_editor.ace-codebox-dark .ace_entity.ace_name.ace_tag,.ace_editor.ace-codebox-dark .ace_entity.ace_other.ace_attribute-name,.ace_editor.ace-codebox-dark .ace_meta.ace_tag,.ace_editor.ace-codebox-dark .ace_string.ace_regexp,.ace_editor.ace-codebox-dark .ace_variable{color:#c66}.ace_editor.ace-codebox-dark .ace_comment{color:#969896}.ace_editor.ace-codebox-dark .ace_indent-guide{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y}")
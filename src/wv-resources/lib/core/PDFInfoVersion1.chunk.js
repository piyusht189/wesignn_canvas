/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see legal.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[10],{352:function(ha,ca,f){function ba(e){e.Ca();e.advance();var f=e.current.textContent;e.Ua();return f}function da(e){var f=[];for(e.Ca();e.advance();){var h=e.Ka();"field"===h?f.push(String(e.aa("name"))):Object(ia.h)("unrecognised field list element: "+h)}e.Ua();return f}function fa(e,f){return f?"false"===e?!1:!0:"true"===e?!0:!1}function aa(e,f){var h=e.Ka();switch(h){case "javascript":return{name:"JavaScript",javascript:e.current.textContent};
case "uri":return{name:"URI",uri:e.aa("uri")};case "goto":h=null;e.Ca();if(e.advance()){var n=e.aa("fit");h={page:e.aa("page"),fit:n};if("0"===h.page)Object(ia.h)("null page encountered in dest");else switch(f=f(Number(h.page)),n){case "Fit":case "FitB":break;case "FitH":case "FitBH":h.top=f.ha({x:0,y:e.aa("top")||0}).y;break;case "FitV":case "FitBV":h.left=f.ha({x:e.aa("left")||0,y:0}).x;break;case "FitR":n=f.ha({x:e.aa("left")||0,y:e.aa("top")||0});f=f.ha({x:e.aa("right")||0,y:e.aa("bottom")||0});
f=new ra.a(n.x,n.y,f.x,f.y);h.top=f.da;h.left=f.fa;h.bottom=f.ea;h.right=f.ga;break;case "XYZ":n=f.ha({x:e.aa("left")||0,y:e.aa("top")||0});h.top=n.y;h.left=n.x;h.zoom=e.aa("zoom")||0;break;default:Object(ia.h)("unknown dest fit: "+n)}h={name:"GoTo",dest:h}}else Object(ia.h)("missing dest in GoTo action");e.Ua();return h;case "submit-form":h={name:"SubmitForm",url:e.aa("url"),format:e.aa("format"),method:e.aa("method")||"POST",exclude:fa(e.aa("exclude"),!1)};f=e.aa("flags");h.flags=f?f.split(" "):
[];for(e.Ca();e.advance();)switch(f=e.Ka(),f){case "fields":h.fields=da(e);break;default:Object(ia.h)("unrecognised submit-form child: "+f)}e.Ua();return h;case "reset-form":h={name:"ResetForm",exclude:fa(e.aa("exclude"),!1)};for(e.Ca();e.advance();)switch(f=e.Ka(),f){case "fields":h.fields=da(e);break;default:Object(ia.h)("unrecognised reset-form child: "+f)}e.Ua();return h;case "hide":h={name:"Hide",hide:fa(e.aa("hide"),!0)};for(e.Ca();e.advance();)switch(f=e.Ka(),f){case "fields":h.fields=da(e);
break;default:Object(ia.h)("unrecognised hide child: "+f)}e.Ua();return h;case "named":return{name:"Named",action:e.aa("name")};default:Object(ia.h)("Encountered unexpected action type: "+h)}return null}function z(e,f,h){var n={};for(e.Ca();e.advance();){var r=e.Ka();switch(r){case "action":r=e.aa("trigger");if(f?-1!==f.indexOf(r):1){n[r]=[];for(e.Ca();e.advance();){var w=aa(e,h);Object(ka.isNull)(w)||n[r].push(w)}e.Ua()}else Object(ia.h)("encountered unexpected trigger on field: "+r);break;default:Object(ia.h)("encountered unknown action child: "+
r)}}e.Ua();return n}function y(e){return new ma.a(e.aa("r")||0,e.aa("g")||0,e.aa("b")||0,e.aa("a")||1)}function w(e,f){var h=e.aa("name"),n=e.aa("type")||"Type1",r=e.aa("size"),w=f.ha({x:0,y:0});r=f.ha({x:Number(r),y:0});f=w.x-r.x;w=w.y-r.y;h={name:h,type:n,size:Math.sqrt(f*f+w*w)||0,strokeColor:[0,0,0],fillColor:[0,0,0]};for(e.Ca();e.advance();)switch(n=e.Ka(),n){case "stroke-color":h.strokeColor=y(e);break;case "fill-color":h.fillColor=y(e);break;default:Object(ia.h)("unrecognised font child: "+
n)}e.Ua();return h}function h(e){return{value:e.aa("value"),displayValue:e.aa("display-value")||void 0}}function r(e){var f=[];for(e.Ca();e.advance();){var n=e.Ka();switch(n){case "option":f.push(h(e));break;default:Object(ia.h)("unrecognised options child: "+n)}}e.Ua();return f}function x(e,f){var h=e.aa("name"),n={type:e.aa("type"),quadding:e.aa("quadding")||"Left-justified",maxLen:e.aa("max-len")||-1},x=e.aa("flags");Object(ka.isString)(x)&&(n.flags=x.split(" "));for(e.Ca();e.advance();)switch(x=
e.Ka(),x){case "actions":n.actions=z(e,["C","F","K","V"],function(){return f});break;case "default-value":n.defaultValue=ba(e);break;case "font":n.font=w(e,f);break;case "options":n.options=r(e);break;default:Object(ia.h)("unknown field child: "+x)}e.Ua();return new window.Annotations.ca.ma(h,n)}function e(e,f){switch(e.type){case "Tx":try{if(Object(ta.c)(e.actions))return new na.a.DatePickerWidgetAnnotation(e,f)}catch(ja){Object(ia.h)(ja)}return new na.a.TextWidgetAnnotation(e,f);case "Ch":return e.flags.get(ua.WidgetFlags.COMBO)?
new na.a.ChoiceWidgetAnnotation(e,f):new na.a.ListWidgetAnnotation(e,f);case "Btn":return e.flags.get(ua.WidgetFlags.PUSH_BUTTON)?new na.a.PushButtonWidgetAnnotation(e,f):e.flags.get(ua.WidgetFlags.RADIO)?new na.a.RadioButtonWidgetAnnotation(e,f):new na.a.CheckButtonWidgetAnnotation(e,f);case "Sig":return new na.a.SignatureWidgetAnnotation(e,f);default:Object(ia.h)("Unrecognised field type: "+e.type)}return null}function n(e,f){var h={number:e.aa("number")};for(e.Ca();e.advance();){var n=e.Ka();switch(n){case "actions":h.actions=
z(e,["O","C"],f);break;default:Object(ia.h)("unrecognised page child: "+n)}}e.Ua();return h}function ea(f,h,r,aa){var ba=[],ca={};f.Ca();var ea=[],fa={},ja=[];Object(oa.a)(function(){if(f.advance()){var r=f.Ka();switch(r){case "calculation-order":ea="calculation-order"===f.Ka()?da(f):[];break;case "document-actions":fa=z(f,["Init","Open"],h);break;case "pages":r=[];for(f.Ca();f.advance();){var aa=f.Ka();switch(aa){case "page":r.push(n(f,h));break;default:Object(ia.h)("unrecognised page child: "+aa)}}f.Ua();
ja=r;break;case "field":aa=x(f,h(1));ca[aa.name]=aa;break;case "widget":r={border:{style:"Solid",width:1},backgroundColor:[],fieldName:f.aa("field"),page:f.aa("page"),index:f.aa("index")||0,rotation:f.aa("rotation")||0,flags:[],isImporting:!0};(aa=f.aa("appearance"))&&(r.appearance=aa);(aa=f.aa("flags"))&&(r.flags=aa.split(" "));for(f.Ca();f.advance();)switch(aa=f.Ka(),aa){case "rect":var ha=f,ka=h(Number(r.page));aa=ka.ha({x:ha.aa("x1")||0,y:ha.aa("y1")||0});ha=ka.ha({x:ha.aa("x2")||0,y:ha.aa("y2")||
0});aa=new ra.a(aa.x,aa.y,ha.x,ha.y);aa.normalize();r.rect={x1:aa.x1,y1:aa.y1,x2:aa.x2,y2:aa.y2};break;case "border":aa=f;ha={style:aa.aa("style")||"Solid",width:aa.aa("width")||1,color:[0,0,0]};for(aa.Ca();aa.advance();)switch(ka=aa.Ka(),ka){case "color":ha.color=y(aa);break;default:Object(ia.h)("unrecognised border child: "+ka)}aa.Ua();r.border=ha;break;case "background-color":r.backgroundColor=y(f);break;case "actions":r.actions=z(f,"E X D U Fo Bl PO PC PV PI".split(" "),h);break;case "appearances":aa=
f;ha=Object(ta.b)(r,"appearances");for(aa.Ca();aa.advance();)if(ka=aa.Ka(),"appearance"===ka){ka=aa.aa("name");var la=Object(ta.b)(ha,ka);ka=aa;for(ka.Ca();ka.advance();){var na=ka.Ka();switch(na){case "Normal":Object(ta.b)(la,"Normal").data=ka.current.textContent;break;default:Object(ia.h)("unexpected appearance state: ",na)}}ka.Ua()}else Object(ia.h)("unexpected appearances child: "+ka);aa.Ua();break;case "extra":aa=f;ha=h;ka={};for(aa.Ca();aa.advance();)switch(la=aa.Ka(),la){case "font":ka.font=
w(aa,ha(1));break;default:Object(ia.h)("unrecognised extra child: "+la)}aa.Ua();aa=ka;aa.font&&(r.font=aa.font);break;case "captions":ha=f;aa={};(ka=ha.aa("Normal"))&&(aa.Normal=ka);(ka=ha.aa("Rollover"))&&(aa.Rollover=ka);(ha=ha.aa("Down"))&&(aa.Down=ha);r.captions=aa;break;default:Object(ia.h)("unrecognised widget child: "+aa)}f.Ua();(aa=ca[r.fieldName])?(r=e(aa,r),ba.push(r)):Object(ia.h)("ignoring widget with no corresponding field data: "+r.fieldName);break;default:Object(ia.h)("Unknown element encountered in PDFInfo: "+
r)}return!0}return!1},function(){f.Ua();r({calculationOrder:ea,widgets:ba,fields:ca,documentActions:fa,pages:ja,custom:[]})},aa)}f.r(ca);f.d(ca,"parse",function(){return ea});var ia=f(1),ka=f(0);f.n(ka);var na=f(90),ra=f(6),ma=f(8),oa=f(82),ta=f(79),ua=f(23)}}]);}).call(this || window)
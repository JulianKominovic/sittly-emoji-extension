import i from"react";import p from"react";var v={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=p.createContext&&p.createContext(v);var o=function(){return o=Object.assign||function(a){for(var t,r=1,l=arguments.length;r<l;r++){t=arguments[r];for(var h in t)Object.prototype.hasOwnProperty.call(t,h)&&(a[h]=t[h])}return a},o.apply(this,arguments)},f=function(a,t){var r={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&t.indexOf(l)<0&&(r[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,l=Object.getOwnPropertySymbols(a);h<l.length;h++)t.indexOf(l[h])<0&&Object.prototype.propertyIsEnumerable.call(a,l[h])&&(r[l[h]]=a[l[h]]);return r};function s(a){return a&&a.map(function(t,r){return i.createElement(t.tag,o({key:r},t.attr),s(t.child))})}function n(a){return function(t){return i.createElement(V,o({attr:o({},a.attr)},t),s(a.child))}}function V(a){var t=function(r){var l=a.attr,h=a.size,u=a.title,M=f(a,["attr","size","title"]),d=h||r.size||"1em",e;return r.className&&(e=r.className),a.className&&(e=(e?e+" ":"")+a.className),i.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,l,M,{className:e,style:o(o({color:a.color||r.color},r.style),a.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),u&&i.createElement("title",null,u),a.children)};return c!==void 0?i.createElement(c.Consumer,null,function(r){return t(r)}):t(v)}function z(a){return n({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}},{tag:"path",attr:{d:"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"}}]})(a)}function g(a){return n({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}},{tag:"path",attr:{d:"M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"}}]})(a)}import{SittlyCommand as B}from"sittly-devtools/dist/components/own_command";import{copyToClipboard as x,pasteToCurrentWindow as H}from"sittly-devtools/dist/api/clipboard";import{useServices as m}from"sittly-devtools/dist/hooks/context";var I=[{name:"Emojis",route:"/emojis",component:()=>{let a=m(t=>t.setContextMenuOptions);return React.createElement(B.Grid,{id:"emojis-page-list",columns:4,items:[{emoji:"\u{1F600}",description:"Grinning Facea"},{emoji:"\u{1F603}",description:"Grinning Face with Big Eyes"}].map(t=>({onClick(){H(t.emoji)},onHighlight(){a([{title:"Copy",onClick(){x(t.emoji)},description:`Copy ${t.emoji} to the clipboard`,icon:React.createElement(z,null)}])},filteringText:t.description,customChildren:React.createElement("div",{className:"flex items-center justify-center text-6xl"},t.emoji),className:"flex items-center justify-center"}))})},description:"A collection of emojis",icon:React.createElement(g,null)}],q={name:"Emojis",description:"Emojis for everyone!",icon:React.createElement(g,null),repoUrl:"https://github.com/JulianKominovic/sittly-emoji-extension"};export{q as metadata,I as pages};

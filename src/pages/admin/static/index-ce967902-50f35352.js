import{s as b,Z as x,r as l,k as d,P as j,j as o,bW as k,af as v,co as H,aa as I,aJ as B,ag as E,aZ as g}from"./sanity-d10f4100.js";import{useDeskTool as y}from"./index-63f13ccc-475cc389.js";import"./index-a69ea6d1.js";var u;function C(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function O(t){const{actionHandlers:e,index:s,menuItems:n,menuItemGroups:r,title:i}=t,{features:a}=y();return!(n!=null&&n.length)&&!i?null:o(v,{actions:o(H,{menuItems:n,menuItemGroups:r,actionHandlers:e}),backButton:a.backButton&&s>0&&o(I,{as:B,"data-as":"a",icon:E,mode:"bleed"}),title:i})}const L=b(x)(u||(u=C([`
  position: relative;
`])));function T(t){const{children:e}=t,{collapsed:s}=g();return o(L,{hidden:s,height:"fill",overflow:"auto",children:e})}function G(t){const{index:e,pane:s,paneKey:n,...r}=t,{child:i,component:a,menuItems:m,menuItemGroups:p,title:f="",type:U,...P}=s,[c,h]=l.useState(null);return d(j,{id:n,minWidth:320,selected:r.isSelected,children:[o(O,{actionHandlers:c==null?void 0:c.actionHandlers,index:e,menuItems:m,menuItemGroups:p,title:f}),d(T,{children:[k.isValidElementType(a)&&l.createElement(a,{...r,...P,ref:h,child:i,paneKey:n}),l.isValidElement(a)&&a]})]})}export{G as default};

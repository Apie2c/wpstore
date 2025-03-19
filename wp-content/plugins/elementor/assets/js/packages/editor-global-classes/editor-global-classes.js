/*! For license information please see editor-global-classes.js.LICENSE.txt */
!function(){"use strict";var e={react:function(e){e.exports=window.React},"@elementor/editor":function(e){e.exports=window.elementorV2.editor},"@elementor/editor-editing-panel":function(e){e.exports=window.elementorV2.editorEditingPanel},"@elementor/editor-panels":function(e){e.exports=window.elementorV2.editorPanels},"@elementor/editor-props":function(e){e.exports=window.elementorV2.editorProps},"@elementor/editor-styles":function(e){e.exports=window.elementorV2.editorStyles},"@elementor/editor-styles-repository":function(e){e.exports=window.elementorV2.editorStylesRepository},"@elementor/editor-ui":function(e){e.exports=window.elementorV2.editorUi},"@elementor/http":function(e){e.exports=window.elementorV2.http},"@elementor/icons":function(e){e.exports=window.elementorV2.icons},"@elementor/store":function(e){e.exports=window.elementorV2.store},"@elementor/ui":function(e){e.exports=window.elementorV2.ui},"@elementor/utils":function(e){e.exports=window.elementorV2.utils},"@wordpress/i18n":function(e){e.exports=window.wp.i18n}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,o),l.exports}o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};!function(){o.r(r);var e=o("@elementor/editor"),t=o("@elementor/editor-editing-panel"),n=o("@elementor/editor-panels"),l=o("@elementor/editor-styles-repository"),a=o("@elementor/store"),s=o("react"),i=o("@elementor/icons"),c=o("@elementor/ui"),d=o("@wordpress/i18n"),m=o("@elementor/editor-ui"),p=o("@elementor/editor-props"),u=o("@elementor/editor-styles"),w=o("@elementor/utils"),y=o("@elementor/http"),g=(0,w.createError)({code:"global_class_not_found",message:"Global class not found."}),_="globalClasses",f=(0,a.__createSlice)({name:_,initialState:{items:{},order:[]},reducers:{init(e,{payload:t}){e.items=t.items,e.order=t.order},add(e,{payload:t}){e.items[t.style.id]=t.style,e.order=t.order},update(e,{payload:t}){e.items[t.style.id]=t.style,e.order=t.order},updateProps(e,{payload:t}){const o=e.items[t.id];if(!o)throw new g({context:{styleId:t.id}});const r=(0,u.getVariantByMeta)(o,t.meta);r?r.props=(0,p.mergeProps)(r.props,t.props):o.variants.push({meta:t.meta,props:t.props})}}}),S=(0,a.__createSelector)((e=>e[_].items),(e=>e[_].order),((e,t)=>t.map((t=>e[t])))),x=(e,t)=>e[_].items[t]??null,E=()=>{const e=(0,a.__useSelector)(S);return s.createElement(c.Stack,null,s.createElement(c.List,{role:"list"},e?.map((({id:e,label:t})=>s.createElement(c.Stack,{key:e,direction:"row",alignItems:"center",gap:1,role:"listitem"},s.createElement(c.ListItemButton,{sx:{borderRadius:1}},s.createElement(m.EllipsisWithTooltip,{title:t,as:c.Typography,variant:"caption"})))))))},{panel:b,usePanelActions:h,usePanelStatus:P}=(0,n.__createPanel)({id:"class-manager-panel",component:function(){return s.createElement(c.ErrorBoundary,{fallback:s.createElement(C,null)},s.createElement(n.Panel,null,s.createElement(n.PanelHeader,null,s.createElement(c.Stack,{p:1,width:"100%",direction:"row",alignItems:"center"},s.createElement(n.PanelHeaderTitle,{sx:{display:"flex",alignItems:"center",gap:.5}},s.createElement(i.ColorSwatchIcon,{fontSize:"inherit",sx:{transform:"rotate(90deg)"}}),(0,d.__)("CSS Class manager")),s.createElement(v,{sx:{marginLeft:"auto"}}))),s.createElement(n.PanelBody,{px:2},s.createElement(E,null))))}}),v=e=>{const{close:t}=h();return s.createElement(c.IconButton,{size:"small",color:"secondary",onClick:t,...e},s.createElement(i.XIcon,{fontSize:"small"}))},C=()=>s.createElement(c.Box,{role:"alert",sx:{minHeight:"100%",p:2}},s.createElement(c.Alert,{severity:"error",sx:{mb:2,maxWidth:400,textAlign:"center"}},s.createElement("strong",null,(0,d.__)("Something went wrong","elementor")))),V="/global-classes";var I={key:"global-classes",priority:30,actions:{get:()=>S((0,a.__getState)()),getById:e=>x((0,a.__getState)(),e),create:async e=>{const t=await(async e=>(0,y.httpService)().post(V,e))(e),{data:o,meta:r}=t.data;return(0,a.__dispatch)(f.actions.add({style:o,order:r.order})),o},update:async e=>{const t={...x((0,a.__getState)(),e.id),...e},o=await(async(e,t)=>(0,y.httpService)().put(`${V}/${e}`,t))(e.id,t),{data:r,meta:n}=o.data;return(0,a.__dispatch)(f.actions.update({style:r,order:n.order})),r},updateProps:e=>{(0,a.__dispatch)(f.actions.updateProps({id:e.id,meta:e.meta,props:e.props}))}},subscribe:e=>(0,a.__subscribeWithSelector)((e=>e.globalClasses),e),labels:{singular:(0,d.__)("Global CSS Class","elementor"),plural:(0,d.__)("Global CSS Classes","elementor")}};(0,a.__registerSlice)(f),(0,n.__registerPanel)(b),l.stylesRepository.register(I),(0,e.injectIntoLogic)({id:"global-classes-hooks",component:function(){const e=(0,a.__useDispatch)();return(0,s.useEffect)((()=>{(async()=>(0,y.httpService)().get(V))().then((t=>{const{data:o,meta:r}=t.data;e(f.actions.init({items:o,order:r.order}))}))}),[e]),null}}),(0,t.injectIntoClassSelectorActions)({id:"global-classes",component:()=>{const{open:e}=h();return s.createElement(c.Tooltip,{title:(0,d.__)("Class manager"),placement:"top"},s.createElement(c.IconButton,{onClick:e},s.createElement(i.ColorSwatchIcon,{fontSize:"tiny"})))}})}(),(window.elementorV2=window.elementorV2||{}).editorGlobalClasses=r}();
import{e as x,g as ut,_ as J,o as w,c as v,a as e,t as b,f as ht,v as _t,r as L,b as S,F as Y,h as pt,w as mt,i as K,d as U}from"./index-0uMLGOXz.js";import{r as P,a as X,b as R,c as W,d as ft,e as gt,f as bt,M as Et}from"./MessageToast-mlb0tPnL.js";import{P as At}from"./PaginationBtn-1M31z4r1.js";var Z={exports:{}},V={exports:{}};/*!
  * Bootstrap backdrop.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var z;function Tt(){return z||(z=1,function(l,d){(function(t,s){l.exports=s(P(),X(),R())})(x,function(t,s,o){const _="backdrop",m="fade",c="show",p=`mousedown.bs.${_}`,E={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},A={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class a extends s{constructor(n){super(),this._config=this._getConfig(n),this._isAppended=!1,this._element=null}static get Default(){return E}static get DefaultType(){return A}static get NAME(){return _}show(n){if(!this._config.isVisible){o.execute(n);return}this._append();const f=this._getElement();this._config.isAnimated&&o.reflow(f),f.classList.add(c),this._emulateAnimation(()=>{o.execute(n)})}hide(n){if(!this._config.isVisible){o.execute(n);return}this._getElement().classList.remove(c),this._emulateAnimation(()=>{this.dispose(),o.execute(n)})}dispose(){this._isAppended&&(t.off(this._element,p),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const n=document.createElement("div");n.className=this._config.className,this._config.isAnimated&&n.classList.add(m),this._element=n}return this._element}_configAfterMerge(n){return n.rootElement=o.getElement(n.rootElement),n}_append(){if(this._isAppended)return;const n=this._getElement();this._config.rootElement.append(n),t.on(n,p,()=>{o.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(n){o.executeAfterTransition(n,this._getElement(),this._config.isAnimated)}}return a})}(V)),V.exports}var B={exports:{}};/*!
  * Bootstrap focustrap.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var G;function yt(){return G||(G=1,function(l,d){(function(t,s){l.exports=s(P(),W(),X())})(x,function(t,s,o){const _="focustrap",c=".bs.focustrap",p=`focusin${c}`,E=`keydown.tab${c}`,A="Tab",a="forward",i="backward",n={autofocus:!0,trapElement:null},f={autofocus:"boolean",trapElement:"element"};class T extends o{constructor(h){super(),this._config=this._getConfig(h),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return n}static get DefaultType(){return f}static get NAME(){return _}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),t.off(document,c),t.on(document,p,h=>this._handleFocusin(h)),t.on(document,E,h=>this._handleKeydown(h)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,t.off(document,c))}_handleFocusin(h){const{trapElement:k}=this._config;if(h.target===document||h.target===k||k.contains(h.target))return;const D=s.focusableChildren(k);D.length===0?k.focus():this._lastTabNavDirection===i?D[D.length-1].focus():D[0].focus()}_handleKeydown(h){h.key===A&&(this._lastTabNavDirection=h.shiftKey?i:a)}}return T})}(B)),B.exports}var I={exports:{}};/*!
  * Bootstrap scrollbar.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Q;function wt(){return Q||(Q=1,function(l,d){(function(t,s){l.exports=s(ft(),W(),R())})(x,function(t,s,o){const _=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",m=".sticky-top",c="padding-right",p="margin-right";class E{constructor(){this._element=document.body}getWidth(){const a=document.documentElement.clientWidth;return Math.abs(window.innerWidth-a)}hide(){const a=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,c,i=>i+a),this._setElementAttributes(_,c,i=>i+a),this._setElementAttributes(m,p,i=>i-a)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,c),this._resetElementAttributes(_,c),this._resetElementAttributes(m,p)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(a,i,n){const f=this.getWidth(),T=y=>{if(y!==this._element&&window.innerWidth>y.clientWidth+f)return;this._saveInitialAttribute(y,i);const h=window.getComputedStyle(y).getPropertyValue(i);y.style.setProperty(i,`${n(Number.parseFloat(h))}px`)};this._applyManipulationCallback(a,T)}_saveInitialAttribute(a,i){const n=a.style.getPropertyValue(i);n&&t.setDataAttribute(a,i,n)}_resetElementAttributes(a,i){const n=f=>{const T=t.getDataAttribute(f,i);if(T===null){f.style.removeProperty(i);return}t.removeDataAttribute(f,i),f.style.setProperty(i,T)};this._applyManipulationCallback(a,n)}_applyManipulationCallback(a,i){if(o.isElement(a)){i(a);return}for(const n of s.find(a,this._element))i(n)}}return E})}(I)),I.exports}/*!
  * Bootstrap modal.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(l,d){(function(t,s){l.exports=s(gt(),P(),W(),Tt(),bt(),yt(),R(),wt())})(x,function(t,s,o,_,m,c,p,E){const A="modal",i=".bs.modal",n=".data-api",f="Escape",T=`hide${i}`,y=`hidePrevented${i}`,h=`hidden${i}`,k=`show${i}`,D=`shown${i}`,j=`resize${i}`,H=`click.dismiss${i}`,tt=`mousedown.dismiss${i}`,et=`keydown.dismiss${i}`,st=`click${i}${n}`,q="modal-open",it="fade",F="show",O="modal-static",ot=".modal.show",nt=".modal-dialog",at=".modal-body",rt='[data-bs-toggle="modal"]',lt={backdrop:!0,focus:!0,keyboard:!0},ct={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class N extends t{constructor(r,u){super(r,u),this._dialog=o.findOne(nt,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new E,this._addEventListeners()}static get Default(){return lt}static get DefaultType(){return ct}static get NAME(){return A}toggle(r){return this._isShown?this.hide():this.show(r)}show(r){this._isShown||this._isTransitioning||s.trigger(this._element,k,{relatedTarget:r}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(q),this._adjustDialog(),this._backdrop.show(()=>this._showElement(r)))}hide(){!this._isShown||this._isTransitioning||s.trigger(this._element,T).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(F),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){s.off(window,i),s.off(this._dialog,i),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new _({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new c({trapElement:this._element})}_showElement(r){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const u=o.findOne(at,this._dialog);u&&(u.scrollTop=0),p.reflow(this._element),this._element.classList.add(F);const g=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,s.trigger(this._element,D,{relatedTarget:r})};this._queueCallback(g,this._dialog,this._isAnimated())}_addEventListeners(){s.on(this._element,et,r=>{if(r.key===f){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),s.on(window,j,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),s.on(this._element,tt,r=>{s.one(this._element,H,u=>{if(!(this._element!==r.target||this._element!==u.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(q),this._resetAdjustments(),this._scrollBar.reset(),s.trigger(this._element,h)})}_isAnimated(){return this._element.classList.contains(it)}_triggerBackdropTransition(){if(s.trigger(this._element,y).defaultPrevented)return;const u=this._element.scrollHeight>document.documentElement.clientHeight,g=this._element.style.overflowY;g==="hidden"||this._element.classList.contains(O)||(u||(this._element.style.overflowY="hidden"),this._element.classList.add(O),this._queueCallback(()=>{this._element.classList.remove(O),this._queueCallback(()=>{this._element.style.overflowY=g},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const r=this._element.scrollHeight>document.documentElement.clientHeight,u=this._scrollBar.getWidth(),g=u>0;if(g&&!r){const C=p.isRTL()?"paddingLeft":"paddingRight";this._element.style[C]=`${u}px`}if(!g&&r){const C=p.isRTL()?"paddingRight":"paddingLeft";this._element.style[C]=`${u}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(r,u){return this.each(function(){const g=N.getOrCreateInstance(this,r);if(typeof r=="string"){if(typeof g[r]>"u")throw new TypeError(`No method named "${r}"`);g[r](u)}})}}return s.on(document,st,rt,function(dt){const r=o.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&dt.preventDefault(),s.one(r,k,C=>{C.defaultPrevented||s.one(r,h,()=>{p.isVisible(this)&&this.focus()})});const u=o.findOne(ot);u&&N.getInstance(u).hide(),N.getOrCreateInstance(r).toggle(this)}),m.enableDismissTrigger(N),p.defineJQueryPlugin(N),N})})(Z);var vt=Z.exports;const kt=ut(vt),Nt={props:["product"],data(){return{userProductModal:"",qty:1}},methods:{show_Model(){this.userProductModal.show()},hide_Model(){this.userProductModal.hide()},add_cart(l,d,t){this.qty=1,this.$emit("add_cart",l,d,t)}},mounted(){this.userProductModal=new kt(this.$refs.modal,{keyboard:!1})}},Dt={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},Ct={class:"modal-dialog modal-xl",role:"document"},Lt={class:"modal-content border-0"},St={class:"modal-header bg-dark text-white"},Mt={class:"modal-title",id:"exampleModalLabel"},$t=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),xt={class:"modal-body"},Ot={class:"row"},Vt={class:"col-sm-6"},Bt=["src"],It={class:"col-sm-6 text-start"},Pt={class:"badge bg-primary rounded-pill"},Rt={class:"h6"},Wt={class:"h5"},qt={class:"input-group"};function Ft(l,d,t,s,o,_){return w(),v("div",Dt,[e("div",Ct,[e("div",Lt,[e("div",St,[e("h5",Mt,[e("span",null,b(t.product.title),1)]),$t]),e("div",xt,[e("div",Ot,[e("div",Vt,[e("img",{class:"img-fluid",src:t.product.imageUrl,alt:""},null,8,Bt)]),e("div",It,[e("span",Pt,b(t.product.category),1),e("p",null,"商品描述："+b(t.product.description),1),e("p",null,"商品內容："+b(t.product.content),1),e("del",Rt,"原價 "+b(t.product.origin_price)+" 元",1),e("div",Wt,"現在只要 "+b(t.product.price)+" 元",1),e("div",null,[e("div",qt,[ht(e("input",{type:"number",class:"form-control",min:"1","onUpdate:modelValue":d[0]||(d[0]=m=>o.qty=m)},null,512),[[_t,o.qty,void 0,{number:!0}]]),e("button",{type:"button",class:"btn btn-primary",onClick:d[1]||(d[1]=m=>_.add_cart(t.product.id,o.qty,"new"))},"加入購物車")])])])])])])])],512)}const Yt=J(Nt,[["render",Ft]]),M="https://ec-course-api.hexschool.io/v2",$="dollob_api",Kt={data(){return{products:[],product:{},pagination:{},isLoading:!1}},components:{userProductModal:Yt,MessageToast:Et,PaginationBtn:At},methods:{get_products(l=1){this.isLoading=!0;const d=`${M}/api/${$}/products?page=${l}`;this.axios.get(d).then(t=>{const{products:s,pagination:o}=t.data;this.products=s,this.pagination=o}).catch(t=>{alert(t)}).finally(()=>{this.isLoading=!1})},get_product(l){this.isLoading=!0;const d=`${M}/api/${$}/product/${l}`;this.axios.get(d).then(t=>{const{product:s}=t.data;this.product=s,this.$refs.userProductModal.show_Model()}).catch(t=>{alert(t)}).finally(()=>{this.isLoading=!1})},add_cart(l,d=1,t){let s="",o="";const _=`加入購物車成功，新增${d}筆商品~~`;this.isLoading=!0,t==="new"?(s=`${M}/api/${$}/cart`,o="post"):(s=`${M}/api/${$}/cart/${t}`,o="put");const m={product_id:l,qty:d};this.axios[o](s,{data:m}).then(c=>{this.toastMsg(_)}).catch(c=>{alert(c)}).finally(()=>{this.isLoading=!1,this.$refs.userProductModal.hide_Model()})},toastMsg(l){this.$refs.messageToast.show_toast(l)}},mounted(){this.get_products()}},Ut=e("h3",null,"產品列表",-1),zt={class:"container"},Gt={class:"mt-4"},Qt={class:"table align-middle"},Jt=e("thead",null,[e("tr",null,[e("th",null,"圖片"),e("th",null,"商品名稱"),e("th",null,"價格"),e("th")])],-1),Xt={style:{width:"200px"}},Zt=["src"],jt={key:0,class:"h5"},Ht={key:1},te={class:"h6"},ee={class:"h5"},se={class:"btn-group btn-group-sm"},ie={key:0,class:"fas fa-spinner fa-pulse"},oe=["onClick"],ne={key:0,class:"fas fa-spinner fa-pulse"};function ae(l,d,t,s,o,_){const m=L("VueLoading"),c=L("user-product-modal"),p=L("message-toast"),E=L("RouterLink"),A=L("pagination-btn");return w(),v(Y,null,[Ut,S(m,{active:o.isLoading},null,8,["active"]),e("div",zt,[e("div",Gt,[S(c,{ref:"userProductModal",product:o.product,onAdd_cart:_.add_cart},null,8,["product","onAdd_cart"]),S(p,{ref:"messageToast"},null,512),e("table",Qt,[Jt,e("tbody",null,[(w(!0),v(Y,null,pt(o.products,a=>(w(),v("tr",{key:a.id},[e("td",Xt,[e("img",{src:a.imageUrl,style:{height:"100px","background-size":"cover","background-position":"center"}},null,8,Zt)]),e("td",null,b(a.title),1),e("td",null,[a.origin_price===a.price?(w(),v("div",jt,b(a.price)+" 元",1)):(w(),v("div",Ht,[e("del",te,"原價 "+b(a.origin_price)+" 元",1),e("div",ee,"現在只要 "+b(a.price)+" 元",1)]))]),e("td",null,[e("div",se,[S(E,{class:"btn btn-outline-secondary",to:`/product/${a.id}`},{default:mt(()=>[o.isLoading?(w(),v("i",ie)):K("",!0),U(" 查看更多 ")]),_:2},1032,["to"]),e("button",{type:"button",class:"btn btn-outline-danger",onClick:i=>_.add_cart(a.id,1,"new")},[o.isLoading?(w(),v("i",ne)):K("",!0),U(" 加到購物車 ")],8,oe)])])]))),128))])]),S(A,{pagination:o.pagination},null,8,["pagination"])])])],64)}const de=J(Kt,[["render",ae]]);export{de as default};

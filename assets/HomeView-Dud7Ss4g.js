import{B as y,c as a,o as s,a as d,b as t,m as r,r as c,s as b,d as v,t as f,F as $,u as k,e as g,w}from"./index-CbibYqNT.js";import{s as B}from"./imagesService-DJDaraDm.js";var C=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,I={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},F=y.extend({name:"card",style:C,classes:I}),S={name:"BaseCard",extends:b,style:F,provide:function(){return{$pcCard:this,$parentInstance:this}}},h={name:"Card",extends:S,inheritAttrs:!1};function V(e,o,u,l,p,i){return s(),a("div",r({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(s(),a("div",r({key:0,class:e.cx("header")},e.ptm("header")),[c(e.$slots,"header")],16)):d("",!0),t("div",r({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(s(),a("div",r({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(s(),a("div",r({key:0,class:e.cx("title")},e.ptm("title")),[c(e.$slots,"title")],16)):d("",!0),e.$slots.subtitle?(s(),a("div",r({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[c(e.$slots,"subtitle")],16)):d("",!0)],16)):d("",!0),t("div",r({class:e.cx("content")},e.ptm("content")),[c(e.$slots,"content")],16),e.$slots.footer?(s(),a("div",r({key:1,class:e.cx("footer")},e.ptm("footer")),[c(e.$slots,"footer")],16)):d("",!0)],16)],16)}h.render=V;const _={key:0,style:{"margin-top":"1rem"}},D=["src"],N={style:{width:"100%",height:"150px"}},U=["disabled"],z={key:0},A={__name:"ImageUploader",setup(e){const o=v(null),u=i=>{const n=i.target.files[0];if(!n)return;const m=new FileReader;m.onload=()=>{o.value=m.result},m.readAsDataURL(n)},l=v(null),p=async()=>{if(!o.value)return;const i=await B(o.value);l.value=i,alert(`Imagen guardada en Firestore con id: ${i}`)};return(i,n)=>(s(),a($,null,[t("div",null,[n[2]||(n[2]=t("h3",null,"Subir imagen como Base64",-1)),t("input",{type:"file",accept:"image/*",onChange:u},null,32),o.value?(s(),a("div",_,[n[0]||(n[0]=t("h4",null,"Vista previa:",-1)),t("img",{src:o.value,style:{"max-width":"200px",border:"1px solid #ccc"}},null,8,D),n[1]||(n[1]=t("h4",null,"Cadena Base64:",-1)),t("textarea",N,f(o.value),1)])):d("",!0)]),t("div",null,[t("button",{onClick:p,disabled:!o.value},"Guardar en Firestore",8,U),l.value?(s(),a("p",z,"ID guardado: "+f(l.value),1)):d("",!0)])],64))}},R={class:"grid gap-3"},x={class:"col-12"},H={__name:"HomeView",setup(e){return k(),(o,u)=>{const l=A,p=h;return s(),a("div",R,[t("div",x,[g(p,{class:"shadow-1"},{content:w(()=>[g(l)]),_:1})])])}}};export{H as default};

import{j as e,u as c,N as i,a,F as r,m as l}from"./index.d63f256f.js";const d=t=>e("div",{className:"home__background"});function n(t){const{pathname:o}=c();return console.log(o),e(i,{to:t.to,children:({isActive:s})=>a(r,{children:[e(l.span,{layoutId:`header__name__${t.to.split("/")[1]}`,initial:{x:400},animate:{x:0},children:t.children}),e("div",{className:`__home_menu_active_links ${s&&"active"}`})]})})}const u=()=>a("section",{className:"flex flex-col justify-center items-start md:items-end",children:[a("nav",{className:"__home_menu_selection",children:[e(n,{to:"/introduction",children:"Introduction"}),e(n,{to:"/projects",children:"Projects"}),e(n,{to:"/ux-case-study",children:"UX Case Study"}),e(n,{to:"/contact",children:"Contact"})]}),e(d,{})]});export{u as default};
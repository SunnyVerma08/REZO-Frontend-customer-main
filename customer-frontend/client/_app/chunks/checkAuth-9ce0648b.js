import{D as o,a1 as n}from"./vendor-0a4ab0d8.js";const i=o({}),u=o({}),g=o({}),r="http://18.222.68.126:3000",d=r+"/api/v1",S=async()=>{const a=JSON.parse(localStorage.getItem("userLoginData"));if(a&&a.token){const s={Authorization:`Bearer ${a.token}`};g.set(s);try{const t=await n({url:`${r}/api/v1/users/auth/me`,headers:s});if(t.data.status==="success")return i.set(!0),u.set(t.data.data),!0;console.log(t)}catch(t){console.log("error",t.response.data.message)}}},h=async a=>{const s=JSON.parse(localStorage.getItem("userLoginData"));if(s&&s.token){const t={Authorization:`Bearer ${s.token}`},c=`${r}${a}`;try{const e=await n({url:c,headers:t});if(e.data.status==="success")return e;console.log(e)}catch(e){return e}}return-1};export{d as A,r as S,g as U,u as a,h as b,S as c,i};
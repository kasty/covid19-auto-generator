(this["webpackJsonpcovid19-auto-generator"]=this["webpackJsonpcovid19-auto-generator"]||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(10),c=n.n(r),i=n(50),o=n.n(i),s=(n(73),n(74),n(75),function(){return Object(a.jsxs)("h1",{className:"text-center mb-4",children:["G\xe9n\xe9rateur d'autorisation ",Object(a.jsx)("span",{className:"badge badge-warning",children:"COVID-19"})]})}),u=n(20),l=n(15),d=n.n(l),h=n(22),f=n(51),m=n.n(f),j=function(e){var t=e.currentUser,n=void 0===t?"":t,r=e.users,c=void 0===r?{}:r,i=e.onChange;return Object(a.jsxs)("h2",{className:"mb-4",children:["Je suis",Object(a.jsxs)("select",{id:"user",name:"user",className:"custom-select custom-select-lg",value:n,onChange:i,children:[Object(a.jsx)("option",{value:"",children:"..."}),Object.keys(c).map((function(e,t){var n=e.charAt(0).toUpperCase()+e.slice(1);return Object(a.jsxs)("option",{value:e,children:[n,c&&c[e]&&c[e].profile&&c[e].profile.emoji?c[e].profile.emoji:null]},e)}))]})]})},p={reasonsList:{travail:{title:"au boulot",emoji:"\ud83d\udda5"},famille:{title:"chez la nounou",emoji:"\ud83d\udc76\ud83c\udffc"},achats:{title:"faire les courses",emoji:"\ud83d\uded2"},sport_animaux:{title:"prendre l'air",emoji:" \u2614\ufe0f"},sante:{title:"chez le doc (glups)",emoji:"\ud83e\udd12"},handicap:{title:"me d\xe9placer en situation de handicap",emoji:"\ud83e\uddbd"},convocation:{title:"\xe0 une convocation",emoji:"\ud83d\udcc4"},missions:{title:"participer \xe0 une mission d'int\xe9r\xeat g\xe9n\xe9ral",emoji:"\ud83d\udd27"},enfants:{title:"chercher les enfants \xe0 l'\xe9cole",emoji:"\ud83e\uddf8"}}},b=function(e){var t=e.currentReason,n=e.onChange,r=e.reasons;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Je vais ..."}),Object(a.jsx)("div",{className:"custom-control custom-radio",children:Object.keys(p.reasonsList).map((function(e){var c,i;return r&&(null===r||void 0===r?void 0:r.includes(e))||null==r?Object(a.jsxs)("p",{id:"reason-".concat(e),className:"choice mt-3 mb-3",children:[Object(a.jsx)("input",{type:"radio",name:"field-reason",id:e,value:e,className:"custom-control-input",checked:t===e,onChange:n}),Object(a.jsxs)("label",{htmlFor:e,className:"custom-control-label",children:[null===(c=p.reasonsList[e])||void 0===c?void 0:c.title," ",null===(i=p.reasonsList[e])||void 0===i?void 0:i.emoji]})]},e):null}))})]})},g=(n(30),["for","inputmode","minlength","maxlength","min","max","pattern"]);function x(e,t){var n=function(e,t){var n=document.createElement(e);return g.forEach((function(e){t&&e in t&&t[e]&&n.setAttribute(e,t[e]),t&&delete t[e]})),Object.assign(n,t),n}("a"),a=URL.createObjectURL(e);n.href=a,n.download=t,document.body.appendChild(n),n.click()}var v=n(52),O=n.n(v);function y(e){return O.a.toDataURL(e,{errorCorrectionLevel:"M",type:"image/png",quality:.92,margin:1})}var w=n(23),C={travail:488,achats:417,sante:347,famille:325,handicap:291,sport_animaux:269,convocation:199,missions:178,enfants:157};function S(e,t,n){return N.apply(this,arguments)}function N(){return(N=Object(h.a)(d.a.mark((function e(t,n,a){var r,c,i,o,s,u,l,h,f,m,j,p,b,g,x,v,O,S,N,k,D,F,T,A,U;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Date,c=r.toLocaleDateString("fr-FR"),i=r.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}).replace(":","h"),o=t.lastname,s=t.firstname,u=t.birthday,l=t.placeofbirth,h=t.address,f=t.zipcode,m=t.city,j=t.datesortie,p=t.heuresortie,b=["Cree le: ".concat(c," a ").concat(i),"Nom: ".concat(o),"Prenom: ".concat(s),"Naissance: ".concat(u," a ").concat(l),"Adresse: ".concat(h," ").concat(f," ").concat(m),"Sortie: ".concat(j," a ").concat(p),"Motifs: ".concat(n),""].join(";\n"),e.next=7,fetch(a).then((function(e){return e.arrayBuffer()}));case 7:return g=e.sent,e.next=10,w.PDFDocument.load(g);case 10:return(x=e.sent).setTitle("COVID-19 - D\xe9claration de d\xe9placement"),x.setSubject("Attestation de d\xe9placement d\xe9rogatoire"),x.setKeywords(["covid19","covid-19","attestation","d\xe9claration","d\xe9placement","officielle","gouvernement"]),x.setProducer("DNUM/SDIT"),x.setCreator(""),x.setAuthor("Minist\xe8re de l'int\xe9rieur"),v=x.getPages()[0],e.next=20,x.embedFont(w.StandardFonts.Helvetica);case 20:return O=e.sent,(S=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:11;v.drawText(e,{x:t,y:n,size:a,font:O})})("".concat(s," ").concat(o),107,657),S(u,107,627),S(l,240,627),S("".concat(h," ").concat(f," ").concat(m),124,596),n.split(", ").forEach((function(e){S("x",59,C[e],12)})),(N=L(O,t.city,83,7,11))||(alert('Le nom de la ville risque de ne pas \xeatre affich\xe9 correctement en raison de sa longueur. Essayez d\'utiliser des abr\xe9viations ("Saint" en "St." par exemple) quand cela est possible.'),N=7),S(t.city,93,122,N),S("".concat(t.datesortie),76,92,11),S("".concat(t.heuresortie),246,92,11),k="QR-code contenant les informations ",D="de votre attestation num\xe9rique",e.next=36,y(b);case 36:return F=e.sent,e.next=39,x.embedPng(F);case 39:return T=e.sent,v.drawText(k+"\n"+D,{x:415,y:135,size:9,font:O,lineHeight:10,color:Object(w.rgb)(1,1,1)}),v.drawImage(T,{x:v.getWidth()-156,y:25,width:92,height:92}),x.addPage(),(A=x.getPages()[1]).drawText(k+D,{x:50,y:A.getHeight()-70,size:11,font:O,color:Object(w.rgb)(1,1,1)}),A.drawImage(T,{x:50,y:A.getHeight()-390,width:300,height:300}),e.next=48,x.save();case 48:return U=e.sent,e.abrupt("return",new Blob([U],{type:"application/pdf"}));case 50:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t,n,a,r){for(var c=r,i=e.widthOfTextAtSize(t,r);i>n&&c>a;)i=e.widthOfTextAtSize(t,--c);return i>n?null:c}var k=n.p+"static/media/certificate.cb910c87.pdf",D=function(){var e=function(){var e=Object(h.a)(d.a.mark((function e(){var t,n,a,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!N||!N.profile){e.next=13;break}return t=N.profile,n=new Date,t.datesortie="".concat(n.getDate(),"/").concat(n.getMonth()+1,"/").concat(n.getFullYear()),t.heuresortie="".concat(n.getHours(),":").concat(String(n.getMinutes()).padStart(2,"0")),e.next=7,S(t,O,k);case 7:a=e.sent,r=n.toLocaleDateString("fr-CA"),c=n.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}).replace(":","-"),x(a,"attestation-".concat(r,"_").concat(c,".pdf")),e.next=13;break;case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=c.a.useState(""),n=Object(u.a)(t,2),i=n[0],o=n[1],s=c.a.useState(null),l=Object(u.a)(s,2),f=l[0],p=l[1],g=c.a.useState(""),v=Object(u.a)(g,2),O=v[0],y=v[1],w=c.a.useState(null),C=Object(u.a)(w,2),N=C[0],L=C[1],D=c.a.useState(null),F=Object(u.a)(D,2),T=F[0],A=F[1];return Object(r.useEffect)((function(){if(T)if(""!==i){var e=T.users[i];L(e),e&&e.settings&&e.settings.defaultChoice?y(e.settings.defaultChoice):y(e.settings.choices[0])}else o(document.location.search.replace("?p=","")||(T&&T.defaultUser&&T.users&&T.users[T.defaultUser]?T.defaultUser:""))}),[T,i]),Object(r.useEffect)((function(){(function(){var e=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(document.location.origin).concat(document.location.pathname,"/users.json")).then((function(e){A(e.data),p(null)})).catch((function(e){p("Une erreur s'est produite dans le chargement des donn\xe9es"),console.error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsxs)("form",{children:[f?Object(a.jsx)("div",{className:"alert alert-danger",children:f}):null,Object(a.jsx)(j,{users:T&&T.users?T.users:{},currentUser:i,onChange:function(e){o(e.target.value)}}),Object(a.jsx)(b,{currentReason:O,reasons:N&&N.settings&&N.settings.choices?N.settings.choices:null,onChange:function(e){y(e.currentTarget.value)}}),Object(a.jsx)("button",{type:"button",className:"btn btn-info btn-lg btn-block",id:"generate-btn",onClick:e,children:"G\xe9n\xe9rer"})]})},F=function(){return Object(a.jsx)("p",{className:"text-center",children:Object(a.jsxs)("small",{children:["Ce projet a \xe9t\xe9 r\xe9alis\xe9 \xe0 partir du projet officiel disponible sur le ",Object(a.jsx)("a",{href:"https://github.com/LAB-MI/attestation-deplacement-derogatoire-q4-2020",children:"d\xe9p\xf4t du Minit\xe8re de l'Int\xe9rieur"}),Object(a.jsx)("br",{}),"Auteur : ",Object(a.jsx)("a",{href:"https://www.mariegosse.fr",children:"Marie Goss\xe9"})," / ",Object(a.jsx)("a",{href:"https://github.com/kasty/covid19-auto-generator",children:"Github"})]})})};var T=function(){return Object(a.jsxs)("div",{id:"app",className:"App container-md",children:[Object(a.jsx)("div",{className:"mx-auto card",id:"main",children:Object(a.jsxs)("div",{className:"card-body text-center",children:[Object(a.jsx)(s,{}),Object(a.jsx)(D,{})]})}),Object(a.jsx)(F,{})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,128)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root")),A()},73:function(e,t,n){},75:function(e,t,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.e313fd73.chunk.js.map
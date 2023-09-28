"use strict";(self.webpackChunksrc=self.webpackChunksrc||[]).push([[5397],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2118:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:5},i="Brooks' Law",s={unversionedId:"research-laws/brooks-law",id:"research-laws/brooks-law",title:"Brooks' Law",description:"Murphy's Law is a popular adage that is often stated as:",source:"@site/docs/research-laws/brooks-law.md",sourceDirName:"research-laws",slug:"/research-laws/brooks-law",permalink:"/docs/research-laws/brooks-law",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/research-laws/brooks-law.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"researchSidebar",previous:{title:"Murphy's Law",permalink:"/docs/research-laws/murphys-law"},next:{title:"Hofstadter\u2019s Law",permalink:"/docs/research-laws/hofstadters-law"}},c={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"brooks-law"},"Brooks' Law"),(0,n.kt)("p",null,"Murphy's Law is a popular adage that is often stated as:\n",(0,n.kt)("strong",{parentName:"p"},"Brooks' Law")),(0,n.kt)("p",null,'Brooks\' Law is a well-known adage in software engineering and project management, formulated by Frederick P. Brooks Jr. in his influential book "The Mythical Man-Month: Essays on Software Engineering," first published in 1975. Brooks was a computer scientist and software engineer who managed the development of the IBM System/360 operating system.'),(0,n.kt)("p",null,"Brooks' Law states:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'"Adding manpower to a late software project makes it later."')),(0,n.kt)("p",null,"In other words, if a software project is behind schedule or running late, adding more developers or team members to the project is unlikely to speed up its completion. Instead, it can potentially have the opposite effect and further delay the project. This counterintuitive phenomenon occurs because of the following reasons:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Training and Onboarding:")," New team members need time to get up to speed with the project, its codebase, and the existing team's practices. During this onboarding period, existing team members may need to divert their attention from their work to assist the newcomers, which can temporarily slow down progress.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Communication Overhead:")," As the team size increases, so does the need for communication and coordination. More people means more meetings, discussions, and information sharing, which can increase overhead and reduce overall productivity.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Diminished Productivity:")," In complex software projects, there may be a limit to how many people can effectively work on a specific task or piece of code. Adding more people to a task that is already in progress might not result in a linear increase in productivity. In fact, it can lead to confusion, code conflicts, and inefficiencies."))),(0,n.kt)("p",null,"Brooks' Law highlights the importance of careful project planning, managing workloads, and avoiding the temptation to throw additional resources at a project in a panic when it is falling behind schedule. It emphasizes that software development is not just about the number of people working on a project but also about the organization, communication, and collaboration within the team. Effective project management and coordination are key to successful software development, especially in large and complex projects."),(0,n.kt)("h1",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Brooks%27s_law"},"https://en.wikipedia.org/wiki/Brooks%27s_law"))))}u.isMDXComponent=!0}}]);
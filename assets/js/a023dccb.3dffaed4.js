"use strict";(self.webpackChunksrc=self.webpackChunksrc||[]).push([[5397],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=o,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2118:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:5},i="Brooks' Law",s={unversionedId:"research-laws/brooks-law",id:"research-laws/brooks-law",title:"Brooks' Law",description:"Murphy's Law is a popular adage that is often stated as:",source:"@site/docs/research-laws/brooks-law.md",sourceDirName:"research-laws",slug:"/research-laws/brooks-law",permalink:"/docs/research-laws/brooks-law",draft:!1,editUrl:"https://github.com/claygorman/the-reflective-engineer/tree/main/docs/research-laws/brooks-law.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"researchSidebar",previous:{title:"Murphy's Law",permalink:"/docs/research-laws/murphys-law"},next:{title:"Hofstadter\u2019s Law",permalink:"/docs/research-laws/hofstadters-law"}},l={},c=[],p={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"brooks-law"},"Brooks' Law"),(0,o.kt)("p",null,"Murphy's Law is a popular adage that is often stated as:\n",(0,o.kt)("strong",{parentName:"p"},"Brooks' Law")),(0,o.kt)("p",null,'Brooks\' Law is a well-known adage in software engineering and project management, formulated by Frederick P. Brooks Jr. in his influential book "The Mythical Man-Month: Essays on Software Engineering," first published in 1975. Brooks was a computer scientist and software engineer who managed the development of the IBM System/360 operating system.'),(0,o.kt)("p",null,"Brooks' Law states:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"Adding manpower to a late software project makes it later."')),(0,o.kt)("p",null,"In other words, if a software project is behind schedule or running late, adding more developers or team members to the project is unlikely to speed up its completion. Instead, it can potentially have the opposite effect and further delay the project. This counterintuitive phenomenon occurs because of the following reasons:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Training and Onboarding:")," New team members need time to get up to speed with the project, its codebase, and the existing team's practices. During this onboarding period, existing team members may need to divert their attention from their work to assist the newcomers, which can temporarily slow down progress.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Communication Overhead:")," As the team size increases, so does the need for communication and coordination. More people means more meetings, discussions, and information sharing, which can increase overhead and reduce overall productivity.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Diminished Productivity:")," In complex software projects, there may be a limit to how many people can effectively work on a specific task or piece of code. Adding more people to a task that is already in progress might not result in a linear increase in productivity. In fact, it can lead to confusion, code conflicts, and inefficiencies."))),(0,o.kt)("p",null,"Brooks' Law highlights the importance of careful project planning, managing workloads, and avoiding the temptation to throw additional resources at a project in a panic when it is falling behind schedule. It emphasizes that software development is not just about the number of people working on a project but also about the organization, communication, and collaboration within the team. Effective project management and coordination are key to successful software development, especially in large and complex projects."),(0,o.kt)("h1",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Brooks%27s_law"},"https://en.wikipedia.org/wiki/Brooks%27s_law"))))}m.isMDXComponent=!0}}]);
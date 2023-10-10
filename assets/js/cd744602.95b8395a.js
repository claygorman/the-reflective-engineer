"use strict";(self.webpackChunksrc=self.webpackChunksrc||[]).push([[3463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},o="Sunk Cost Fallacy",s={unversionedId:"fallacies/sunk-cost-fallacy",id:"fallacies/sunk-cost-fallacy",title:"Sunk Cost Fallacy",description:"The sunk cost fallacy is a cognitive bias that occurs when individuals continue to invest time, money, or resources into a decision or project based on the notion that they have already invested so much that they cannot abandon it, even when it's clear that further investment is not justified. In other words, people often let their past investments (sunk costs) influence their decisions about the future, rather than making rational choices based on current and future factors.",source:"@site/docs/fallacies/sunk-cost-fallacy.md",sourceDirName:"fallacies",slug:"/fallacies/sunk-cost-fallacy",permalink:"/docs/fallacies/sunk-cost-fallacy",draft:!1,editUrl:"https://github.com/claygorman/the-reflective-engineer/tree/main/docs/fallacies/sunk-cost-fallacy.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"researchSidebar",previous:{title:"Nirvana Fallacy",permalink:"/docs/fallacies/nirvana-fallacy"},next:{title:"Biases",permalink:"/docs/category/biases"}},l={},c=[],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sunk-cost-fallacy"},"Sunk Cost Fallacy"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"sunk cost fallacy")," is a cognitive bias that occurs when individuals continue to invest time, money, or resources into a decision or project based on the notion that they have already invested so much that they cannot abandon it, even when it's clear that further investment is not justified. In other words, people often let their past investments (sunk costs) influence their decisions about the future, rather than making rational choices based on current and future factors."),(0,r.kt)("p",null,"Key characteristics of the sunk cost fallacy include:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Emotional Attachment:")," People may become emotionally attached to a project or decision they have already invested in, leading them to persist with it even when it no longer makes sense from a practical or economic standpoint.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Fear of Loss:")," Individuals may fear that by abandoning the project or decision, they will lose not only the resources already invested but also the potential benefits they hoped to gain, even if those benefits are increasingly unlikely.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Rationalization:")," Those affected by the sunk cost fallacy often rationalize their continued investment by focusing on the past effort and costs incurred rather than objectively assessing the current situation and the likely future outcomes."))),(0,r.kt)("p",null,"In the context of software engineering, the sunk cost fallacy can manifest in several ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Project Development:")," Teams may continue to work on a software project that has encountered significant problems or scope changes because they've already invested a substantial amount of time and resources, even when it may be more efficient to start anew or pursue alternative solutions.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Bug Fixing:")," Developers may spend excessive time attempting to fix software defects that have proven to be particularly challenging, simply because they've invested significant effort into finding a solution, even when it might be more cost-effective to explore other options or workarounds.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Outdated Technologies:")," Organizations may continue to use outdated or inefficient technologies in their software stack because they've invested heavily in them in the past, rather than adopting more modern and effective alternatives."))),(0,r.kt)("p",null,"To avoid falling into the sunk cost fallacy trap, it's important to make decisions based on current and future factors rather than past investments:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Objective Assessment:")," Regularly assess the current status of a project or decision, considering its feasibility, benefits, and drawbacks without being swayed by past investments.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Cost-Benefit Analysis:")," Evaluate whether further investment is justified by conducting a cost-benefit analysis. Determine if the potential future benefits outweigh the additional costs and efforts required.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Flexibility:")," Be willing to adapt and make tough decisions, including the possibility of abandoning a project or changing course, if it is in the best interest of the organization or the project's success.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Learn from Mistakes:")," Recognize that sunk costs are unavoidable in many situations and that learning from past mistakes is more valuable than continuing to invest in a failing endeavor."))),(0,r.kt)("p",null,"By overcoming the sunk cost fallacy and making rational, future-oriented decisions, individuals and organizations can avoid unnecessary losses and make more effective use of their resources in software development and other areas."),(0,r.kt)("h1",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TBD")))}f.isMDXComponent=!0}}]);
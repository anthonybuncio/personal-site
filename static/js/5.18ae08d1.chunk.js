(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[5],{167:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(6),o=n(19),i=n(0),c=function(e){var t=e.data;return Object(i.jsx)("article",{className:"degree-container",children:Object(i.jsxs)("header",{children:[Object(i.jsx)("h4",{className:"degree",children:t.degree}),Object(i.jsxs)("p",{className:"school",children:[Object(i.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},s=function(e){var t=e.data;return Object(i.jsxs)("div",{className:"education",children:[Object(i.jsx)("div",{className:"link-to",id:"education"}),Object(i.jsx)("div",{className:"title",children:Object(i.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(i.jsx)(c,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(e){var t=e.data;return Object(i.jsxs)("article",{className:"jobs-container",children:[Object(i.jsxs)("header",{children:[Object(i.jsxs)("h4",{children:[Object(i.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(i.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(i.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(i.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return Object(i.jsxs)("div",{className:"experience",children:[Object(i.jsx)("div",{className:"link-to",id:"experience"}),Object(i.jsx)("div",{className:"title",children:Object(i.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(i.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var p=d;function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=n(22);function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function h(e,t){if(t&&("object"===y(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var a=f(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h(this,n)}}var j=n(57),v=n(55),O=function(e){var t=e.handleClick,n=e.active,r=e.label;return Object(i.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},w=function(e){var t=e.data,n=e.categories,r=t.category,a=t.competency,o=t.title,c={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},s=Object(v.a)(Object(v.a)({},c),{},{width:"".concat(String(Math.min(100,Math.max(a/5*100,0))),"%")});return Object(i.jsxs)("div",{className:"skillbar clearfix",children:[Object(i.jsx)("div",{className:"skillbar-title",style:c,children:Object(i.jsx)("span",{children:o})}),Object(i.jsx)("div",{className:"skillbar-bar",style:s}),Object(i.jsxs)("div",{className:"skill-bar-percent",children:[a," / 5"]})]})};w.defaultProps={categories:[]};var x=w,k=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Object(m.a)(e,t)}(o,e);var t,n,r,a=g(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=a.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return Object(v.a)(Object(v.a)({},n),{},Object(j.a)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(v.a)(Object(v.a)({},e),{},Object(j.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=o,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(i.jsx)(x,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(i.jsx)(O,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"skills",children:[Object(i.jsx)("div",{className:"link-to",id:"skills"}),Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h3",{children:"Skills"}),Object(i.jsx)("p",{children:"Here is a *mostly* honest overview of my skills."})]}),Object(i.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(i.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&b(t.prototype,n),r&&b(t,r),Object.defineProperty(t,"prototype",{writable:!1}),o}(r.Component);k.defaultProps={skills:[],categories:[]};var D=k,S=function(){return Object(i.jsxs)("div",{className:"references",children:[Object(i.jsx)("div",{className:"link-to",id:"references"}),Object(i.jsx)("div",{className:"title",children:Object(i.jsx)(a.b,{to:"/contact",children:Object(i.jsx)("h3",{children:"References are available upon request"})})})]})},P=[{school:"Houston Community College",degree:"A.S. Computer Science",link:"https://www.hccs.edu/",year:2020},{school:"The Iron Yard Houston",degree:"Front End Engineering",link:"https://www.coursereport.com/schools/the-iron-yard",year:2017}],N=[{company:"Autolotto, Inc.",position:"Software Engineer (Data & Analytics)",link:"http://lottery.com",daterange:"April 2022 - Present",points:["Led integration and implementation efforts and provided architectural direction for cross-platform metrics and reporting, and logging systems.","Managed the complete software development lifecycle for real-time engineering dashboards and business KPI dashboards.","Enforced analytics and logging best practices and standards.","Integrate with and manage integrations into Google Analytics and other BI tools."]},{company:"Eybl Digital",position:"Founder",link:"http://eybldigital.com",daterange:"February 2022 - Present",points:["Identified issues with existing website, conducted market research, developed concepts for new site, and gained approval to create or completely redesign clients web presence.","Designed, developed, and maintained clients\u2019 website, including content updates, debugging, and feature enhancements.","Performed unit testing to ensure optimal browser interpretation and functionality."]},{company:"CocoLoco LLC",position:"Web Developer / Graphic Designer",link:"https://cocolococolorado.com",daterange:"February 2021 - May 2022",points:["Improved and maintained the existing website as well as increased traffic to the site.","Design and marketing materials development; enhancing our brand presence (flyers, web banners, infographics, pricing line-sheets, etc.)","Prepared illustrations and proofs of brand labels, based on clients' desired color scheme and preference.","Scheduled monthly updates and maintenence to keep client site up-to-date"]},{company:"Simply Hemp Wellness",position:"Web Developer, Retail & Social Media Manager",link:"https://simplyhempwellness.com",daterange:"January 2019 - January 2021",points:["Implement and maintain content management systems, primarily WordPress; including installation, configuration, and troubleshooting.","Manage technical integration with third-party services.","Provide networking/desktop support and resolve technical issues of software and surveillance systems.","Maintained strong social media presence across Twitter, Facebook, and Instagram platforms.","Built upon current client strategies within difficult CBD ad marketing space to meet and exceed expectations.","Provide quarterly campaign performance reporting and analysis to clients."]},{company:"BHG Real Estate",position:"Consultant",link:"https://www.bhgre.com/",daterange:"December 2018 - March 2019",points:["Develop and optimize real estate website utilizing HTML, CSS, Python, Javascript, Django and Postgres to meet the clients' needs and goals.","Ability for client to add/remove/edit listing information through their own admin dashboard, allowing for full control of all content.","Diagnose, troubleshoot and resolve issues with the website and/or server.","Meet with the client to review website, and gather the client\u2019s specifications for new or existing features."]},{company:"IDAD Inc.",position:"Manager / Lead Supervisor",link:"",daterange:"June 2018 - December 2018",points:["Improved efficiency of inventory, labor and point-of-sale management using Oracle Micros POS.","Training and developing productive staff while maintaining solid relationships with other management.","Delegating responsibilities and overseeing employee work to ensure compliance with company policies, regulations and safety guidelines.","Prepare a variety of administrative/operations reports and records."]}],C=n(16);var L=n(23);var W,E=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:3,category:["Web Development","Javascript"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:3,category:["Web Development","Tools"]},{title:"Heroku",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL",competency:3,category:["Web Development","Databases","Languages"]},{title:"Redis",competency:3,category:["Web Development","Databases"]},{title:"Express.JS",competency:4,category:["Web Development","Javascript"]},{title:"D3",competency:2,category:["Web Development","Javascript"]},{title:"Git",competency:3,category:["Tools"]},{title:"Google Cloud Compute",competency:2,category:["Tools","Web Development"]},{title:"Tensorflow",competency:3,category:["Data Science"]},{title:"Typescript",competency:3,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:2,category:["Languages"]},{title:"C++",competency:1,category:["Languages"]},{title:"Data Visualization",competency:2,category:["Data Science","Javascript"]},{title:"GraphQL",competency:3,category:["Web Development","Databases"]}].map((function(e){return Object(v.a)(Object(v.a)({},e),{},{category:e.category.sort()})})),A=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],R=(W=new Set(E.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(C.a)(e)}(W)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(W)||Object(L.a)(W)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:A[t]}})),J=["Education","Experience","Skills","References"];t.default=function(){return Object(i.jsx)(o.a,{title:"Resume",description:"Anthony Buncio's Resume.",children:Object(i.jsxs)("article",{className:"post",id:"resume",children:[Object(i.jsx)("header",{children:Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h2",{"data-testid":"heading",children:Object(i.jsx)(a.b,{to:"resume",children:"Resume"})}),Object(i.jsx)("div",{className:"link-container",children:J.map((function(e){return Object(i.jsx)("h4",{children:Object(i.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(i.jsx)(l,{data:P}),Object(i.jsx)(p,{data:N}),Object(i.jsx)(D,{skills:E,categories:R}),Object(i.jsx)(S,{})]})})}},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(57);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},57:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=5.18ae08d1.chunk.js.map
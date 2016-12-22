webpackJsonp([1,0],[function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=i(34),a=n(s),r=i(18),o=n(r);new a.default({el:"#app",template:"<App/>",components:{App:o.default}})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"Christo Oosthuizen",jobTitle:"Front-End Developer",livedIn:"London, UK",summary:"Experienced Front-end Developer with a demonstrated history of working in the marketing and advertising industry. Skilled in Web and SPA development using Javascript, HTML, SASS, REST API's, ReactJS, VueJS etc. Strong engineering professional with a Bachelor of Science (B.Sc.) Hons. focused in Computer Software Engineering from the University of Greenwich. Currently looking to strenghten his Javascript skills and further his career toward a Fullstack Developer with the latest JS syntax, tools and frameworks."},n=[{workAt:"Vibrant Media",position:"Creative Developer",duration:"Nov, 2015 – Current",description:"Working for an international Ad tech company as a Front-End Developer within an Agile team of software engineers, designers, campaign managers and other stakeholders.",highlights:["Design and build bespoke cross-browser, responsive CPC and CPE products that fits specific creative requirements and functionality using vanilla JavaScript, HTML5 and CSS3","Using the latest JS frameworks to build internal tools to optimize team workflow while maintaining internal API's and adding new functionality when needed. Integrate bespoke and custom ad units with 3rd party social media API's.","Attend client meetings to advise on the scope and functionality of current products and discuss custom solutions to meet the advertisers KPI's before designing and building bespoke HTML banners, home page takeovers, websites or microsites ","Create bespoke solutions to integrate with other technology partners (DoubleClick, Sizemek, Celtra, Criteo)","Advise and train other departments on new ad tech products and frameworks while supporting international teams in Germany and USA"]},{workAt:"School Website - Sitewrights ",position:"Front-End Developer",duration:"Apr, 2015 – Nov, 2015",description:"Design & Build bespoke websites for top independant schools in The UK and abroad",highlights:["Web designs with Adobe Photoshop based on client requirements and branding guidelines.","Converting PSD designs to responsive HTML5 CSS3 sites.","Building HTML5 CSS3 JavaScript AJAX pages using jQuery and css frameworks.","Integrating static website builds with a custom .NET CMS."]},{workAt:"Freelance Web Developer",position:"Web Developer",duration:"Apr, 2012 – Apr, 2015",description:"Various freelance projects for agencies, magazines and professionals.",highlights:["Management of the complete web development project lifecycle. Design, build maintenance and upgrades","SEO, Google Analytics and AdWords campaigns and website optimization","Wordpress site integration","Branding, business cards, flyers, landing pages, email templates, design mock-ups etc."]}],s=[{educatedAt:"University of Greenwich",title:"BSc (Hons) 2:1 - Software Engineering",duration:"2011 – 2013",description:"Object Orientated Software Development, E-commerce and Web Engineering, Database Design and Implementation, IT Project Management, Distributed Information Systems, Project (Video Streaming App and Build Spec)",highlights:["A broad degree focusing on every aspect of the software developmwnt lifecycle"]},{educatedAt:"BCS Diploma",title:"Software Engineering",duration:"2010 – 2011",description:"Software Engineering, Database Systems, Project Management, Project (International Banking Application)"},{educatedAt:"BCS Certificate",title:"Information Systems",duration:"2008 – 2009",description:"Database Design and Implementation, Information Systems Engineering"}],a=[{title:"Mosaic Product Upgrade - Vibrant Media",meta:"Creative Developer",description:'Responsibilities included: Rebuild legacy "Mosaic" product to enable communication with their new ad-server and CRM. I am involved within the design, build, QA and documentation of this product and templatising for faster campaign setup',images:[{thumbnail:"http://demos.vibrantmedia.com/demos/vibrantdemos/UKCreative/DemoGallery/demos/images/HPMosaic2_Thumb.jpg",original:"https://placehold.it/900x900"},{thumbnail:"https://vuejs.org/images/logo.png",original:"https://placehold.it/900x900"},{thumbnail:"https://vuejs.org/images/logo.png",original:"https://placehold.it/900x900"}]},{title:"Launch In-View Product - Vibrant Media",meta:"Creative Developer",description:'Responsibilities included: Design, build and documentation for a template to be used by campaign maagement for the launch of the new "In-View" product. Continuous upgrades to add additional functionality ie video tracking, billing methods, rich media etc. ',images:[{thumbnail:"https://vuejs.org/images/logo.png",original:"https://placehold.it/900x900"},{thumbnail:"https://vuejs.org/images/logo.png",original:"https://placehold.it/900x900"},{thumbnail:"https://vuejs.org/images/logo.png",original:"https://placehold.it/900x900"}]}],r={linkedin:"coosthuizen85",github:"co851002",website:"https://co851002.github.io",behance:"co851002",twitter:"co8510022"},o=[{name:"Javascript"},{name:"HTML5"},{name:"CSS3"},{name:"SASS"},{name:"React.js"},{name:"Vue.js"},{name:"Redux"},{name:"ES6"},{name:"Babel"},{name:"Webpack"},{name:"Redux"},{name:"Git"}];t.default={introduce:i,experiences:n,educations:s,projects:a,skills:o,footerData:r}},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(23),a=n(s),r=i(21),o=n(r),c=i(20),l=n(c),d=i(24),u=n(d),p=i(25),f=n(p),h=i(19),m=n(h),v=i(22),g=n(v),b=i(1),w=n(b);t.default={name:"app",components:{Introduce:a.default,Experiences:o.default,Education:l.default,Projects:u.default,Skills:f.default,Contact:m.default,FooterSection:g.default},data:function(){return{resume:w.default}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{questions:[{value:"1",text:"개인 질문"},{value:"2",text:"업무 문의"},{value:"3",text:"홈페이지 문의"}]}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["educations"]}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["experiences"]}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["data"],computed:{linkedinLink:function(){return"https://linkedin.com/"+this.data.linkedin},githubLink:function(){return"https://github.com/"+this.data.github},websiteLink:function(){return""+this.data.website},behanceLink:function(){return"https://behance.net/"+this.data.behance},twitterLink:function(){return"https://twitter.com/"+this.data.twitter}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["introduce"]}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["projects"]}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["skills"]}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,i){var n,s;i(14),n=i(2);var a=i(30);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,e.exports=n},function(e,t,i){var n,s;i(13),n=i(3);var a=i(29);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,s._scopeId="data-v-5b90f276",e.exports=n},function(e,t,i){var n,s;i(17),n=i(4);var a=i(33);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,e.exports=n},function(e,t,i){var n,s;i(10),n=i(5);var a=i(26);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,s._scopeId="data-v-35a62bee",e.exports=n},function(e,t,i){var n,s;i(11),n=i(6);var a=i(27);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,s._scopeId="data-v-36f2ecaf",e.exports=n},function(e,t,i){var n,s;i(12),n=i(7);var a=i(28);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,s._scopeId="data-v-58818504",e.exports=n},function(e,t,i){var n,s;i(15),n=i(8);var a=i(31);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,s._scopeId="data-v-643a3fa5",e.exports=n},function(e,t,i){var n,s;i(16),n=i(9);var a=i(32);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,s._scopeId="data-v-7803cc2d",e.exports=n},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("section",{staticClass:"section"},[t("h2",{staticClass:"section-header"},[e._v("Work experience")]),e._l(e.experiences,function(i){return t("div",{staticClass:"list-item"},[t("h3",{staticClass:"list-header"},[e._v(e._s(i.workAt))]),t("p",{staticClass:"list-meta"},[e._v(e._s(i.position)+" | "+e._s(i.duration))]),t("p",{staticClass:"list-description"},[e._v(e._s(i.description))]),t("ul",{staticClass:"list-highlight"},e._l(i.highlights,function(i){return t("li",[e._v(e._s(i))])}))])})],!0)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("footer",[t("hr"),t("div",{staticClass:"row"},[t("div",{staticClass:"twelve columns"},[t("ul",{staticClass:"inline-list"},[t("li",{directives:[{name:"show",rawName:"v-show",value:e.data.linkedin,expression:"data.linkedin"}],staticClass:"social-link"},[t("a",{attrs:{href:e.data.linkedin,target:"_blank"}},[t("i",{staticClass:"fa fa-linkedin",attrs:{"aria-hidden":"true"}}),e._v(" LinkedIn")])]),t("li",{directives:[{name:"show",rawName:"v-show",value:e.data.github,expression:"data.github"}],staticClass:"social-link"},[t("a",{attrs:{href:e.githubLink,target:"_blank"}},[t("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}}),e._v(" Github")])]),t("li",{directives:[{name:"show",rawName:"v-show",value:e.data.website,expression:"data.website"}],staticClass:"social-link"},[t("a",{attrs:{href:e.websiteLink,target:"_blank"}},[t("i",{staticClass:"fa fa-paper-plane",attrs:{"aria-hidden":"true"}}),e._v(" Website")])]),t("li",{directives:[{name:"show",rawName:"v-show",value:e.data.behance,expression:"data.behance"}],staticClass:"social-link"},[t("a",{attrs:{href:e.behanceLink,target:"_blank"}},[t("i",{staticClass:"fa fa-behance",attrs:{"aria-hidden":"true"}}),e._v(" Behance")])]),t("li",{directives:[{name:"show",rawName:"v-show",value:e.data.twitter,expression:"data.twitter"}],staticClass:"social-link"},[t("a",{attrs:{href:e.twitterLink,target:"_blank"}},[t("i",{staticClass:"fa fa-twitter",attrs:{"aria-hidden":"true"}}),e._v(" Twitter")])])])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("section",{staticClass:"section header",attrs:{id:"introduce"}},[t("h1",{staticClass:"u-text-center welcome-message"},[e._v("Hello! I am "),t("strong",[e._v(e._s(e.introduce.name))]),e._v(" ")]),t("p",{directives:[{name:"show",rawName:"v-show",value:e.introduce.jobTitle,expression:"introduce.jobTitle"}],staticClass:"label"},[e._v(e._s(e.introduce.jobTitle))]),t("p",{directives:[{name:"show",rawName:"v-show",value:e.introduce.livedIn,expression:"introduce.livedIn"}],staticClass:"detail"},[e._v(e._s(e.introduce.livedIn))]),t("p",{directives:[{name:"show",rawName:"v-show",value:e.introduce.summary,expression:"introduce.summary"}],staticClass:"detail"},[e._v(e._s(e.introduce.summary))])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("section",{staticClass:"section summary"},[e._v("연락하기"),t("form",[t("div",{staticClass:"row"},[e._m(0),t("div",{staticClass:"six columns"},[t("label",[e._v("종류")]),t("select",{staticClass:"u-full-width"},e._l(e.questions,function(i){return t("option",{domProps:{value:i.value}},[e._v(e._s(i.text))])}))])]),e._m(1),e._m(2)])])},staticRenderFns:[function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"six columns"},[t("label",[e._v("이메일")]),t("input",{staticClass:"u-full-width",attrs:{type:"text"}})])},function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"row"},[t("div",{staticClass:"twelve columns"},[t("label",[e._v("메시지")]),t("textarea",{staticClass:"u-full-width"}),t("label")])])},function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"row"},[t("div",{staticClass:"twelve columns u-text-center"},[t("input",{staticClass:"button-primary",attrs:{type:"submit",value:"보내기"}})])])}]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"container",attrs:{id:"app"}},[t("Introduce",{attrs:{introduce:e.resume.introduce}}),t("Experiences",{attrs:{experiences:e.resume.experiences}}),t("Education",{attrs:{educations:e.resume.educations}}),t("Projects",{attrs:{projects:e.resume.projects}}),t("Skills",{attrs:{skills:e.resume.skills}}),t("FooterSection",{attrs:{data:e.resume.footerData}})])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("section",{directives:[{name:"show",rawName:"v-show",value:e.projects,expression:"projects"}],staticClass:"section"},[t("h2",{staticClass:"section-header"},[e._v("Projects")]),e._l(e.projects,function(i){return t("div",{staticClass:"list-item"},[t("h3",{staticClass:"list-header"},[e._v(e._s(i.title))]),t("p",{staticClass:"list-meta"},[e._v(e._s(i.meta))]),t("p",{staticClass:"list-description"},[e._v(e._s(i.description))]),t("div",{staticClass:"row"},e._l(i.images,function(e){return t("div",{staticClass:"four columns"},[t("a",{staticClass:"item",attrs:{href:e.original}},[t("img",{staticClass:"u-full-width",attrs:{src:e.thumbnail}})])])}))])})],!0)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("section",{staticClass:"section"},[t("h2",{staticClass:"section-header"},[e._v("Skills")]),t("ul",{staticClass:"inline-list"},e._l(e.skills,function(i){return t("li",{staticClass:"skill-item"},[e._v(e._s(i.name))])}))])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("section",{directives:[{name:"show",rawName:"v-show",value:e.educations,expression:"educations"}],staticClass:"section"},[t("h2",{staticClass:"section-header"},[e._v("EDUCATION")]),e._l(e.educations,function(i){return t("div",{staticClass:"list-item"},[t("h3",{staticClass:"list-header"},[e._v(e._s(i.educatedAt))]),t("p",{staticClass:"list-meta"},[e._v(e._s(i.title)+" | "+e._s(i.duration))]),t("p",{staticClass:"list-description"},[e._v(e._s(i.description))]),t("ul",{staticClass:"list-highlight"},e._l(i.highlights,function(i){return t("li",[e._v(e._s(i))])}))])})],!0)},staticRenderFns:[]}}]);
//# sourceMappingURL=app.0e4e369633fbee79683d.js.map
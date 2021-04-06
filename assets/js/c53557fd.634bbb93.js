(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),i=(n(0),n(115)),c=n(118),r={id:"submit",title:"Submit"},l={unversionedId:"submit",id:"submit",isDocsHomePage:!1,title:"Submit",description:"cpbooster provides the following command to automatically",source:"@site/docs/submit.mdx",slug:"/submit",permalink:"/cpbooster/docs/submit",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/submit.mdx",version:"current",sidebar:"docs",previous:{title:"Debug",permalink:"/cpbooster/docs/debug"},next:{title:"Add Test Case",permalink:"/cpbooster/docs/add-test-case"}},b=[{value:"Requirements",id:"requirements",children:[]},{value:"Login",id:"login",children:[]},{value:"How To Specify The URL",id:"how-to-specify-the-url",children:[{value:"1. As A Command Argument",id:"1-as-a-command-argument",children:[]},{value:"2. As A Commented Line In The Source File",id:"2-as-a-commented-line-in-the-source-file",children:[]}]},{value:"How To Configure Language Aliases",id:"how-to-configure-language-aliases",children:[{value:"How To Find Language IDs",id:"how-to-find-language-ids",children:[]}]},{value:"Supported Online Judges",id:"supported-online-judges",children:[]}],s={toc:b};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"cpbooster")," provides the following command to automatically\n",Object(i.b)("strong",{parentName:"p"},"submit")," your code to any supported Online Judge. See ",Object(i.b)("a",{parentName:"p",href:"#supported-online-judges"},"Supported Online Judges"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-txt"},"cpb submit <filePath> [url]\n")),Object(i.b)("p",null,"or its alias which is just ",Object(i.b)("inlineCode",{parentName:"p"},"s"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-txt"},"cpb s <filePath> [url]\n")),Object(i.b)("h4",{id:"demo"},"Demo"),Object(i.b)("div",{className:"text--center"},Object(i.b)("img",{alt:"test",src:Object(c.a)("/img/demos/submit.gif")})),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#login"},"Login")," with ",Object(i.b)("inlineCode",{parentName:"li"},"cpb login <OnlineJudgeName>")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#how-to-specify-the-url"},"Specify URL")," in file or as argument."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#how-to-configure-language-aliases"},"Configure Language Aliases")," for each platform and language.")),Object(i.b)("h2",{id:"login"},"Login"),Object(i.b)("p",null,"Before you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"submit")," command you will need to login\nto the Online Judge where you will submit your code."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-txt"},"cpb login <OnlineJudgeName>\n")),Object(i.b)("p",null,"For example, to login to AtCoder I would execute the following command"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-txt"},"cpb login atcoder\n")),Object(i.b)("p",null,"The name can be written in upper or lowercase or mixed, it doesn't matter."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"submit")," command will automatically open the login page\nif it detects that you are not logged in, then it will continue\nto submit your code. So, the ",Object(i.b)("inlineCode",{parentName:"p"},"submit")," command will execute at most 2\nactions."))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"information")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"cpbooster")," will NOT send any account information\nto anyone else, all it does is, save your cookies\nand session information like any browser does locally (in\n",Object(i.b)("inlineCode",{parentName:"p"},"$HOME/.cpbooster/cpbooster-session.json"),")."))),Object(i.b)("h2",{id:"how-to-specify-the-url"},"How To Specify The URL"),Object(i.b)("p",null,"You can provide the ",Object(i.b)("inlineCode",{parentName:"p"},"url")," in ",Object(i.b)("strong",{parentName:"p"},"2")," different ways:"),Object(i.b)("h3",{id:"1-as-a-command-argument"},"1. As A Command Argument"),Object(i.b)("p",null,"You can specify the ",Object(i.b)("inlineCode",{parentName:"p"},"url")," after the ",Object(i.b)("inlineCode",{parentName:"p"},"<filePath>")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"submit")," command."),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-txt"},'cpb s A.DistanceAndAxis.cpp "https://codeforces.com/contest/1401/problem/A"\n')),Object(i.b)("h3",{id:"2-as-a-commented-line-in-the-source-file"},"2. As A Commented Line In The Source File"),Object(i.b)("p",null,"Another way to specify the ",Object(i.b)("inlineCode",{parentName:"p"},"url")," is by writing the string ",Object(i.b)("inlineCode",{parentName:"p"},"problem-url:")," followed by\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"url")," as a commented line somewhere in your source file. In this way\nyou will be able to submit your code without adding extra argument in the\ncommand, just like in the ",Object(i.b)("a",{parentName:"p",href:"#demo"},"demo"),"."),Object(i.b)("p",null,"For example:"),Object(i.b)("h5",{id:"adistanceandaxiscpp"},Object(i.b)("inlineCode",{parentName:"h5"},"A.DistanceAndAxis.cpp")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"// problem-url: https://codeforces.com/contest/1401/problem/A\nint main() {\n  ...\n}\n")),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This line will be automatically added when you clone a contest with ",Object(i.b)("inlineCode",{parentName:"p"},"cpb clone"),".\nSo, no need to do anything manually during a contest."))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If you specify the url in both ways (argument and commented line), the one\nspecified as argument will be used."))),Object(i.b)("h2",{id:"how-to-configure-language-aliases"},"How To Configure Language Aliases"),Object(i.b)("p",null,"The language alias is the ",Object(i.b)("strong",{parentName:"p"},"ID")," of the language for each Online Judge.\nSee ",Object(i.b)("a",{parentName:"p",href:"#how-to-find-language-ids"},"How To Find Language IDs"),". For example, in Codeforces,\nthe alias for ",Object(i.b)("inlineCode",{parentName:"p"},"cpp")," can be any of:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"ID"),Object(i.b)("th",{parentName:"tr",align:null},"Name"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"42"),Object(i.b)("td",{parentName:"tr",align:null},"GNU G++11 5.1.0")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"50"),Object(i.b)("td",{parentName:"tr",align:null},"GNU G++14 6.4.0")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"54"),Object(i.b)("td",{parentName:"tr",align:null},"GNU G++17 7.3.0")))),Object(i.b)("p",null,"Let's say we want to submit our ",Object(i.b)("inlineCode",{parentName:"p"},"cpp")," file using G++17, then\nwe should specify it\nin ",Object(i.b)("a",{href:"/docs/configuration#languageslangaliases-objectonlinejudgename-string",style:{color:"white"}},Object(i.b)("inlineCode",{parentName:"p"},"languages.cpp.aliases.codeforces")),"\nlike this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "languages": {\n    "cpp": {\n      "aliases": {\n        "codeforces": "54"\n      }\n    }\n}\n')),Object(i.b)("h3",{id:"how-to-find-language-ids"},"How To Find Language IDs"),Object(i.b)("p",null,"To find language IDs follow the next steps:"),Object(i.b)("h4",{id:"1-navigate-to-the-online-judge-page-where-the-language-dropdown-is-located"},"1. Navigate to the online judge page where the language dropdown is located"),Object(i.b)("p",null,"Some online judges use group of radio buttons or some other type of selectors for languages,\nlike Uva Online Judge."),Object(i.b)("p",null,"For example, in Codeforces and AtCoder you could go to any problem's page like:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://atcoder.jp/contests/abc196/tasks/abc196_a"},"https://atcoder.jp/contests/abc196/tasks/abc196_a"),Object(i.b)("div",{className:"text--center"},Object(i.b)("img",{alt:"test",src:Object(c.a)("/img/atcoder_dropdown.png")}))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://codeforces.com/contest/1401/problem/A"},"https://codeforces.com/contest/1401/problem/A"),Object(i.b)("div",{className:"text--center"},Object(i.b)("img",{alt:"test",src:Object(c.a)("/img/codeforces_dropdown.png")})))),Object(i.b)("h4",{id:"2-open-the-inspection-tool"},"2. Open the inspection tool"),Object(i.b)("p",null,"Usually to open the inspection tool, you can ",Object(i.b)("inlineCode",{parentName:"p"},"right click")," in the page,\nand then click on ",Object(i.b)("inlineCode",{parentName:"p"},"Inspect"),"."),Object(i.b)("div",{className:"text--center"},Object(i.b)("img",{alt:"test",src:Object(c.a)("/img/inspect_right_click.png")})),Object(i.b)("br",null),Object(i.b)("div",{className:"text--center"},Object(i.b)("img",{alt:"test",src:Object(c.a)("/img/inspect_tool.png")})),Object(i.b)("h4",{id:"3-locate-the-select-tag"},"3. Locate the ",Object(i.b)("inlineCode",{parentName:"h4"},"<select>")," tag"),Object(i.b)("p",null,"Also, note that we could also be looking for radio buttons,\nfor example: Uva Online Judge uses Radio Buttons instead of a dropdown menu."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Press ",Object(i.b)("inlineCode",{parentName:"p"},"ctrl+f")," to open the search box, and type ",Object(i.b)("inlineCode",{parentName:"p"},"<select"),". This will help you\nto find the tag faster"))),Object(i.b)("div",{className:"text--center"},Object(i.b)("img",{alt:"test",src:Object(c.a)("/img/search_select.png")})),Object(i.b)("h4",{id:"4-locate-the-value-of-the-language-you-wish-to-use"},"4. Locate the ",Object(i.b)("inlineCode",{parentName:"h4"},"value")," of the language you wish to use"),Object(i.b)("p",null,"For this, we will need to unfold the contents of the ",Object(i.b)("inlineCode",{parentName:"p"},"<select>")," tag to see\nthe options. This is done by clicking on the small arrow to the left."),Object(i.b)("div",{className:"text--center"},Object(i.b)("img",{alt:"test",src:Object(c.a)("/img/select_options.png")})),Object(i.b)("p",null,"The content of the ",Object(i.b)("inlineCode",{parentName:"p"},"value")," property of each option is what ",Object(i.b)("inlineCode",{parentName:"p"},"cpbooster")," uses as ",Object(i.b)("strong",{parentName:"p"},"Alias"),".\nSo, now you can just copy and paste the value into your configuration file."),Object(i.b)("p",null,"For example, if you want to use ",Object(i.b)("inlineCode",{parentName:"p"},"C++ (Clang 10.0.0)")," for ",Object(i.b)("inlineCode",{parentName:"p"},"cpp")," files in AtCoder, you could write\nyour configuration file as follows."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "languages": {\n    "cpp": {\n      "aliases": {\n        "atcoder": "4004"\n      }\n    }\n  }\n}\n')),Object(i.b)("h2",{id:"supported-online-judges"},"Supported Online Judges"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://codeforces.com/"},"Codeforces")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://atcoder.jp/"},"AtCoder"))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If you wish to add support for another Online Judge you can\ncreate a Pull Request in ",Object(i.b)("inlineCode",{parentName:"p"},"cpbooster"),"'s github repository.\nSee ",Object(i.b)("a",{parentName:"p",href:"/docs/add-online-judge-support"},"Add Online Judge Support")," for guidance on how to do it."))))}p.isMDXComponent=!0},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?o.a.createElement(u,r(r({ref:t},b),{},{components:n})):o.a.createElement(u,r({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var b=2;b<i;b++)c[b]=n[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},118:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var a=n(16),o=n(121);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,c=i.forcePrependBaseUrl,r=void 0!==c&&c,l=i.absolute,b=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(r)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return b?e+s:s}(i,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},121:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))}}]);
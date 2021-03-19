(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,u=b["".concat(i,".").concat(m)]||b[m]||d[m]||r;return n?o.a.createElement(u,c(c({ref:t},s),{},{components:n})):o.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(111)),i={id:"Configuration",title:"Configuration"},c={unversionedId:"Configuration",id:"Configuration",isDocsHomePage:!1,title:"Configuration",description:"Creating Your First Configuration File",source:"@site/docs/Configuration.md",slug:"/Configuration",permalink:"/cpbooster/docs/Configuration",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Configuration.md",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/cpbooster/docs/Installation"},next:{title:"Clone Contest",permalink:"/cpbooster/docs/Clone"}},l=[{value:"Creating Your First Configuration File",id:"creating-your-first-configuration-file",children:[]},{value:"Configuration File Example",id:"configuration-file-example",children:[]},{value:"Fields Description",id:"fields-description",children:[{value:"<code>contestsDirectory: string</code>",id:"contestsdirectory-string",children:[]},{value:"<code>port: number</code>",id:"port-number",children:[]},{value:"<code>editor: string</code>",id:"editor-string",children:[]},{value:"<code>closeAfterClone: boolean</code>",id:"closeafterclone-boolean",children:[]},{value:"<code>showStatusPageOnSubmit: boolean</code>",id:"showstatuspageonsubmit-boolean",children:[]},{value:"<code>preferredLang: string</code>",id:"preferredlang-string",children:[]},{value:"<code>languages.&lt;lang&gt;.template: string</code>",id:"languageslangtemplate-string",children:[]},{value:"<code>languages.&lt;lang&gt;.command: string</code>",id:"languageslangcommand-string",children:[]},{value:"<code>languages.&lt;lang&gt;.debugCommand: string</code>",id:"languageslangdebugcommand-string",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"creating-your-first-configuration-file"},"Creating Your First Configuration File"),Object(r.b)("p",null,"Execute the following command to create a configuration file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"cpbooster init\n")),Object(r.b)("p",null,"This command will create a file called ",Object(r.b)("inlineCode",{parentName:"p"},"cpbooster-config.json")," in your ",Object(r.b)("strong",{parentName:"p"},"$HOME")," directory with default values.\nIf you wish to create your configuration file somewhere else you can specify the path using ",Object(r.b)("inlineCode",{parentName:"p"},"--configPath")," flag."),Object(r.b)("h2",{id:"configuration-file-example"},"Configuration File Example"),Object(r.b)("h4",{id:"cpbooster-configjson"},Object(r.b)("inlineCode",{parentName:"h4"},"cpbooster-config.json")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "contestsDirectory": "/home/user/Contests",\n  "port": 1327,\n  "editor": "konsole",\n  "closeAfterClone": false,\n  "showStatusPageOnSubmit": false,\n  "preferredLang": "cpp",\n  "languages": {\n    "cpp": {\n      "template": "template.cpp",\n      "command": "g++ -std=gnu++17 -O2",\n      "debugCommand": "g++ -std=gnu++17 -DDEBUG -Wshadow -Wall",\n      "aliases": {\n        "codeforces": "54",\n        "atcoder": "4003"\n      }\n    },\n    "py": {\n      "template": "template.py",\n      "command": "python3",\n      "debugCommand": "python3 -O",\n      "aliases": {\n        "codeforces": "31",\n        "atcoder": "4006"\n      }\n    }\n  }\n}\n')),Object(r.b)("h2",{id:"fields-description"},"Fields Description"),Object(r.b)("h3",{id:"contestsdirectory-string"},Object(r.b)("inlineCode",{parentName:"h3"},"contestsDirectory: string")),Object(r.b)("p",null,"The path to the directory where contests folders will be created when you run ",Object(r.b)("inlineCode",{parentName:"p"},"cpb clone"),"."),Object(r.b)("p",null,"The directory of a user that has cloned 3 contests would look like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-txt"},"$ cd path/to/contests/directory\n$ tree -L 1\n.\n\u251c\u2500\u2500 AtCoder-AtCoderBeginnerContest194\n\u251c\u2500\u2500 AtCoder-AtCoderRegularContest113\n\u2514\u2500\u2500 Codeforces-CodeforcesRound665Div.2\n")),Object(r.b)("h3",{id:"port-number"},Object(r.b)("inlineCode",{parentName:"h3"},"port: number")),Object(r.b)("p",null,"Specifies the ",Object(r.b)("strong",{parentName:"p"},"port")," where ",Object(r.b)("a",{parentName:"p",href:"https://github.com/jmerle/competitive-companion"},"competitive companion extension")," will send problem's data.\n",Object(r.b)("strong",{parentName:"p"},"1327")," is the default port for ",Object(r.b)("inlineCode",{parentName:"p"},"cpbooster")," in competitive companion so, if you don't change\nthe port, it will just work as expected. If you must change it, then be sure that you also\nchange it in competitive companion extension settings."),Object(r.b)("h3",{id:"editor-string"},Object(r.b)("inlineCode",{parentName:"h3"},"editor: string")),Object(r.b)("p",null,"Name of the ",Object(r.b)("strong",{parentName:"p"},"editor")," that will be opened after running ",Object(r.b)("inlineCode",{parentName:"p"},"cpb clone"),".\nThe ",Object(r.b)("strong",{parentName:"p"},"editor")," value should match with the terminal command you use to launch it. See ",Object(r.b)("a",{parentName:"p",href:"#editor-requirements"},"Editor Requirements")),Object(r.b)("h4",{id:"editor-requirements"},"Editor Requirements"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"You must be able to open your ",Object(r.b)("strong",{parentName:"li"},"editor")," using a terminal command."),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("strong",{parentName:"li"},"editor command")," should support the following format to open a directory:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ editor [directory]\n")),Object(r.b)("p",null,'If your editor does not support this format but has another way to open a directory, you could take a look at\n"',Object(r.b)("a",{parentName:"p",href:"/docs/add-editor-support"},"How to add an editor"),'"'),Object(r.b)("h4",{id:"examples"},"Examples"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Using ",Object(r.b)("strong",{parentName:"li"},"regular editor")," ( ",Object(r.b)("em",{parentName:"li"},"VSCode")," ):")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "editor": "code"\n}\n')),Object(r.b)("p",null,"since ",Object(r.b)("inlineCode",{parentName:"p"},"code")," is the command that is used to execute ",Object(r.b)("em",{parentName:"p"},"vscode")," from the terminal."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Using ",Object(r.b)("strong",{parentName:"li"},"terminal emulator")," ( ",Object(r.b)("em",{parentName:"li"},"konsole")," ):")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "editor": "konsole"\n}\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Terminal Emulator")," support is currently limited to this ",Object(r.b)("a",{parentName:"p",href:"#list-of-supported-terminals"},"List of supported terminals"),'.\nVisit the section "',Object(r.b)("a",{parentName:"p",href:"/docs/add-editor-support"},"How to add an editor"),'" if you wish to contribute and add support\nfor other terminal emulators.'))),Object(r.b)("h4",{id:"list-of-supported-terminals"},"List of supported terminals"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"konsole"')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"xterm"')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"gnome-terminal"')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"deepin-terminal"')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"kitty"')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"terminal"')," (MacOS)")),Object(r.b)("h3",{id:"closeafterclone-boolean"},Object(r.b)("inlineCode",{parentName:"h3"},"closeAfterClone: boolean")),Object(r.b)("p",null,"Whether to close the terminal where you executed ",Object(r.b)("inlineCode",{parentName:"p"},"cpb clone")," or not."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"When using this option as ",Object(r.b)("inlineCode",{parentName:"p"},"true")," verify that your ",Object(r.b)("a",{parentName:"p",href:"#editor-string"},Object(r.b)("strong",{parentName:"a"},"editor"))," satisfies the ",Object(r.b)("a",{parentName:"p",href:"#editor-requirements"},"Editor Requirements"),", otherwise,\nyou might end up with your terminal closed and no editor opened."))),Object(r.b)("h3",{id:"showstatuspageonsubmit-boolean"},Object(r.b)("inlineCode",{parentName:"h3"},"showStatusPageOnSubmit: boolean")),Object(r.b)("p",null,"Whether to open a browser window in the submission status page or not, after running ",Object(r.b)("inlineCode",{parentName:"p"},"cpb submit")),Object(r.b)("h3",{id:"preferredlang-string"},Object(r.b)("inlineCode",{parentName:"h3"},"preferredLang: string")),Object(r.b)("p",null,"The extension name in lowercase of your preferred language. ( i.e. ",Object(r.b)("inlineCode",{parentName:"p"},'"cpp"'),", ",Object(r.b)("inlineCode",{parentName:"p"},'"py"'),", ",Object(r.b)("inlineCode",{parentName:"p"},'"java"'),", ... ),\n",Object(r.b)("inlineCode",{parentName:"p"},"cpb clone")," uses this value to create corresponding source files with the template of your\npreferred language."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Currently the only supported languages are ",Object(r.b)("strong",{parentName:"p"},"C++")," and ",Object(r.b)("strong",{parentName:"p"},"Python"),', If you wish to contribute and add support\nfor other languages visit the section "',Object(r.b)("a",{parentName:"p",href:"/docs/add-language-support"},"How to add a language"),'".'))),Object(r.b)("h3",{id:"languageslangtemplate-string"},Object(r.b)("inlineCode",{parentName:"h3"},"languages.<lang>.template: string")),Object(r.b)("p",null,"Path to your competitive programming template for the corresponding ",Object(r.b)("inlineCode",{parentName:"p"},"<lang>"),"."),Object(r.b)("p",null,"Examples of competitive programming templates:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://gitlab.com/searleser97/competitive-programming-reference/-/blob/master/Reference/Coding%20Resources/C++/Competitive%20Programming%20Template.cpp"},"CompetitiveProgrammingTemplate.cpp")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://gitlab.com/searleser97/competitive-programming-reference/-/blob/master/Reference/Coding%20Resources/Python/Competitive%20Programming%20Template.py"},"CompetitiveProgrammingTemplate.py"))),Object(r.b)("h3",{id:"languageslangcommand-string"},Object(r.b)("inlineCode",{parentName:"h3"},"languages.<lang>.command: string")),Object(r.b)("p",null,"Command used to ",Object(r.b)("strong",{parentName:"p"},"compile")," (C++, Java, ...) or ",Object(r.b)("strong",{parentName:"p"},"run")," (Python, Ruby) your program."),Object(r.b)("p",null,"For example: If you use codeforces it is convenient that you use the same command they use for each language"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "languages": {\n    "cpp": {\n      "command": "g++ -std=gnu++17 -O2"\n    },\n    "py": {\n      "command": "python3"\n    }\n  }\n}\n')),Object(r.b)("h3",{id:"languageslangdebugcommand-string"},Object(r.b)("inlineCode",{parentName:"h3"},"languages.<lang>.debugCommand: string")),Object(r.b)("p",null,"The command that will be used for debugging purposes"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "languages": {\n    "cpp": {\n      "command": "g++ -std=gnu++17 -O2",\n      "debugCommand": "g++ -std=gnu++17 -O3 -DDEBUG -Wshadow -Wall"\n    },\n    "py": {\n      "command": "python3",\n      "debugCommand": "python3 -O"\n    }\n  }\n}\n')))}p.isMDXComponent=!0}}]);
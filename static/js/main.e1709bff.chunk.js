(this["webpackJsonpcatalog-of-statistics"]=this["webpackJsonpcatalog-of-statistics"]||[]).push([[0],{16:function(e,a,t){e.exports={container:"KanjiList_container__1olkN",container__kanji:"KanjiList_container__kanji__2wGSj",container__kanji__title:"KanjiList_container__kanji__title__2dcI-"}},17:function(e,a,t){e.exports={nav:"NavBar_nav__5ccHC",ico:"NavBar_ico__ig5Je",logo:"NavBar_logo__1C_7i",logo__kanji:"NavBar_logo__kanji__38Nex"}},18:function(e,a,t){e.exports={container:"NothingFound_container__1KICo",image:"NothingFound_image__1r0Yx",title:"NothingFound_title__2pfZr",subtitle:"NothingFound_subtitle__HrSOq"}},29:function(e,a,t){e.exports={nav__search:"SearchBar_nav__search__2J6Je",ico:"SearchBar_ico__3aD3f"}},3:function(e,a,t){e.exports={detail:"KanjiDetail_detail__1NABD",video:"KanjiDetail_video__dpfbn",poster:"KanjiDetail_poster__31USn",header:"KanjiDetail_header__1XlOi",top:"KanjiDetail_top___2WLx",block:"KanjiDetail_block__hytvX",meaning:"KanjiDetail_meaning__rX_Q0",examples:"KanjiDetail_examples__2xy_X",readings:"KanjiDetail_readings__1J9os",yomi:"KanjiDetail_yomi__D2sKw",stroke_title:"KanjiDetail_stroke_title__27mY2",strokes:"KanjiDetail_strokes__3_r9R",stroke:"KanjiDetail_stroke__3NX8W",example:"KanjiDetail_example__TrTQQ",audio:"KanjiDetail_audio__3dpCe",references:"KanjiDetail_references__2K_uO",chapter:"KanjiDetail_chapter__3vULw"}},34:function(e,a,t){e.exports={App:"App_App__2qY2r"}},36:function(e,a,t){e.exports={spinner:"Loader_spinner__4R-gg",spCircRot:"Loader_spCircRot__3rvh4"}},37:function(e,a,t){e.exports=t(51)},46:function(e,a,t){},47:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"FETCH_SUBSCRIPTION_BEGIN",(function(){return d})),t.d(n,"FETCH_SUBSCRIPTION_SUCCESS",(function(){return h})),t.d(n,"FETCH_SUBSCRIPTION_FAILURE",(function(){return f})),t.d(n,"GROUP_BY_GRADE",(function(){return _})),t.d(n,"GROUP_BY_MACQUARIE",(function(){return b})),t.d(n,"GROUP_BY_AP",(function(){return g})),t.d(n,"TOGGLE_SORT",(function(){return k})),t.d(n,"FILTER_BY",(function(){return E})),t.d(n,"toggleSort",(function(){return j})),t.d(n,"filterBy",(function(){return v})),t.d(n,"groupByGrade",(function(){return y})),t.d(n,"groupByMacquarie",(function(){return O})),t.d(n,"groupByAP",(function(){return N})),t.d(n,"fetchSubscription",(function(){return w})),t.d(n,"fetchSubscriptionBegin",(function(){return x})),t.d(n,"fetchSubscriptionSuccess",(function(){return C})),t.d(n,"fetchSubscriptionFailure",(function(){return S}));var r=t(0),c=t.n(r),i=t(19),o=t.n(i),l=t(11),s=t(5),u=t(4),p=t(33),m=t(2),d="FETCH_SUBSCRIPTION_BEGIN",h="FETCH_SUBSCRIPTION_SUCCESS",f="FETCH_SUBSCRIPTION_FAILURE",_="GROUP_BY_GRADE",b="GROUP_BY_MACQUARIE",g="GROUP_BY_AP",k="TOGGLE_SORT",E="FILTER_BY",j=function(e){return{type:k,sortDirection:e}},v=function(e){return{type:E,strokeNumber:e}},y=function(){return{type:_}},O=function(){return{type:b}},N=function(){return{type:g}},x=function(e){return{type:d,subscriptionId:e}},C=function(e){return{type:h,payload:e}},S=function(e){return{type:f,payload:e}};function B(e){if(!e.ok)throw Error(JSON.stringify(e));return e}function w(e,a){return function(t){t(x(e,a)),setTimeout((function(){return fetch(e,a).then(B).then((function(e){return e.json()})).then((function(e){t(C(e))})).catch((function(e){t(S("".concat(e)))}))}),1e3)}}var K={loading:!1,error:null,subscription:null},R={groupBy:[1,2,3,4,5,6],filter:null,sorting:1},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case d:return Object(m.a)({},e,{loading:!0,subscription:null});case h:return Object(m.a)({},e,{subscription:a.payload,loading:!1});case f:return Object(m.a)({},e,{error:a.payload,loading:!1});default:return e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case k:return Object(m.a)({},e,{sorting:a.sortDirection});case E:return Object(m.a)({},e,{filter:a.strokeNumber});case _:return Object(m.a)({},e,{groupBy:[1,2,3,4,5,6]});case b:return Object(m.a)({},e,{groupBy:[12,13,14,15,16,17,18,19,20,21,22]});case g:return Object(m.a)({},e,{groupBy:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]});default:return e}},I=Object(u.c)({state:D,group:T}),A=Object(u.d)(I,Object(u.a)(p.a)),G=(t(46),t(13)),F=t(34),P=t.n(F),U=t(12),q=(t(47),{6:["Grade level Kanji","App__header App__header--6","grade="],11:["Macquarie study list","App__header App__header--11","list=mac:c"],20:["AP exam list","App__header App__header--20","list=ap:c"]}),L=function(e,a,t){e.stopPropagation(),t(a)},H=function(e,a){a(e)},Y=function(e,a,t){a.push("/kanjis/".concat(e),t)},J=function(e,a,t,n){var r=a.includes("grade")?"grade":a.includes("ap")?"ap-chapter":"chapter";t.push("/".concat(r,"/").concat(e),n)},M=function(e,a,t){var n="https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?".concat(t).concat(a);e.fetchSubscription(n,{method:"GET",headers:{"x-rapidapi-host":"kanjialive-api.p.rapidapi.com","x-rapidapi-key":"c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f"}})},Q=function(e,a,t,n){t(parseInt(a.value,10),n),e.preventDefault()},W=function(e,a){var t=e<0?"down":"up-alt";return"fas fa-sort-amount-".concat(t,a===e?" fas-on":" fas-off")};var X=Object(s.b)((function(e){var a=e.state,t=e.group;return{state:Object(m.a)({},a,{},t)}}),null)(Object(G.f)((function(e){var a=e.grade,t=e.actions,n=e.history,r=e.state,i=e.group,o=e.classType,l=function(e,a,t){13===e.keyCode&&a.apply(void 0,Object(U.a)(t))},s="card ".concat(o);return c.a.createElement("article",{onKeyDown:function(e){return l(e,M,[t,a,i])},onClick:function(){return M(t,a,i)},className:s},c.a.createElement("h2",{className:"card__title"},c.a.createElement("span",{className:"card__title__top-left--round"},a),c.a.createElement("span",{className:"card__title__top-left"},c.a.createElement("i",{className:"far fa-arrow-alt-circle-right",onClick:function(){return J(a,i,n,r)},role:"button",tabIndex:-1,"aria-label":"Sort down",onKeyDown:function(e){return l(e,J,[a,i,n,r])}})),c.a.createElement("span",{className:"card__title__bottom-left"},c.a.createElement("button",{className:"card__btn",type:"button",onClick:function(){return J(a,i,n,r)}},c.a.createElement("span",null,i.includes("list")?"Chapter ":"Grade ",a)),c.a.createElement("span",null,"Kanji"))))}))),V=(t(49),function(e){var a=e.actions,t=e.state,n=t.groupBy;return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:q[n.length][1]},c.a.createElement("h1",null,q[n.length][0]),c.a.createElement("label",{className:"App__header__label",htmlFor:"select-group"},"Group kanji by:"),c.a.createElement("select",{id:"select-group",className:"App__header__select",onChange:function(e){return function(e,a){var t=e.target.value;"grade"===(t=t.toLowerCase())?a.groupByGrade():"macquarie"===t?a.groupByMacquarie():"ap exam"===t&&a.groupByAP()}(e,a)}},c.a.createElement("option",{selected:6===n.length,name:"grade"},"Grade"),c.a.createElement("option",{selected:11===n.length,name:"macquarie"},"Macquarie"),c.a.createElement("option",{selected:20===n.length,name:"ap"},"AP exam"))),c.a.createElement("div",{className:"group group--r-2"},t.groupBy.map((function(a,t){var n=(t+1)%4<=1?"card--light":"";return c.a.createElement(X,{key:a,group:q[e.state.groupBy.length][2],classType:n,actions:e.actions,grade:a})}))))}),Z=t(21),$=t(22),z=t(8),ee=t(24),ae=t(23),te=t(17),ne=t.n(te),re=t(29),ce=t.n(re),ie=function(e){Object(ee.a)(t,e);var a=Object(ae.a)(t);function t(e){var n;Object(Z.a)(this,t);var r=(n=a.call(this,e)).props,i=r.text,o=r.makeRequest;return n.inputRef=c.a.createRef(),n.state={text:i},n.makeRequest=o,n.handleKeyDown=n.handleKeyDown.bind(Object(z.a)(n)),n.handleClick=n.handleClick.bind(Object(z.a)(n)),n.handleChange=n.handleChange.bind(Object(z.a)(n)),n}return Object($.a)(t,[{key:"componentDidMount",value:function(){this.makeRequest()}},{key:"handleKeyDown",value:function(e){13===e.keyCode&&this.makeRequest(e)}},{key:"handleClick",value:function(){this.makeRequest({target:{value:this.inputRef.current.value}})}},{key:"handleChange",value:function(e){this.setState({text:e.target.value})}},{key:"handleSearch",value:function(e){13===e.keyCode&&this.handleClick()}},{key:"render",value:function(){var e="fas fa-search  ".concat(ce.a.ico),a=this.state,t=this.inputRef,n=this.handleClick,r=this.handleChange,i=this.handleKeyDown,o=this.handleSearch;return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{ref:t,value:a.text,onKeyDown:function(e){return i(e)},onChange:r,tabIndex:0,className:ce.a.nav__search,type:"text",placeholder:"Search...",required:!0}),c.a.createElement("i",{onClick:n,className:e,role:"button",tabIndex:-1,"aria-label":"Search",onKeyDown:function(e){return o(e)}}))}}]),t}(r.Component);var oe=Object(s.b)((function(e){var a=e.state,t=e.group;return{state:Object(m.a)({},a,{},t)}}),(function(e){return{actions:Object(u.b)(Object.assign({},n),e)}}))(Object(G.f)(ie)),le=function(e){Object(ee.a)(t,e);var a=Object(ae.a)(t);function t(e){var n;return Object(Z.a)(this,t),(n=a.call(this,e)).props=e,n.state={text:""},n.makeRequest=n.makeRequest.bind(Object(z.a)(n)),n.goBack=n.goBack.bind(Object(z.a)(n)),n.clickHandler=n.clickHandler.bind(Object(z.a)(n)),n.handleKeyDown=n.handleKeyDown.bind(Object(z.a)(n)),n.updateText=n.updateText.bind(Object(z.a)(n)),n}return Object($.a)(t,[{key:"makeRequest",value:function(e){var a="".concat(e?"/search/"+e.target.value:this.props.location.pathname),t=e?e.target.value:this.props.location.pathname.split("/").reverse()[0];if(t!==this.state.text&&this.props.history.push(a,this.props.state),a.includes("search")){this.setState({text:t});var n="https://kanjialive-api.p.rapidapi.com/api/public/search/".concat(t);this.props.actions.fetchSubscription(n,{method:"GET",headers:{"x-rapidapi-host":"kanjialive-api.p.rapidapi.com","x-rapidapi-key":"c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f"}})}else if(a.includes("grade")||a.includes("chapter")){var r;this.setState({text:""}),a.includes("grade")?r="grade=":a.includes("ap-chapter")?r="list=ap:c":a.includes("chapter")&&(r="list=mac:c");var c="https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?".concat(r).concat(this.props.location.pathname.split("/").reverse()[0]);this.props.actions.fetchSubscription(c,{method:"GET",headers:{"x-rapidapi-host":"kanjialive-api.p.rapidapi.com","x-rapidapi-key":"c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f"}})}}},{key:"goBack",value:function(){var e=this;this.props.location.pathname.includes("grade")||this.props.location.pathname.includes("chapter")?this.props.history.push("/",this.props.state):(this.props.history.goBack(),setTimeout((function(){e.setState({text:e.props.location.pathname.split("/").reverse()[0]})}),500))}},{key:"clickHandler",value:function(){this.goBack()}},{key:"handleKeyDown",value:function(e){9===e.keyCode&&this.props.history.goBack()}},{key:"updateText",value:function(){this.setState({text:"ball"})}},{key:"render",value:function(){var e=this,a="fas fa-chevron-left ".concat(ne.a.ico);return c.a.createElement("nav",{className:ne.a.nav},c.a.createElement(l.b,{to:"/",className:ne.a.logo},c.a.createElement("span",{className:ne.a.logo__kanji},"\u9752"),"KANJI"),"/"!==this.props.location.pathname&&c.a.createElement("i",{role:"button",tabIndex:-1,"aria-label":"Back to last page",onClick:this.clickHandler,onKeyDown:function(a){return e.handleKeyDown(a)},className:a}),c.a.createElement(oe,{key:this.state.text,updateText:this.updateText,state:this.state,text:this.state.text,makeRequest:this.makeRequest}))}}]),t}(r.Component);var se=Object(s.b)((function(e){var a=e.state,t=e.group;return{state:Object(m.a)({},a,{},t)}}),(function(e){return{actions:Object(u.b)(Object.assign({},n),e)}}))(Object(G.f)(le)),ue=t(16),pe=t.n(ue),me=t(18),de=t.n(me),he=function(){return c.a.createElement("div",{className:de.a.container},c.a.createElement("img",{className:de.a.image,src:"https://upload.wikimedia.org/wikipedia/commons/f/fb/Wu_%28negative%29.svg",alt:'mu kanji, meaning "nothing"'}),c.a.createElement("p",{className:de.a.title},c.a.createElement("strong",null,"\u7121 "),c.a.createElement("em",null,"(mu) "),"means 'nothing'"),c.a.createElement("p",{className:de.a.subtitle},"That's what was found..."))},fe=function(e){var a=e.state,t=e.clickHandler,n=e.filter,i=e.sorting,o=e.history,l=e.loadVisible;Object(r.useEffect)((function(){l()}),[a]);var s=a.subscription;s&&i<0&&(s=Object(U.a)(s).reverse());var u=function(e){return e?function(a){return a.kanji.stroke===e}:function(e){return e}}(n),p="".concat(pe.a.container__kanji," + out_of_view");return c.a.createElement(c.a.Fragment,null,a.subscription&&a.subscription.length&&s.length>0?s.filter(u).map((function(e,n,r){return n===r.length-1&&l(),c.a.createElement("article",{onClick:function(){return t(e.kanji.character,o,a)},onKeyDown:function(n){return function(e,n){13===e.keyCode&&t(n.kanji.character,o,a)}(n,e)},className:p,key:e.kanji.character},c.a.createElement("h2",{className:pe.a.container__kanji__title},e.kanji.character),c.a.createElement("p",null,c.a.createElement("strong",null,"radical:"),e.radical.character))})):c.a.createElement(he,null))},_e=(t(50),function(e){var a=e.sorting,t=e.updateFilter,n=e.filterCallback,i=e.toggleSorting,o=e.toggleCallback,l=e.loadVisible,s=Object(r.useRef)(null),u=function(e,a){e.apply(void 0,Object(U.a)(a)),setTimeout((function(){l()}),300)},p=function(e,a,t){e.keyCode===a&&u(i,[e,t,o])};return c.a.createElement("header",{className:"filter-sort-bar"},c.a.createElement("div",null,c.a.createElement("i",{className:W(-1,a),onClick:function(e){return u(i,[e,-1,o])},role:"button",tabIndex:-1,"aria-label":"Sort down",onKeyDown:function(e){return p(e,40,-1)}}),c.a.createElement("i",{className:W(1,a),onClick:function(e){return u(i,[e,1,o])},role:"button",tabIndex:-1,"aria-label":"Sort up",onKeyDown:function(e){return p(e,38,1)}})),c.a.createElement("div",null,c.a.createElement("form",{className:"filter-sort-bar__form",onSubmit:function(e){return u(Q,[e,s.current,t,n])}},c.a.createElement("input",{ref:s,type:"number",placeholder:"stroke number",min:"1",max:"84"}),c.a.createElement("button",{type:"submit"},c.a.createElement("i",{className:"fas fa-filter"})))))}),be=t(36),ge=t.n(be),ke=function(){return c.a.createElement("div",{className:ge.a.spinner})};var Ee=Object(s.b)((function(e){var a=e.state,t=e.group;return{state:Object(m.a)({},a,{},t)}}),(function(e){return{actions:Object(u.b)(Object(m.a)({},n),e)}}))(Object(G.f)((function(e){var a=Object(r.useRef)(null);Object(r.useEffect)((function(){e.match.params.grade_num&&function(e){var a,t=e.actions,n=e.match,r=e.state,c=n.params;c.grade_num?a="https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?".concat(q[r.groupBy.length][2]).concat(c.grade_num):c.word&&(a="https://kanjialive-api.p.rapidapi.com/api/public/search/".concat(c.word));t.fetchSubscription(a,{method:"GET",headers:{"x-rapidapi-host":"kanjialive-api.p.rapidapi.com","x-rapidapi-key":"c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f"}})}(e)}),[]);var t=function(){Object(U.a)(a.current.children).map((function(e){return a.current.clientHeight+a.current.scrollTop<e.offsetTop?e.classList.add("out_of_view"):e.classList.remove("out_of_view"),null}))},n=e.state,i=e.actions,o=e.history,l=e.state;return c.a.createElement("section",{ref:a,key:n.subscription,className:pe.a.container,onScroll:t},c.a.createElement(_e,{loadVisible:t,filter:n.filter,sorting:n.sorting,filterCallback:i.filterBy,updateFilter:H,toggleCallback:i.toggleSort,toggleSorting:L}),n.loading?c.a.createElement(ke,null):c.a.createElement(fe,{loadVisible:t,filter:l.filter,sorting:l.sorting,state:l,history:o,clickHandler:Y}))}))),je=t(3),ve=t.n(je);var ye=Object(s.b)((function(e){var a=e.state,t=e.group;return{state:Object(m.a)({},a,{},t)}}),(function(e){return{actions:Object(u.b)(Object(m.a)({},n),e)}}))((function(e){var a=e.state,t=e.match;Object(r.useEffect)((function(){var a="https://kanjialive-api.p.rapidapi.com/api/public/kanji/".concat(t.params.kanji);e.actions.fetchSubscription(a,{method:"GET",headers:{"x-rapidapi-host":"kanjialive-api.p.rapidapi.com","x-rapidapi-key":"c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f"}})}),[]);return c.a.createElement("section",{className:ve.a.detail},a.subscription&&a.subscription.kanji?c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:ve.a.header},c.a.createElement("img",{className:ve.a.poster,src:a.subscription.kanji.video.poster,alt:"video poster"}),c.a.createElement("video",{className:ve.a.video,autoPlay:!0,loop:!0},c.a.createElement("track",{src:"",kind:"captions",srcLang:"en",label:"no_captions"}),c.a.createElement("source",{src:a.subscription.kanji.video.mp4,type:"video/mp4"}),c.a.createElement("source",{src:a.subscription.kanji.video.webm,type:"video/ogg"}),"Your browser does not support the video tag."),c.a.createElement("div",{className:ve.a.top},c.a.createElement("div",{className:ve.a.block},c.a.createElement("h3",null,"Strokes"),c.a.createElement("p",null,a.subscription.kanji.strokes.count)),c.a.createElement("div",{className:ve.a.block},c.a.createElement("h3",null,"Radical"),c.a.createElement("p",null,a.subscription.radical.character)),c.a.createElement("div",{className:ve.a.block},c.a.createElement("h3",null,"Kunyomi"),c.a.createElement("p",null,a.subscription.kanji.kunyomi.hiragana)),c.a.createElement("div",{className:ve.a.block},c.a.createElement("h3",null,"Onyomi"),c.a.createElement("p",null,a.subscription.kanji.onyomi.katakana)))),c.a.createElement("aside",{className:ve.a.meaning},c.a.createElement("h1",null,a.subscription.kanji.character),c.a.createElement("h2",null,c.a.createElement("span",{className:ve.a.readings},c.a.createElement("span",{className:ve.a.yomi},a.subscription.kanji.kunyomi.romaji)),c.a.createElement("span",{className:ve.a.readings},c.a.createElement("span",{className:ve.a.yomi},a.subscription.kanji.onyomi.romaji)),c.a.createElement("span",null,"\xb7"),c.a.createElement("span",null,a.subscription.kanji.meaning.english))),c.a.createElement("aside",null,c.a.createElement("h3",{className:ve.a.stroke_title},"Stroke order:"),c.a.createElement("div",{className:ve.a.strokes},a.subscription.kanji.strokes.images.map((function(e){return c.a.createElement("img",{className:ve.a.stroke,key:e,src:e,width:"60",alt:"kanji_stroke"})})))),c.a.createElement("article",{className:ve.a.examples},c.a.createElement("h3",null,"Examples"),c.a.createElement("ul",null,a.subscription.examples.map((function(e){return c.a.createElement("li",{key:e.japanese+e.english},c.a.createElement("p",{className:ve.a.example},c.a.createElement("strong",null,e.japanese)," \xb7 ",c.a.createElement("em",null,e.meaning.english)),c.a.createElement("audio",{className:ve.a.audio,controls:!0},c.a.createElement("track",{src:"",kind:"captions",srcLang:"en",label:"no_captions"}),c.a.createElement("source",{src:e.audio.mp3,type:"audio/mp3"}),c.a.createElement("source",{src:e.audio.aac,type:"audio/aac"}),c.a.createElement("source",{src:e.audio.ogg,type:"audio/ogg"})))})))),c.a.createElement("footer",{className:ve.a.references},c.a.createElement("h4",null,"References"),c.a.createElement("ul",null,c.a.createElement("li",null,"Grade:",c.a.createElement("strong",{className:ve.a.chapter},a.subscription.references.grade)),c.a.createElement("li",null,"Kodansha:",c.a.createElement("strong",{className:ve.a.chapter},a.subscription.references.kodansha)),c.a.createElement("li",null,"Classic Nelson:",c.a.createElement("strong",{className:ve.a.chapter},a.subscription.references.classic_nelson))))):c.a.createElement(ke,null))}));var Oe=Object(s.b)((function(e){var a=e.state,t=e.group;return{state:Object(m.a)({},a,{},t)}}),(function(e){return{actions:Object(u.b)(Object(m.a)({},n),e)}}))((function(e){var a=e.actions,t=e.state;return c.a.createElement("main",{className:P.a.App},c.a.createElement(se,null),c.a.createElement(G.c,null,c.a.createElement(G.a,{path:"/",render:function(){return c.a.createElement(V,{actions:a,state:t})},exact:!0}),c.a.createElement(G.a,{path:"/(grade|chapter|ap-chapter)/:grade_num",component:Ee,exact:!0}),c.a.createElement(G.a,{path:"/search/:word",component:Ee,exact:!0}),c.a.createElement(G.a,{path:"/kanjis/:kanji",component:ye,exact:!0})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(s.a,{store:A},c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,null,c.a.createElement(Oe,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.e1709bff.chunk.js.map
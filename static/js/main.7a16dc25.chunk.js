(this["webpackJsonpcatalog-of-statistics"]=this["webpackJsonpcatalog-of-statistics"]||[]).push([[0],{16:function(e,a,t){e.exports={container:"KanjiList_container__15C2h",container__kanji:"KanjiList_container__kanji__1n5AJ",container__kanji__title:"KanjiList_container__kanji__title__2QjMK"}},17:function(e,a,t){e.exports={nav:"NavBar_nav__3nQZi",ico:"NavBar_ico__3mYlJ",logo:"NavBar_logo__25Ii3",logo__kanji:"NavBar_logo__kanji__nwFxu"}},18:function(e,a,t){e.exports={container:"NothingFound_container__20CCg",image:"NothingFound_image__31-is",title:"NothingFound_title__2-9y2",subtitle:"NothingFound_subtitle__231fR"}},29:function(e,a,t){e.exports={nav__search:"SearchBar_nav__search__1Xttk",ico:"SearchBar_ico__1TidZ"}},3:function(e,a,t){e.exports={detail:"KanjiDetail_detail__2u-nV",video:"KanjiDetail_video__BlmLV",poster:"KanjiDetail_poster__2hjKa",header:"KanjiDetail_header__R-y2w",top:"KanjiDetail_top__2ftLX",block:"KanjiDetail_block__33Y95",meaning:"KanjiDetail_meaning__3xLaH",examples:"KanjiDetail_examples__3pkCy",readings:"KanjiDetail_readings__1XU-H",yomi:"KanjiDetail_yomi__19N3G",stroke_title:"KanjiDetail_stroke_title__2OPTM",strokes:"KanjiDetail_strokes__7pxm8",stroke:"KanjiDetail_stroke__3RP78",example:"KanjiDetail_example__1eXFk",audio:"KanjiDetail_audio__1WO1B",references:"KanjiDetail_references___lf4r",chapter:"KanjiDetail_chapter__3ZUUM"}},34:function(e,a,t){e.exports={App:"App_App__3j9yA"}},36:function(e,a,t){e.exports={spinner:"Loader_spinner__Vjx5N",spCircRot:"Loader_spCircRot__2HM5_"}},37:function(e,a,t){e.exports=t(51)},46:function(e,a,t){},47:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"FETCH_SUBSCRIPTION_BEGIN",(function(){return d})),t.d(n,"FETCH_SUBSCRIPTION_SUCCESS",(function(){return h})),t.d(n,"FETCH_SUBSCRIPTION_FAILURE",(function(){return f})),t.d(n,"GROUP_BY_GRADE",(function(){return _})),t.d(n,"GROUP_BY_MACQUARIE",(function(){return b})),t.d(n,"GROUP_BY_AP",(function(){return g})),t.d(n,"TOGGLE_SORT",(function(){return k})),t.d(n,"FILTER_BY",(function(){return E})),t.d(n,"toggleSort",(function(){return j})),t.d(n,"filterBy",(function(){return v})),t.d(n,"groupByGrade",(function(){return y})),t.d(n,"groupByMacquarie",(function(){return O})),t.d(n,"groupByAP",(function(){return N})),t.d(n,"fetchSubscription",(function(){return w})),t.d(n,"fetchSubscriptionBegin",(function(){return x})),t.d(n,"fetchSubscriptionSuccess",(function(){return C})),t.d(n,"fetchSubscriptionFailure",(function(){return S}));var r=t(0),c=t.n(r),i=t(19),o=t.n(i),l=t(11),s=t(5),u=t(4),p=t(33),m=t(2),d="FETCH_SUBSCRIPTION_BEGIN",h="FETCH_SUBSCRIPTION_SUCCESS",f="FETCH_SUBSCRIPTION_FAILURE",_="GROUP_BY_GRADE",b="GROUP_BY_MACQUARIE",g="GROUP_BY_AP",k="TOGGLE_SORT",E="FILTER_BY",j=function(e){return{type:k,sortDirection:e}},v=function(e){return{type:E,strokeNumber:e}},y=function(){return{type:_}},O=function(){return{type:b}},N=function(){return{type:g}},x=function(e){return{type:d,subscriptionId:e}},C=function(e){return{type:h,payload:e}},S=function(e){return{type:f,payload:e}};function B(e){if(!e.ok)throw Error(JSON.stringify(e));return e}function w(e,a){return function(t){t(x(e,a)),setTimeout((function(){return fetch(e,a).then(B).then((function(e){return e.json()})).then((function(e){t(C(e))})).catch((function(e){t(S("".concat(e)))}))}),1e3)}}var R={loading:!1,error:null,subscription:null},K={groupBy:[1,2,3,4,5,6],filter:null,sorting:1},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case d:return Object(m.a)({},e,{loading:!0,subscription:null});case h:return Object(m.a)({},e,{subscription:a.payload,loading:!1});case f:return Object(m.a)({},e,{error:a.payload,loading:!1});default:return e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case k:return Object(m.a)({},e,{sorting:a.sortDirection});case E:return Object(m.a)({},e,{filter:a.strokeNumber});case _:return Object(m.a)({},e,{groupBy:[1,2,3,4,5,6]});case b:return Object(m.a)({},e,{groupBy:[12,13,14,15,16,17,18,19,20,21,22]});case g:return Object(m.a)({},e,{groupBy:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]});default:return e}},I=Object(u.c)({state:D,group:T}),A=Object(u.d)(I,Object(u.a)(p.a)),G=(t(46),t(13)),F=t(34),P=t.n(F),U=t(12),L=(t(47),{6:["Grade level Kanji","App__header App__header--6","grade="],11:["Macquarie study list","App__header App__header--11","list=mac:c"],20:["AP exam list","App__header App__header--20","list=ap:c"]}),q=function(e,a,t){e.stopPropagation(),t(a)},H=function(e,a){a(e)},M=function(e,a,t){a.push("/kanjis/".concat(e),t)},Y=function(e){var a,t=e.actions,n=e.match,r=e.state,c=n.params;c.grade_num?a="https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?".concat(L[r.groupBy.length][2]).concat(c.grade_num):c.word&&(a="https://kanjialive-api.p.rapidapi.com/api/public/search/".concat(c.word));t.fetchSubscription(a,{method:"GET",headers:{"x-rapidapi-host":"kanjialive-api.p.rapidapi.com","x-rapidapi-key":"c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f"}})},V=function(e,a,t,n){var r=a.includes("grade")?"grade":a.includes("ap")?"ap-chapter":"chapter";t.push("/".concat(r,"/").concat(e),n)},J=function(e,a,t){var n="https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?".concat(t).concat(a);e.fetchSubscription(n,{method:"GET",headers:{"x-rapidapi-host":"kanjialive-api.p.rapidapi.com","x-rapidapi-key":"c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f"}})},Q=function(e,a,t,n){t(parseInt(a.value,10),n),e.preventDefault()},W=function(e,a){var t=e<0?"down":"up-alt";return"fas fa-sort-amount-".concat(t,a===e?" fas-on":" fas-off")};var X=Object(s.b)((function(e){var a=e.state,t=e.group;return{state:Object(m.a)({},a,{},t)}}),null)(Object(G.f)((function(e){var a=e.grade,t=e.actions,n=e.history,r=e.state,i=e.group,o=e.classType,l=function(e,a,t){13===e.keyCode&&a.apply(void 0,Object(U.a)(t))},s="card ".concat(o);return c.a.createElement("article",{onKeyDown:function(e){return l(e,J,[t,a,i])},onClick:function(){return J(t,a,i)},className:s},c.a.createElement("h2",{className:"card__title"},c.a.createElement("span",{className:"card__title__top-left--round"},a),c.a.createElement("span",{className:"card__title__top-left"},c.a.createElement("i",{className:"far fa-arrow-alt-circle-right",onClick:function(){return V(a,i,n,r)},role:"button",tabIndex:-1,"aria-label":"Sort down",onKeyDown:function(e){return l(e,V,[a,i,n,r])}})),c.a.createElement("span",{className:"card__title__bottom-left"},c.a.createElement("button",{className:"card__btn",type:"button",onClick:function(){return V(a,i,n,r)}},c.a.createElement("span",null,i.includes("list")?"Chapter ":"Grade ",a)),c.a.createElement("span",null,"Kanji"))))}))),Z=(t(49),function(e){var a=e.actions,t=e.state,n=t.groupBy;return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{"data-testid":"header",className:L[n.length][1]},c.a.createElement("h1",null,L[n.length][0]),c.a.createElement("label",{className:"App__header__label",htmlFor:"select-group"},"Group kanji by:"),c.a.createElement("select",{defaultValue:n.length,id:"select-group",className:"App__header__select",onChange:function(e){return function(e,a){var t=e.target.value;"grade"===(t=t.toLowerCase())?a.groupByGrade():"macquarie"===t?a.groupByMacquarie():"ap exam"===t&&a.groupByAP()}(e,a)}},c.a.createElement("option",{value:6===n.length?n.length:"grade",name:"grade"},"Grade"),c.a.createElement("option",{value:11===n.length?n.length:"macquarie",name:"macquarie"},"Macquarie"),c.a.createElement("option",{value:20===n.length?n.length:"ap exam",name:"ap"},"AP exam"))),c.a.createElement("div",{"data-testid":"group",className:"group group--r-2"},t.groupBy.map((function(a,t){var n=(t+1)%4<=1?"card--light":"";return c.a.createElement(X,{key:a,group:L[e.state.groupBy.length][2],classType:n,actions:e.actions,grade:a})}))))}),$=t(21),z=t(22),ee=t(8),ae=t(24),te=t(23),ne=t(17),re=t.n(ne),ce=t(29),ie=t.n(ce),oe=function(e){Object(ae.a)(t,e);var a=Object(te.a)(t);function t(e){var n;Object($.a)(this,t);var r=(n=a.call(this,e)).props,i=r.text,o=r.makeRequest;return n.inputRef=c.a.createRef(),n.state={text:i},n.makeRequest=o,n.handleKeyDown=n.handleKeyDown.bind(Object(ee.a)(n)),n.handleClick=n.handleClick.bind(Object(ee.a)(n)),n.handleChange=n.handleChange.bind(Object(ee.a)(n)),n}return Object(z.a)(t,[{key:"componentDidMount",value:function(){this.makeRequest()}},{key:"handleKeyDown",value:function(e){13===e.keyCode&&(this.makeRequest(e),this.setState({text:""}))}},{key:"handleClick",value:function(){this.makeRequest({target:{value:this.inputRef.current.value}}),this.setState({text:""})}},{key:"handleChange",value:function(e){this.setState({text:e.target.value})}},{key:"handleSearch",value:function(e){13===e.keyCode&&this.handleClick()}},{key:"render",value:function(){var e="fas fa-search  ".concat(ie.a.ico),a=this.state,t=this.inputRef,n=this.handleClick,r=this.handleChange,i=this.handleKeyDown,o=this.handleSearch;return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{"data-testid":"search-input",id:"search-bar",ref:t,value:a.text,onKeyDown:function(e){return i(e)},onChange:r,tabIndex:0,className:ie.a.nav__search,type:"text",placeholder:"Search...",required:!0}),c.a.createElement("i",{"data-testid":"search-ico",onClick:n,className:e,role:"button",tabIndex:-1,"aria-label":"Search",onKeyDown:function(e){return o(e)}}))}}]),t}(r.Component);var le=Object(s.b)((function(e){var a=e.state,t=e.group;return{state:Object(m.a)({},a,{},t)}}),(function(e){return{actions:Object(u.b)(Object.assign({},n),e)}}))(Object(G.f)(oe)),se=function(e){Object(ae.a)(t,e);var a=Object(te.a)(t);function t(e){var n;return Object($.a)(this,t),(n=a.call(this,e)).props=e,n.state={text:""},n.makeRequest=n.makeRequest.bind(Object(ee.a)(n)),n.goBack=n.goBack.bind(Object(ee.a)(n)),n.clickHandler=n.clickHandler.bind(Object(ee.a)(n)),n.handleKeyDown=n.handleKeyDown.bind(Object(ee.a)(n)),n.updateText=n.updateText.bind(Object(ee.a)(n)),n}return Object(z.a)(t,[{key:"makeRequest",value:function(e){var a=this.props,t=this.state,n="".concat(e?"/search/".concat(e.target.value):a.location.pathname),r=e?e.target.value:a.location.pathname.split("/").reverse()[0];if(r!==t.text&&a.history.push(n,a.state),n.includes("search")){this.setState({text:r});var c="https://kanjialive-api.p.rapidapi.com/api/public/search/".concat(r);a.actions.fetchSubscription(c,{method:"GET",headers:{"x-rapidapi-host":"kanjialive-api.p.rapidapi.com","x-rapidapi-key":"c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f"}})}else if(n.includes("grade")||n.includes("chapter")){var i;this.setState({text:""}),n.includes("grade")?i="grade=":n.includes("ap-chapter")?i="list=ap:c":n.includes("chapter")&&(i="list=mac:c");var o="https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?".concat(i).concat(a.location.pathname.split("/").reverse()[0]);a.actions.fetchSubscription(o,{method:"GET",headers:{"x-rapidapi-host":"kanjialive-api.p.rapidapi.com","x-rapidapi-key":"c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f"}})}}},{key:"goBack",value:function(){var e=this,a=this.props;a.location.pathname.includes("grade")||a.location.pathname.includes("chapter")?a.history.push("/ao-kanji/",a.state):(a.history.goBack(),setTimeout((function(){e.setState({text:a.location.pathname.split("/").reverse()[0]})}),500))}},{key:"clickHandler",value:function(){this.goBack()}},{key:"handleKeyDown",value:function(e){var a=this.props;9===e.keyCode&&a.history.goBack()}},{key:"updateText",value:function(){this.setState({text:""})}},{key:"render",value:function(){var e=this,a=this.props,t=this.state,n="fas fa-chevron-left ".concat(re.a.ico);return c.a.createElement("nav",{"data-testid":"navbar",className:re.a.nav},c.a.createElement(l.b,{to:"/ao-kanji/",className:re.a.logo},c.a.createElement("span",{className:re.a.logo__kanji},"\u9752"),"KANJI"),"/ao-kanji/"!==a.location.pathname&&c.a.createElement("i",{role:"button",tabIndex:-1,"aria-label":"Back to last page",onClick:this.clickHandler,onKeyDown:function(a){return e.handleKeyDown(a)},className:n}),c.a.createElement(le,{key:t.text,updateText:this.updateText,state:this.state,text:t.text,makeRequest:this.makeRequest}))}}]),t}(r.Component);var ue=Object(s.b)((function(e){var a=e.state,t=e.group;return{state:Object(m.a)({},a,{},t)}}),(function(e){return{actions:Object(u.b)(Object(m.a)({},n),e)}}))(Object(G.f)(se)),pe=t(16),me=t.n(pe),de=t(18),he=t.n(de),fe=function(){return c.a.createElement("div",{className:he.a.container},c.a.createElement("img",{className:he.a.image,src:"https://upload.wikimedia.org/wikipedia/commons/f/fb/Wu_%28negative%29.svg",alt:'mu kanji, meaning "nothing"'}),c.a.createElement("p",{className:he.a.title},c.a.createElement("strong",null,"\u7121 "),c.a.createElement("em",null,"(mu) "),"means 'nothing'"),c.a.createElement("p",{className:he.a.subtitle},"That's what was found..."))},_e=function(e){var a=e.state,t=e.clickHandler,n=e.filter,i=e.sorting,o=e.history,l=e.loadVisible;Object(r.useEffect)((function(){l()}),[a,l]);var s=a.subscription;s&&s.length&&i<0&&(s=Object(U.a)(s).reverse());var u=function(e){return e?function(a){return a.kanji.stroke===e}:function(e){return e}}(n),p="".concat(me.a.container__kanji," + out_of_view");return c.a.createElement(c.a.Fragment,null,a.subscription&&a.subscription.length&&s.length>0?s.filter(u).map((function(e,n,r){return n===r.length-1&&l(),c.a.createElement("article",{"data-testid":e.kanji.character,onClick:function(){return t(e.kanji.character,o,a)},onKeyDown:function(n){return function(e,n){13===e.keyCode&&t(n.kanji.character,o,a)}(n,e)},className:p,key:e.kanji.character},c.a.createElement("h2",{className:me.a.container__kanji__title},e.kanji.character),c.a.createElement("p",null,c.a.createElement("strong",null,"radical:"),e.radical.character))})):c.a.createElement(fe,null))};_e.defaultProps={filter:null,sorting:1};var be=_e,ge=(t(50),function(e){var a=e.sorting,t=e.updateFilter,n=e.filterCallback,i=e.toggleSorting,o=e.toggleCallback,l=e.loadVisible,s=Object(r.useRef)(null),u=function(e,a){e.apply(void 0,Object(U.a)(a)),setTimeout((function(){l()}),300)},p=function(e,a,t){e.keyCode===a&&u(i,[e,t,o])};return c.a.createElement("header",{"data-testid":"sort-bar",className:"filter-sort-bar"},c.a.createElement("div",null,c.a.createElement("i",{className:W(-1,a),onClick:function(e){return u(i,[e,-1,o])},role:"button",tabIndex:-1,"aria-label":"Sort down",onKeyDown:function(e){return p(e,40,-1)}}),c.a.createElement("i",{className:W(1,a),onClick:function(e){return u(i,[e,1,o])},role:"button",tabIndex:-1,"aria-label":"Sort up",onKeyDown:function(e){return p(e,38,1)}})),c.a.createElement("div",null,c.a.createElement("form",{className:"filter-sort-bar__form",onSubmit:function(e){return u(Q,[e,s.current,t,n])}},c.a.createElement("input",{ref:s,type:"number",placeholder:"stroke number",min:"1",max:"84"}),c.a.createElement("button",{type:"submit"},c.a.createElement("i",{className:"fas fa-filter"})))))}),ke=t(36),Ee=t.n(ke),je=function(){return c.a.createElement("div",{className:Ee.a.spinner})};var ve=Object(s.b)((function(e){var a=e.state,t=e.group;return{state:Object(m.a)({},a,{},t)}}),(function(e){return{actions:Object(u.b)(Object(m.a)({},n),e)}}))(Object(G.f)((function(e){var a=Object(r.useRef)(null),t=e.match.params.grade_num?Y:null;Object(r.useEffect)((function(){return Y(e)}),[t]);var n=function(){Object(U.a)(a.current.children).map((function(e){return a.current.clientHeight+a.current.scrollTop<e.offsetTop?e.classList.add("out_of_view"):e.classList.remove("out_of_view"),null}))},i=e.state,o=e.actions,l=e.history,s=e.state;return c.a.createElement("section",{ref:a,key:i.subscription,className:me.a.container,onScroll:n},c.a.createElement(ge,{loadVisible:n,filter:i.filter,sorting:i.sorting,filterCallback:o.filterBy,updateFilter:H,toggleCallback:o.toggleSort,toggleSorting:q}),i.loading?c.a.createElement(je,null):c.a.createElement(be,{loadVisible:n,filter:s.filter,sorting:s.sorting,state:s,history:l,clickHandler:M}))}))),ye=t(3),Oe=t.n(ye);var Ne=Object(s.b)((function(e){var a=e.state,t=e.group;return{state:Object(m.a)({},a,{},t)}}),(function(e){return{actions:Object(u.b)(Object(m.a)({},n),e)}}))((function(e){var a=e.state,t=e.match;Object(r.useEffect)((function(){var a="https://kanjialive-api.p.rapidapi.com/api/public/kanji/".concat(t.params.kanji);e.actions.fetchSubscription(a,{method:"GET",headers:{"x-rapidapi-host":"kanjialive-api.p.rapidapi.com","x-rapidapi-key":"c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f"}})}),[]);return c.a.createElement("section",{className:Oe.a.detail},a.subscription&&a.subscription.kanji?c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:Oe.a.header},c.a.createElement("img",{className:Oe.a.poster,src:a.subscription.kanji.video.poster,alt:"video poster"}),c.a.createElement("video",{className:Oe.a.video,autoPlay:!0,loop:!0},c.a.createElement("track",{src:"",kind:"captions",srcLang:"en",label:"no_captions"}),c.a.createElement("source",{src:a.subscription.kanji.video.mp4,type:"video/mp4"}),c.a.createElement("source",{src:a.subscription.kanji.video.webm,type:"video/ogg"}),"Your browser does not support the video tag."),c.a.createElement("div",{className:Oe.a.top},c.a.createElement("div",{className:Oe.a.block},c.a.createElement("h3",null,"Strokes"),c.a.createElement("p",null,a.subscription.kanji.strokes.count)),c.a.createElement("div",{className:Oe.a.block},c.a.createElement("h3",null,"Radical"),c.a.createElement("p",null,a.subscription.radical.character)),c.a.createElement("div",{className:Oe.a.block},c.a.createElement("h3",null,"Kunyomi"),c.a.createElement("p",null,a.subscription.kanji.kunyomi.hiragana)),c.a.createElement("div",{className:Oe.a.block},c.a.createElement("h3",null,"Onyomi"),c.a.createElement("p",null,a.subscription.kanji.onyomi.katakana)))),c.a.createElement("aside",{className:Oe.a.meaning},c.a.createElement("h1",null,a.subscription.kanji.character),c.a.createElement("h2",null,c.a.createElement("span",{className:Oe.a.readings},c.a.createElement("span",{className:Oe.a.yomi},a.subscription.kanji.kunyomi.romaji)),c.a.createElement("span",{className:Oe.a.readings},c.a.createElement("span",{className:Oe.a.yomi},a.subscription.kanji.onyomi.romaji)),c.a.createElement("span",null,"\xb7"),c.a.createElement("span",null,a.subscription.kanji.meaning.english))),c.a.createElement("aside",null,c.a.createElement("h3",{className:Oe.a.stroke_title},"Stroke order:"),c.a.createElement("div",{className:Oe.a.strokes},a.subscription.kanji.strokes.images.map((function(e){return c.a.createElement("img",{className:Oe.a.stroke,key:e,src:e,width:"60",alt:"kanji_stroke"})})))),c.a.createElement("article",{className:Oe.a.examples},c.a.createElement("h3",null,"Examples"),c.a.createElement("ul",null,a.subscription.examples.map((function(e){return c.a.createElement("li",{key:e.japanese+e.english},c.a.createElement("p",{className:Oe.a.example},c.a.createElement("strong",null,e.japanese)," \xb7 ",c.a.createElement("em",null,e.meaning.english)),c.a.createElement("audio",{className:Oe.a.audio,controls:!0},c.a.createElement("track",{src:"",kind:"captions",srcLang:"en",label:"no_captions"}),c.a.createElement("source",{src:e.audio.mp3,type:"audio/mp3"}),c.a.createElement("source",{src:e.audio.aac,type:"audio/aac"}),c.a.createElement("source",{src:e.audio.ogg,type:"audio/ogg"})))})))),c.a.createElement("footer",{className:Oe.a.references},c.a.createElement("h4",null,"References"),c.a.createElement("ul",null,c.a.createElement("li",null,"Grade:",c.a.createElement("strong",{className:Oe.a.chapter},a.subscription.references.grade)),c.a.createElement("li",null,"Kodansha:",c.a.createElement("strong",{className:Oe.a.chapter},a.subscription.references.kodansha)),c.a.createElement("li",null,"Classic Nelson:",c.a.createElement("strong",{className:Oe.a.chapter},a.subscription.references.classic_nelson))))):c.a.createElement(je,null))}));var xe=Object(s.b)((function(e){var a=e.state,t=e.group;return{state:Object(m.a)({},a,{},t)}}),(function(e){return{actions:Object(u.b)(Object(m.a)({},n),e)}}))((function(e){var a=e.actions,t=e.state;return c.a.createElement("main",{className:P.a.App},c.a.createElement(ue,null),c.a.createElement(G.c,null,c.a.createElement(G.a,{path:"/ao-kanji/",render:function(){return c.a.createElement(Z,{actions:a,state:t})},exact:!0}),c.a.createElement(G.a,{path:"/(grade|chapter|ap-chapter)/:grade_num",component:ve,exact:!0}),c.a.createElement(G.a,{path:"/search/:word",component:ve,exact:!0}),c.a.createElement(G.a,{path:"/kanjis/:kanji",component:Ne,exact:!0})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(s.a,{store:A},c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,null,c.a.createElement(xe,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.7a16dc25.chunk.js.map
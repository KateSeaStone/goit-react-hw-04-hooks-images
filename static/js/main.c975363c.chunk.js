(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(4),r=n.n(o),i=(n(18),n(3)),s=n(8),u=(n(19),n(20),n(21),n(1)),l=function(e){var t=e.children;return Object(u.jsx)("div",{className:"Container",children:t})},j=(n(23),function(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(i.a)(n,2),o=a[0],r=a[1];return Object(u.jsx)("header",{className:"Searchbar",children:Object(u.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),""!==o.trim()?t(o):s.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441!")},children:[Object(u.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(u.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(u.jsx)("input",{className:"SearchForm-input",type:"text",value:o,onChange:function(e){r(e.currentTarget.value)},autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}),h=n(11),b=n.n(h),d=n(12),m=function(){var e=Object(d.a)(b.a.mark((function e(t,n){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pixabay.com/api/?q=".concat(t,"&page=").concat(n,"&key=").concat("22003167-822d2c3fa2b59190c92d4d864","&image_type=photo&orientation=horizontal&per_page=12"));case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=m,f=(n(25),n(26),function(e){var t=e.id,n=e.original,c=e.preview,a=e.showModal;return Object(u.jsx)("li",{className:"ImageGalleryItem",children:Object(u.jsx)("img",{src:c,alt:c,className:"ImageGalleryItem-image",onClick:function(){return a(n)}})},t)}),p=n(5),g=n(6),v=n(9),x=n(7),y=(n(27),document.body),w=function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(p.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e.clickOnImage=function(){return e.props.onClose()},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(u.jsx)("div",{className:"Overlay",onClick:this.handleOverlayClick,children:Object(u.jsx)("div",{className:"Modal",children:Object(u.jsx)("img",{src:this.props.largeImageURL,alt:this.props.largeImageURL,onClick:this.clickOnImage})})}),y)}}]),n}(c.Component),k=(n(28),function(e){var t=e.handleClick;return Object(u.jsx)("button",{className:"loadMoreBtn",type:"button",onClick:t,children:"Load more"})}),C=n(13),S=n.n(C),F=(n(49),function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"loader",children:Object(u.jsx)(S.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:4e3})})}}]),n}(a.a.Component)),I=F,N=function(e){var t=e.images,n=e.handleButtonClick,a=e.isLoading,o=Object(c.useState)(!1),r=Object(i.a)(o,2),s=r[0],l=r[1],j=Object(c.useState)(""),h=Object(i.a)(j,2),b=h[0],d=h[1],m=function(e){l(!0),d(e)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(u.jsx)(f,{id:e.id,preview:e.webformatURL,original:e.largeImageURL,showModal:m},e.id)}))}),a&&Object(u.jsx)(I,{}),!a&&Object(u.jsx)(k,{handleClick:n}),s&&Object(u.jsx)(w,{largeImageURL:b,onClose:function(){l(!1)}})]})},L=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(null),r=Object(i.a)(o,2),h=r[0],b=r[1],d=Object(c.useState)(1),m=Object(i.a)(d,2),f=m[0],p=m[1],g=Object(c.useState)(""),v=Object(i.a)(g,2),x=v[0],y=v[1],w=Object(c.useState)(!1),k=Object(i.a)(w,2),C=k[0],S=k[1],F=Object(c.useState)(!1),I=Object(i.a)(F,2),L=I[0],D=I[1];Object(c.useEffect)((function(){""!==x&&O(x,f).then((function(e){a(n.concat(e.hits)),S(!1),f>0&&e.hits.length>0&&D(!0)})).catch((function(e){return b({error:e})}))}),[x,f]),Object(c.useEffect)((function(){L&&(window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),D(!1))}),[L]);return Object(u.jsxs)(l,{children:[h&&Object(u.jsx)("h2",{children:"Opps! Something went wrong!"}),Object(u.jsx)(j,{onSubmit:function(e){e===x&&1===f||(a([]),b(null),p(1),y(e),S(!0))}}),n.length>0&&Object(u.jsx)(N,{images:n,handleButtonClick:function(){p(f+1),S(!0)},isLoading:C}),Object(u.jsx)(s.a,{position:"top-center",autoClose:4e3})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root")),D()}},[[50,1,2]]]);
//# sourceMappingURL=main.c975363c.chunk.js.map
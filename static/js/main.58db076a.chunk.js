(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var i=c(7),s=c.n(i),a=(c(13),c(8)),n=c(2),l=c(1),r=(c(14),c(15),c(16),c(0)),d=function(e){var t=e.movie,c="images/imdb-logo.jpeg";return t.imgUrl||(c="https://via.placeholder.com/360x270.png?text=no%20preview"),Object(r.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:c,alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(d,{movie:e},e.imdbId)}))})},j=(c(18),c(6)),m=c.n(j);var b=function(e){var t=e.handleClick,c=void 0===t?function(){}:t,i=Object(l.useState)(""),s=Object(n.a)(i,2),a=s[0],o=s[1],j=Object(l.useState)(null),b=Object(n.a)(j,2),u=b[0],h=b[1],v=Object(l.useState)(!1),O=Object(n.a)(v,2),x=O[0],f=O[1],p=Object(l.useState)(!1),N=Object(n.a)(p,2),g=N[0],y=N[1],w=function(e){e.preventDefault(),f(!0),function(e){return fetch("".concat("https://www.omdbapi.com/?apikey=bb34f09c","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}(a).then((function(e){if("False"===e.Response)y(!0);else{var t=e,c=t.Title,i=t.Plot,s=t.Poster,a=t.imdbID;h({title:c,description:i,imgUrl:s,imdbUrl:a,imdbId:a})}})).finally((function(){return f(!1)}))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",onSubmit:function(e){return w(e)},children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{value:a,onChange:function(e){o(e.target.value),y(!1)},"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:m()("input",{"is-danger":g})})}),g&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[a?Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{onClick:w,"data-cy":"searchButton",type:"submit",className:m()("button is-light",{"is-loading":x}),children:"Find a movie"})}):Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{disabled:!0,type:"submit","data-cy":"searchButton",className:"button is-light",children:"Find a movie"})}),Object(r.jsx)("div",{className:"control",children:u&&Object(r.jsx)("button",{onClick:function(){c(u),h(null),o("")},"data-cy":"addButton",type:"button",className:"button is-primary",children:"Add to the list"})})]})]}),u&&Object(r.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),Object(r.jsx)(d,{movie:u})]})]})},u=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(o,{movies:c})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(b,{handleClick:function(e){e&&!c.find((function(t){return t.imdbId===e.imdbId}))&&i((function(t){return[].concat(Object(a.a)(t),[e])}))}})})]})};s.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.58db076a.chunk.js.map
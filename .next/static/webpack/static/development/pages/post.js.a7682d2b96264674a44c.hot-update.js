webpackHotUpdate("static\\development\\pages\\post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var Post = function Post(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-3267370368"
  }, props.show.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "jsx-3267370368"
  }, props.show.summary.replace(/<[/]?p>/g, '')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: props.show.image.medium,
    className: "jsx-3267370368"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3267370368" + " " + "markdown"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
    source: props.show.name
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "3267370368",
    css: ".markdown{font-family:'Arial';}.markdown a{-webkit-text-decoration:none;text-decoration:none;color:blue;}.markdown a:hover{opacity:0.6;}.markdown h3{margin:0;padding:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQ29tcHV0ZXJcXERlc2t0b3BcXG5leHRqcy1zdHVkeVxccGFnZXNcXHBvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWXNCLEFBRzRCLEFBSUMsQUFLVCxBQUlILFNBQ0MsR0FKWixPQUsyQixDQWQzQix3QkFlQSxNQVhhLFdBQ2IiLCJmaWxlIjoiQzpcXFVzZXJzXFxDb21wdXRlclxcRGVza3RvcFxcbmV4dGpzLXN0dWR5XFxwYWdlc1xccG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJ1xyXG5cclxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgIDxoMT57cHJvcHMuc2hvdy5uYW1lfTwvaDE+XHJcbiAgICAgICA8cD57cHJvcHMuc2hvdy5zdW1tYXJ5LnJlcGxhY2UoLzxbL10/cD4vZywgJycpfTwvcD5cclxuICAgICAgIDxpbWcgc3JjPXtwcm9wcy5zaG93LmltYWdlLm1lZGl1bX0vPlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93blwiPlxyXG4gICAgICAgPE1hcmtkb3duIHNvdXJjZT17cHJvcHMuc2hvdy5uYW1lfS8+XHJcbiAgIDwvZGl2PlxyXG4gICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgIC5tYXJrZG93biB7XHJcbiAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICAgICB9XHJcblxyXG4gICAgIC5tYXJrZG93biBhIHtcclxuICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgIH1cclxuXHJcbiAgICAgLm1hcmtkb3duIGE6aG92ZXIge1xyXG4gICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgIH1cclxuXHJcbiAgICAgLm1hcmtkb3duIGgzIHtcclxuICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgIH1cclxuICBgfTwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuKVxyXG5cclxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnlcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8ke2lkfWApXHJcbiAgY29uc3Qgc2hvdyA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgY29uc29sZS5sb2coYEZldGNoZWQgc2hvdzogJHtzaG93Lm5hbWV9YClcclxuXHJcbiAgcmV0dXJuIHsgc2hvdyB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3QiXX0= */\n/*@ sourceURL=C:\\Users\\Computer\\Desktop\\nextjs-study\\pages\\post.js */"
  }));
};

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var id, res, show;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://api.tvmaze.com/shows/".concat(id));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            show = _context.sent;
            console.log("Fetched show: ".concat(show.name));
            return _context.abrupt("return", {
              show: show
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/post")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=post.js.a7682d2b96264674a44c.hot-update.js.map
"use strict";
exports.id = 534;
exports.ids = [534];
exports.modules = {

/***/ 352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


// import '@/styles/globals.css'
function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, _objectSpread({}, pageProps));
}

/***/ }),

/***/ 128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Document)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.jsx

function Footer() {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    children: /*#__PURE__*/jsx_runtime.jsx("h1", {
      children: "Este es el footer"
    })
  });
}
;// CONCATENATED MODULE: ./src/components/Header/Header.jsx

function Header() {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    children: /*#__PURE__*/jsx_runtime.jsx("h1", {
      children: "Este es el Header"
    })
  });
}
;// CONCATENATED MODULE: ./src/components/Navbar/Navbar.jsx

function Navbar() {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    children: /*#__PURE__*/jsx_runtime.jsx("h1", {
      children: "Este es el Navbar"
    })
  });
}
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(859);
;// CONCATENATED MODULE: ./src/pages/_document.js






function Document() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(next_document.Html, {
    lang: "es",
    children: [/*#__PURE__*/jsx_runtime.jsx(next_document.Head, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("body", {
      children: [/*#__PURE__*/jsx_runtime.jsx(Header, {}), /*#__PURE__*/jsx_runtime.jsx(Navbar, {}), /*#__PURE__*/jsx_runtime.jsx(next_document.Main, {}), /*#__PURE__*/jsx_runtime.jsx(next_document.NextScript, {}), /*#__PURE__*/jsx_runtime.jsx(Footer, {})]
    })]
  });
}

/***/ })

};
;
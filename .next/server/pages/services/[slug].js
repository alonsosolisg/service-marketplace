"use strict";
(() => {
var exports = {};
exports.id = 945;
exports.ids = [945];
exports.modules = {

/***/ 8572:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Service),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4844);
/* harmony import */ var _components_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2834);
/* harmony import */ var _components_ui_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2720);
/* harmony import */ var _content_services_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9789);
/* harmony import */ var _components_hooks_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2445);
/* harmony import */ var _components_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4853);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_common__WEBPACK_IMPORTED_MODULE_1__, _components_ui_service__WEBPACK_IMPORTED_MODULE_2__, _components_ui_layout__WEBPACK_IMPORTED_MODULE_3__, _components_hooks_web3__WEBPACK_IMPORTED_MODULE_5__, _components_providers__WEBPACK_IMPORTED_MODULE_6__]);
([_components_ui_common__WEBPACK_IMPORTED_MODULE_1__, _components_ui_service__WEBPACK_IMPORTED_MODULE_2__, _components_ui_layout__WEBPACK_IMPORTED_MODULE_3__, _components_hooks_web3__WEBPACK_IMPORTED_MODULE_5__, _components_providers__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Service({ service  }) {
    var ref;
    const { isLoading  } = (0,_components_providers__WEBPACK_IMPORTED_MODULE_6__/* .useWeb3 */ .$)();
    const { account  } = (0,_components_hooks_web3__WEBPACK_IMPORTED_MODULE_5__/* .useAccount */ .mA)();
    const { ownedService  } = (0,_components_hooks_web3__WEBPACK_IMPORTED_MODULE_5__/* .useOwnedService */ .xW)(service, account.data);
    const serviceState = (ref = ownedService.data) === null || ref === void 0 ? void 0 : ref.state;
    // const serviceState = "activated"
    const isLocked = !serviceState || serviceState === "purchased" || serviceState === "deactivated";
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "py-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_service__WEBPACK_IMPORTED_MODULE_2__/* .ServiceHero */ .s6, {
                    hasOwner: !!ownedService.data,
                    title: service.title,
                    description: service.description,
                    image: service.coverImage
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_service__WEBPACK_IMPORTED_MODULE_2__/* .Keypoints */ .Zb, {
                points: service.wsl
            }),
            serviceState && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-5xl mx-auto",
                children: [
                    serviceState == "purchased" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_common__WEBPACK_IMPORTED_MODULE_1__/* .Message */ .v0, {
                        type: "warning",
                        children: [
                            "Service is purchased and waiting for activation. Process can take up to 24h.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "block font-normal",
                                children: "In case of any questions, please contact test@gmail.com"
                            })
                        ]
                    }),
                    serviceState == "activated" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_1__/* .Message */ .v0, {
                        type: "success",
                        children: "Ready to provide service for you!"
                    }),
                    serviceState == "deactivated" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_common__WEBPACK_IMPORTED_MODULE_1__/* .Message */ .v0, {
                        type: "danger",
                        children: [
                            "Service has been deactivated due to incorrect purchase data.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "block font-normal",
                                children: "Please contact test@gmail.com"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_service__WEBPACK_IMPORTED_MODULE_2__/* .Curriculum */ .NX, {
                isLoading: isLoading,
                locked: isLocked,
                serviceState: serviceState
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_1__/* .Modal */ .u_, {})
        ]
    }));
};
function getStaticPaths() {
    const { data  } = (0,_content_services_fetcher__WEBPACK_IMPORTED_MODULE_4__/* .getAllServices */ .U)();
    return {
        paths: data.map((s)=>({
                params: {
                    slug: s.slug
                }
            })
        ),
        fallback: false
    };
}
function getStaticProps({ params  }) {
    const { data  } = (0,_content_services_fetcher__WEBPACK_IMPORTED_MODULE_4__/* .getAllServices */ .U)();
    const service = data.filter((s)=>s.slug === params.slug
    )[0];
    return {
        props: {
            service
        }
    };
}
Service.Layout = _components_ui_layout__WEBPACK_IMPORTED_MODULE_3__/* .BaseLayout */ .I;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3427:
/***/ ((module) => {

module.exports = require("@metamask/detect-provider");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6762:
/***/ ((module) => {

module.exports = require("react-awesome-reveal");

/***/ }),

/***/ 5690:
/***/ ((module) => {

module.exports = require("react-simple-animate");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8519:
/***/ ((module) => {

module.exports = require("web3");

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,206,789], () => (__webpack_exec__(8572)));
module.exports = __webpack_exports__;

})();
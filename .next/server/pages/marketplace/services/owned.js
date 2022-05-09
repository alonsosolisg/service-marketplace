"use strict";
(() => {
var exports = {};
exports.id = 731;
exports.ids = [731];
exports.modules = {

/***/ 576:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OwnedServices),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2720);
/* harmony import */ var _components_ui_marketplace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1577);
/* harmony import */ var _components_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2834);
/* harmony import */ var _components_ui_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4844);
/* harmony import */ var _components_hooks_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2445);
/* harmony import */ var _content_services_fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9789);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var _components_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4853);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_layout__WEBPACK_IMPORTED_MODULE_1__, _components_ui_marketplace__WEBPACK_IMPORTED_MODULE_2__, _components_ui_service__WEBPACK_IMPORTED_MODULE_3__, _components_ui_common__WEBPACK_IMPORTED_MODULE_4__, _components_hooks_web3__WEBPACK_IMPORTED_MODULE_5__, _components_providers__WEBPACK_IMPORTED_MODULE_9__]);
([_components_ui_layout__WEBPACK_IMPORTED_MODULE_1__, _components_ui_marketplace__WEBPACK_IMPORTED_MODULE_2__, _components_ui_service__WEBPACK_IMPORTED_MODULE_3__, _components_ui_common__WEBPACK_IMPORTED_MODULE_4__, _components_hooks_web3__WEBPACK_IMPORTED_MODULE_5__, _components_providers__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function OwnedServices({ services  }) {
    var ref;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { requireInstall  } = (0,_components_providers__WEBPACK_IMPORTED_MODULE_9__/* .useWeb3 */ .$)();
    const { account  } = (0,_components_hooks_web3__WEBPACK_IMPORTED_MODULE_5__/* .useAccount */ .mA)();
    const { ownedServices  } = (0,_components_hooks_web3__WEBPACK_IMPORTED_MODULE_5__/* .useOwnedServices */ .cp)(services, account.data);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_marketplace__WEBPACK_IMPORTED_MODULE_2__/* .MarketHeader */ .Y, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "grid grid-cols-1",
                children: [
                    ownedServices.isEmpty && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-1/2",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_common__WEBPACK_IMPORTED_MODULE_4__/* .Message */ .v0, {
                            type: "warning",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: "You have not purchased any services"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                    href: "/marketplace",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "font-normal hover:underline",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            children: "Purchase Service"
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    account.isEmpty && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-1/2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_4__/* .Message */ .v0, {
                            type: "warning",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "Please connect to Metamask"
                            })
                        })
                    }),
                    requireInstall && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-1/2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_4__/* .Message */ .v0, {
                            type: "warning",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "Please install Metamask"
                            })
                        })
                    }),
                    (ref = ownedServices.data) === null || ref === void 0 ? void 0 : ref.map((service)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_service__WEBPACK_IMPORTED_MODULE_3__/* .OwnedServiceCard */ .ZZ, {
                            service: service,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .zx, {
                                onClick: ()=>router.push(`/services/${service.slug}`)
                                ,
                                children: "View the service"
                            })
                        }, service.id)
                    )
                ]
            })
        ]
    }));
};
function getStaticProps() {
    const { data  } = (0,_content_services_fetcher__WEBPACK_IMPORTED_MODULE_6__/* .getAllServices */ .U)();
    return {
        props: {
            services: data
        }
    };
}
OwnedServices.Layout = _components_ui_layout__WEBPACK_IMPORTED_MODULE_1__/* .BaseLayout */ .I;

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,206,789,577], () => (__webpack_exec__(576)));
module.exports = __webpack_exports__;

})();
"use strict";
exports.id = 577;
exports.ids = [577];
exports.modules = {

/***/ 2041:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ SERVICE_PRICE),
/* harmony export */   "B": () => (/* binding */ useEthPrice)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);
swr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const URL = "https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false";
const SERVICE_PRICE = 15;
const fetcher = async (url)=>{
    const res = await fetch(url);
    const json = await res.json();
    var _usd;
    return (_usd = json.market_data.current_price.usd) !== null && _usd !== void 0 ? _usd : null;
};
const useEthPrice = ()=>{
    const { data , ...rest } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])(URL, fetcher, {
        refreshInterval: 10000
    });
    var ref;
    const perItem = (ref = data && (SERVICE_PRICE / Number(data)).toFixed(6)) !== null && ref !== void 0 ? ref : null;
    return {
        eth: {
            data,
            perItem,
            ...rest
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8339:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_hooks_web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2445);
/* harmony import */ var _components_ui_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4844);
/* harmony import */ var _components_ui_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_hooks_web3__WEBPACK_IMPORTED_MODULE_1__, _components_ui_common__WEBPACK_IMPORTED_MODULE_2__, _components_ui_web3__WEBPACK_IMPORTED_MODULE_3__]);
([_components_hooks_web3__WEBPACK_IMPORTED_MODULE_1__, _components_ui_common__WEBPACK_IMPORTED_MODULE_2__, _components_ui_web3__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const LINKS = [
    {
        href: "/marketplace",
        value: "Buy"
    },
    {
        href: "/marketplace/services/owned",
        value: "My Services"
    },
    {
        href: "/marketplace/services/managed",
        value: "Manage Services",
        requireAdmin: true
    }
];
function Header() {
    const { account  } = (0,_components_hooks_web3__WEBPACK_IMPORTED_MODULE_1__/* .useAccount */ .mA)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "pt-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_web3__WEBPACK_IMPORTED_MODULE_3__/* .WalletBar */ .Y, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_web3__WEBPACK_IMPORTED_MODULE_3__/* .EthRates */ .t, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-row-reverse p-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_2__/* .Breadcrumbs */ .Oo, {
                    isAdmin: account.isAdmin,
                    items: LINKS
                })
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1577:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* reexport safe */ _header__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8339);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_header__WEBPACK_IMPORTED_MODULE_0__]);
_header__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4518:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ EthRates)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_hooks_useEthPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2041);
/* harmony import */ var _components_ui_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4844);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_hooks_useEthPrice__WEBPACK_IMPORTED_MODULE_1__, _components_ui_common__WEBPACK_IMPORTED_MODULE_2__]);
([_components_hooks_useEthPrice__WEBPACK_IMPORTED_MODULE_1__, _components_ui_common__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function EthRates() {
    const { eth  } = (0,_components_hooks_useEthPrice__WEBPACK_IMPORTED_MODULE_1__/* .useEthPrice */ .B)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col xs:flex-row text-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "p-6 border drop-shadow rounded-md mr-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center justify-center",
                        children: eth.data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    layout: "fixed",
                                    height: "35",
                                    width: "35",
                                    src: "/small-eth.webp"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "text-xl font-bold",
                                    children: [
                                        "= ",
                                        eth.data,
                                        "$"
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full flex justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_2__/* .Loader */ .aN, {
                                size: "md"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-lg text-gray-500",
                        children: "Current eth Price"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "p-6 border drop-shadow rounded-md",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center justify-center",
                        children: eth.data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-xl font-bold",
                                    children: eth.perItem
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    layout: "fixed",
                                    height: "35",
                                    width: "35",
                                    src: "/small-eth.webp"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "text-xl font-bold",
                                    children: [
                                        "= ",
                                        _components_hooks_useEthPrice__WEBPACK_IMPORTED_MODULE_1__/* .SERVICE_PRICE */ .j,
                                        "$"
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full flex justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_2__/* .Loader */ .aN, {
                                size: "md"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-lg text-gray-500",
                        children: "Initial Booking Price"
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5176:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* reexport safe */ _ethRates__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "Y": () => (/* reexport safe */ _walletbar__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _ethRates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4518);
/* harmony import */ var _walletbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(803);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ethRates__WEBPACK_IMPORTED_MODULE_0__, _walletbar__WEBPACK_IMPORTED_MODULE_1__]);
([_ethRates__WEBPACK_IMPORTED_MODULE_0__, _walletbar__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 803:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ WalletBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_hooks_web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2445);
/* harmony import */ var _components_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4853);
/* harmony import */ var _components_ui_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4844);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_hooks_web3__WEBPACK_IMPORTED_MODULE_1__, _components_providers__WEBPACK_IMPORTED_MODULE_2__, _components_ui_common__WEBPACK_IMPORTED_MODULE_3__]);
([_components_hooks_web3__WEBPACK_IMPORTED_MODULE_1__, _components_providers__WEBPACK_IMPORTED_MODULE_2__, _components_ui_common__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function WalletBar() {
    const { requireInstall  } = (0,_components_providers__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3 */ .$)();
    const { account , network  } = (0,_components_hooks_web3__WEBPACK_IMPORTED_MODULE_1__/* .useWalletInfo */ .vL)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "text-white bg-indigo-600 rounded-lg",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "p-8",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                    className: "text-base xs:text-xl break-words",
                    children: [
                        "Hello, ",
                        account.data
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "subtitle mb-5 text-sm xs:text-base",
                    children: "I hope you are having a great day!"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "sm:flex sm:justify-center lg:justify-start",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .zx, {
                                className: "mr-2 text-sm xs:text-lg p-2",
                                variant: "white",
                                children: "Learn how to purchase"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                network.hasInitialResponse && !network.isSupported && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "bg-red-400 p-4 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: "Connected to wrong network"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                "Connect to: ",
                                                ` `,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    className: "text-2xl",
                                                    children: network.target
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                requireInstall && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "bg-yellow-500 p-4 rounded-lg",
                                    children: "Cannot connect to network. Please install Metamask."
                                }),
                                network.data && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Currently on "
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            className: "text-2xl",
                                            children: network.data
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
"use strict";
(() => {
var exports = {};
exports.id = 465;
exports.ids = [465];
exports.modules = {

/***/ 1637:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* reexport safe */ _modal__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1757);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modal__WEBPACK_IMPORTED_MODULE_0__]);
_modal__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1757:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ OrderModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_hooks_useEthPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2041);
/* harmony import */ var _components_ui_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4844);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_hooks_useEthPrice__WEBPACK_IMPORTED_MODULE_1__, _components_ui_common__WEBPACK_IMPORTED_MODULE_2__]);
([_components_hooks_useEthPrice__WEBPACK_IMPORTED_MODULE_1__, _components_ui_common__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const defaultOrder = {
    price: "",
    email: "",
    confirmationEmail: ""
};
const _createFormState = (isDisabled = false, message = "")=>({
        isDisabled,
        message
    })
;
const createFormState = ({ price , email , confirmationEmail  }, hasAgreedTOS, isNewPurchase)=>{
    if (!price || Number(price) <= 0) {
        return _createFormState(true, "Price is not valid.");
    }
    if (isNewPurchase) {
        if (confirmationEmail.length === 0 || email.length === 0) {
            return _createFormState(true);
        } else if (email !== confirmationEmail) {
            return _createFormState(true, "Email and confirmation email do not match.");
        }
    }
    if (!hasAgreedTOS) {
        return _createFormState(true, "You need to agree with the terms of service in order to submit the form");
    }
    return _createFormState();
};
function OrderModal({ service , onClose , onSubmit , isNewPurchase  }) {
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: order , 1: setOrder  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(defaultOrder);
    const { 0: enablePrice , 1: setEnablePrice  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: hasAgreedTOS , 1: setHasAgreedTOS  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { eth  } = (0,_components_hooks_useEthPrice__WEBPACK_IMPORTED_MODULE_1__/* .useEthPrice */ .B)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!!service) {
            setIsOpen(true);
            setOrder({
                ...defaultOrder,
                price: eth.perItem
            });
        }
    }, [
        service
    ]);
    const closeModal = ()=>{
        setIsOpen(false);
        setOrder(defaultOrder);
        setEnablePrice(false);
        setHasAgreedTOS(false);
        onClose();
    };
    const formState = createFormState(order, hasAgreedTOS, isNewPurchase);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_2__/* .Modal */ .u_, {
        isOpen: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "sm:flex sm:items-start",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "mb-7 text-lg font-bold leading-6 text-gray-900",
                                    id: "modal-title",
                                    children: service.title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-1 relative rounded-md",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mb-1",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: "mb-2 font-bold",
                                                    children: "Price(eth)"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-xs text-gray-700 flex",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            className: "flex items-center mr-2",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                checked: enablePrice,
                                                                onChange: ({ target: { checked  }  })=>{
                                                                    setOrder({
                                                                        ...order,
                                                                        price: checked ? order.price : eth.perItem
                                                                    });
                                                                    setEnablePrice(checked);
                                                                },
                                                                type: "checkbox",
                                                                className: "form-checkbox"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Adjust Price - only when the price is not correct"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            disabled: !enablePrice,
                                            value: order.price,
                                            onChange: ({ target: { value  }  })=>{
                                                if (isNaN(value)) {
                                                    return;
                                                }
                                                setOrder({
                                                    ...order,
                                                    price: value
                                                });
                                            },
                                            type: "text",
                                            name: "price",
                                            id: "price",
                                            className: "disabled:opacity-50 w-80 mb-1 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-xs text-gray-700",
                                            children: "Price will be verified at the time of the order. If the price will be lower, order can be declined (+- 2% slipage is allowed)"
                                        })
                                    ]
                                }),
                                isNewPurchase && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-2 relative rounded-md",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mb-1",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: "mb-2 font-bold",
                                                        children: "Email"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    onChange: ({ target: { value  }  })=>{
                                                        setOrder({
                                                            ...order,
                                                            email: value.trim()
                                                        });
                                                    },
                                                    type: "email",
                                                    name: "email",
                                                    id: "email",
                                                    className: "w-80 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md",
                                                    placeholder: "x@y.com"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-xs text-gray-700 mt-1",
                                                    children: "It's important to fill a correct email, otherwise the order cannot be verified. We are not storing your email anywhere"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "my-2 relative rounded-md",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mb-1",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: "mb-2 font-bold",
                                                        children: "Repeat Email"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    onChange: ({ target: { value  }  })=>{
                                                        setOrder({
                                                            ...order,
                                                            confirmationEmail: value.trim()
                                                        });
                                                    },
                                                    type: "email",
                                                    name: "confirmationEmail",
                                                    id: "confirmationEmail",
                                                    className: "w-80 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md",
                                                    placeholder: "x@y.com"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-xs text-gray-700 flex mt-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "flex items-center mr-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                checked: hasAgreedTOS,
                                                onChange: ({ target: { checked  }  })=>{
                                                    setHasAgreedTOS(checked);
                                                },
                                                type: "checkbox",
                                                className: "form-checkbox"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "I accept Eincode 'terms of service' and I agree that my order can be rejected in the case data provided above are not correct"
                                        })
                                    ]
                                }),
                                formState.message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-4 my-3 text-yellow-800 bg-yellow-300 rounded-lg text-sm",
                                    children: formState.message
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bg-gray-50 px-4 py-3 sm:px-6 sm:flex",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                            disabled: formState.isDisabled,
                            onClick: ()=>{
                                onSubmit(order, service);
                            },
                            children: "Submit"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                            onClick: closeModal,
                            variant: "red",
                            children: "Cancel"
                        })
                    ]
                })
            ]
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9818:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Marketplace),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2834);
/* harmony import */ var _components_ui_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2720);
/* harmony import */ var _content_services_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9789);
/* harmony import */ var _components_hooks_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2445);
/* harmony import */ var _components_ui_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4844);
/* harmony import */ var _components_ui_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1637);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ui_marketplace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1577);
/* harmony import */ var _components_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4853);
/* harmony import */ var _utils_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2881);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_service__WEBPACK_IMPORTED_MODULE_1__, _components_ui_layout__WEBPACK_IMPORTED_MODULE_2__, _components_hooks_web3__WEBPACK_IMPORTED_MODULE_4__, _components_ui_common__WEBPACK_IMPORTED_MODULE_5__, _components_ui_order__WEBPACK_IMPORTED_MODULE_6__, _components_ui_marketplace__WEBPACK_IMPORTED_MODULE_8__, _components_providers__WEBPACK_IMPORTED_MODULE_9__]);
([_components_ui_service__WEBPACK_IMPORTED_MODULE_1__, _components_ui_layout__WEBPACK_IMPORTED_MODULE_2__, _components_hooks_web3__WEBPACK_IMPORTED_MODULE_4__, _components_ui_common__WEBPACK_IMPORTED_MODULE_5__, _components_ui_order__WEBPACK_IMPORTED_MODULE_6__, _components_ui_marketplace__WEBPACK_IMPORTED_MODULE_8__, _components_providers__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function Marketplace({ services  }) {
    const { web3 , contract , requireInstall  } = (0,_components_providers__WEBPACK_IMPORTED_MODULE_9__/* .useWeb3 */ .$)();
    const { hasConnectedWallet , isConnecting , account  } = (0,_components_hooks_web3__WEBPACK_IMPORTED_MODULE_4__/* .useWalletInfo */ .vL)();
    const { ownedServices  } = (0,_components_hooks_web3__WEBPACK_IMPORTED_MODULE_4__/* .useOwnedServices */ .cp)(services, account.data);
    const { 0: selectedService , 1: setSelectedService  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const { 0: busyServiceId , 1: setBusyServiceId  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const { 0: isNewPurchase , 1: setIsNewPurchase  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(true);
    const purchaseService = async (order, service)=>{
        const hexServiceId = web3.utils.utf8ToHex(service.id);
        const orderHash = web3.utils.soliditySha3({
            type: "bytes16",
            value: hexServiceId
        }, {
            type: "address",
            value: account.data
        });
        const value = web3.utils.toWei(String(order.price));
        setBusyServiceId(service.id);
        if (isNewPurchase) {
            const emailHash = web3.utils.sha3(order.email);
            const proof = web3.utils.soliditySha3({
                type: "bytes32",
                value: emailHash
            }, {
                type: "bytes32",
                value: orderHash
            });
            (0,_utils_toast__WEBPACK_IMPORTED_MODULE_10__/* .withToast */ .f)(_purchaseService({
                hexServiceId,
                proof,
                value
            }, service));
        } else {
            (0,_utils_toast__WEBPACK_IMPORTED_MODULE_10__/* .withToast */ .f)(_repurchaseService({
                serviceHash: orderHash,
                value
            }, service));
        }
    };
    const _purchaseService = async ({ hexServiceId , proof , value  }, service)=>{
        try {
            const result = await contract.methods.purchaseService(hexServiceId, proof).send({
                from: account.data,
                value
            });
            ownedServices.mutate([
                ...ownedServices.data,
                {
                    ...service,
                    proof,
                    state: "purchased",
                    owner: account.data,
                    price: value
                }
            ]);
            return result;
        } catch (error) {
            throw new Error(error.message);
        } finally{
            setBusyServiceId(null);
        }
    };
    const _repurchaseService = async ({ serviceHash , value  }, service)=>{
        try {
            const result = await contract.methods.repurchaseService(serviceHash).send({
                from: account.data,
                value
            });
            const index = ownedServices.data.findIndex((s)=>s.id === service.id
            );
            if (index >= 0) {
                ownedServices.data[index].state = "purchased";
                ownedServices.mutate(ownedServices.data);
            } else {
                ownedServices.mutate();
            }
            return result;
        } catch (error) {
            throw new Error(error.message);
        } finally{
            setBusyServiceId(null);
        }
    };
    const cleanupModal = ()=>{
        setSelectedService(null);
        setIsNewPurchase(true);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_marketplace__WEBPACK_IMPORTED_MODULE_8__/* .MarketHeader */ .Y, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_service__WEBPACK_IMPORTED_MODULE_1__/* .ServiceList */ .$4, {
                services: services,
                children: (service)=>{
                    const owned = ownedServices.lookup[service.id];
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_service__WEBPACK_IMPORTED_MODULE_1__/* .ServiceCard */ .WF, {
                        service: service,
                        state: owned === null || owned === void 0 ? void 0 : owned.state,
                        disabled: !hasConnectedWallet,
                        Footer: ()=>{
                            if (requireInstall) {
                                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .zx, {
                                    size: "sm",
                                    disabled: true,
                                    variant: "lightPurple",
                                    children: "Install"
                                }));
                            }
                            if (isConnecting) {
                                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .zx, {
                                    size: "sm",
                                    disabled: true,
                                    variant: "lightPurple",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_5__/* .Loader */ .aN, {
                                        size: "sm"
                                    })
                                }));
                            }
                            if (!ownedServices.hasInitialResponse) {
                                return(// <div style={{height: "42px"}}></div>
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_5__/* .Loader */ .aN, {
                                    size: "sm"
                                }));
                            }
                            const isBusy = busyServiceId === service.id;
                            if (owned) {
                                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .zx, {
                                                onClick: ()=>alert("You are owner of this service")
                                                ,
                                                size: "sm",
                                                disabled: false,
                                                variant: "white",
                                                children: "Yours ✔"
                                            }),
                                            owned.state === "deactivated" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "ml-1",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_common__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .zx, {
                                                    size: "sm",
                                                    disabled: isBusy,
                                                    onClick: ()=>{
                                                        setIsNewPurchase(false);
                                                        setSelectedService(service);
                                                    },
                                                    variant: "purple",
                                                    children: [
                                                        isBusy ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_5__/* .Loader */ .aN, {
                                                                    size: "sm"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "ml-2",
                                                                    children: "In Progress"
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: "Fund to activate"
                                                        }),
                                                        "                              "
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }));
                            }
                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .zx, {
                                size: "sm",
                                onClick: ()=>setSelectedService(service)
                                ,
                                disabled: !hasConnectedWallet || isBusy,
                                variant: "lightPurple",
                                children: isBusy ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_5__/* .Loader */ .aN, {
                                            size: "sm"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "ml-2",
                                            children: "In Progress"
                                        })
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: "Purchase"
                                })
                            }));
                        }
                    }, service.id));
                }
            }),
            selectedService && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_order__WEBPACK_IMPORTED_MODULE_6__/* .OrderModal */ .h, {
                service: selectedService,
                isNewPurchase: isNewPurchase,
                onSubmit: (formData, service)=>{
                    purchaseService(formData, service);
                    cleanupModal();
                },
                onClose: cleanupModal
            })
        ]
    }));
};
function getStaticProps() {
    const { data  } = (0,_content_services_fetcher__WEBPACK_IMPORTED_MODULE_3__/* .getAllServices */ .U)();
    return {
        props: {
            services: data
        }
    };
}
Marketplace.Layout = _components_ui_layout__WEBPACK_IMPORTED_MODULE_2__/* .BaseLayout */ .I;

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

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,206,789,577,881], () => (__webpack_exec__(9818)));
module.exports = __webpack_exports__;

})();
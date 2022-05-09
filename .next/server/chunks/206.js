"use strict";
exports.id = 206;
exports.ids = [206];
exports.modules = {

/***/ 2445:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mA": () => (/* binding */ useAccount),
/* harmony export */   "Aj": () => (/* binding */ useAdmin),
/* harmony export */   "cp": () => (/* binding */ useOwnedServices),
/* harmony export */   "xW": () => (/* binding */ useOwnedService),
/* harmony export */   "BG": () => (/* binding */ useManagedServices),
/* harmony export */   "vL": () => (/* binding */ useWalletInfo)
/* harmony export */ });
/* unused harmony export useNetwork */
/* harmony import */ var _components_providers_web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(554);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_providers_web3__WEBPACK_IMPORTED_MODULE_0__, _components_providers__WEBPACK_IMPORTED_MODULE_2__]);
([_components_providers_web3__WEBPACK_IMPORTED_MODULE_0__, _components_providers__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const _isEmpty = (data)=>{
    return data == null || data == "" || Array.isArray(data) && data.legth === 0 || data.constructor === Object && Object.keys(data).length === 0;
};
const enhanceHook = (swrRes)=>{
    const { data , error  } = swrRes;
    const hasInitialResponse = !!(data || error);
    const isEmpty = hasInitialResponse && _isEmpty(data);
    return {
        ...swrRes,
        isEmpty,
        hasInitialResponse
    };
};
const useNetwork = ()=>{
    const swrRes = enhanceHook((0,_components_providers_web3__WEBPACK_IMPORTED_MODULE_0__/* .useHooks */ .xn)((hooks)=>hooks.useNetwork
    )());
    return {
        network: swrRes
    };
};
const useAccount = ()=>{
    const swrRes = enhanceHook((0,_components_providers_web3__WEBPACK_IMPORTED_MODULE_0__/* .useHooks */ .xn)((hooks)=>hooks.useAccount
    )());
    return {
        account: swrRes
    };
};
const useAdmin = ({ redirectTo  })=>{
    const { account  } = useAccount();
    const { requireInstall  } = (0,_components_providers__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3 */ .$)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (requireInstall || account.hasInitialResponse && !account.isAdmin || account.isEmpty) {
            router.push(redirectTo);
        }
    }, [
        account
    ]);
    return {
        account
    };
};
const useOwnedServices = (...args)=>{
    const swrRes = enhanceHook((0,_components_providers_web3__WEBPACK_IMPORTED_MODULE_0__/* .useHooks */ .xn)((hooks)=>hooks.useOwnedServices
    )(...args));
    return {
        ownedServices: swrRes
    };
};
const useOwnedService = (...args)=>{
    const swrRes = enhanceHook((0,_components_providers_web3__WEBPACK_IMPORTED_MODULE_0__/* .useHooks */ .xn)((hooks)=>hooks.useOwnedService
    )(...args));
    return {
        ownedService: swrRes
    };
};
const useManagedServices = (...args)=>{
    const swrRes = enhanceHook((0,_components_providers_web3__WEBPACK_IMPORTED_MODULE_0__/* .useHooks */ .xn)((hooks)=>hooks.useManagedServices
    )(...args));
    return {
        managedServices: swrRes
    };
};
const useWalletInfo = ()=>{
    const { account  } = useAccount();
    const { network  } = useNetwork();
    const isConnecting = !account.hasInitialResponse && !network.hasInitialResponse;
    return {
        account,
        network,
        isConnecting,
        hasConnectedWallet: !!(account.data && network.isSupported)
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4853:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.ZP),
/* harmony export */   "$": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.$6)
/* harmony export */ });
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(554);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3__WEBPACK_IMPORTED_MODULE_0__]);
_web3__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3247:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ setupHooks)
/* harmony export */ });
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1700);
/* harmony import */ var _useNetwork__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8233);
/* harmony import */ var _useOwnedServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2268);
/* harmony import */ var _useOwnedService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6480);
/* harmony import */ var _useManagedServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9774);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useAccount__WEBPACK_IMPORTED_MODULE_0__, _useNetwork__WEBPACK_IMPORTED_MODULE_1__, _useOwnedServices__WEBPACK_IMPORTED_MODULE_2__, _useOwnedService__WEBPACK_IMPORTED_MODULE_3__, _useManagedServices__WEBPACK_IMPORTED_MODULE_4__]);
([_useAccount__WEBPACK_IMPORTED_MODULE_0__, _useNetwork__WEBPACK_IMPORTED_MODULE_1__, _useOwnedServices__WEBPACK_IMPORTED_MODULE_2__, _useOwnedService__WEBPACK_IMPORTED_MODULE_3__, _useManagedServices__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const setupHooks = ({ web3 , provider , contract  })=>{
    return {
        useAccount: (0,_useAccount__WEBPACK_IMPORTED_MODULE_0__/* .handler */ .y)(web3, provider),
        useNetwork: (0,_useNetwork__WEBPACK_IMPORTED_MODULE_1__/* .handler */ .y)(web3),
        useOwnedServices: (0,_useOwnedServices__WEBPACK_IMPORTED_MODULE_2__/* .handler */ .y)(web3, contract),
        useOwnedService: (0,_useOwnedService__WEBPACK_IMPORTED_MODULE_3__/* .handler */ .y)(web3, contract),
        useManagedServices: (0,_useManagedServices__WEBPACK_IMPORTED_MODULE_4__/* .handler */ .y)(web3, contract)
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1700:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);
swr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const adminAdresses = {
    "0x42d5fd8310560fcb542a9e6b908a8913f8ff9ee5c67692f3ce10cbbe145f12ef": true,
    "0x764aa91985e96420344dbcd2be0f8c837b12632f86bfbba02e227863d5c07253": true
};
const handler = (web3, provider)=>{
    return ()=>{
        const { data , mutate , ...rest } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>web3 ? "web3/accounts" : null
        , async ()=>{
            const accounts = await web3.eth.getAccounts();
            const account = accounts[0];
            if (!account) {
                throw new Error("Cannot retreive an account. Please refresh the browser.");
            }
            return account;
        });
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
            var ref;
            const mutator = (accounts)=>mutate((ref = accounts[0]) !== null && ref !== void 0 ? ref : null)
            ;
            provider === null || provider === void 0 ? void 0 : provider.on("accountsChanged", mutator);
            return ()=>{
                provider === null || provider === void 0 ? void 0 : provider.removeListener("accountsChanged", mutator);
            };
        }, [
            provider
        ]);
        var ref1;
        return {
            data,
            isAdmin: (ref1 = data && adminAdresses[web3.utils.keccak256(data)]) !== null && ref1 !== void 0 ? ref1 : false,
            mutate,
            ...rest
        };
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9774:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_normalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(413);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);
swr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const handler = (web3, contract)=>(account)=>{
        const swrRes = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>web3 && contract && account.data && account.isAdmin ? `web3/managedServices/${account.data}` : null
        , async ()=>{
            const services = [];
            const serviceCount = await contract.methods.getServiceCount().call();
            for(let i = Number(serviceCount) - 1; i >= 0; i--){
                const serviceHash = await contract.methods.getServiceHashAtIndex(i).call();
                const service = await contract.methods.getServiceByHash(serviceHash).call();
                if (service) {
                    const normalized = (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_0__/* .normalizeOwnedService */ .L)(web3)({
                        hash: serviceHash
                    }, service);
                    services.push(normalized);
                }
            }
            return services;
        });
        return swrRes;
    }
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8233:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);
swr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const NETWORKS = {
    1: "Ethereum Main Network",
    3: "Ropsten Test Network",
    4: "Rinkeby Test Network",
    5: "Goerli Test Network",
    42: "Kovan Test Network",
    56: "Binance Smart Chain",
    1337: "Ganache"
};
const targetNetwork = NETWORKS["3"];
const handler = (web3)=>()=>{
        const { data , ...rest } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>web3 ? "web3/network" : null
        , async ()=>{
            const chainId = await web3.eth.getChainId();
            if (!chainId) {
                throw new Error("Cannot retreive network. Refresh browser.");
            }
            return NETWORKS[chainId];
        });
        return {
            data,
            target: targetNetwork,
            isSupported: data === targetNetwork,
            ...rest
        };
    }
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6480:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_hash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1582);
/* harmony import */ var _utils_normalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(413);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);
swr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const handler = (web3, contract)=>(service, account)=>{
        const swrRes = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>web3 && contract && account ? `web3/ownedService/${account}` : null
        , async ()=>{
            const serviceHash = (0,_utils_hash__WEBPACK_IMPORTED_MODULE_2__/* .createServiceHash */ .v)(web3)(service.id, account);
            const ownedService = await contract.methods.getServiceByHash(serviceHash).call();
            if (ownedService.owner == "0x0000000000000000000000000000000000000000") {
                return null;
            }
            return (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_0__/* .normalizeOwnedService */ .L)(web3)(service, ownedService);
        });
        return swrRes;
    }
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2268:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_hash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1582);
/* harmony import */ var _utils_normalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(413);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);
swr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const handler = (web3, contract)=>{
    return (services, account)=>{
        var ref;
        const swrRes = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>web3 && contract && account ? `web3/ownedServices/${account}` : null
        , async ()=>{
            const ownedServices = [];
            for(let i = 0; i < services.length; i++){
                const service = services[i];
                if (!service.id) {
                    continue;
                }
                const serviceHash = (0,_utils_hash__WEBPACK_IMPORTED_MODULE_2__/* .createServiceHash */ .v)(web3)(service.id, account);
                const ownedService = await contract.methods.getServiceByHash(serviceHash).call();
                if (ownedService.owner !== "0x0000000000000000000000000000000000000000") {
                    const normalized = (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_0__/* .normalizeOwnedService */ .L)(web3)(service, ownedService);
                    ownedServices.push(normalized);
                }
            }
            return ownedServices;
        });
        var ref1;
        return {
            ...swrRes,
            lookup: (ref1 = (ref = swrRes.data) === null || ref === void 0 ? void 0 : ref.reduce((a, s)=>{
                a[s.id] = s;
                return a;
            }, {})) !== null && ref1 !== void 0 ? ref1 : {}
        };
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 554:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ Web3Provider),
/* harmony export */   "$6": () => (/* binding */ useWeb3),
/* harmony export */   "xn": () => (/* binding */ useHooks)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_loadContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8520);
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3427);
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_setupHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3247);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_setupHooks__WEBPACK_IMPORTED_MODULE_3__]);
_hooks_setupHooks__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const { createContext , useContext , useEffect , useState , useMemo  } = __webpack_require__(6689);
const Web3Context = createContext(null);
const setListeners = (provider)=>{
    provider.on("chainChanged", (_)=>window.location.reload()
    );
};
const createWeb3State = ({ web3 , provider , contract , isLoading  })=>{
    return {
        web3,
        provider,
        contract,
        isLoading,
        hooks: (0,_hooks_setupHooks__WEBPACK_IMPORTED_MODULE_3__/* .setupHooks */ .b)({
            web3,
            provider,
            contract
        })
    };
};
function Web3Provider({ children  }) {
    const [web3Api, setWeb3Api] = useState(createWeb3State({
        web3: null,
        provider: null,
        contract: null,
        isLoading: true
    }));
    useEffect(()=>{
        const loadProvider = async ()=>{
            const provider = await _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1___default()();
            if (provider) {
                const web3 = new (web3__WEBPACK_IMPORTED_MODULE_2___default())(provider);
                const contract = await (0,_utils_loadContract__WEBPACK_IMPORTED_MODULE_4__/* .loadContract */ .U)("ServiceMarketplace", web3);
                setListeners(provider);
                setWeb3Api(createWeb3State({
                    web3,
                    provider,
                    contract,
                    isLoading: false
                }));
            } else {
                setWeb3Api((api)=>({
                        ...api,
                        isLoading: false
                    })
                );
                console.error("Please install Metamask.");
            }
        };
        loadProvider();
    }, []);
    const _web3Api = useMemo(()=>{
        const { web3 , provider , isLoading  } = web3Api;
        return {
            ...web3Api,
            requireInstall: !isLoading && !web3,
            connect: provider ? async ()=>{
                try {
                    await provider.request({
                        method: "eth_requestAccounts"
                    });
                } catch  {
                    console.error("Cannot retreive account");
                    location.reload();
                }
            } : ()=>console.log("Cannot connect to Metamask, try to reload browser  please.")
        };
    }, [
        web3Api
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Web3Context.Provider, {
        value: _web3Api,
        children: children
    }));
};
function useWeb3() {
    return useContext(Web3Context);
}
function useHooks(cb) {
    const { hooks  } = useWeb3();
    return cb(hooks);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2476:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Breadcrumbs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4844);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_common__WEBPACK_IMPORTED_MODULE_1__]);
_components_ui_common__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const BreadcrumbItem = ({ item , index  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: `${index == 0 ? "pr-4" : "px-4"} font-medium text-gray-500 hover:text-gray-900`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_1__/* .ActiveLink */ .O$, {
            href: item.href,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                children: item.value
            })
        })
    }));
};
function Breadcrumbs({ items , isAdmin  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        "aria-label": "breadcrumb",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
            className: "flex leading-none text-indigo-600 divide-x divide-indigo-400",
            children: items.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                    children: [
                        !item.requireAdmin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BreadcrumbItem, {
                            item: item,
                            index: i
                        }),
                        item.requireAdmin && isAdmin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BreadcrumbItem, {
                            item: item,
                            index: i
                        })
                    ]
                }, item.href)
            )
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SIZE = {
    sm: "p-2 text-base xs:px-4",
    md: "p-3 text-base xs:px-8",
    lg: "p-3 text-lg xs:px-8"
};
function Button({ children , className , size ="md" , hoverable =true , variant ="purple" , ...rest }) {
    const sizeClass = SIZE[size];
    const variants = {
        white: `text-black bg-white`,
        purple: `text-white bg-indigo-600 ${hoverable && "hover:bg-indigo-700"}`,
        red: `text-white bg-red-600 ${hoverable && "hover:bg-red-700"}`,
        lightPurple: `text-indigo-700 bg-indigo-100 ${hoverable && "hover:bg-indigo-200"}`,
        green: `text-white bg-green-600 ${hoverable && "hover:bg-green-700"}`
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        ...rest,
        className: `${sizeClass} disabled:opacity-50 disabled:cursor-not-allowed border rounded-md font-medium ${className} ${variants[variant]}`,
        children: children
    }));
};


/***/ }),

/***/ 456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Footer() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "bg-gray-900 pt-1",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container mx-auto px-6",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-5 flex flex-col items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "py-6",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "mb-6 text-white text-sm text-primary-2 font-bold",
                        children: [
                            "\xa9 ",
                            new Date().getFullYear(),
                            " Eincode"
                        ]
                    })
                })
            })
        })
    }));
};


/***/ }),

/***/ 464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Hero() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "lg:2/6 text-left my-28",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-6xl font-semibold text-gray-900 leading-none",
                children: "Grow your career as a developer"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-6 text-xl font-light text-true-gray-500 antialiased",
                children: "Learn programming and web development the easy way! Get unlimited access to all of our courses."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-5 sm:mt-8 flex lg:justify-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "rounded-md shadow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10",
                        children: "Get started"
                    })
                })
            })
        ]
    }));
};


/***/ }),

/***/ 4844:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* reexport safe */ _footer__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "wp": () => (/* reexport safe */ _navbar__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "Oo": () => (/* reexport safe */ _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "VM": () => (/* reexport safe */ _hero__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "u_": () => (/* reexport safe */ _modal__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "zx": () => (/* reexport safe */ _button__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "O$": () => (/* reexport safe */ _link__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "v0": () => (/* reexport safe */ _message__WEBPACK_IMPORTED_MODULE_7__.Z),
/* harmony export */   "aN": () => (/* reexport safe */ _loader__WEBPACK_IMPORTED_MODULE_8__.Z)
/* harmony export */ });
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(456);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6276);
/* harmony import */ var _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2476);
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(464);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2146);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6924);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8541);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8453);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4269);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_navbar__WEBPACK_IMPORTED_MODULE_1__, _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__]);
([_navbar__WEBPACK_IMPORTED_MODULE_1__, _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ActiveLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




function ActiveLink({ children , activeLinkClass , ...props }) {
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let className = children.props.className || "";
    if (pathname === props.href) {
        className = `${className} ${activeLinkClass ? activeLinkClass : "text-purple-600"}`;
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        ...props,
        children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(children, {
            className
        })
    }));
};


/***/ }),

/***/ 4269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SIZES = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12"
};
function Loader({ size  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `spinner ${SIZES[size]}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "double-bounce1"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "double-bounce2"
            })
        ]
    }));
};


/***/ }),

/***/ 8453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Message)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const TYPES = {
    success: "green",
    warning: "yellow",
    danger: "red",
    lightBlue: "blue"
};
const BG_CLASSES = {
    success: "bg-green-100",
    warning: "bg-yellow-100",
    danger: "bg-red-100",
    lightBlue: "bg-blue-100"
};
const TEXT_CLASSES = {
    success: "text-green-800",
    warning: "text-yellow-800",
    danger: "text-red-800",
    lightBlue: "text-blue-800"
};
const SIZES = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
};
function Message({ children , type ="success" , size ="md"  }) {
    const { 0: isDisplayed , 1: setIsDisplayed  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    if (!isDisplayed) {
        return null;
    }
    const messageSizeClass = SIZES[size];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${BG_CLASSES[type]} rounded-xl mb-3`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-7xl mx-auto py-2 px-1",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-between flex-wrap",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-0 flex-1 flex items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `ml-3 ${messageSizeClass} font-medium ${TEXT_CLASSES[type]}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "inline",
                                children: children
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "order-2 flex-shrink-0 sm:order-3 sm:ml-3",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            onClick: ()=>setIsDisplayed(false)
                            ,
                            type: "button",
                            className: "-mr-1 flex p-2 rounded-md focus:outline-none focus:ring-2 sm:-mr-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sr-only",
                                    children: "Dismiss"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    className: `h-6 w-6 ${TEXT_CLASSES[type]}`,
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M6 18L18 6M6 6l12 12"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};


/***/ }),

/***/ 2146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Modal({ isOpen , children  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${!isOpen && "hidden"} fixed z-10 inset-0 overflow-y-auto"`,
            "aria-labelledby": "modal-title",
            role: "dialog",
            "aria-modal": "true",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
                children: [
                    isOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                        "aria-hidden": "true"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                        "aria-hidden": "true",
                        children: "​"
                    }),
                    children
                ]
            })
        })
    }));
};


/***/ }),

/***/ 6276:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4853);
/* harmony import */ var _components_ui_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4844);
/* harmony import */ var _components_hooks_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2445);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_providers__WEBPACK_IMPORTED_MODULE_1__, _components_ui_common__WEBPACK_IMPORTED_MODULE_2__, _components_hooks_web3__WEBPACK_IMPORTED_MODULE_3__]);
([_components_providers__WEBPACK_IMPORTED_MODULE_1__, _components_ui_common__WEBPACK_IMPORTED_MODULE_2__, _components_hooks_web3__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function Navbar() {
    const { connect , isLoading , requireInstall  } = (0,_components_providers__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3 */ .$)();
    const { account  } = (0,_components_hooks_web3__WEBPACK_IMPORTED_MODULE_3__/* .useAccount */ .mA)();
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative pt-6 px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                    className: "relative",
                    "aria-label": "Global",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col xs:flex-row justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_2__/* .ActiveLink */ .O$, {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "font-medium mr-8 text-gray-500 hover:text-gray-900",
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_2__/* .ActiveLink */ .O$, {
                                        href: "/marketplace",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "font-medium mr-8 text-gray-500 hover:text-gray-900",
                                            children: "Marketplace"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_2__/* .ActiveLink */ .O$, {
                                        href: "/blogs",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "font-medium mr-8 text-gray-500 hover:text-gray-900",
                                            children: "Blogs"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_2__/* .ActiveLink */ .O$, {
                                        href: "/wishlist",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "font-medium sm:mr-8 mr-1 text-gray-500 hover:text-gray-900",
                                            children: "Wishlist"
                                        })
                                    }),
                                    isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                        disabled: true,
                                        onClick: connect,
                                        children: "Loading..."
                                    }) : account.data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_common__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                        hoverable: false,
                                        className: "cursor-default",
                                        children: [
                                            "Hi there ",
                                            account.isAdmin && "EL ADMIN"
                                        ]
                                    }) : requireInstall ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                        onClick: ()=>window.open("https://metamask.io/download.html", "_blank")
                                        ,
                                        children: "Install Metamask"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                        onClick: connect,
                                        children: "Connect"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            account.data && !pathname.includes("/marketplace") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-end pt-1 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-white bg-purple-500 rounded-md p-2",
                    children: account.data
                })
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 718:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BaseLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4853);
/* harmony import */ var _components_ui_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4844);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_providers__WEBPACK_IMPORTED_MODULE_1__, _components_ui_common__WEBPACK_IMPORTED_MODULE_2__]);
([_components_providers__WEBPACK_IMPORTED_MODULE_1__, _components_ui_common__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function BaseLayout({ children  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3Provider */ .Q, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-7xl mx-auto px-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_2__/* .Navbar */ .wp, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "fit",
                        children: children
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_2__/* .Footer */ .$_, {})
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2720:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_base__WEBPACK_IMPORTED_MODULE_0__]);
_base__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ManagedServiceCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Item = ({ title , value , className  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${className} px-4 py-3  sm:px-6`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-sm font-medium text-gray-500",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",
                children: value
            })
        ]
    }));
};
function ManagedServiceCard({ children , service , isSearched =false  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${isSearched ? "border-indigo-600" : "bg-gray-200"} bg-white border shadow overflow-hidden sm:rounded-lg mb-3`,
        children: [
            Object.keys(service).map((key, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                    className: `${i % 2 ? "bg-gray-50" : "bg-white"}`,
                    title: key[0].toUpperCase() + key.slice(1),
                    value: service[key]
                }, key)
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-white px-4 py-5 sm:px-6",
                children: children
            })
        ]
    }));
};


/***/ }),

/***/ 1654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ OwnedServiceCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6762);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__);



const STATE_COLORS = {
    purchased: "indigo",
    activated: "green",
    deactivated: "red"
};
function OwnedServiceCard({ children , service  }) {
    const stateColor = STATE_COLORS[service.state];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__.Fade, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "bg-white border shadow overflow-hidden sm:rounded-lg mb-3",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "block sm:flex",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-72 sm:h-full next-image-wrapper",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                className: "object-cover",
                                src: service.coverImage,
                                width: "45",
                                height: "45",
                                layout: "responsive"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "px-4 py-5 sm:px-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                        className: "text-lg leading-6 font-medium text-gray-900",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "mr-2",
                                                children: service.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: `text-sm text-${stateColor}-700 bg-${stateColor}-200 rounded-full p-2`,
                                                children: service.state
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "mt-1 max-w-2xl text-sm text-gray-500",
                                        children: [
                                            service.price,
                                            " ETH"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "border-t border-gray-200",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "bg-gray-50 px-4 py-5 sm:px-6",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                    className: "text-sm font-medium text-gray-500",
                                                    children: "ID"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                    className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",
                                                    children: service.ownedServiceId
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "bg-white px-4 py-5 sm:px-6",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                    className: "text-sm font-medium text-gray-500",
                                                    children: "Proof"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                    className: "mt-1 text-sm break-words text-gray-900 sm:mt-0 sm:col-span-2",
                                                    children: service.proof
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-white px-4 py-5 sm:px-6",
                                            children: children
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    }));
};


/***/ }),

/***/ 4250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react_simple_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5690);
/* harmony import */ var react_simple_animate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_simple_animate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6762);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__);





function Card({ service , disabled , Footer , state  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__.Fade, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex h-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-1 next-image-wrapper",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            className: `object-cover ${disabled && "filter grayscale"}`,
                            src: service.coverImage,
                            width: "180",
                            height: "210",
                            layout: "responsive",
                            alt: service.title
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "p-8 pb-4 flex-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "uppercase mr-2 tracking-wide text-sm text-indigo-500 font-semibold",
                                        children: service.type
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            state === "activated" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-xs text-black bg-green-200 p-1 px-3 rounded-full",
                                                children: "Activated"
                                            }),
                                            state === "deactivated" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-xs text-black bg-red-200 p-1 px-3 rounded-full",
                                                children: "Deactivated"
                                            }),
                                            state === "purchased" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_simple_animate__WEBPACK_IMPORTED_MODULE_3__.AnimateKeyframes, {
                                                play: true,
                                                duration: 2,
                                                keyframes: [
                                                    "opacity: 0.2",
                                                    "opacity: 1"
                                                ],
                                                iterationCount: "infinite",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-xs text-black bg-yellow-200 p-1 px-3 rounded-full",
                                                    children: "Pending"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                href: `/services/${service.slug}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "h-12 block mt-1 text-sm sm:text-base leading-tight font-medium text-black hover:underline",
                                    children: service.title
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "mt-2 mb-4 text-sm sm:text-base text-gray-500",
                                children: [
                                    service.description.substring(0, 70),
                                    "..."
                                ]
                            }),
                            Footer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Footer, {})
                            })
                        ]
                    })
                ]
            })
        })
    }));
};


/***/ }),

/***/ 6009:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Curriculum)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4844);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_common__WEBPACK_IMPORTED_MODULE_1__]);
_components_ui_common__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const lectures = [
    "How to init App",
    "How to get a help",
    "Introduction to Solidity",
    "Programing in C++",
    "How to write For Loops",
    "Safe operator", 
];
function Curriculum({ locked , serviceState , isLoading  }) {
    const statusClass = "px-2 inline-flex text-xs leading-5 font-semibold rounded-full";
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "max-w-5xl mx-auto",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex flex-col",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                            className: "min-w-full divide-y divide-gray-200",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                    className: "bg-gray-50",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                scope: "col",
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                children: "Section 1"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                scope: "col",
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                children: "Status"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                scope: "col",
                                                className: "relative px-6 py-3",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "sr-only",
                                                    children: "Edit"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                    className: "bg-white divide-y divide-gray-200",
                                    children: lectures.map((lec)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "px-6 py-4 whitespace-nowrap",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex items-center",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "ml-4",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text-sm font-medium text-gray-900",
                                                                children: lec
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "px-6 py-4 whitespace-nowrap",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: locked ? `bg-red-100 text-red-800 ${statusClass}` : `bg-green-100 text-green-800 ${statusClass}`,
                                                        children: locked ? "Locked" : "Unlocked"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
                                                    children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_1__/* .Loader */ .aN, {}) : locked ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            serviceState === "deactivated" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                                href: "/marketplace",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "text-indigo-600 hover:text-indigo-900",
                                                                    children: "Get Access"
                                                                })
                                                            }),
                                                            serviceState === "purchased" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                                href: "/faq",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "text-yellow-500 hover:text-yellow-900",
                                                                    children: "Waiting for activation"
                                                                })
                                                            })
                                                        ]
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                        href: "/access",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "text-indigo-600 hover:text-indigo-900",
                                                            children: "Access"
                                                        })
                                                    })
                                                })
                                            ]
                                        }, lec)
                                    )
                                })
                            ]
                        })
                    })
                })
            })
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2397:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ServiceFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4844);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_common__WEBPACK_IMPORTED_MODULE_1__]);
_components_ui_common__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const OPTIONS = [
    "all",
    "purchased",
    "activated",
    "deactivated"
];
function ServiceFilter({ onSearchSubmit , onFilterSelect  }) {
    const { 0: searchText , 1: setSearchTest  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col md:flex-row items-center my-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex mr-2 relative rounded-md",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onChange: ({ target: { value  }  })=>setSearchTest(value)
                        ,
                        value: searchText,
                        type: "text",
                        name: "serviceHash",
                        id: "serviceHash",
                        className: "w-52 xs:w-96 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md",
                        placeholder: "0x2341ab..."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .zx, {
                        onClick: ()=>onSearchSubmit(searchText)
                        ,
                        children: "Search"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative text-gray-700",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                        onChange: ({ target: { value  }  })=>onFilterSelect(value)
                        ,
                        className: "w-72 h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline",
                        placeholder: "Regular input",
                        children: OPTIONS.map((option)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: option,
                                children: option
                            }, option)
                        )
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            className: "w-4 h-4 fill-current",
                            viewBox: "0 0 20 20",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                clipRule: "evenodd",
                                fillRule: "evenodd"
                            })
                        })
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ServiceHero)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);


function ServiceHero({ title , description , image , hasOwner  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative bg-white overflow-hidden",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-7xl mx-auto",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                className: "hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2",
                                fill: "currentColor",
                                viewBox: "0 0 100 100",
                                preserveAspectRatio: "none",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
                                    points: "50,0 100,0 50,100 0,100"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative pt-6 px-4 sm:px-6 lg:px-8"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                                className: "mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "sm:text-center lg:text-left",
                                    children: [
                                        hasOwner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-xl inline-block p-4 py-2 rounded-full font-bold bg-green-200 text-green-700",
                                            children: "You have purchased:"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                            className: "text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "block xl:inline",
                                                    children: title.substring(0, title.length / 2)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "block text-indigo-600 xl:inline",
                                                    children: title.substring(title.length / 2)
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0",
                                            children: description
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "rounded-md shadow",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#",
                                                        className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10",
                                                        children: "Get started"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mt-3 sm:mt-0 sm:ml-3",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#",
                                                        className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10",
                                                        children: "Watch"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        className: "h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",
                        src: image,
                        alt: title,
                        layout: "fill"
                    })
                })
            ]
        })
    }));
};


/***/ }),

/***/ 2834:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$4": () => (/* reexport safe */ _list__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "WF": () => (/* reexport safe */ _card__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "ZZ": () => (/* reexport safe */ _card_Owned__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "F6": () => (/* reexport safe */ _card_Managed__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "NX": () => (/* reexport safe */ _curriculum__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "s6": () => (/* reexport safe */ _hero__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "Zb": () => (/* reexport safe */ _keypoints__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "qv": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_7__.Z)
/* harmony export */ });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8948);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4250);
/* harmony import */ var _card_Owned__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1654);
/* harmony import */ var _card_Managed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3767);
/* harmony import */ var _curriculum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6009);
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9485);
/* harmony import */ var _keypoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5253);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2397);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_curriculum__WEBPACK_IMPORTED_MODULE_4__, _filter__WEBPACK_IMPORTED_MODULE_7__]);
([_curriculum__WEBPACK_IMPORTED_MODULE_4__, _filter__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Keypoints)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Keypoints({ points  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "py-12 bg-white",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dl", {
                        className: "space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10",
                        children: points.map((point, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dt", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    className: "h-6 w-6",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M13 10V3L4 14h7v7l9-11h-7z"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "ml-16 text-lg leading-6 font-medium text-gray-900",
                                                children: [
                                                    "Keypoint ",
                                                    i + 1
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                        className: "mt-2 ml-16 text-base text-gray-500",
                                        children: point
                                    })
                                ]
                            }, point)
                        )
                    })
                })
            })
        })
    }));
};


/***/ }),

/***/ 8948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ServiceList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ServiceList({ services , children  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5",
        children: services.map((service)=>children(service)
        )
    }));
};


/***/ }),

/***/ 1582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ createServiceHash)
/* harmony export */ });
const createServiceHash = (web3)=>(serviceId, account)=>{
        const hexServiceId = web3.utils.utf8ToHex(serviceId);
        const serviceHash = web3.utils.soliditySha3({
            type: "bytes16",
            value: hexServiceId
        }, {
            type: "address",
            value: account
        });
        return serviceHash;
    }
;


/***/ }),

/***/ 8520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ loadContract)
/* harmony export */ });
const NETWORK_ID = "3";
const loadContract = async (name, web3)=>{
    const res = await fetch(`/contracts/${name}.json`);
    const Artifact = await res.json();
    let contract = null;
    try {
        contract = new web3.eth.Contract(Artifact.abi, Artifact.networks[NETWORK_ID].address);
    } catch  {
        console.log(`Contract ${name} cannot be loaded`);
    }
    return contract;
} // export const loadContract = async (name, provider) => {
 //     const res = await fetch(`/contracts/${name}.json`)
 //     const Artifact = await res.json()
 //     const _contract = window.TruffleContract(Artifact)
 //     _contract.setProvider(provider)
 //     let deployedContract = null
 //     try {
 //         deployedContract = await _contract.deployed()
 //     } catch {
 //         console.log (`Contract ${name} cannot be loaded`)
 //     }
 //     return deployedContract
 // }
;


/***/ }),

/***/ 413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ normalizeOwnedService)
/* harmony export */ });
/* unused harmony export SERVICE_STATES */
const SERVICE_STATES = {
    0: "purchased",
    1: "activated",
    2: "deactivated"
};
const normalizeOwnedService = (web3)=>(service, ownedService)=>{
        return {
            ...service,
            ownedServiceId: ownedService.id,
            proof: ownedService.proof,
            owned: ownedService.owner,
            price: web3.utils.fromWei(ownedService.price),
            state: SERVICE_STATES[ownedService.state]
        };
    }
;


/***/ })

};
;
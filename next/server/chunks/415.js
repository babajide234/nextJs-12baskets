"use strict";
exports.id = 415;
exports.ids = [415];
exports.modules = {

/***/ 2466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eE": () => (/* binding */ instance),
/* harmony export */   "x4": () => (/* binding */ login),
/* harmony export */   "Xv": () => (/* binding */ details),
/* harmony export */   "LK": () => (/* binding */ getTeams),
/* harmony export */   "Cm": () => (/* binding */ createTeam),
/* harmony export */   "r8": () => (/* binding */ getStores),
/* harmony export */   "AU": () => (/* binding */ getOrders),
/* harmony export */   "f0": () => (/* binding */ assign),
/* harmony export */   "MT": () => (/* binding */ createStore),
/* harmony export */   "xW": () => (/* binding */ editStore),
/* harmony export */   "Xp": () => (/* binding */ getProducts),
/* harmony export */   "LT": () => (/* binding */ createProducts),
/* harmony export */   "CP": () => (/* binding */ getCategories),
/* harmony export */   "wB": () => (/* binding */ uploadCSV)
/* harmony export */ });
/* unused harmony exports fileUpload, getSubCategories, upload */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_userStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8660);


const base_URL = `https://api.12basketsfoods.com/`;
const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: base_URL
});
function login(email, passcode) {
    const postData = {
        email,
        passcode
    };
    return instance.post('account/login', postData);
}
function details(token) {
    const postData = {
        token: token
    };
    return instance.post('panel/details', postData);
}
function getTeams(data) {
    const postData = {
        token: data.token,
        email: data.email,
        role: data.role
    };
    return instance.post('panel/teams', postData);
}
function createTeam(data) {
    const postData = {
        token: data.token,
        store_id: data.store_id,
        email: data.email,
        role: data.role
    };
    return instance.post('store/add-teams', postData);
}
function getStores(data) {
    const postData = {
        token: data.token,
        store_id: data.store_id,
        location: data.location,
        store: data.store,
        page: data.page,
        limit: data.limit
    };
    return instance.post('store/list', postData);
}
function getOrders(data) {
    const postData = {
        token: data.token,
        reference_code: data.reference_code,
        account: data.account,
        from: data.from,
        to: data.to,
        payment_status: data.payment_status,
        order_status: data.order_status //enum: Successful or Pending or Failed
    };
    return instance.post('order/details', postData);
}
function assign(data) {
    const postData = {
        token: data.token,
        email: data.email,
        store_id: data.store_id,
        reference_code: data.reference_code
    };
    return instance.post('order/attach-rider', postData);
}
function createStore(data) {
    const postData = {
        token: data.token,
        name: data.name,
        phone: data.phone,
        email: data.email,
        address: data.address
    };
    return instance.post('store/create', postData);
}
function editStore(data) {
    const postData = {
        token: data.token,
        store_id: data.store_id,
        name: data.name,
        address: data.address,
        description: data.description,
        logo: data.photo
    };
    return instance.post('store/update-account', postData);
}
function getProducts(data) {
    const postData = {
        token: data.token,
        id: data.id,
        store_id: data.store_id,
        category_id: data.category_id,
        sub_category_id: data.sub_category_id,
        location: data.location,
        store: data.store,
        orderBy: data.orderBy,
        active: data.active
    };
    return instance.post('store/products', postData);
}
function createProducts(data) {
    const postData = {
        token: data.token,
        store_id: data.store_id,
        name: data.name,
        quantity: data.quantity,
        amount: data.amount,
        details: data.details,
        weight: data.weight,
        category_id: data.category_id,
        sub_category_id: data.sub_category_id,
        main_photo: data.main_photo,
        photo_a: data.photo_a,
        photo_b: data.photo_b,
        photo_c: data.photo_c,
        photo_d: data.photo_d,
        photo_e: data.photo_e,
        active: data.active
    };
    return instance.post('store/add-product', postData);
}
function fileUpload(data) {
    const postData = {
    };
    return instance.post('misc/category', postData);
}
function getCategories(data) {
    const postData = {
        token: data.token,
        category_id: data.category_id
    };
    return instance.post('misc/category', postData);
}
function getSubCategories(data) {
    const postData = {
    };
    return instance.post('misc/sub-category', postData);
}
function upload(data) {
    return instance.post("misc/file-upload", data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}
function uploadCSV(data) {
    return instance.post("misc/file-upload", data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}


/***/ }),

/***/ 8016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ AlertStore)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5671);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zustand__WEBPACK_IMPORTED_MODULE_0__);

const AlertStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set, get)=>({
        messageStatus: false,
        messageType: null,
        message: '',
        setMessage (value) {
            set((state)=>({
                    ...state,
                    message: value
                })
            );
        },
        setStatus (value) {
            set((state)=>({
                    ...state,
                    messageStatus: value
                })
            );
        },
        setType (value) {
            set((state)=>({
                    ...state,
                    messageType: value
                })
            );
        }
    })
);


/***/ }),

/***/ 8660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useUserStore)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5671);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zustand__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4265);
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zustand_middleware__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _alertSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8016);
/* harmony import */ var _hooks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2466);




const useUserStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_1__.persist)((set, get)=>({
        isAuthenticated: false,
        loading: false,
        user: '',
        role: '',
        details: {
        },
        message: null,
        setMessage (value) {
            set((state)=>({
                    ...state,
                    message: value
                })
            );
        },
        setIsAuth (value) {
            set((state)=>({
                    ...state,
                    isAuthenticated: value
                })
            );
        },
        login (email, passcode) {
            set((state)=>({
                    ...state,
                    loading: true
                })
            );
            (0,_hooks_service__WEBPACK_IMPORTED_MODULE_3__/* .login */ .x4)(email, passcode).then((res)=>{
                console.log(res);
                if (res.data.status == "success") {
                    set((state)=>({
                            ...state,
                            isAuthenticated: true
                        })
                    );
                    set((state)=>({
                            ...state,
                            user: res.data.token
                        })
                    );
                    set((state)=>({
                            ...state,
                            details: res.data.data
                        })
                    );
                    set((state)=>({
                            ...state,
                            loading: false
                        })
                    );
                    get().setMessage(res.data.message);
                    _alertSlice__WEBPACK_IMPORTED_MODULE_2__/* .AlertStore.getState */ .q.getState().setMessage(res.data.message);
                    _alertSlice__WEBPACK_IMPORTED_MODULE_2__/* .AlertStore.getState */ .q.getState().setStatus(true);
                    _alertSlice__WEBPACK_IMPORTED_MODULE_2__/* .AlertStore.getState */ .q.getState().setType('success');
                } else {
                    set((state)=>({
                            ...state,
                            loading: false
                        })
                    );
                    get().setMessage(res.data.message);
                    _alertSlice__WEBPACK_IMPORTED_MODULE_2__/* .AlertStore.getState */ .q.getState().setMessage(res.data.message);
                    _alertSlice__WEBPACK_IMPORTED_MODULE_2__/* .AlertStore.getState */ .q.getState().setStatus(true);
                    _alertSlice__WEBPACK_IMPORTED_MODULE_2__/* .AlertStore.getState */ .q.getState().setType('error');
                }
            });
        },
        logout () {
            set((state)=>({
                    ...state,
                    isAuthenticated: false
                })
            );
            set((state)=>({
                    ...state,
                    user: ''
                })
            );
        },
        setDetials () {
            (0,_hooks_service__WEBPACK_IMPORTED_MODULE_3__/* .details */ .Xv)(get().user).then((res)=>{
                console.log(res);
                if (res.data.status == "success") {
                    set((state)=>({
                            ...state,
                            details: res.data.data
                        })
                    );
                }
            });
        }
    })
, {
    name: 'user-storage',
    storage: (0,zustand_middleware__WEBPACK_IMPORTED_MODULE_1__.createJSONStorage)(()=>sessionStorage
    )
})) // export default useUserStore
;


/***/ })

};
;
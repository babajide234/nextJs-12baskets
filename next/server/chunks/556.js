"use strict";
exports.id = 556;
exports.ids = [556];
exports.modules = {

/***/ 9556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ useStoreSlice)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5671);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zustand__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2466);
/* harmony import */ var _alertSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8016);
/* harmony import */ var _userStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8660);


// import useUserStore from './userStore'


// const token = useUserStore((state)=> state.user)
const useStoreSlice = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set, get)=>({
        stores: [],
        edit: false,
        add: false,
        loading: false,
        storeId: null,
        setStore (data) {
            set((state)=>({
                    ...state,
                    loading: true
                })
            );
            (0,_hooks_service__WEBPACK_IMPORTED_MODULE_1__/* .getStores */ .r8)(data).then((res)=>{
                console.log(res);
                if (res.data.status == 'success') {
                    set((state)=>({
                            ...state,
                            stores: res.data.data
                        })
                    );
                    set((state)=>({
                            ...state,
                            loading: false
                        })
                    );
                }
            });
        },
        setStoreId (value) {
            set((state)=>({
                    ...state,
                    storeId: value
                })
            );
        },
        setEdit (value) {
            set((state)=>({
                    ...state,
                    edit: value
                })
            );
        },
        setAdd (value) {
            set((state)=>({
                    ...state,
                    add: value
                })
            );
        },
        addStore (data) {
            set((state)=>({
                    ...state,
                    loading: true
                })
            );
            (0,_hooks_service__WEBPACK_IMPORTED_MODULE_1__/* .createStore */ .MT)(data).then((res)=>{
                console.log(res);
                if (res.data.status == 'success') {
                    set((state)=>({
                            ...state,
                            loading: false
                        })
                    );
                    set((state)=>({
                            ...state,
                            add: false
                        })
                    );
                    _alertSlice__WEBPACK_IMPORTED_MODULE_2__/* .AlertStore.getState */ .q.getState().setMessage(res.data.message);
                    _alertSlice__WEBPACK_IMPORTED_MODULE_2__/* .AlertStore.getState */ .q.getState().setStatus(true);
                    _alertSlice__WEBPACK_IMPORTED_MODULE_2__/* .AlertStore.getState */ .q.getState().setType('success');
                    get().refecthStore();
                } else {
                    set((state)=>({
                            ...state,
                            loading: false
                        })
                    );
                    set((state)=>({
                            ...state,
                            add: false
                        })
                    );
                    _alertSlice__WEBPACK_IMPORTED_MODULE_2__/* .AlertStore.getState */ .q.getState().setMessage(res.data.message);
                    _alertSlice__WEBPACK_IMPORTED_MODULE_2__/* .AlertStore.getState */ .q.getState().setStatus(true);
                    _alertSlice__WEBPACK_IMPORTED_MODULE_2__/* .AlertStore.getState */ .q.getState().setType('error');
                }
            });
        },
        editStore (data) {
            set((state)=>({
                    ...state,
                    loading: true
                })
            );
            (0,_hooks_service__WEBPACK_IMPORTED_MODULE_1__/* .editStore */ .xW)(data).then((res)=>{
                console.log(res);
                if (res.data.status == 'success') {
                    set((state)=>({
                            ...state,
                            edit: false
                        })
                    );
                    set((state)=>({
                            ...state,
                            loading: false
                        })
                    );
                    _alertSlice__WEBPACK_IMPORTED_MODULE_2__/* .AlertStore.getState */ .q.getState().setMessage(res.data.message);
                    _alertSlice__WEBPACK_IMPORTED_MODULE_2__/* .AlertStore.getState */ .q.getState().setStatus(true);
                    _alertSlice__WEBPACK_IMPORTED_MODULE_2__/* .AlertStore.getState */ .q.getState().setType('success');
                    get().refecthStore();
                } else {
                    set((state)=>({
                            ...state,
                            loading: false
                        })
                    );
                    _alertSlice__WEBPACK_IMPORTED_MODULE_2__/* .AlertStore.getState */ .q.getState().setMessage(res.data.message);
                    _alertSlice__WEBPACK_IMPORTED_MODULE_2__/* .AlertStore.getState */ .q.getState().setStatus(true);
                    _alertSlice__WEBPACK_IMPORTED_MODULE_2__/* .AlertStore.getState */ .q.getState().setType('error');
                }
            });
        },
        refecthStore () {
            const data = {
                token: _userStore__WEBPACK_IMPORTED_MODULE_3__/* .useUserStore.getState */ .L.getState().user
            };
            get().setStore(data);
        }
    })
) // export default useStoreSlice;
;


/***/ })

};
;
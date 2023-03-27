"use strict";
exports.id = 516;
exports.ids = [516];
exports.modules = {

/***/ 516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ useProductsSlice)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5671);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zustand__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4265);
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zustand_middleware__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2466);



// import useUserStore from './userStore'
// const token = useUserStore((state)=> state.user)
const useProductsSlice = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set, get)=>({
        products: [],
        edit: false,
        add: false,
        categories: [],
        loading: false,
        setProducts (data) {
            set((state)=>({
                    ...state,
                    loading: true
                })
            );
            (0,_hooks_service__WEBPACK_IMPORTED_MODULE_2__/* .getProducts */ .Xp)(data).then((res)=>{
                console.log(res);
                if (res.data.status == 'success') {
                    set((state)=>({
                            ...state,
                            products: res.data.data
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
        setCategories (data) {
            set((state)=>({
                    ...state,
                    loading: true
                })
            );
            (0,_hooks_service__WEBPACK_IMPORTED_MODULE_2__/* .getCategories */ .CP)(data).then((res)=>{
                console.log(res);
                if (res.data.status == 'success') {
                    set((state)=>({
                            ...state,
                            categories: res.data.data
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
        addProduct (data) {
            set((state)=>({
                    ...state,
                    loading: true
                })
            );
            (0,_hooks_service__WEBPACK_IMPORTED_MODULE_2__/* .createProducts */ .LT)(data).then((res)=>{
                console.log(res);
                set((state)=>({
                        ...state,
                        add: false
                    })
                );
            // if(res.data.status == 'success'){
            //     set( state => ({ ...state, teams: res.data.data}))
            // }
            });
        },
        uploadProductCsv (data) {
            (0,_hooks_service__WEBPACK_IMPORTED_MODULE_2__/* .uploadCSV */ .wB)(data).then((res)=>{
                if (res.data.status == "success") {
                }
            });
        }
    })
) // export default useProductsSlice;
;


/***/ })

};
;
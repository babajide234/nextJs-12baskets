"use strict";
exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 5538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useTeamSlice)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5671);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zustand__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4265);
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zustand_middleware__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2466);



// import useUserStore from './userStore'
// const token = useUserStore((state)=> state.user)
const useTeamSlice = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set, get)=>({
        teams: [],
        edit: false,
        add: false,
        loading: false,
        setTeams (data) {
            set((state)=>({
                    ...state,
                    loading: true
                })
            );
            (0,_hooks_service__WEBPACK_IMPORTED_MODULE_2__/* .getTeams */ .LK)(data).then((res)=>{
                console.log(res);
                if (res.data.status == 'success') {
                    set((state)=>({
                            ...state,
                            teams: res.data.data
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
        addTeam (data) {
            set((state)=>({
                    ...state,
                    loading: true
                })
            );
            (0,_hooks_service__WEBPACK_IMPORTED_MODULE_2__/* .createTeam */ .Cm)(data).then((res)=>{
                console.log(res);
            // if(res.data.status == 'success'){
            //     set( state => ({ ...state, teams: res.data.data}))
            // }
            });
        }
    })
) // export default useTeamSlice;
;


/***/ })

};
;
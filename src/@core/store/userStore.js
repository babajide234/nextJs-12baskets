import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { login, details } from '../hooks/service'

const useUserStore = create(
    persist(
        (set,get) =>({
            isAuthenticated:false,
            loading:false,
            user: '',
            details: {},
            setIsAuth(value){
                set( state => ({ ...state, isAuthenticated: value}))
            },
            login(email , passcode){
                set( state => ({ ...state, loading: true}))
                login(email, passcode).then(
                    res => {
                        
                        console.log(res);

                        if(res.data.status == "success"){
                            set( state => ({ ...state, isAuthenticated: true}))
                            set( state => ({ ...state, user: res.data.token}))
                            set( state => ({ ...state, loading: false}))
                        }
                    }
                    )
            },
            logout(){
                    set( state => ({ ...state, isAuthenticated: false}))
                    set( state => ({ ...state, user: ''}))
            },
            setDetials() {
                if(Object.keys(get().details).length !== 0){
                    // console.log('not empty', get().details );
                    console.log('not empty', get().user );

                    return
                }

                details(get().user)
                 .then((res)=>{
                    console.log(res)
                    if( res.data.status == "success" ){
                        set( state => ({ ...state, details: res.data.data }))
                    }
                 })
            }
        }),
        {
            name: 'user-storage', // unique name
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        }
    )
)

export default useUserStore

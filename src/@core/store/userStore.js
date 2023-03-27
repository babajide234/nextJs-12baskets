import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { AlertStore } from './alertSlice';

import { login, details } from '../hooks/service'

export const useUserStore = create(
    persist(
        (set,get) =>({
            isAuthenticated:false,
            loading:false,
            user: '',
            role:'',
            details: {},
            message:null,
            setMessage(value){
                set( state => ({ ...state, message: value}))
            },
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
                            set( state => ({ ...state,  details: res.data.data}))
                            
                            set( state => ({ ...state, loading: false}))
                            get().setMessage(res.data.message)

                            AlertStore.getState().setMessage(res.data.message);
                            AlertStore.getState().setStatus(true);
                            AlertStore.getState().setType('success');

                        } else {
                            set( state => ({ ...state, loading: false}))
                            get().setMessage(res.data.message)
                            AlertStore.getState().setMessage(res.data.message);
                            AlertStore.getState().setStatus(true);
                            AlertStore.getState().setType('error');
                        }
                    }
                    )
            },
            logout(){
                    set( state => ({ ...state, isAuthenticated: false}))
                    set( state => ({ ...state, user: ''}))
            },
            setDetials() {

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

// export default useUserStore

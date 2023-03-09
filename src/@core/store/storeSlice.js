import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { getStores,createStore } from '../hooks/service'

// import useUserStore from './userStore'

// const token = useUserStore((state)=> state.user)

const useStoreSlice = create(
    ( set , get )=>({
        stores:[],
        edit:false,
        add:false,
        loading:false,
        setStore(data){
            set( state => ({ ...state, loading: true}))
            getStores(data).then( (res) => {
                console.log(res)
                if(res.data.status == 'success'){
                    set( state => ({ ...state, stores: res.data.data}))
                    set( state => ({ ...state, loading: false}))
                }
            })
        },
        setEdit(value){
            set(state => ({ ...state, edit: value }))
        },
        setAdd(value){
            set(state => ({ ...state, add: value }))
        },
        addStore(data){
            set( state => ({ ...state, loading: true}))
            createStore(data).then( (res) => {
                console.log(res)
                
                // if(res.data.status == 'success'){
                //     set( state => ({ ...state, teams: res.data.data}))
                // }
            })
        }
    })
)

export default useStoreSlice;
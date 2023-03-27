import { create } from 'zustand'
import { getStores, createStore, editStore } from '../hooks/service'

// import useUserStore from './userStore'
import { AlertStore } from './alertSlice';
import { useUserStore } from './userStore';

// const token = useUserStore((state)=> state.user)

export const useStoreSlice = create(
    ( set , get )=>({
        stores:[],
        edit:false,
        add:false,
        loading:false,
        storeId:null,
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
        setStoreId(value){
            set(state => ({ ...state, storeId: value }))
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
                
                if(res.data.status == 'success'){
                    set( state => ({ ...state, loading: false}))
                    set( state => ({ ...state, add: false}))
                    
                    AlertStore.getState().setMessage(res.data.message);
                    AlertStore.getState().setStatus(true);
                    AlertStore.getState().setType('success');
                    get().refecthStore();
                }else {
                    set( state => ({ ...state, loading: false}))
                    set( state => ({ ...state, add: false}))
                    
                    AlertStore.getState().setMessage(res.data.message);
                    AlertStore.getState().setStatus(true);
                    AlertStore.getState().setType('error');
                }
            })
        },
        editStore(data){
            set( state => ({ ...state, loading: true}))
            editStore(data).then( (res) => {
                console.log(res)
                
                if(res.data.status == 'success'){
                    set( state => ({ ...state, edit: false}))
                    set( state => ({ ...state, loading: false}))
                    
                    AlertStore.getState().setMessage(res.data.message);
                    AlertStore.getState().setStatus(true);
                    AlertStore.getState().setType('success');
                    get().refecthStore();
                }else {
                    set( state => ({ ...state, loading: false}))
                    AlertStore.getState().setMessage(res.data.message);
                    AlertStore.getState().setStatus(true);
                    AlertStore.getState().setType('error');
                }
            })
        },
        refecthStore(){
            const data={
                token: useUserStore.getState().user
            }
            get().setStore(data);
        }
    })
)

// export default useStoreSlice;
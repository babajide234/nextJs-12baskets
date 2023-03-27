import { create } from 'zustand'
import { getOrders,assign } from '../hooks/service'

// import useUserStore from './userStore'
import { AlertStore } from './alertSlice';
import { useUserStore } from './userStore';

// const token = useUserStore((state)=> state.user)

export const orderSlice = create(
    ( set , get )=>({
        orders:[],
        loading:false,
        edit:false,
        add:false,
        loading:false,
        storeRef:null,
        setOrderRef(value){
            set(state => ({ ...state, storeRef: value }))
        },
        setEdit(value){
            set(state => ({ ...state, edit: value }))
        },
        setAdd(value){
            set(state => ({ ...state, add: value }))
        },
        setOrder(data){
            set( state => ({ ...state, loading: true}))
            getOrders(data).then( (res) => {
                console.log(res)
                if(res.data.status == 'success'){
                    set( state => ({ ...state, orders: res.data.data}))
                    set( state => ({ ...state, loading: false}))
                }
            })
        },
        assignRider(data){
            set( state => ({ ...state, loading: true}))
            assign(data).then( (res) => {
                console.log(res)
                if(res.data.status == 'success'){
                    set( state => ({ ...state, loading: false}))
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
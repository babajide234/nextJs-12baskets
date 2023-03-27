import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { getProducts, getCategories, createProducts, uploadCSV } from '../hooks/service'

// import useUserStore from './userStore'

// const token = useUserStore((state)=> state.user)

export const useProductsSlice = create(
    ( set , get )=>({
        products:[],
        edit:false,
        add:false,
        categories: [],
        loading:false,
        setProducts(data){
            set( state => ({ ...state, loading: true}))
            getProducts(data).then( (res) => {
                console.log(res)
                if(res.data.status == 'success'){
                    set( state => ({ ...state, products: res.data.data}))
                    set( state => ({ ...state, loading: false}))
                }
            })
        },
        setCategories(data){
            set( state => ({ ...state, loading: true}))
            getCategories(data).then( (res) => {
                console.log(res)
                if(res.data.status == 'success'){
                    set( state => ({ ...state, categories: res.data.data}))
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
        addProduct(data){
            set( state => ({ ...state, loading: true}))
            createProducts(data).then( (res) => {
                console.log(res)
                set(state => ({ ...state, add: false }))

                // if(res.data.status == 'success'){
                //     set( state => ({ ...state, teams: res.data.data}))
                // }
            })
        },
        uploadProductCsv(data){
            uploadCSV(data).then((res)=>{
                if(res.data.status == "success"){

                }
            })
        }
    })
)

// export default useProductsSlice;
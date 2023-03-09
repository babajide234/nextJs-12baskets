import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { getTeams,createTeam } from '../hooks/service'

// import useUserStore from './userStore'

// const token = useUserStore((state)=> state.user)

const useTeamSlice = create(
    ( set , get )=>({
        teams:[],
        edit:false,
        add:false,
        loading:false,
        setTeams(data){
            set( state => ({ ...state, loading: true}))
            getTeams(data).then( (res) => {
                console.log(res)
                if(res.data.status == 'success'){
                    set( state => ({ ...state, teams: res.data.data}))
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
        addTeam(data){
            set( state => ({ ...state, loading: true}))
            createTeam(data).then( (res) => {
                console.log(res)
                
                // if(res.data.status == 'success'){
                //     set( state => ({ ...state, teams: res.data.data}))
                // }
            })
        }
    })
)

export default useTeamSlice;

import axios from 'axios';
import useUserStore from '../store/userStore';


const base_URL = `https://api.12basketsfoods.com/`;


export const instance = axios.create({
    baseURL:base_URL
});

 
export function login(email, passcode) {
    const postData = {
        email,
        passcode,
    };
    
    return instance.post('account/login',postData)
}

export function details (token) {
    const postData = {
        token : token
    }
    
return instance.post('panel/details',postData);
}

export function getTeams(data){

    const postData = {
        token: data.token,
        store_id: data.id,
        active: data.active,
        email: data.email
    }

    return instance.post('panel/teams', postData);
}

export function createTeam(data){

    const postData = {
        token: data.token,
        email: data.email,
        role: data.role, 
        type: data.type,
        rate: data.rate,
        capped: data.capped
    }

    return instance.post('panel/add-teams', postData);
}

export function getStores(data){

    const postData = {
        token: data.token,
        store_id: data.store_id,
        location: data.location,
        store: data.store,
        page: data.page,
        limit: data.limit
    }

    return instance.post('store/list', postData);
}

export function createStore(data){

    const postData = {
        token: data.token,
        name: data.name,
        phone: data.phone,
        email: data.email,
        address: data.address
    }

    return instance.post('store/create', postData);
}

export function getProducts(data){
    const postData = {
        token: data.token,
        id: data.id,
        store_id: data.store_id,
        category_id: data.category_id,
        sub_category_id: data.sub_category_id,
        location: data.location,
        store: data.store,
        orderBy: data.orderBy,
        active: data.active
    };

    return instance.post('store/products',postData);
}

export function createProducts(data){
    const postData = {
        token: data.token,
        store_id: data.store_id,
        name: data.name,
        quantity: data.quantity,
        amount: data.amount,
        details: data.details,
        weight: data.weight,
        category_id: data.category_id,
        sub_category_id: data.sub_category_id,
        main_photo: data.main_photo,
        photo_a: data.photo_a,
        photo_b: data.photo_b,
        photo_c: data.photo_c,
        photo_d: data.photo_d,
        photo_e: data.photo_e,
        active: data.active
    };

    return instance.post('store/add-product',postData);
}

export function fileUpload(data){
    
    const postData ={

    }

    return instance.post('misc/category',postData)
}

export function getCategories(data){

    const postData ={
        token: data.token,
        category_id: data.category_id
    }

    return instance.post('misc/category',postData)
}

export function getSubCategories(data){

    const postData ={

    }

    return instance.post('misc/sub-category',postData)
}


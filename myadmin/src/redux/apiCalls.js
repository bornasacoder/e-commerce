//import { useDispatch } from "react-redux";
import { publicRequest, userRequest } from "../requestMethods";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { addUserFailure, addUserStart, addUserSuccess, deleteUserFailure, deleteUserStart, deleteUserSuccess, getUserFailure, getUserStart, getUserSuccess, updateUserFailure, updateUserStart, updateUserSuccess } from "./usersCallRedux";

export const login = async(dispatch, user) =>{

    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }

}

export const getUser = async (dispatch) =>{
    dispatch(getUserStart());
    try{
        const res = await userRequest.get("/users");
        dispatch(getUserSuccess(res.data));
        // console.log(res.data);
    }catch(err){
        dispatch(getUserFailure());
    }
}
export const deleteUser = async(id, dispatch) =>{
    dispatch(deleteUserStart());
    try{
        const res = await userRequest.delete(`/users/${id}`);
        dispatch(deleteUserSuccess(id));
    }catch(err){
        dispatch(deleteUserFailure());
    }

}

export const updateUser = async(id, user, dispatch) =>{
    dispatch(updateUserStart());
    try{
        // const res = await userRequest.delete(`/products/${id}`);
        // update

        dispatch(updateUserSuccess({id, user}));
    }catch(err){
        dispatch(updateUserFailure());
    }

}


export const addUser = async(user, dispatch) =>{
    dispatch(addUserStart());
    try{
        const res = await userRequest.post(`/auth/register`, user);
        dispatch(addUserSuccess(res.data));
        console.log(res.data);
    }catch(err){
        dispatch(addUserFailure());
    }

}

export const getProducts = async(dispatch) =>{
    dispatch(getProductStart());
    try{
        const res = await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data));
    }catch(err){
        dispatch(getProductFailure());
    }

}
export const deleteProducts = async(id, dispatch) =>{
    dispatch(deleteProductStart());
    try{
        const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    }catch(err){
        dispatch(deleteProductFailure());
    }

}

export const updateProduct = async(id, product, dispatch) =>{
    dispatch(updateProductStart());
    try{
        // const res = await userRequest.delete(`/products/${id}`);
        // update

        dispatch(updateProductSuccess({id, product}));
    }catch(err){
        dispatch(updateProductFailure());
    }

}


export const addProduct = async(product, dispatch) =>{
    dispatch(addProductStart());
    try{
        const res = await userRequest.post(`/products`, product);
        dispatch(addProductSuccess(res.data));
    }catch(err){
        dispatch(addProductFailure());
    }

}
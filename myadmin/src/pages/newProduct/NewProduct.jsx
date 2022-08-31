import React from 'react'
import { useState } from 'react';
import './newProduct.css'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase"
import { addProduct } from '../../redux/apiCalls';
import { useDispatch } from 'react-redux';

export const NewProduct = () => {

    const [input, setInput] = useState({});
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState([]);
     const dispatch = useDispatch();
    const handleChange = (e)=>{
       setInput(prev=>{
        return {...prev, [e.target.name]: e.target.value}
       })
    }
    const handleCat = (e)=>{
        setCat(e.target.value.split(","));
    }
    const handleClick = (e)=>{
        e.preventDefault();
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);

        
        
        const uploadTask = uploadBytesResumable(storageRef, file);
        
// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
      // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
        case 'paused':
        console.log('Upload is paused');
        break;
        case 'running':
            console.log('Upload is running');
            break;
            default:
            }
        }, 
        (error) => {
            // Handle unsuccessful uploads
        }, 
        () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                const product = { ...input, img: downloadURL, categories: cat};
                addProduct(product, dispatch);
            });
        }
        );
    };
        

  return (
    <div className='newProduct'>
        <h1 className="addProductTitle">New Product</h1>
        <form  className="addProductForm">
            <div className="addProductItem">
                <label htmlFor="">Image</label>
                <input type="file"  id="file" onChange={(e)=>setFile(e.target.files[0])} />
            </div>
            <div className="addProductItem">
                <label htmlFor="">Title</label>
                <input type="text" name='title'  placeholder='Apple Airpods' onChange={handleChange} />
            </div>
            <div className="addProductItem">
                <label htmlFor="">Description</label>
                <input type="text" name='desc'  placeholder='description..' onChange={handleChange} />
            </div>
            <div className="addProductItem">
                <label htmlFor="">Price</label>
                <input type="number" name='price'  placeholder='100' onChange={handleChange} />
            </div>
            <div className="addProductItem">
                <label htmlFor="">Categories</label>
                <input type="text" name=''  placeholder='Jeans, Skirts...' onChange={handleCat} />
            </div>
            <div className="addProductItem">
                <label htmlFor="">Stock</label>
                <select name='inStock' onChange={handleChange} >
                    <option value="true">Yes</option>
                    <option value="false">No</option>

                </select>
            </div>
            <button className='addProductButton' onClick={handleClick}>Create</button>
        </form>
    </div>
  )
}

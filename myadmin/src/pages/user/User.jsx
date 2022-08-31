import React, { useEffect } from 'react'
import './user.css'

import {PermIdentity,CalendarToday,MailOutline,PhoneAndroid,LocationSearching, Publish} from "@material-ui/icons"
import {Link, useLocation} from "react-router-dom";
import { useSelector } from 'react-redux';
import { userRequest } from '../../requestMethods';
export const User = () => {

    const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const user  = useSelector((state)=>state.users.users.find((user)=>user._id === userId))

//   console.log(user);
  
//   useEffect(()=>{
//     const getUser = async() =>{
//              try{
//                 const res = await userRequest.get("users/find/"+ userId);

//              }catch(err){}
//     }
//  },[userId])






  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to='/newuser'>
            <button className='userAddButton'>Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='userShowImg' />
                    <div className="userShowTopTitle">
                        <span className="userShowUserName">{user.username}</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                    <PermIdentity className='userShowIcon'/>
                    <span className="userShowInfoTitle">{user.username}</span>
                    </div>
                    <div className="userShowInfo">
                    <CalendarToday className='userShowIcon'/>
                    <span className="userShowInfoTitle">{user.createdAt}</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                    <PhoneAndroid className='userShowIcon'/>
                    <span className="userShowInfoTitle">+91 849383412</span>
                    </div>
                    <div className="userShowInfo">
                    <MailOutline className='userShowIcon'/>
                    <span className="userShowInfoTitle">{user.email}</span>
                    </div>
                    <div className="userShowInfo">
                    <LocationSearching className='userShowIcon'/>
                    <span className="userShowInfoTitle">India</span>
                </div>
                    
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label htmlFor="">Username</label>
                            <input type="text" placeholder={user.username} className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="">Full Name</label>
                            <input type="text" placeholder={user.username} className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder={user.email} className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="">Phone </label>
                            <input type="text" placeholder='+91 3234242423' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="">Address</label>
                            <input type="text" placeholder='India' className='userUpdateInput' />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&w=600" className='userUpdateImg' alt="" />
                            <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                            <input type="file" id='file' style={{display:"none"}} />
                        </div>
                         <button className='userUpdateButton'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

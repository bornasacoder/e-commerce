import React,{useState, useEffect} from 'react'
import "./widgetsm.css";
import {Visibility} from "@material-ui/icons"
import { userRequest } from '../../requestMethods';
export const WidgetSm = () => {
  const [users, setUsers]  = useState([]);
   useEffect(()=>{
    const getUser = async ()=>{
      try{
          const res =  await userRequest.get("users/?new=true");
          setUsers(res.data);
      }catch(err){}
    };
    getUser();
   },[])
  return (
    <div className='widgetSm'>
        <span className='widgetSmTitle'>New Join Members</span>
        <ul className="WidgetSmList">
          {users.map((user) =>(
               
            <li className="widgetSmListItem" key={user._id}>
            <img src={user.img || 
            "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          className='widgetSmImg' alt="" />
            <div className="widgetSmUser">
                <span className="widgetSmUserName">{user.username}</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className='widgetSmIcon' />
                Display
            </button>
          </li>
          ))}
        </ul>
        </div>
  )
}

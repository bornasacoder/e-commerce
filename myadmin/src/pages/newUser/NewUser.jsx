import './newuser.css';
import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/apiCalls';

const NewUser = () => {

    const [input, setInput] = useState({});
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        setInput(prev=>{
         return {...prev, [e.target.name]: e.target.value}
        })
    }

    const handleClick = (e)=>{
        e.preventDefault();
        const user = { ...input};
        addUser(user, dispatch);

    }
  return (
<div className='newUser'>
    <h1 className="newUserTitle">New User</h1>
    <form  className="newUserForm">
        <div className="newUserItem">
            <label htmlFor="">Username</label>
            <input type="text" name='username' placeholder='john' onChange={handleChange} />
        </div>
        <div className="newUserItem">
            <label htmlFor="">Full Name</label>
            <input type="text" name='fullname' placeholder='John Smith' onChange={handleChange} />
        </div>
        <div className="newUserItem">
            <label htmlFor="">Email</label>
            <input type="email" name='email' placeholder='john@gmail.com' onChange={handleChange} />
        </div>
        <div className="newUserItem">
            <label htmlFor="">Password</label>
            <input type="password" name='password' placeholder='Password' onChange={handleChange} />
        </div>
        <div className="newUserItem">
            <label htmlFor="">Phone</label>
            <input type="text" name='phone' placeholder='+91 9493849384' onChange={handleChange} />
        </div>
        <div className="newUserItem">
            <label htmlFor="">Address</label>
            <input type="text" name='address' placeholder='Haridwar | India' onChange={handleChange} />
        </div>
        <div className="newUserItem">
            <label htmlFor="">Gender</label>
            <div className="newUserGender">
            <input type="radio" name="gender" id='male' value="male" onChange={handleChange}  />
            <label for="male">Male</label>
            <input type="radio" name="gender" id='female' value="female" onChange={handleChange} />
            <label for="female">Female</label>
            <input type="radio" name="gender" id='other' value="other" onChange={handleChange}/>
            <label for="other">Other</label>
            </div>
        </div>
        <button className='newUserButton' onClick={handleClick}>Create</button>
    </form>
</div>
  )
}
export default NewUser



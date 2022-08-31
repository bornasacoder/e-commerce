import React, {useEffect} from 'react'
import './userlist.css'
import {DataGrid} from '@material-ui/data-grid';
import {DeleteOutline} from "@material-ui/icons"
// import { userRows } from '../../dummData';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUser } from '../../redux/apiCalls';

export const UserList = () => {
  //  const [data, setData] = useState(userRows);
  const dispatch = useDispatch();
   const users = useSelector((state)=>state.users?.users)

   useEffect(()=>{
    getUser(dispatch);
 },[dispatch])
//  console.log(users);

   const handleDelete = (id)=>{
    deleteUser(id, dispatch)
   }
    const columns = [
        { field: '_id', headerName: 'ID', width: 200 },
        {
          field: 'username',
          headerName: 'User',
          width: 200,
          renderCell: (params)=>{
            return(
              <div className='userListUser'>
                <img className='userListImg' src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png" alt="" />
                {params.row?.username}
              </div>
            )
          },
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          editable: true,
        },
        {
          field:"action",
          headerName:"Action",
          width:150,
          renderCell:(params) =>{
            return(
              <>
              <Link to={"/users/"+params.row._id}>
              <button className='userListEdit'>Edit</button>
              </Link>
              <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row._id)} />
              </>
            )
          }
        }
      ];
      

      
  return (
    <div className='userList'>
         <DataGrid rows={users}
          columns={columns}
            getRowId={(row)=> row?._id}
             pageSize={8}
              checkboxSelection
               disableSelectionOnClick/>
    </div>
  )
}

import React, { useEffect, useState } from "react";
import BreadCrumb from '../../components/Breadcrumb/Breadcrumb'
import Meta from '../../components/Meta/Meta'
import './User.scss'
const User = () => {


  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));

  }, []);
  // console.log(users)
  return (
    <>
    <Meta title='USER' />
    <BreadCrumb title='USER' />
    <div className='about-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
          <div className='filter-card mb-3'>
              <h3 className='filter-title'>USER PAGE</h3>
              <table>
                  <thead style={{
                    borderBottom: 'solid 3px blue',
                    background: 'green',
                    color: 'white',
                    fontWeight: 'bold', }}>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>USERNAME</th>
                        <th>PHONE</th>
                    </tr>
                    
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.phone}</td>
                      </tr>
                     ))}
                </tbody>
            </table>  
          </div>
          </div>
          <div className='col-9'>
            <div className='row'>
               
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default User
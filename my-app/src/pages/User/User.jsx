import React from 'react'
import BreadCrumb from '../../components/Breadcrumb/Breadcrumb'
import Meta from '../../components/Meta/Meta'
import './User.scss'
const User = () => {
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
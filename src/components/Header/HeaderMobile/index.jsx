import React from 'react'

import './headerMobile.scss'

export default () => {
  return (
    <div>
      <div className='box-content'>
        <div className='hambuguer-menu'>
          <i className='fa fa-bars'></i>
        </div>
        <div className='header-content-profile'>
          <img src='/img/logo-mambo.svg' />
          <div className='image-card'>
            <i className='far fa-user' />
          </div>
        </div>
      </div>
      <div className='content'>
        <div className='content-input'>
          <input placeholder='Procure aqui suas compras' />
          <i className='fa fa-search' />
        </div>
      </div>
    </div>
  )
}

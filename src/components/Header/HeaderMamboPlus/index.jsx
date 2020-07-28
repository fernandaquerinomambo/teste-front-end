import React from 'react'
import './headerMamboPlus.scss'

export default () => {
  return (
    <>
      <header>
        <div className=''>
          <div className='header-content'>
            <p>Fale conosco</p>
            <p>Nossas lojas</p>
            <p>Política de trocas</p>
          </div>
        </div>
      </header>
      <div className='box-content'>
        <div className='content'>
          <img src='/img/mambo.svg' />
          <div className='content-input'>
            <input size='80' placeholder='Procure aqui suas compras' />
            <i className='fas fa-search'></i>
          </div>
          <div>
            <div className='image-card'>
              <img src='/img/perfil.svg' alt='perfil image' />
              <span> Olá,Fulano!</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

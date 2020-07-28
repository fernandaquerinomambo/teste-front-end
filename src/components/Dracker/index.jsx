import React, { useState } from 'react'

import { isMobile } from 'react-device-detect'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './dracker.scss'
import { dracker } from './dracker'

import qs from 'query-string'

export default ({ search }) => {
  const [modal, setModal] = useState(false)
  const [productIndex, setProductIndex] = useState(undefined)
  const [snack, setSnack] = useState(false)
  const [snackText, setSnackText] = useState('')

  console.log(search)
  const queryString = qs.parse(search) || {}
  const isPlus = Boolean(Object.keys(queryString).find((key) => key === 'isMamboPlus'))

  const handleProductModal = (index) => {
    setProductIndex(index)
    setModal(true)
  }

  const openSnack = (text) => {
    setSnackText(text)
    setSnack(true)
    setTimeout(() => {
      setSnack(false)
    }, 3000)
  }

  return (
    <div className='carousel-container'>
      <Slider dots={true} infinite={true} speed={500} slidesToShow={isMobile ? 2 : 5} slidesToScroll={2} arrows={!isMobile}>
        {dracker.products.map((element, index) => {
          return (
            <div key={index}>
              <div className='content-products'>
                <div className='products-info'>
                  {element.productIsMamboPlus === true ? (
                    <div className='relative'>
                      <img className='products-plus' src='./img/Group.svg' alt='mambo-plus' />
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {element.productIsOrganic === true ? (
                    <img className='products-organic' src='./img/organic.svg' alt='organic product' />
                  ) : (
                    <p></p>
                  )}
                  <img src={`/products-images/image${index}.svg`} alt='products-images' />
                  <h3>{element.productBrand}</h3>
                  <span>{element.productName}</span>
                </div>
                <div className='products-buy'>
                  {element.productSalePrice !== '' ? (
                    <p className='product-sale-price'>R$ {element.productSalePrice}</p>
                  ) : (
                    <p></p>
                  )}

                  {isPlus && element.productIsMamboPlus ? (
                    <p className='product-price'>R$ {(element.productPrice * 0.9).toFixed(2)}</p>
                  ) : (
                    <p className='product-price'>R$ {element.productPrice}</p>
                  )}

                  {element.productHasStock === true ? (
                    <button className='product-has-stock' onClick={() => openSnack(element.productName)}>
                      Adicionar
                    </button>
                  ) : (
                    <button className='product-no-has-stock'>Produto indisponivel</button>
                  )}
                </div>
                <div className='modal'>
                  {!isMobile && (
                    <button onClick={() => handleProductModal(index)}>
                      <i className='fa fa-eye' />
                      Espiar
                    </button>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
      {modal && (
        <>
          <div className='modal-bg' onClick={() => (setModal(false), setProductIndex(undefined))}></div>
          <div className='modal-flex'>
            <div className='modalProduct'>
              <div className='modal-info'>
                <div className='content-product'>
                  <div>
                    <img className='product-image-modal' src={`./products-images/image${productIndex}.svg`} />
                  </div>
                  <div className='product-info'>
                    <div className='product-top'>
                      <div>
                        <h3>{dracker.products[productIndex].productBrand}</h3>
                        <p>{dracker.products[productIndex].productName}</p>
                      </div>
                      <div className='star'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <p>(1)</p>
                      </div>
                      <div className='icons-mambo-organic'>
                        <p>
                          {dracker.products[productIndex].productIsOrganic === true ? (
                            <>
                              <div>
                                <img src='./img/organic.svg' alt='organic product' />
                                <p>Organico</p>
                              </div>
                            </>
                          ) : (
                            <> </>
                          )}
                        </p>
                      </div>
                    </div>
                    <div className='price'>
                      <p>R$ {dracker.products[productIndex].productPrice}</p>
                      {dracker.products[productIndex].productHasStock === true ? (
                        <button
                          className='product-has-stock'
                          onClick={() => openSnack(dracker.products[productIndex].productName)}
                        >
                          Adicionar
                        </button>
                      ) : (
                        <button className='product-no-has-stock'>Produto indisponivel</button>
                      )}
                    </div>
                  </div>
                  <div className='close-modal'>
                    <i className='fas fa-times' onClick={() => (setModal(false), setProductIndex(undefined))}></i>
                  </div>
                </div>
                <div className='modal-carousel'>
                  <Slider dots={true} infinite={true} speed={500} slidesToShow={3} slidesToScroll={1}>
                    <img src={`./products-images/image${productIndex}.svg`} />
                    <img src={`./products-images/image${productIndex}.svg`} />
                    <img src={`./products-images/image${productIndex}.svg`} />
                    <img src={`./products-images/image${productIndex}.svg`} />
                  </Slider>
                </div>
                <div className='description-info'>
                  <p className='description'>Descrição do produto</p>
                  <p className='product-description'>{dracker.products[productIndex].productDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {snack && (
        <div className='snack'>
          <div className='snack-content'>
            <div className='snack-status'>
              <i onClick={() => setSnack(false)} className='fas fa-check'></i>
            </div>
            <div className='snack-info'>
              <p className='product-name'>{snackText}</p>
              <p className='text'>Adicionado com Sucesso!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

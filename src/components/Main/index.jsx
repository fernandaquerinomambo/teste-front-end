import React from 'react'
import './home.scss'

import { isMobile } from 'react-device-detect'

import MobileFooter from '../Footer/MobileFooter'
import DesktopFooter from '../Footer/DesktopFooter'

import HeaderDesktop from '../Header/HeaderDesktop/index'
import HeaderMobile from '../Header/HeaderMobile/index'

import HeaderMamboPlus from '../Header/HeaderMamboPlus'

import Carousel from 'nuka-carousel'
import Dracker from '../Dracker'

import qs from 'query-string'

const renderTopCenterControls = ({ currentSlide }) => {
  return <div></div>
}
const renderCenterLeftControls = ({ previousSlide }) => {
  return (
    <button className='carousel-button carousel-button-left' onClick={previousSlide}>
      <i className='fa fa-chevron-left' />
    </button>
  )
}
const renderCenterRightControls = ({ nextSlide }) => {
  return (
    <button className='carousel-button carousel-button-right' onClick={nextSlide}>
      <i className='fa fa-chevron-right' />
    </button>
  )
}

export default (props) => {
  const queryString = qs.parse(props.location.search) || {}
  const isPlus = Boolean(Object.keys(queryString).find((key) => key === 'isMamboPlus'))

  return (
    <>
      {!isPlus ? !isMobile ? <HeaderDesktop /> : <HeaderMobile /> : <HeaderMamboPlus />}
      <div className='container'>
        <div className='content-home'>
          <Carousel
            renderTopCenterControls={renderTopCenterControls}
            renderCenterLeftControls={renderCenterLeftControls}
            renderCenterRightControls={renderCenterRightControls}
          >
            <img className='image-home' src='/img/imageHome.svg' alt='home' />
            <img className='image-home' src='/img/imageHome.svg' alt='home' />
            <img className='image-home' src='/img/imageHome.svg' alt='home' />
            <img className='image-home' src='/img/imageHome.svg' alt='home' />
          </Carousel>
          <div className='content-delivery'>
            <img src='/img/imageDelivery.svg' className='delivery-image' alt='delivery' />
            <img src='/img/imageDelivery.svg' className='delivery-image' alt='delivery' />
            <img src='/img/imageDelivery.svg' className='delivery-image' alt='delivery' />
          </div>
        </div>

        <Dracker search={props.location.search} />
        <div className='essential'>
          <div className='essential-text'>
            <p>Essenciais para o seu dia a dia.</p>
          </div>
          <div className='essential-product-imgs'>
            <div>
              <img src='./img/recomend.svg' alt='recomend-items' />
              <p>Frutas</p>
            </div>
            <div>
              <img src='./img/recomend.svg' alt='recomend-items' />
              <p>Frutas</p>
            </div>
            <div>
              <img src='./img/recomend.svg' alt='recomend-items' />
              <p>Frutas</p>
            </div>
            <div>
              <img src='./img/recomend.svg' alt='recomend-items' />
              <p>Frutas</p>
            </div>
          </div>
        </div>
        <div className='img-footer'>
          <img src='/img/imageFooter.svg' alt='footer' />
        </div>

        {!isMobile ? <DesktopFooter /> : <MobileFooter />}
      </div>
    </>
  )
}

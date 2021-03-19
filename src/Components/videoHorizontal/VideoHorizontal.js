import React from 'react'
import "./_videoHorizontal.scss";
import moment from 'moment'
import numeral from 'numeral'
import { Col, Row } from 'react-bootstrap'
import { AiFillEye } from 'react-icons/ai'
import request from '../../api'

const VideoHorizontal = () => {

    const seconds = moment.duration(100).asSeconds()
    const _duration = moment.utc(seconds * 1000).format('mm:ss')
    
   return (
    <Row
       className='py-2 m-1 videoHorizontal align-align-items-center'>
       {/* //TODO refractor grid */}
       <Col xs={6} md={6} className='videoHorizontal__left'>
          <img src="https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg"
             
             className='videoHorizontal__thumbnail'
             wrapperClassName='videoHorizontal__thumbnail-wrapper'
          />
          <span className='videoHorizontal__duration'>{_duration}</span>
       </Col>
       <Col xs={6} md={6} className='p-0 videoHorizontal__right'>
          <p className='mb-1 videoHorizontal__title'>hey gojo sataro</p>
          <div className='videoHorizontal__details'>
             <AiFillEye /> {numeral(10000).format('0.a')} Views •
             {moment('2020-9-8').fromNow()}
          </div>

          <div className='my-1 videoHorizontal__channel d-flex align-items-center'>
             {/* //TODO show in search screen */}
             {/* <LazyLoadImage
             src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
             effect='blur'
           
          /> */}
             <p className='mb-0'>jujutsu kaisan</p>
          </div>
       </Col>
    </Row>
 )
}
    
export default VideoHorizontal

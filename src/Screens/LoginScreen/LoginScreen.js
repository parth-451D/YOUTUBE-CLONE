import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import './loginScreen.scss'
import {login} from '../../redux/actions/auth.action'
import { useHistory } from 'react-router'

const LoginScreen = () => {

   const dispatch = useDispatch()


   const accessToken = useSelector(state=>state.auth.accessToken)

   const history = useHistory()
   useEffect(()=>{
      if(accessToken){
            history.push('/') 
      }

   },[accessToken, history])

   const handeleLogin =() =>{
      dispatch(login())
   }


   return (
      <div className='login'>
         <div className='login__container'>
            <h2>Youtube Clone</h2>
            <img
               src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
               alt=''
            />
            <button className='login__button'  onClick={handeleLogin}>Login With google</button>
            <p>This clone is made using Youtube api and React-Redux</p>
            <p>This app does not store your Information</p>
         </div>
      </div>
   )
}

export default LoginScreen
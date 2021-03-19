import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import './loginScreen.scss'
import {Login} from '../../redux/actions/auth.action'
import { useHistory } from 'react-router'

const LoginScreen = () => {

   const dispatch = useDispatch()


   const accessToken = useSelector(state=>state.auth.accessToken)

   const history = useHistory()
   useEffect(()=>{
      if(accessToken){
            history.push('/') 
      }

   },[accessToken])

   const handeleLogin =() =>{
      dispatch(Login())
   }


   return (
      <div className='login'>
         <div className='login__container'>
            <h2>Youtube Clone</h2>
            <img
               src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
               alt=''
            />
            <button onClick={handeleLogin}>Login With google</button>
            <p>This Project is made using YOUTUBE DATA API and React</p>
         </div>
      </div>
   )
}

export default LoginScreen
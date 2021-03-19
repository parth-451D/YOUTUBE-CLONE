import React from 'react'
import moment from 'moment'
import "./_comment.scss"

const Comment = () => {
    return (
        <div className="comment p-2 d-flex">
        <img
              src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
              alt=''
              className='mr-3 rounded-circle'
           /> 
            <div className="comment__body">
            <p className="comment__header mb-1">
                parth Dalsaniya  • {moment('2020-9-8').fromNow()}
            </p>
            <p className="mb-0">nice video</p>
            </div>
        </div>
    )
}

export default Comment

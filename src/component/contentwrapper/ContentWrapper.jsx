import React from 'react'
import './contentwrapper.css'

const ContentWrapper = ({ children }) => {
    return (
        <div className='content_wrapper'>
            {children}

        </div>
    )
}

export default ContentWrapper

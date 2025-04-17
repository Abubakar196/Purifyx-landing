import React from 'react'

const ContentCard = ({ heading, children }) => {
  return (
    <div className='space-y-5 mb-10'>
        <h3 className='Heading3'>{heading}</h3>
        <div>{children}</div>
    </div>
  )
}

export default ContentCard
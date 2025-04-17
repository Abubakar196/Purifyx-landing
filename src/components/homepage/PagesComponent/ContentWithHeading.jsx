import React from 'react'

const ContentwithHeadings = ({ data, text1, text2 }) => {
  return (
    <div className='space-y-5'>
      <p className='B3 text-[#646464]'>{text1}</p>
      {data.map((d, index) => (
        <div key={index} className="mb-5">
          <div className='flex items-center gap-1'>
          <span className='text-primary-600 B1'>•</span><h3 className="B1 text-[#303030]"> {d.title} :</h3>
          </div>
          <p className=" mt-1 B3 text-[#646464]">{d.content}</p>
          
        </div>
      ))}
      <p className='B3 text-[#646464]'>{text2}</p>
    </div>

  )
}

export default ContentwithHeadings
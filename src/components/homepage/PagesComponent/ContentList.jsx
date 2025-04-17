import React from 'react'

const ContentList = ({ data, text1, text2 }) => {
  return (
    <div className="mb-5 space-y-5">
      <p className="B3 text-[#646464]">
        {text1}
      </p>
      <ul className=" text-gray-800 space-y-5">
        {data.map((point, index) => (
          <li key={index} className="flex items-start gap-2 mb-1 B3 text-[#303030]">
            <span className="text-primary-600 text-lg">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <p className="B3 text-[#646464]">
        {text2}
      </p>
    </div>
  )
}

export default ContentList
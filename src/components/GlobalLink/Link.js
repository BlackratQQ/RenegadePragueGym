import React from 'react'


const Link = ({href, src, children}) => {
  return (
    <a href={href}>
      {src && <img src={src}/>}
      {children}
    </a>
  )
}

export default Link;
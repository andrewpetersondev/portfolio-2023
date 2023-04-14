import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <h1>Error</h1>
    <div>
                {/* <img src={img} alt="not found" /> */}
                <h3>text</h3>
                <p>text</p>
                <Link to="/">back home</Link>
            </div>
    </>
  )
}

export default Error
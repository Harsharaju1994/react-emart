

import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="navSection">
        <div className="title">
            <h2>E-mart</h2>
        </div>
        <div className="search">
            <input type = "text" placeholder='search...' />
        </div>
        <div className="user">
            <div className="user-detail">
                SingIn/SingnUp
            </div>
            <div className="cart">
                Cart
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

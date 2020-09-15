import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className='bck_b_light'>
        <div className='container'>
          <div className='left'>
            <div className='logo'>
              WAVES
            </div>
          </div>
          <div className='right'>
            <div className='top'>
              LINKS TOP
            </div>
            <div className='bottom'>
              LINKS BOTTOM
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
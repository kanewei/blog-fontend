import React, { Component } from 'react'
import './Layout.css'

class Layout extends Component {
  render () {
    return (
      <div className='container'>
        <div className='header'>
          <h3 className='text-muted'>My Blog</h3>
        </div>

        <main>
          {this.props.children}
        </main>

        <div className='footer'>
          <p className='text-center'>Developed by Kane Wei.</p>
        </div>
      </div>
    )
  }
}

export default Layout

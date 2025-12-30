import React, { Component } from 'react'
import LinksPage from './LinksPage'
import { Link } from 'react-router-dom'
import AboutPage from '../components/AboutPage'
export default class About extends Component {
  render() {
    return (
      <div>
        <div className='test'>
        <h1>  <Link to={'/'} className='link'>Шучу</Link></h1>
        <LinksPage/>
        </div>
        <AboutPage/>
      
      </div>
    )
  }
}


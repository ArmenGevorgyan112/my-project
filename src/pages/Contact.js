import React, { Component } from 'react'
import LinksPage from './LinksPage'
import { Link } from 'react-router-dom'
import ContactPage from '../components/ContactPage'
export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className='test'>
        <h1>  <Link to={'/'} className='link'>Конец</Link></h1>
        <LinksPage/>
        </div>
        <ContactPage/>
     
      </div>
    )
  }
}

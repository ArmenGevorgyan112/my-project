import React, { Component } from 'react'
import LinksPage from './LinksPage'
import { Link } from 'react-router-dom'
import Catalog from '../components/Catalog'
export default class Shop extends Component {
  render() {
    return (
      <div>
             <div className='test'>
            <h1>  <Link to={'/'} className='link'>Немного красоты</Link></h1>
            <LinksPage/>
       </div>
       <Catalog/>
      </div>
    )
  }
}


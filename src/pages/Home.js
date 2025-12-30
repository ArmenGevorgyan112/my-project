import React, { Component } from 'react'
import LinksPage from './LinksPage'
import { Link } from 'react-router-dom'
import Slider from './Slider'
export default class Home extends Component {
  render() {
    return (
      <div>
             <div className='test'>
                <h1>  <Link to={'/'} className='linkZay'>MASHAA</Link></h1>
                <LinksPage/>
           
            </div>
             <Slider/>
             
      </div>
    )
  }
}

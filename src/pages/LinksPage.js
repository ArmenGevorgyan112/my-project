import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LinksPage extends Component {
  render() {
    return (
      <ul className='menupage'>
     
       <li className='li'><Link to={'/'} className='link'>Главная страница</Link></li> 
        <li className='li'><Link to={'/about'} className='link'>Нажимай удивишься</Link></li>
        <li className='li'><Link to={'/shop'} className='link'>Немного красоты</Link></li>
        <li className='li'><Link to={'/contact'} className='link'>Наверное здесь что-то интересное</Link></li>
      </ul>
    )
  }
}

import React from 'react'
import { Link } from 'react-router-dom'
import style from './Head.module.css'

const Head = () => {
  return (
    <div>
      <div className={style.header}>
        <div className="container">
            <Link to="Header" className={style.link}>Logo</Link>
            <nav className="header_link">
                <Link to="Premium" className={style.link}>Премиум</Link>
                <Link to="Retro" className={style.link}>Ретро</Link>
                <Link to="Electric cars" className={style.link}>Электро машины</Link>
                <Link to="Passenger cars" className={style.link}>Легковые</Link>
                <Link to="Limousine" className={style.link}>Лимузин</Link>
                <Link to="Sports cars" className={style.link}>Спорткар</Link>
            </nav>
        </div>
      </div>
    </div>
  )
}

export default Head


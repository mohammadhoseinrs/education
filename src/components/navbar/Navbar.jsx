import React from 'react'
import './Navbar.css'
import navlogo from './../../Assets/images/navbar/logo1.png'
import {FiSearch} from 'react-icons/fi'
import {BiUser} from 'react-icons/bi'
export default function Navbar() {
  return (
    <section className='navbar'>
        <section className='navbar__container'>
            <section className='navbar__logo'>
                <div className="navbar__logo__right">
                    <img src={navlogo} alt="" />
                </div>
                <div className="navbar__logo__text font__title">
                     لورم ایپسوم 
                </div>
            </section>
            <section className='navbar__item'>
                <ul className='navbar__item__item'>
                    <li>خانه</li>
                    <li>دوره ها</li>
                    <li>مدرس ها</li>
                    <li>وبلاگ</li>
                    <li>تماس با ما</li>
                    <li>درباره ما</li>
                </ul>
            </section>
            <section className='navbar__left'>
                <div className="navbar__searchbox">
                    <FiSearch />
                </div>
                <div className="navbar__login">
                    <p>ثبت نام / ورود</p>
                    <BiUser />
                </div>
            </section>
        </section>
    </section>
  )
}

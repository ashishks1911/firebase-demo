import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="py-2 bg-body-tertiary border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <Link
                to={'/'}
                className="nav-link link-body-emphasis px-2 active"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={'/add'}
                className="nav-link link-body-emphasis px-2 active"
                aria-current="page"
              >
                Add Item
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={'/admin'}
                className="nav-link link-body-emphasis px-2 active"
                aria-current="page"
              >
                Admin
              </Link>
            </li>
          </ul>

          <ul className="nav">
            {" "}
            <li className="nav-item">
              <Link  to={'/login'} className="nav-link link-body-emphasis px-2">
                Login
              </Link>
            </li>{" "}
            <li className="nav-item">
              <a href="#" className="nav-link link-body-emphasis px-2">
                Sign up
              </a>
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </nav>
      
    </div>
  )
}

export default Header

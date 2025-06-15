import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav class="py-2 bg-body-tertiary border-bottom">
        <div class="container d-flex flex-wrap">
          <ul class="nav me-auto">
            <li class="nav-item">
              <Link
                to={'/'}
                class="nav-link link-body-emphasis px-2 active"
                aria-current="page"
              >
                Home
              </Link>
            </li>
          </ul>

          <ul class="nav">
            {" "}
            <li class="nav-item">
              <Link  to={'/login'} class="nav-link link-body-emphasis px-2">
                Login
              </Link>
            </li>{" "}
            <li class="nav-item">
              <a href="#" class="nav-link link-body-emphasis px-2">
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

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../config/firebase';

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user));

    return () => unsubscribe();

  })

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (er) {
      console.log(er);
    }
  }

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
            {
              user ?
                <li className="nav-item">
                  <button onClick={logout} className="nav-link link-body-emphasis px-2">
                    Logout
                  </button>
                </li> :
                <li className="nav-item">
                  <Link to={'/login'} className="nav-link link-body-emphasis px-2">
                    Login
                  </Link>
                </li>
            }

          </ul>{" "}
        </div>{" "}
      </nav>

    </div>
  )
}

export default Header

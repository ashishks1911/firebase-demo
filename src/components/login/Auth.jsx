import { createUserWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, googleProvider } from '../../config/firebase';
import styles from './Auth.module.css'

const Auth = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(()=> {
        setErrorMessage("");
      }, 5000);
    }
  }

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  }

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (er) {
      console.log(er);
    }
  }

  return (
    <div className='bg-body-tertiary'>
      {errorMessage ?
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div> : ""
      }
      <div className='d-flex justify-content-center align-items-center' style={{height:'90vh'}}>

        <div className={`${styles['form-signin']} w-100 m-auto`}>
          <div>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating mb-3">
              <input type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)} />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => setPass(e.target.value)} />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-check text-start my-3">
              <input className="form-check-input" type="checkbox" value="remember-me" id="checkDefault" />
              <label className="form-check-label" htmlFor="checkDefault">
                Remember me
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2" onClick={signIn}>Sign in</button>
            <button className="btn bg-white w-100 py-2 border mt-2">
              <div className='d-flex justify-content-center' onClick={signInWithGoogle}>
                <img src="./google.png" alt="" width={25} height={25} /> Sign in with Google
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth

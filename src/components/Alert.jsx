import React from 'react'

const Alert = ({errorMessage}) => {
  return (
    <div>
      {
        errorMessage ?
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div> : ""
      }

    </div>
  )
}

export default Alert

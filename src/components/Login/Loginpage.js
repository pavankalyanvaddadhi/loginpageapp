
import { Alert } from 'bootstrap';
import React, { useEffect, useState } from 'react';


const userlogincredentials = {
  username: '',
  password: ''

}

export default function App() {


  const [userlogincredentials, updateuserlogincredentials] = useState({})

  function handleCaptureData(eventobj) {
    const name = eventobj.target.name;
    const value = eventobj.target.value
    console.log(name, value)
    updateuserlogincredentials(previousStatevalue => ({
      ...previousStatevalue, [name]: value
    }))

  }
  function handlelogin() {
    // event.preventDefault()
    console.log(userlogincredentials)
    if (userlogincredentials.username === "pavan" && userlogincredentials.password === "123") {
      alert("Welcome to Dashboard");
    }
    else if (userlogincredentials.username === "Shiva" && userlogincredentials.password === "7711") {
      alert("Someone details are matched")
    }
    else {
      alert("Please check both credentials")
    }

  }




  return (

    <>

      <div class="body" >
        <div class="container">
          <div class="container-css1">

            <img class="img-src"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" />


            <input type="email" name="username" onChange={handleCaptureData} class="form-control" id="exampleDropdownFormEmail1"
              placeholder="Phone number ,Username or Email" />
            <div class="password-css">
              <input type="password" name="password" onChange={handleCaptureData} class="form-control" id="exampleDropdownFormpassword1"
                placeholder="Password" />
            </div>
            <div class="button1-css">
              <button class="button-css" onClick={handlelogin} >Log in</button>
            </div>
            <div class="seperator">
              <span></span>
              <span>OR</span>
              <span></span>
            </div>




            <div class="login-css">
              <img class="img-css"
                src="https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338507_1280.png" />

              <button class="fbbutton-css">
                Login with Facebook
              </button>
              <button class="forgotbutton-css">
                Forgot-password?
              </button>
            </div>

          </div>

        </div>

        <div class="container">
          <div class="container-css2">
            <div class="row">
              <div class="col">
                <h5>Don't have an account? <button class="button-css1">Sign Up</button> </h5>
              </div>
            </div>
          </div>
        </div>
      </div >




    </>



  )

}

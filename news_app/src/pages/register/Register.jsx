import React, { useState } from 'react'
import './register.css'
import { Link, useNavigate } from 'react-router-dom'




const Register = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    password: '',
    confirmpassword: ''
  })

  const navigate = useNavigate();


  const handleRegister = () => {
    const usernameValidation = (user.trim() === '' || user.length < 8) ? <p style={{ color: "red" }}>enter valid username</p> : '';

    const passwordValidation = (pass.trim() === '' || pass.length < 8) ? <p style={{ color: "red" }}>enter valid password</p> : errors.password

    const confirmPasswordValidation = (confirmPassword.trim() === '' || confirmPassword.length < 8 || pass!==confirmPassword) ?
      <p style={{ color: "red" }}>Both the passwords should match</p> : ''


    setErrors({
      username: usernameValidation,
      password: passwordValidation,
      confirmpassword: confirmPasswordValidation
    })

    if (errors.username || errors.password || errors.confirmpassword) {
      alert("Please enter valid data")
     
    }
    else if(!usernameValidation && !passwordValidation && !confirmPasswordValidation){
      alert("Registeration Successful");
      navigate('/')
    }
    

  }


  const handleErrorofUserInput = (e) => {
    let userValue = e.target.value;
    userValue = userValue.toLowerCase()
    setUser(userValue);
    localStorage.setItem("username", userValue);
    const usernameData = (userValue.trim() === '') ? <p style={{ color: "red" }}>enter valid username</p> : ''
    setErrors({
      ...errors,
      username: usernameData
    })
  }

  const handleErrorofPassInput = (e) => {
    let passValue = e.target.value;
    setPass(passValue);
    localStorage.setItem("password", passValue);
     
    var passwordData=(passValue.trim() === '') ? <p style={{ color: "red" }}>Password must contain social character</p> : ''
    
   
    let regex=/^(?=.*[0-9])(?=.*[!@#$%^&*()-=_+[\]{}|;':",.<>/?])(?=.*[a-z]).{8,}$/;

  
       var passwordData = (!regex.test(pass)) ? <p style={{ color: "red" }}>Password must contain special characters</p> : ''
    
    

   setErrors({
      ...errors,
      password: passwordData
    })
  }

 

  

  const handleErrorofConfirmPasswordInput = (e) => {
    let confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue)

    const confirmpasswordData = (confirmPasswordValue.trim() === '' || confirmPasswordValue.length < 8 ||pass !== confirmPasswordValue) ? <p style={{ color: "red" }}>Both the passwords should match</p> : ''

    setErrors(
      {
        ...errors,
        confirmpassword: confirmpasswordData
      }
    )
  }

  return (
    <div>
      <form className="register-form-container" onSubmit={(e) => { e.preventDefault() }}>
          <div className="register-container">
          <div>
            <h4 className="register-heading">Register</h4>
          </div>
          <div className="fields-container">
            <div className="field">
              <label>Username</label>
              <input type="text" className="username" value={user} onChange={handleErrorofUserInput} />
              {
                errors.username ? <span style={{ visibility: "visible" }}>{errors.username}</span> : ''
              }
            </div>

            <div className="field">
              <label>Password</label>
              <input type="password" className="password" value={pass} onChange={handleErrorofPassInput} />
              {
                errors.password ? <span style={{ visibility: "visible" }}>{errors.password}</span> : ''
              }
            </div>

            <div className="field">
              <label>Confirm Password</label>
              <input type="password" className="confirm-password" value={confirmPassword} onChange={handleErrorofConfirmPasswordInput} />
              {
                errors.confirmpassword ? <span style={{ visibility: "visible" }}>{errors.confirmpassword}</span> : ''
              }
            </div>

            <button className="register-btn" onClick={handleRegister}>Register</button>
            <p className="prev-acc">Already have an account? <span><Link to='/' className="login-link">Login</Link></span></p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register



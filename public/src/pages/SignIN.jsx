import {useState} from 'react'
import{Link, useNavigate} from 'react-router-dom'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
function SignIN() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email :'',
        password :''
    })
    const {email, password} = formData
    const navigate = useNavigate()
    const onChange = (e) =>{
        setFormData(
            (preState) =>({
                ...preState,
                [e.target.id]:e.target.value
            })
        )
    }
        return(
        <div className="pagecontainer">
            <header>
                <p className="pageHeader">
                Welcome back!!!
                </p>
            </header>
            <form>
                <input type="email" className="emailInput"
                placeholder='Email' id = 'email'value={email}
                onChange = {onChange}/>
                <div className="passwordInputDiv">
                    <input type={showPassword ? 'text' : 'password'}
                    className = 'passwordInput'
                    placeholder='Password'
                    id = 'password'
                    value={password}
                    onChange = {onChange}
                    />

                    <img src= {visibilityIcon}
                    alt = 'show password'
                    className='showPassword'
                    onClick={() => setShowPassword((preState) => !preState)}
                    />
                    <Link to = '/forgot-password'
                    className='forgotPasswordLink'>
                        Forgot Password
                    </Link>
                    
                </div>
                <div className="signInBar">
                   <p className="signInText">  Sign In</p>  
                    <button className='signInButton'>
                        <ArrowRightIcon fill='#ffffff' width='34px' height = '34px'/>
                    </button>   
                </div>
            </form>
            {/* google oauth */}
            <Link to = '/sign-up' className='registerLink'>
                Sign Up Instead
            </Link>
        </div>
    )
}

export default SignIN
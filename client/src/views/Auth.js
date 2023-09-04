import React from 'react'
import LoginForm from '../Components/auth/LoginForm'
import RegisterForm from '../Components/auth/RegisterForm'

const Auth = ({ authRoute }) => {
    let body
    body = (<>
        {
            authRoute === 'login' && <LoginForm />
        }
        {
            authRoute === 'register' && <RegisterForm />
        }
    </>)
    return (
        <div className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                    <h1>
                        Project Alpha
                    </h1>
                    {body}
                </div>
            </div>
        </div>)
}

export default Auth
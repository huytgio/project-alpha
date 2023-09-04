import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
const LoginForm = () => {
    return <>
        <Form className='my-4'>
            <Form.Group className='mb-3'>
                <Form.Control type='text' placeholder='Username' name='username' required />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Control type='text' placeholder='Password' name='password' required />
            </Form.Group>

            <Button variant='success' type='submit'>Login</Button>
        </Form>
        <p style={{ marginBottom: '10px' }}>
            Haven't an Account?{' '}
            <Link to='/register'>
                <Button variant='info' size='sm'>Register</Button>
            </Link>
        </p>

    </>
}

export default LoginForm
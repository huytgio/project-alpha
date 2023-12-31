import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
    return <>
        <Form className='my-4'>
            <Form.Group className='mb-3'>
                <Form.Control type='text' placeholder='Username' name='username' required />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Control type='text' placeholder='Password' name='password' required />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Control type='text' placeholder='Confirm Password' name='c_password' required />
            </Form.Group>

            <Button variant='success' type='submit'>Register</Button>
        </Form>
        <p style={{ marginBottom: '10px' }}>
            Having an Account?{' '}
            <Link to='/login'>
                <Button variant='info' size='sm'>Login</Button>
            </Link>
        </p>

    </>
}

export default RegisterForm
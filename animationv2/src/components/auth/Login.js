import React, { useRef, useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import '../../css/auth.css'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError('Failed to log in')
        }

        setLoading(false)
    }

    return (
        <div className="page auth">
            <div className="push">
                <div className="aside">

                </div>
                <div className="main">
                    <div className="iconUsers"><i className="fas fa-users"></i></div>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="flex">
                        <i className="fas fa-envelope"></i><span> | </span><Form.Control className="control" type="email" ref={emailRef} required placeholder="Email" />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-4"
                            type="submit">Log In</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Forgot Password</Link>
                    </div>
                    <div className="w-100 text-center mt-2">Need an account? <Link to="/signup">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

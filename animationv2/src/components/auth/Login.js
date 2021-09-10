import React, { useRef, useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import '../../css/auth.css'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../../js/pageAnimation'

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
            setError('Incorrect email or password.')
        }

        setLoading(false)
    }

    return (
        <motion.div layout
            className="page auth"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className="push">
                <div className="main">
                    <div className="iconUsers"><i className="fas fa-users"></i></div>
                    <div className="auth-flex">
                        <div className="auth-title mb-4">Login</div>
                        {error && <div className="flex"><Alert variant="danger"><i style={{ marginRight: '1rem', fontSize: "2rem" }} className="fas fa-exclamation-triangle"></i>{error}</Alert></div>}
                        <div>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email" className="flex">
                                    <i className="fas fa-envelope"></i><Form.Control type="email" ref={emailRef} required placeholder="Email" />
                                </Form.Group>
                                <Form.Group id="password" className="flex">
                                    <i className="fas fa-lock" style={{ marginRight: '4px' }}></i><Form.Control type="password" ref={passwordRef} required placeholder="Password" />
                                </Form.Group>
                                <Button disabled={loading} className="w-100 mt-4" type="submit">Login</Button>
                            </Form>
                        </div>
                        <div className="w-100 text-center mt-3">
                            <Link to="/forgot-password">Forgot Password</Link>
                        </div>
                        <div className="w-100 text-center mt-2">Need an account? <Link to="/signup">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
import React, { useRef, useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../../js/pageAnimation'

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your email')
        } catch {
            setError('Failed to reset')
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
                        <div className="auth-title mb-4" style={{ fontSize: "2rem" }}>Password Reset</div>
                        {error && <div className="flex"><Alert variant="danger"><i style={{ marginRight: '1rem', fontSize: "2rem" }} className="fas fa-exclamation-triangle"></i>{error}</Alert></div>}
                        {message && <div className="flex"><Alert variant="success"><i style={{ marginRight: '1rem', fontSize: "2rem" }} className="fas fa-check-circle"></i>{message}</Alert></div>}
                        <div>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email" className="flex">
                                    <i className="fas fa-envelope"></i><Form.Control type="email" ref={emailRef} required placeholder="Email" />
                                </Form.Group>
                                <Button disabled={loading} className="w-100 mt-4" type="submit">Reset Password</Button>
                            </Form>
                        </div>
                        <div className="w-100 text-center mt-2">
                            Need an account? <Link to="/signup">Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div >
    )
}
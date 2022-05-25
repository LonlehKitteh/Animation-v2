import React, { useRef, useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../../js/pageAnimation'
import { updatePassword } from './PasswordStrength'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const nameRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) return setError('Passwords do not match');
        if (!/[A-Z]/.test(passwordRef.current.value) || passwordRef.current.value.length < 7) return setError('Your password is to weak');

        try {
            setError('');
            setLoading(true);
            await signup(nameRef.current.value, emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            setError('Failed to create an account');
        }

        setLoading(false);
    }

    function handleInput(){
        updatePassword(passwordRef.current.value, passwordRef.current);
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
                        <div className="auth-title mb-4">Sign up</div>
                        {
                            error === 'Created account' ?
                                error && <div className="flex"><Alert variant="success"><i style={{ marginRight: '1rem', fontSize: "2rem" }} className="fas fa-check-circle"></i>{error}</Alert></div> :
                                error && <div className="flex"><Alert variant="danger"><i style={{ marginRight: '1rem', fontSize: "2rem" }} className="fas fa-exclamation-triangle"></i>{error}</Alert></div>
                        }
                        <div>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="name" className="flex">
                                    <i style={{ marginRight: '4px' }} className="fas fa-user"></i><Form.Control type="text" ref={nameRef} required placeholder="Nickname" />
                                </Form.Group>
                                <Form.Group id="email" className="flex">
                                    <i className="fas fa-envelope"></i><Form.Control type="email" ref={emailRef} required placeholder="Email" />
                                </Form.Group>
                                <Form.Group id="password" className="flex">
                                    <i className="fas fa-lock" style={{ marginRight: '4px' }}></i><Form.Control type="password" className="password" ref={passwordRef} onInput={handleInput} required placeholder="Password" />
                                </Form.Group>
                                <Form.Group id="password-confirm" className="flex">
                                    <i className="fas fa-lock" style={{ marginRight: '4px' }}></i><Form.Control type="password" ref={passwordConfirmRef} required placeholder="Confirm password" />
                                </Form.Group>
                                <Button variant="success" disabled={loading} className="w-100 mt-4" type="submit">Sign Up</Button>
                            </Form>
                        </div>
                        <div className="w-100 text-center mt-2">
                            Already have an account? <Link to="/login">Sign in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
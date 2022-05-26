import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { motion } from 'framer-motion';
import { pageTransition, pageVariants } from '../../js/pageAnimation';

export default function UpdateProfile() {
    const emailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updatePassword, updateEmail } = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    // const circularProgressRef = useRef(null);
    // const valueRef = useRef(null);

    // function handleAnimation(points) {
    //     let speed = 50;
    //     let progressValue = 0;
    //     let color = '#4d5bf9'
    //     if (valueRef.current === null) return
    //     let progress = setInterval(() => {
    //         if (progressValue !== points) progressValue++;
    //         valueRef.current.innerHTML = `${progressValue}%`;
    //         circularProgressRef.current.style.background = `conic-gradient(${color} ${progressValue * 3.6}deg, ${color}40 ${progressValue * 3.6}deg)`
    //         circularProgressRef.current.style.filter = `hue-rotate(${progressValue * 3.6}deg)`
    //         if (progressValue === points) clearInterval(progress)
    //     }, speed)
    // }

    function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) return setError('Passwords do not match')

        const promisses = []
        setLoading(true)
        setError("")

        if (emailRef.current.value !== currentUser.email) promisses.push(updateEmail(emailRef.current.value))
        if (passwordRef.current.value) promisses.push(updatePassword(passwordRef.current.value))
        if (/[admin || tester || administrator]/.test(nameRef.current.value.toLowerCase())) console.log("tak")

        Promise.all(promisses).then(() => {
            history.push('/update%20profile')
            setMessage('Account updated')
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <motion.div
            className="page auth"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            {/* {console.log(currentUser)}
            {currentUser.pointsCSS ?
                <div className="container">
                    <div className="circular-progress" ref={circularProgressRef}>
                        <div className="value-container" ref={valueRef}></div>
                    </div>
                </div> : null
            } */}
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Update Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="name">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" ref={nameRef} defaultValue={currentUser.displayName} />
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required
                                defaultValue={currentUser.email} />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef}
                                placeholder="Leave blank to keep the same" />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef}
                                placeholder="Leave blank to keep the same" />
                        </Form.Group>
                        <Button disabled={loading} className="w-100"
                            type="submit">Update</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to="/">Cancel</Link>
            </div>
        </motion.div>
    )
}

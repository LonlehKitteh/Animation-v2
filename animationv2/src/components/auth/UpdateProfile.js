import React, { useRef, useState, useEffect } from 'react'
import { Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion';
import { pageTransition, pageVariants } from '../../js/pageAnimation';
import app from '../../firebase'

export default function UpdateProfile() {
    const emailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updatePassword, updateEmail, updateName } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const [points, setPoints] = useState(0)
    app.firestore().collection('usersData').get().then(querrySnap => querrySnap.forEach(data => data.data().user === currentUser.uid ? setPoints(data.data().pointsCSS) : null))
    const circularProgressRef = useRef(null);
    const valueRef = useRef(null)

    useEffect(() => {
        handleAnimation(points)
    }, [points])

    function handleAnimation(score) {
        if (valueRef.current === null || valueRef.current.innerHTML === null) return
        let speed = 10;
        let progressValue = 0;
        let color = '#4d5bf9'
        let progress = setInterval(() => {
            if (progressValue !== score) progressValue++;
            valueRef.current.innerHTML = `${progressValue}%`;
            circularProgressRef.current.style.background = `conic-gradient(${color} ${progressValue * 3.6}deg, ${color}40 ${progressValue * 3.6}deg)`
            circularProgressRef.current.style.filter = `hue-rotate(${progressValue * 3.6}deg)`
            if (progressValue === score) clearInterval(progress)
        }, speed)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) return setError('Passwords do not match')
        if (['admin', 'tester', 'administrator'].includes(nameRef.current.value.toLowerCase()) || nameRef.current.value.length < 3) return setError("Incorrect name")

        const promisses = []
        setLoading(true)
        setError("")

        if (emailRef.current.value !== currentUser.email) promisses.push(updateEmail(emailRef.current.value))
        if (passwordRef.current.value) promisses.push(updatePassword(passwordRef.current.value))
        if (nameRef.current.value !== currentUser.displayName) promisses.push(updateName(nameRef.current.value))

        Promise.all(promisses).then(() => {
            history.push('/begin')
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <motion.div
            className="page auth update"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className='push'>
                {error && <Alert variant="danger">{error}</Alert>}
                <div className="container css">
                    <p className='result'>Test css result</p>
                    <div className="circular-progress" ref={circularProgressRef}>
                        <div className="value-container" ref={valueRef}></div>
                    </div>
                </div>
                <div className='container update'>
                    <p className="result">Update Profile Zone</p>
                    <Form onSubmit={handleSubmit} className='update-form'>
                        <Form.Group id="name">
                            <Form.Label>Name</Form.Label>
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
                        <Button disabled={loading} className="w-100" type="submit">Update</Button>
                    </Form>
                </div>
            </div>
        </motion.div>
    )
}

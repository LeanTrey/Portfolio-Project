import { useState, useEffect } from "react"
import {Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../img/headerimg.svg'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = [ "Web Developer", "Web Designer", "Web Engineer"]
    const [text, setText] = useState('')
    const period = 2000
    const typingSpeed = 200
    const deletingSpeed = 150

    useEffect(() => {
        const delta = isDeleting ? deletingSpeed : typingSpeed
        const timerId = setTimeout(() => tick(), delta)

        return () => clearTimeout(timerId)
    }, [text, isDeleting])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (!isDeleting && text === fullText) {
            setTimeout(() => setIsDeleting(true), period)
        } else if (isDeleting && text === '') {
            setIsDeleting(false)
            setLoopNum(loopNum => loopNum + 1)
        }
    }

    return(
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7} >
                        <span className='tagline wf'>Welcome to my Portfolio</span>
                        <h1 className="wf banner-desc">
                            <span className="cust-one">{`Hi I'm Edward, `}</span><span className='wrap cust-two'>{text}</span></h1>
                        <p>Self Taught WebDev Currently Doing Freelancing at UpWork.</p>
                        <button onClick={() => window.location.href="https://www.linkedin.com/in/edward-mclean-6073a1263/"}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <img src={headerImg} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
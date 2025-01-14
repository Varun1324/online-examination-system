import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // For navigation
import { Header, Button, Icon, Message, MessageHeader, Container, Form, FormField, Radio } from 'semantic-ui-react';
import Result from './Result';
const Quiz = () => {
    const [time, setTime] = useState(600);  // Set exam duration in seconds (e.g., 600 seconds = 10 minutes)
    const [isRunning, setIsRunning] = useState(true);
    const [answers, setAnswers] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score,setScore] = useState(0);
    const navigate = useNavigate();  // Hook for navigation
    useEffect(() => {
        let timer;
        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (time === 0 || isSubmitted) {
            setIsRunning(false);
            submitHandler();
        }
        return () => clearInterval(timer);
    }, [isRunning, time, isSubmitted, navigate]);
    

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedTime = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    const correctAnswers = {
        q1: 'B',
        q2: 'C',
        q3: 'A',
        q4: 'D',
        q5: 'A',
        q6: 'B',
        q7: 'B',
        q8: 'A',
        q9: 'A',
        q10: 'C',
    };

    const handleAnswerChange = (question, value) => {
        setAnswers({
            ...answers,
            [question]: value,
        });
    };


    const submitHandler = () => {
        let calculatedScore = 0;
        for (const question in correctAnswers) {
            if (correctAnswers[question] === answers[question]) {
                calculatedScore += 1;
            }
        }
        setScore(calculatedScore);  // Update state (optional, for display elsewhere if needed)
        setIsRunning(false);        // Stop the timer
        setIsSubmitted(true);       // Set submitted flag
    
        // Pass the calculated score directly to the result page
        navigate('/result', { state: { score: calculatedScore, answers } });
    };
    
    return (
        <div>
            <div className="navbar" style={{ boxShadow: '0 6.4px 14.4px 0 rgb(0 0 0 / 13%), 0 1.2px 3.6px 0 rgb(0 0 0 / 11%)', display: 'flex', justifyContent: 'space-around', scrollBehavior: 'smooth', position: 'sticky', top: '0', zIndex: '100', backgroundColor: 'white', alignItems: 'center' }}>
                <Message style={{ marginTop: '1%', marginBottom: '1%' }}>
                    <MessageHeader>
                        <Icon name='edit' size='large'/>
                        General Quiz
                    </MessageHeader>
                </Message>
                <div className="timer" style={{alignItems:'center',display:'flex',flexDirection:'column'}}>
                            <Icon name='clock' size='large'/>
                            Exam in Progress
                            <br />
                        <p>Time Left: {formattedTime}</p>
                        {time === 0 && <p>Time's up! The test will now end.</p>}
                    
                </div>
                <div className="back">
                    <Button color='red' onClick={() => navigate('/subject')}>Back</Button>
                </div>
            </div>

            <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '2%'}}>
                <Container style={{ padding: '2%', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }}>
                    <Header as='h3'>1. What is the capital of France?</Header>
                    <Form>
                        <FormField style={{ display: 'flex', flexDirection: 'column', padding: '1%', gap: '1rem' }}>
                            <Radio
                                label='Madrid'
                                name='q1'
                                value='A'
                                checked={answers.q1 === 'A'}
                                onChange={() => handleAnswerChange('q1', 'A')}
                            />
                            <Radio
                                label='Paris'
                                name='q1'
                                value='B'
                                checked={answers.q1 === 'B'}
                                onChange={() => handleAnswerChange('q1', 'B')}
                            />
                            <Radio
                                label='Rome'
                                name='q1'
                                value='C'
                                checked={answers.q1 === 'C'}
                                onChange={() => handleAnswerChange('q1', 'C')}
                            />
                            <Radio
                                label='Berlin'
                                name='q1'
                                value='D'
                                checked={answers.q1 === 'D'}
                                onChange={() => handleAnswerChange('q1', 'D')}
                            />
                        </FormField>
                    </Form>
                </Container>

                <Container style={{ padding: '2%', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }}>
                    <Header as='h3'>2. Who invented the lightbulb?</Header>
                    <Form>
                        <FormField style={{ display: 'flex', flexDirection: 'column', padding: '1%', gap: '1rem' }}>
                            <Radio
                                label='Nikola Tesla'
                                name='q2'
                                value='A'
                                checked={answers.q2 === 'A'}
                                onChange={() => handleAnswerChange('q2', 'A')}
                            />
                            <Radio
                                label='Albert Einstein'
                                name='q2'
                                value='B'
                                checked={answers.q2 === 'B'}
                                onChange={() => handleAnswerChange('q2', 'B')}
                            />
                            <Radio
                                label='Thomas Edison'
                                name='q2'
                                value='C'
                                checked={answers.q2 === 'C'}
                                onChange={() => handleAnswerChange('q2', 'C')}
                            />
                            <Radio
                                label='Alexander Graham Bell'
                                name='q2'
                                value='D'
                                checked={answers.q2 === 'D'}
                                onChange={() => handleAnswerChange('q2', 'D')}
                            />
                        </FormField>
                    </Form>
                </Container>

                <Container style={{ padding: '2%', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }}>
                    <Header as='h3'>3. What is the boiling point of water?</Header>
                    <Form>
                        <FormField style={{ display: 'flex', flexDirection: 'column', padding: '1%', gap: '1rem' }}>
                            <Radio
                                label='90°C'
                                name='q3'
                                value='A'
                                checked={answers.q3 === 'A'}
                                onChange={() => handleAnswerChange('q3', 'A')}
                            />
                            <Radio
                                label='100°C'
                                name='q3'
                                value='B'
                                checked={answers.q3 === 'B'}
                                onChange={() => handleAnswerChange('q3', 'B')}
                            />
                            <Radio
                                label='120°C'
                                name='q3'
                                value='C'
                                checked={answers.q3 === 'C'}
                                onChange={() => handleAnswerChange('q3', 'C')}
                            />
                            <Radio
                                label='110°C'
                                name='q3'
                                value='D'
                                checked={answers.q3 === 'D'}
                                onChange={() => handleAnswerChange('q3', 'D')}
                            />
                        </FormField>
                    </Form>
                </Container>

                <Container style={{ padding: '2%', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }}>
                    <Header as='h3'>4) What is the largest planet in our solar system?</Header>
                    <Form>
                        <FormField style={{ display: 'flex', flexDirection: 'column', padding: '1%', gap: '1rem' }}>
                            <Radio
                                label='Earth'
                                name='q4'
                                value='A'
                                checked={answers.q4 === 'A'}
                                onChange={() => handleAnswerChange('q4', 'A')}
                            />
                            <Radio
                                label='Mars'
                                name='q4'
                                value='B'
                                checked={answers.q4 === 'B'}
                                onChange={() => handleAnswerChange('q4', 'B')}
                            />
                            <Radio
                                label='Jupiter'
                                name='q4'
                                value='C'
                                checked={answers.q4 === 'C'}
                                onChange={() => handleAnswerChange('q4', 'C')}
                            />
                            <Radio
                                label='Saturn'
                                name='q4'
                                value='D'
                                checked={answers.q4 === 'D'}
                                onChange={() => handleAnswerChange('q4', 'D')}
                            />
                        </FormField>
                    </Form>
                </Container>

                <Container style={{ padding: '2%', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }}>
                    <Header as='h3'>5) What is the square root of 64?</Header>
                    <Form>
                        <FormField style={{ display: 'flex', flexDirection: 'column', padding: '1%', gap: '1rem' }}>
                            <Radio
                                label='6'
                                name='q5'
                                value='A'
                                checked={answers.q5 === 'A'}
                                onChange={() => handleAnswerChange('q5', 'A')}
                            />
                            <Radio
                                label='7'
                                name='q5'
                                value='B'
                                checked={answers.q5 === 'B'}
                                onChange={() => handleAnswerChange('q5', 'B')}
                            />
                            <Radio
                                label='8'
                                name='q5'
                                value='C'
                                checked={answers.q5 === 'C'}
                                onChange={() => handleAnswerChange('q5', 'C')}
                            />
                            <Radio
                                label='9'
                                name='q5'
                                value='D'
                                checked={answers.q5 === 'D'}
                                onChange={() => handleAnswerChange('q5', 'D')}
                            />
                        </FormField>
                    </Form>
                </Container>

                <Container style={{ padding: '2%', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }}>
                    <Header as='h3'>6) Who developed the theory of relativity?</Header>
                    <Form>
                        <FormField style={{ display: 'flex', flexDirection: 'column', padding: '1%', gap: '1rem' }}>
                            <Radio
                                label='Isaac Newton'
                                name='q6'
                                value='A'
                                checked={answers.q6 === 'A'}
                                onChange={() => handleAnswerChange('q6', 'A')}
                            />
                            <Radio
                                label='Albert Einstein'
                                name='q6'
                                value='B'
                                checked={answers.q6 === 'B'}
                                onChange={() => handleAnswerChange('q6', 'B')}
                            />
                            <Radio
                                label='Niels Bohr'
                                name='q6'
                                value='C'
                                checked={answers.q6 === 'C'}
                                onChange={() => handleAnswerChange('q6', 'C')}
                            />
                            <Radio
                                label='Galileo Galilei'
                                name='q6'
                                value='D'
                                checked={answers.q6 === 'D'}
                                onChange={() => handleAnswerChange('q6', 'D')}
                            />
                        </FormField >
                    </Form>
                </Container>

                <Container style={{ padding: '2%', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }}>
                    <Header as='h3'>7) What is the currency of Japan?</Header>
                    <Form>
                        <FormField style={{ display: 'flex', flexDirection: 'column', padding: '1%', gap: '1rem' }}>
                            <Radio
                                label='Yuan'
                                name='q7'
                                value='A'
                                checked={answers.q7 === 'A'}
                                onChange={() => handleAnswerChange('q7', 'A')}
                            />
                            <Radio
                                label='Yen'
                                name='q7'
                                value='B'
                                checked={answers.q7 === 'B'}
                                onChange={() => handleAnswerChange('q7', 'B')}
                            />
                            <Radio
                                label='Won'
                                name='q7'
                                value='C'
                                checked={answers.q7 === 'C'}
                                onChange={() => handleAnswerChange('q7', 'C')}
                            />
                            <Radio
                                label='Ringgit'
                                name='q7'
                                value='D'
                                checked={answers.q7 === 'D'}
                                onChange={() => handleAnswerChange('q7', 'D')}
                            />
                        </FormField>
                    </Form>
                </Container>

                <Container style={{ padding: '2%', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }}>
                    <Header as='h3'>8. What is the chemical symbol for gold?</Header>
                    <Form>
                        <FormField style={{ display: 'flex', flexDirection: 'column', padding: '1%', gap: '1rem' }}>
                            <Radio
                                label='Au'
                                name='q8'
                                value='A'
                                checked={answers.q8 === 'A'}
                                onChange={() => handleAnswerChange('q8', 'A')}
                            />
                            <Radio
                                label='Ag'
                                name='q8'
                                value='B'
                                checked={answers.q8 === 'B'}
                                onChange={() => handleAnswerChange('q8', 'B')}
                            />
                            <Radio
                                label='Pb'
                                name='q8'
                                value='C'
                                checked={answers.q8 === 'C'}
                                onChange={() => handleAnswerChange('q8', 'C')}
                            />
                            <Radio
                                label='Fe'
                                name='q8'
                                value='D'
                                checked={answers.q8 === 'D'}
                                onChange={() => handleAnswerChange('q8', 'D')}
                            />
                        </FormField>
                    </Form>
                </Container>

                <Container style={{ padding: '2%', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }}>
                    <Header as='h3'>9. What is the largest continent?</Header>
                    <Form>
                        <FormField style={{ display: 'flex', flexDirection: 'column', padding: '1%', gap: '1rem' }}>
                            <Radio
                                label='Asia'
                                name='q9'
                                value='A'
                                checked={answers.q9 === 'A'}
                                onChange={() => handleAnswerChange('q9', 'A')}
                            />
                            <Radio
                                label='Africa'
                                name='q9'
                                value='B'
                                checked={answers.q9 === 'B'}
                                onChange={() => handleAnswerChange('q9', 'B')}
                            />
                            <Radio
                                label='Europe'
                                name='q9'
                                value='C'
                                checked={answers.q9 === 'C'}
                                onChange={() => handleAnswerChange('q9', 'C')}
                            />
                            <Radio
                                label='North America'
                                name='q9'
                                value='D'
                                checked={answers.q9 === 'D'}
                                onChange={() => handleAnswerChange('q9', 'D')}
                            />
                        </FormField>
                    </Form>
                </Container>

                <Container style={{ padding: '2%', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }}>
                    <Header as='h3'>10. What is the largest ocean on Earth?</Header>
                    <Form>
                        <FormField style={{ display: 'flex', flexDirection: 'column', padding: '1%', gap: '1rem' }}>
                            <Radio
                                label='Atlantic Ocean'
                                name='q10'
                                value='A'
                                checked={answers.q10 === 'A'}
                                onChange={() => handleAnswerChange('q10', 'A')}
                            />
                            <Radio
                                label='Indian Ocean'
                                name='q10'
                                value='B'
                                checked={answers.q10 === 'B'}
                                onChange={() => handleAnswerChange('q10', 'B')}
                            />
                            <Radio
                                label='Pacific Ocean'
                                name='q10'
                                value='C'
                                checked={answers.q10 === 'C'}
                                onChange={() => handleAnswerChange('q10', 'C')}
                            />
                            <Radio
                                label='Southern Ocean'
                                name='q10'
                                value='D'
                                checked={answers.q10 === 'D'}
                                onChange={() => handleAnswerChange('q10', 'D')}
                            />
                        </FormField>
                    </Form>
                </Container>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Button color='green' onClick={submitHandler}>Submit</Button>
                </div>
            </div>
        </div>
    );
};

export default Quiz;

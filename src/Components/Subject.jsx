import React,{useState} from 'react';
import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
    Header
} from 'semantic-ui-react';
import {  Modal } from 'semantic-ui-react';
import {Button} from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
const Subject = () => {
    const navigate = useNavigate();
    const submitHandler = () => {
        navigate('/');
    }
    const startTest = () => {
        navigate('/quiz');
    }
    const [open, setOpen] = useState(false);
    const showModal = () => setOpen(true); 
    const closeModal = () => setOpen(false); 
    return (
        <div>
            <div className="navbar" style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0.5%',scrollBehavior:'smooth',position:'sticky',top:'0',zIndex:'100',background:'white'}}>
                <h2>Available Test Subjects</h2>
                <Button onClick={submitHandler} color='red'>Logout</Button>
            </div>
            <div className="cont" style={{display:'flex',justifyContent:'space-around',padding:'2%',flexWrap:'wrap', background: 'linear-gradient(90deg, #1CB5E0 0%, #000851 100%)'}}>
            <Card>
                <Image src='https://res.cloudinary.com/durc5ydxo/image/upload/v1736865341/freepik__the-style-is-candid-image-photography-with-natural__62429_abejhi.jpg' fluid/>
                <CardContent>
                    <CardHeader>General Quiz</CardHeader>
                    <CardMeta>
                        <span className='date'>Multiple Choice Questions</span>
                    </CardMeta>
                    <CardDescription>
                    This section contains 10 multiple-choice questions, each carrying 1 mark.
                    </CardDescription>
                </CardContent>
                <CardContent extra>
                    <a>
                        <Button color='blue' onClick={showModal}>Start Test</Button>
                    </a>
                </CardContent>
            </Card>
            <Card>
                <Image src='https://res.cloudinary.com/durc5ydxo/image/upload/v1736869774/Untitled_design_1_k29wxb.png' fluid/>
                <CardContent>
                    <CardHeader>Digital</CardHeader>
                    <CardMeta>
                        <span className='date'>Multiple Choice Questions</span>
                    </CardMeta>
                    <CardDescription>
                    This section contains 10 multiple-choice questions, each carrying 1 mark.
                    </CardDescription>
                </CardContent>
                <CardContent extra>
                    <a>
                        <Button color='blue' onClick={showModal}>Start Test</Button>
                    </a>
                </CardContent>
            </Card>
            <Card>
                <Image src='https://res.cloudinary.com/durc5ydxo/image/upload/v1736870051/Untitled_design_2_tnc71m.png' fluid/>
                <CardContent>
                    <CardHeader>Business</CardHeader>
                    <CardMeta>
                        <span className='date'>Multiple Choice Questions</span>
                    </CardMeta>
                    <CardDescription>
                        This section contains 10 multiple-choice questions, each carrying 1 mark.
                    </CardDescription>
                </CardContent>
                <CardContent extra>
                    <a>
                        <Button color='blue' onClick={showModal}>Start Test</Button>
                    </a>
                </CardContent>
            </Card>
            
            </div>
            <Modal open={open} onClose={closeModal} size='small'>
                <Header content='Do you want to Proceed ?' />
                <Modal.Content>
                    <p>Time Limit : 10:00 Mins</p>
                    <p>Click on `OK` to continue</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={closeModal}>
                        Cancel
                    </Button>
                    <Button color='green' onClick={startTest}>
                        OK
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}

export default Subject
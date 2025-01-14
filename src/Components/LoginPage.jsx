import react ,{useState}from 'react';
import { useNavigate } from 'react-router-dom';
import { Header,Form,FormField,Button,Input } from 'semantic-ui-react';
import '../App.css';
const LoginPage = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [message,setMessage] = useState('');
    const navigate = useNavigate();
    const changeHandler = (e)=>{
        const {value} = e.target;
        if(e.target.name === 'username'){
            setUsername(value);
        }
        else{
            setPassword(value);
        }
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        if(username === 'admin' && password === 'admin123'){
            console.log('Login Successfull');
            setMessage("Login Successfull");
            navigate('/subject');
        }
        else{
            console.log('Login Failed');
            setMessage("Invalid Username or Password !");
        }
    }
    return (
        <>
        <div style={{height: 'fit-content', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',padding:'1%',boxShadow: '0 3.2px 7.2px 0 rgb(0 0 0 / 13%), 0 0.6px 1.8px 0 rgb(0 0 0 / 11%)',background:'linear-gradient(90deg, #1CB5E0 0%, #000851 100%)',textAlign:'center'}} className="nav">
                <h1 style={{color:'white'}}>ONLINE EXAMINATION SYSTEM</h1>
        </div>

        <div className="loginbody">
            
            <div style={{  display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <img src="https://res.cloudinary.com/durc5ydxo/image/upload/v1736859273/freepik__adjust__67814_xickh2.png" alt="" width='85%' height='75%' className="image"/>
            </div>

            <div className="logindiv" style={{ height: '50vh', width: '50vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                <h1 style={{color:'white'}}>Login</h1>
                <Form onSubmit={submitHandler} style={{width:'fit-content',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'1rem'}}>
                    <FormField>
                        <label style={{color:'white'}}>Username</label>
                        <Input placeholder='username' type='text' name='username' value={username} onChange={changeHandler} required icon='user'/>
                    </FormField>
                    <FormField>
                        <label style={{color:'white'}}>Password</label>
                        <Input placeholder='password' type='password' name='password' value={password} onChange={changeHandler} required icon='lock'/>
                    </FormField>
                    <FormField>
                        <Button type='submit' color="green" >Submit</Button>
                    </FormField>
                </Form>
                {message && <Header as='h4' color='white'>{message}</Header>}
            </div>

        </div>
        </>

    )
};
export default LoginPage;
import React ,{useState,useEffect}from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import {Icon} from 'semantic-ui-react';
const Result = () => {
    const location = useLocation();
    const { score, answers } = location.state || { score: 0, answers: {} };
    const [icon,setIcon]=useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        if(score>0){
            setIcon(true);
        }
    },[score])
    setTimeout(()=>{
        navigate('/subject');
    },5000)
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100vh'}}>
            <h1>RESULT</h1>
            {  
                icon?<Icon name='check circle' color='green' size='massive' />:<Icon name='times circle' color='red' size='massive' />
            }
            <h3>Your Score : {score}</h3>
            <span>Redirecting to Dashboard....</span>
        </div>
    );
};

export default Result;

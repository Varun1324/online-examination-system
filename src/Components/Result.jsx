import React ,{useState,useEffect}from 'react';
import { useLocation } from 'react-router-dom';
import {Icon} from 'semantic-ui-react';
const Result = () => {
    const location = useLocation();
    const { score, answers } = location.state || { score: 0, answers: {} };
    const [icon,setIcon]=useState(false);
    useEffect(()=>{
        if(score>0){
            setIcon(true);
        }
    },[score])
    setTimeout(()=>{
        window.location.href='/subject';
    },5000)
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100vh'}}>
            <h1>RESULT</h1>
            {
                
                icon?<Icon name='check circle' color='green' size='massive' />:<Icon name='times circle' color='red' size='massive' />
            }
            <h3>Your Score : {score}</h3>
            {/* Render additional data as needed */}
        </div>
    );
};

export default Result;

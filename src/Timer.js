import "./Timer.css"
import {useEffect,useState} from 'react'

const  Timer = ()=>{

    const [second,setSecond]=useState(0);
    const [minute,setminute]=useState(0);
   
    var timer;
    useEffect(()=>{
         timer = setInterval(()=>{
            setSecond(second+1);
            if(second===59){
                setminute(minute+1)
                setSecond(0)
            }
        },1000)
        return()=>clearInterval(timer);
    })
    const restart =()=>{
        setminute(0);
        setSecond(0);
    }
    const stop=()=>{
        clearInterval(timer);
    }
    
    return(
        <div className='timer'>
            <div className="container">
                <div className="timer_container">
                    <h1 className="display_timer">Timer</h1>
                    <h1>{minute<10?"0"+minute:minute}:{second<10?"0"+second:second}</h1>
                    <h6>Minutes : Seconds</h6>
                    
                    <button className="restart" onClick={restart}>Restart</button>
                    <button className="stop" onClick={stop}>Stop</button>

                </div>
            </div>
           
        </div>
    )
}

export default Timer
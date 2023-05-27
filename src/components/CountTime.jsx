import "./CountTime.scss"
import { useEffect, useRef, useState } from "react";

const CountTime = () => {
    const [timer, setTimer] = useState(0)
    const countRef = useRef(null)

    useEffect(()=> {
        handleStart()
    }, [])

    const handleStart = () => {
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    const handlePause = () => {
        clearInterval(countRef.current)
    }

    const handleReset = () => {
        clearInterval(countRef.current)
        setTimer(0)
    }

    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
    
        return `${getHours} : ${getMinutes} : ${getSeconds}`
      }
    
    

    return (
        <div className="countTime-container">
            <div className="activity">
                <div className="btn start" onClick={handleStart}>
                    Start
                </div>
                <div className="btn pause" onClick={handlePause}>
                    Pause
                </div>
                <div className="btn reset" onClick={handleReset}>
                    Reset
                </div>
            </div>

            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default CountTime;
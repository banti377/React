import React, { useState, useRef } from 'react'
import "./stopwatch.css"

export default function StopWatch() {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const formatTime = (milliseconds) => {
        const pad = (num) => num.toString().padStart(2, '0');
        const seconds = Math.floor((milliseconds / 1000) % 60);
        const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
        const hours = Math.floor(milliseconds / 1000 / 60 / 60);
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    };

    const handleStartStop = () => {
        if (isRunning) {
            clearInterval(intervalRef.current);
        } else {
            const startTime = Date.now() - time;
            intervalRef.current = setInterval(() => {
                setTime(Date.now() - startTime);
            }, 1000);
        }
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        clearInterval(intervalRef.current);
        setTime(0);
        setIsRunning(false);
    };

    return (
        <div className="stopwatch">
            <div className="stopwatch-container">
                <div className="stopwatch-time">{formatTime(time)}</div>
            </div>
            <div className="stopwatch-controls">
                <button className="stopwatch-button" onClick={handleStartStop}>
                    {isRunning ? 'Stop' : 'Start'}
                </button>
                <button className="stopwatch-button" onClick={handleReset}>
                    Reset
                </button>
            </div>
        </div>
    );
}

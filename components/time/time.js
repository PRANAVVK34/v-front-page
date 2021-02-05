import React from 'react';
import style from './time.module.css';
const time=()=>(
    <div className={style.time}>
        <h1>Berline</h1>
        <time><span>Local Time</span> 11.30 PM</time>
    </div>
)
export default time;
import React from 'react';
import Image from 'next/image';
import style from './live.module.css';
const liveView=()=>(

<>

    <div className={style.live}>
        <div className={style.line}>
            <div className={style.red}>
                <Image src="/icon-2.svg" alt="image" width="25" height="20" />
                <h4>LIVE</h4>
            </div>
            <p>20K</p>
        </div>
        
        <Image src="/live.jpg" alt="image" width="164" height="54" />
        <h5>21458.87 MB</h5>
        <small>airBytes</small>
    </div>
</>    
)
export default liveView;
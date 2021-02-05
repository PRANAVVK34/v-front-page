import React from 'react';
import Head from 'next/head';
import VideoPage from '../components/video-bgd/video';
import Label from '../components/volcano-label/label';
import Time from '../components/time/time';
import LiveView from '../components/live-view/live-view';
import Logo from '../components/logo/logo';

function HomePage() {
    return (
    <>
    <Head>
        <link rel="stylesheet" href="https://candyfonts.com/wp-data/2018/10/26/11538/HELR45W.ttf"/>
    </Head>
    <div className="container">
        <Label/>
        <LiveView/>
        <Time/>
        <Logo/>
        <VideoPage/>
        <style jsx global>
            {`
            .container{
                max-width:100vw;
                overflow-x:hidden;
                overflow-y:hidden;
                font-family: helvetica;
                
            }
            body{
                background-color:black;
                box-sizing: border-box;
                margin:0;
                padding:0;
            }
           
            `}
        </style>
    </div>
    </>
    ) 
  }
  
  export default HomePage
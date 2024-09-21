import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';
import Footer from './footer/Footer';


export default function Home() {
    return (
    <>
    <div className="page d-flex">
        <Sidebar/>
        <Content/>
    </div>
    <Footer/>
    </>
)
};

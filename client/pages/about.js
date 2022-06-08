import React from 'react';
import Sidebar from '../components/Sidebar';
import Team from '../components/Team';
import Footer from '../components/Footer';
const about = () => {
    return (
        < div className='absolute'>
            <Sidebar />
            <Team />
            <Footer />
        </div>
    );
};

export default about;
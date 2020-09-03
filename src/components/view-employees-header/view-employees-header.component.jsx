import React from 'react';

import './view-employees-header.styles.scss';

const ViewEmployeesHeader = () => (
    <div className='view-employees-header'>
        <h1 className='veh-name'>Employee Name</h1>
        <h1 className='veh-position'>Position</h1>
        <h1 className='veh-wizy-email'>Wizy Email</h1>
        <h1 className='veh-personal-number'>Contact Number</h1>
    </div>
)

export default ViewEmployeesHeader;
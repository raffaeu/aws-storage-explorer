import * as React from 'react';
import { Sidebar, Sidenav, Nav } from 'rsuite';

import { Dashboard, Gear, Setting, Storage, Table, UserBadge } from '@rsuite/icons';

import Logo from '../../assets/AWS_logo_RGB_REV.svg';
import './MainSidebar.less';

const MainSidebar = () => {

    return (
        <Sidebar
            style={{ display: 'flex', flexDirection: 'column' }}
            width={56}
            collapsible={false}
            className='main-sidebar'
        >
            <Sidenav expanded={false} className='sidebar'>
                <Sidenav.Header>
                    <div className='sidebar-header'>
                        <img src={Logo} alt="AWS Storage Explorer" />
                    </div>
                </Sidenav.Header>
                <Sidenav.Body>
                    <Nav>
                        <Nav.Item icon={<Dashboard />} eventKey="dashboard">Dashboard</Nav.Item>
                        <Nav.Item icon={<Storage />} eventKey="storage">Storage</Nav.Item>
                        <Nav.Item icon={<Table />} eventKey="table">Table</Nav.Item>
                    </Nav>
                </Sidenav.Body>
                <Sidenav.Body className='sidebar-settings'>
                    <Nav>
                        <Nav.Item icon={<UserBadge />} eventKey="profile">Profile</Nav.Item>
                        <Nav.Item icon={<Gear />} eventKey="setting">Settings</Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </Sidebar>
    )
}

export default MainSidebar;
import * as React from 'react';
import { Sidebar, Sidenav, Nav } from 'rsuite';

import { Dashboard, Gear, Storage, Table, UserBadge } from '@rsuite/icons';

import Logo from '../../assets/AWS_logo_RGB_REV.svg';
import './MainSidebar.less';

interface MainSidebarProps {
    currentSection: string,
    setSection: (section: string) => void,
}

const MainSidebar = ({ currentSection, setSection }: MainSidebarProps) => {

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
                    <Nav activeKey={currentSection}>
                        <Nav.Item onClick={(e) => setSection(e.currentTarget.getAttribute('data-event-key') ?? '')} icon={<Dashboard style={{ fontSize: 24, height: 24, marginLeft: -3 }} />} eventKey="dashboard">Dashboard</Nav.Item>
                        <Nav.Item onClick={(e) => setSection(e.currentTarget.getAttribute('data-event-key') ?? '')} icon={<Storage style={{ fontSize: 24, height: 24, marginLeft: -3 }} />} eventKey="storages">Storage</Nav.Item>
                        <Nav.Item onClick={(e) => setSection(e.currentTarget.getAttribute('data-event-key') ?? '')} icon={<Table style={{ fontSize: 24, height: 24, marginLeft: -3 }} />} eventKey="tables">Table</Nav.Item>
                    </Nav>
                </Sidenav.Body>
                <Sidenav.Body className='sidebar-settings'>
                    <Nav activeKey={currentSection}>
                        <Nav.Item onClick={(e) => setSection(e.currentTarget.getAttribute('data-event-key') ?? '')} icon={<UserBadge style={{ fontSize: 24, height: 24, marginLeft: -3 }} />} eventKey="profile">Profile</Nav.Item>
                        <Nav.Item onClick={(e) => setSection(e.currentTarget.getAttribute('data-event-key') ?? '')} icon={<Gear style={{ fontSize: 24, height: 24, marginLeft: -3 }} />} eventKey="settings">Settings</Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </Sidebar>
    )
}

export default MainSidebar;
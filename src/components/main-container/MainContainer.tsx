import * as React from 'react';

import { Container, Header, Sidebar, Sidenav, Content, Navbar, Nav } from 'rsuite';
import CogIcon from '@rsuite/icons/legacy/Cog';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import DashboardIcon from '@rsuite/icons/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';

import './MainContainer.less';

interface NavToggleProps {
    expand: any; // Replace 'any' with the appropriate type if possible
    onChange: () => void; // Assuming onChange is a function with no parameters and void return type
}

const NavToggle = ({ expand, onChange }: NavToggleProps) => {
    return (
        <Navbar appearance="subtle" className="nav-toggle">
            <Nav>
                <Nav.Menu
                    noCaret
                    placement="topStart"
                    trigger="click"
                    title={<CogIcon style={{ width: 20, height: 20 }} />}
                >
                    <Nav.Item>Help</Nav.Item>
                    <Nav.Item>Settings</Nav.Item>
                    <Nav.Item>Sign out</Nav.Item>
                </Nav.Menu>
            </Nav>

            <Nav pullRight>
                <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
                    {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};

const MainContainer = () => {
    const [expand, setExpand] = React.useState(true);
    return (
        <div className="show-fake-browser sidebar-page">
            <Container>
                <Sidebar
                    style={{ display: 'flex', flexDirection: 'column' }}
                    width={expand ? 260 : 56}
                    collapsible
                >
                    <Sidenav.Header>
                        <div className='side-nav'>
                            <span style={{ marginLeft: 12 }}> BRAND</span>
                        </div>
                    </Sidenav.Header>
                    <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
                        <Sidenav.Body>
                            <Nav>
                                <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                                    Dashboard
                                </Nav.Item>
                                <Nav.Item eventKey="2" icon={<GroupIcon />}>
                                    User Group
                                </Nav.Item>
                                <Nav.Menu
                                    eventKey="3"
                                    trigger="hover"
                                    title="Advanced"
                                    icon={<MagicIcon />}
                                    placement="rightStart"
                                >
                                    <Nav.Item eventKey="3-1">Geo</Nav.Item>
                                    <Nav.Item eventKey="3-2">Devices</Nav.Item>
                                    <Nav.Item eventKey="3-3">Brand</Nav.Item>
                                    <Nav.Item eventKey="3-4">Loyalty</Nav.Item>
                                    <Nav.Item eventKey="3-5">Visit Depth</Nav.Item>
                                </Nav.Menu>
                                <Nav.Menu
                                    eventKey="4"
                                    trigger="hover"
                                    title="Settings"
                                    icon={<GearCircleIcon />}
                                    placement="rightStart"
                                >
                                    <Nav.Item eventKey="4-1">Applications</Nav.Item>
                                    <Nav.Item eventKey="4-2">Websites</Nav.Item>
                                    <Nav.Item eventKey="4-3">Channels</Nav.Item>
                                    <Nav.Item eventKey="4-4">Tags</Nav.Item>
                                    <Nav.Item eventKey="4-5">Versions</Nav.Item>
                                </Nav.Menu>
                            </Nav>
                        </Sidenav.Body>
                    </Sidenav>
                    <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
                </Sidebar>

                <Container>
                    <Header>
                        <h2>Page Title</h2>
                    </Header>
                    <Content>Content</Content>
                </Container>
            </Container>
        </div>
    )
}

export default MainContainer;
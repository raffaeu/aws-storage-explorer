import * as React from 'react';
import { HashRouter } from 'react-router-dom';

import { Container, Content } from 'rsuite';
import MainSidebar from '../main-sidebar/MainSidebar';

import './MainContainer.less';
import SubSidebar from '../sub-sidebar/SubSidebar';

const MainContainer = () => {

    const [currentSection, setCurrentSection] = React.useState('dashboard');

    const setSection = (section: string) => {
        setCurrentSection(section);
    }

    return (
        <Container className="main-container">
            {/* Sidebar for main navigation  */}
            <MainSidebar currentSection={currentSection} setSection={args => setSection(args)} />
            {/* Main content  */}
            <Content>
                <Container>
                    {/* Subnavigation */}
                    <HashRouter>
                        <SubSidebar currentSection={currentSection} />
                    </HashRouter>
                    {/* Main content */}

                </Container>
            </Content>
        </Container>
    )
}

export default MainContainer;
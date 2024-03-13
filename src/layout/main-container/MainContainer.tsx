import * as React from 'react';

import { Container } from 'rsuite';
import MainSidebar from '../main-sidebar/MainSidebar';

import './MainContainer.less';

const MainContainer = () => {

    return (
        <Container className="main-container">
            <MainSidebar />
        </Container>
    )
}

export default MainContainer;
import { Sidebar, Sidenav } from 'rsuite';

import './SubSidebar.less';

interface Props {
    currentSection: string;
}

const SubSidebar = ({ currentSection }: Props) => {
    return (
        <Sidebar
            style={{ display: 'flex', flexDirection: 'column' }}
            width={200}
            collapsible={false}
            className='sub-sidebar'>
            <Sidenav>
                <Sidenav.Header className='sub-header'>
                    <span>{currentSection}</span>
                </Sidenav.Header>
            </Sidenav>
        </Sidebar>
    );
}

export default SubSidebar;
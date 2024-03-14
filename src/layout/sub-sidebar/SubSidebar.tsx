import { useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { Sidebar, Sidenav } from 'rsuite';

import './SubSidebar.less';
import DashboardPanel from '../../components/dashboard-panel/DashboardPanel';
import TablesPanel from '../../components/tables-panel/TablesPanel';
import StoragesPanel from '../../components/storages-panel/StoragesPanel';
import ProfilePanel from '../../components/profile-panel/ProfilePanel';
import SettingsPanel from '../../components/settings-panel/SettingsPanel';

interface Props {
    currentSection: string;
}

const SubSidebar = ({ currentSection }: Props) => {

    const navigate = useNavigate();

    useEffect(() => {
        navigate(currentSection)
        // console.log(`Current section: ${currentSection}`);
    }, [currentSection, navigate])

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
                <Sidenav.Body>
                    <Routes>
                        <Route path='/' element={<DashboardPanel />} />
                        <Route path='/dashboard' element={<DashboardPanel />} />
                        <Route path='/storages' element={<StoragesPanel />} />
                        <Route path='/profile' element={<ProfilePanel />} />
                        <Route path='/tables' element={<TablesPanel />} />
                        <Route path='/settings' element={<SettingsPanel />} />
                    </Routes>
                </Sidenav.Body>
            </Sidenav>
        </Sidebar>
    );
}

export default SubSidebar;
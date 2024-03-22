import { Tabs, Placeholder } from 'rsuite';

import './MainTab.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faBitbucket } from '@fortawesome/free-brands-svg-icons';
import { TableColumn } from '@rsuite/icons';
import { useAppSelector } from '../../redux/hooks';
import { Tab } from '../../redux/navigation/types';

const getIcon = (tab: Tab) => {
    if (tab.type === 'bucket') {
        return <FontAwesomeIcon icon={faBitbucket} style={{ color: 'green', marginRight: 6 }} />
    }
    if (tab.type === 'table') {
        return <TableColumn style={{ color: 'cyan', marginRight: 6 }} />
    }
    return <FontAwesomeIcon icon={faAws}
        style={{ color: 'orange', marginRight: 6 }} />
}

const MainTab = () => {

    const state = useAppSelector((state) => state);

    return (
        <div className='main-tab'>
            <Tabs appearance='subtle' activeKey={state.navigation.activeTab?.label}>
                {
                    state.navigation.openTabs.map((tab) => (
                        <Tabs.Tab
                            eventKey={tab.label}
                            title={tab.label}
                            icon={getIcon(tab)}
                        >
                            <Placeholder.Paragraph />
                        </Tabs.Tab>
                    ))
                }
                {/*}
                // <Tabs.Tab eventKey='2' title="3-bucket-36" icon={<FontAwesomeIcon icon={faBitbucket} style={{ color: 'green', marginRight: 6 }} />}>
                //     <Placeholder.Paragraph />
                // </Tabs.Tab>
                // <Tabs.Tab eventKey='3' title="3-table-1" icon={<TableColumn style={{ color: 'cyan', marginRight: 6 }} />}>
                //     <Placeholder.Paragraph />
            // </Tabs.Tab> */}
            </Tabs>
        </div>
    )
};

export default MainTab;
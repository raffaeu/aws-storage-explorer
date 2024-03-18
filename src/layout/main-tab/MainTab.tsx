import { Tabs, Placeholder } from 'rsuite';

import './MainTab.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faBitbucket } from '@fortawesome/free-brands-svg-icons';
import { TableColumn } from '@rsuite/icons';

const MainTab = () => {
    return (
        <div className='main-tab'>
            <Tabs defaultActiveKey='1' appearance='subtle'>
                <Tabs.Tab eventKey='1' title="1-account" icon={<FontAwesomeIcon icon={faAws} style={{ color: 'orange', marginRight: 6 }} />}>
                    <Placeholder.Paragraph />
                </Tabs.Tab>
                <Tabs.Tab eventKey='2' title="3-bucket-36" icon={<FontAwesomeIcon icon={faBitbucket} style={{ color: 'green', marginRight: 6 }} />}>
                    <Placeholder.Paragraph />
                </Tabs.Tab>
                <Tabs.Tab eventKey='3' title="3-table-1" icon={<TableColumn style={{ color: 'cyan', marginRight: 6 }} />}>
                    <Placeholder.Paragraph />
                </Tabs.Tab>
            </Tabs>
        </div>
    )
};

export default MainTab;
import { Navbar, Nav, Tree } from 'rsuite';
import { Plus, Reload, Trash } from '@rsuite/icons';
import { faAws } from '@fortawesome/free-brands-svg-icons';
import { faBitbucket } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './StoragesPanel.less';

const data = [
    {
        label: '12345678',
        value: '12345678',
        type: 'account',
        children: [
            {
                label: 'Bucket-123',
                value: 'Bucket-123',
                type: 'bucket'
            },
            {
                label: 'Bucket-456',
                value: 'Bucket-456',
                type: 'bucket'
            }
        ]
    },
    {
        label: '87654321',
        value: '87654321',
        type: 'account',
        children: [
            {
                label: 'Bucket-789',
                value: 'Bucket-789',
                type: 'bucket'
            },
            {
                label: 'Bucket-135',
                value: 'Bucket-135',
                type: 'bucket'
            },
            {
                label: 'Bucket-987',
                value: 'Bucket-987',
                type: 'bucket'
            }
        ]
    },
];

const StoragesPanel = () => {
    return (
        <div className="storages-panel">
            <Navbar>
                <Nav>
                    <Nav.Item icon={<Plus />} />
                    <Nav.Item icon={<Trash />} />
                </Nav>
                <Nav pullRight>
                    <Nav.Item icon={<Reload />} />
                </Nav>
            </Navbar>
            <hr />
            <Tree
                data={data}
                showIndentLine
                onSelect={(item, value) => console.log(value)}
                renderTreeNode={node => {
                    return (
                        <>
                            {node.children ?
                                <FontAwesomeIcon icon={faAws} style={{ color: 'orange', marginRight: 6 }} />
                                : <FontAwesomeIcon icon={faBitbucket} style={{ color: 'green', marginRight: 6 }} />}
                            {node.label}
                        </>
                    );
                }}
            />
        </div>
    );
}

export default StoragesPanel;
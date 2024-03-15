import { Navbar, Nav, Tree } from 'rsuite';

import { Plus, Reload, Trash, TableColumn } from '@rsuite/icons';
import { faAws, faBitbucket } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './TablesPanel.less';

const getRandomArray = () => {
    const length = Math.floor(Math.random() * 10) + 1; // Random length between 1 and 10
    let array: number[] = [];
    for (let i = 0; i < length; i++) {
        const randomInt = Math.floor(Math.random() * 100); // Random integer between 0 and 99 (you can adjust range as needed)
        array.push(randomInt);
    }
    return array
        .filter((item, index) => array.indexOf(item) === index)
        .sort((a, b) => a - b);
};

const generateNodes = () => {
    let data = [];
    for (let i = 0; i < 30; i++) {
        const ac = {
            label: `${i + 1}-account`,
            value: `${i + 1}-account`,
            type: 'account',
            children: getRandomArray().map(x => {
                return {
                    label: `${i + 1}-table-${x + 1}`,
                    value: `${i + 1}-table-${x + 1}`,
                    type: 'table'
                }
            })
        };
        data.push(ac);
    }
    return data;
};

const TablesPanel = () => {
    return (
        <div className="tables-panel">
            <hr />
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
                className='tables-list'
                data={generateNodes()}
                showIndentLine
                onSelect={(item, value) => console.log(value)}
                renderTreeNode={node => {
                    return (
                        <>
                            {node.children ?
                                <FontAwesomeIcon icon={faAws} style={{ color: 'orange', marginRight: 6 }} />
                                : <TableColumn style={{ color: 'cyan', marginRight: 6 }} />}
                            {node.label}
                        </>
                    );
                }}
            />
        </div>
    );
};

export default TablesPanel;
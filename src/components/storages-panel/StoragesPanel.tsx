import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { createSelector } from '@reduxjs/toolkit';
import { loadTree } from '../../redux/storage/storageSlice';
import { openTab } from '../../redux/navigation/navigationSlice';

import { Navbar, Nav, Tree, Loader } from 'rsuite';
import { ItemDataType } from "rsuite/esm/@types/common";

import RegisterBucket from '../../dialogs/register-bucket/RegisterBucket';

import { Plus, Reload, Trash } from '@rsuite/icons';
import { faAws } from '@fortawesome/free-brands-svg-icons';
import { faBitbucket } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './StoragesPanel.less';
import React from 'react';
import { RootState } from '../../redux/store';

const memoizedAccounts = createSelector(
    [(state: RootState) => state.storage.accounts],
    accounts => {
        return accounts.map(account => {
            return {
                value: account.name,
                label: account.name,
                children: account.buckets.map(bucket => {
                    return {
                        value: bucket.name,
                        label: bucket.name,
                    } as ItemDataType<string>
                })
            } as ItemDataType<string>
        })
    }
)

const StoragesPanel = () => {

    const state = useAppSelector((state) => state);
    const dispatch = useAppDispatch();
    const [registerOpen, setRegisterOpen] = React.useState(false);

    return (
        <>
            <RegisterBucket isOpen={registerOpen} handleClose={() => setRegisterOpen(false)} />
            <div className="storages-panel">
                <hr />
                <Navbar>
                    <Nav>
                        <Nav.Item icon={<Plus />} onClick={() => setRegisterOpen(true)} />
                        <Nav.Item icon={<Trash />} />
                    </Nav>
                    <Nav pullRight>
                        <Nav.Item icon={<Reload />} onClick={() => dispatch(loadTree())} />
                    </Nav>
                </Navbar>
                <hr />
                {state.storage.isLoading && <Loader content="Loading..." vertical className='storage-loader' />}
                {!state.storage.isLoading &&
                    <Tree
                        className='storages-list'
                        data={memoizedAccounts(state)}
                        onSelect={(item, value) => dispatch(openTab({
                            label: value.toString(),
                            type: item.children ? 'account' : 'bucket'
                        }))}
                        showIndentLine
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
                }

            </div>
        </>
    );
};

export default StoragesPanel;
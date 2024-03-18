import React from 'react';
import { Modal, Button, Form, Message } from 'rsuite';
import FormGroup from 'rsuite/esm/FormGroup';

interface RegisterBucketProps {
    isOpen: boolean;
    handleClose: () => void;
}

const RegisterBucket = ({ isOpen, handleClose }: RegisterBucketProps) => {

    const [formValue, setFormValue] = React.useState({
        name: '',
        region: '',
        accessKeyId: '',
        secretAccessKey: ''
    });

    return (
        <div className="register-bucket">
            <Modal open={isOpen} onClose={handleClose} size="xs">
                <Modal.Header><strong>Register an S3 Bucket</strong></Modal.Header>
                <Modal.Body>
                    <Form fluid onChange={() => setFormValue} formValue={formValue}>
                        <FormGroup>
                            <Message type='warning' header="Only static credentials" showIcon>
                                You can find more information <a href='https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html' target='_blank'>here</a>.
                            </Message>
                        </FormGroup>
                        <Form.Group controlId="name">
                            <Form.ControlLabel>Bucket Name</Form.ControlLabel>
                            <Form.Control name="name" type="text" />
                            <Form.HelpText>Required</Form.HelpText>
                        </Form.Group>
                        <Form.Group controlId="region">
                            <Form.ControlLabel>AWS Region</Form.ControlLabel>
                            <Form.Control name="region" type="text" />
                            <Form.HelpText>Required</Form.HelpText>
                        </Form.Group>
                        <Form.Group controlId="accessKeyId">
                            <Form.ControlLabel>Access Key Id</Form.ControlLabel>
                            <Form.Control name="accessKeyId" type="text" />
                            <Form.HelpText>Required</Form.HelpText>
                        </Form.Group>
                        <Form.Group controlId="secretAccessKey">
                            <Form.ControlLabel>Secret Access Key</Form.ControlLabel>
                            <Form.Control name="secretAccessKey" type="text" />
                            <Form.HelpText>Required</Form.HelpText>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} appearance='primary'>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default RegisterBucket;
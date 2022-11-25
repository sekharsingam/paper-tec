import { Button, Checkbox, Col, Form, Image, Input, Row } from "antd";
import {
    UserAddOutlined,
    FileAddOutlined,
    FileFilled,

} from '@ant-design/icons';

import bgImg from './bg.png';
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate()

    const onSubmit = () =>  {
        navigate('/home')
    }

    return (
        <>
            <Row style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
                <Col span={20}>
                    <Row>
                        <Col span={12}>
                            <div ></div>
                            {/* <Image src={bgImg} preview={false} /> */}
                        </Col>
                        <Col span={12}>
                            <Form
                                name="basic"
                                labelCol={{ span: 4 }}
                                wrapperCol={{ span: 16 }}
                                initialValues={{ size: 'large' }}
                                //   onFinish={onFinish}
                                //   onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                size="large"
                            >
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                    <Button type="primary" htmlType="submit" onClick={onSubmit}>
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>

    )
}
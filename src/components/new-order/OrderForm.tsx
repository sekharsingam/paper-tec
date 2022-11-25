import { Button, Col, DatePicker, Form, Input, Row, Select, Typography } from "antd";
import { useState } from "react";
import { PAPER_SUPPLIER_OPTIONS, ROLL_SIZE_OPTIONS } from "../../utils/constants";

interface OrderFormProps {
    submitBtnLabel?: string;
}

export function OrderForm({ submitBtnLabel = 'Create' }: OrderFormProps) {

    const [showSuccessResult, setSuccessResult] = useState(false);

    const onCreateNewOrder = (values: any) => {
        setSuccessResult(true)

    }

    return (
        <Row justify="center">
            <Col span={15}>
                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                    initialValues={{ size: 'large' }}
                    autoComplete="off"
                    size="large"
                    onFinish={onCreateNewOrder}
                >
                    <Form.Item
                        label="Order Date"
                        name="orderDate"
                        rules={[{ required: true, message: 'please select order date!' }]}
                    >
                        <DatePicker size={'large'} style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        label="Customer Name"
                        name="customerName"
                        rules={[{ required: true, message: 'Please input customer name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Roll Weight"
                        name="rollWeight"
                        rules={[{ required: true, message: 'Please input roll weight!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Roll Size"
                        name="rollSize"
                        rules={[{ required: true, message: 'Please input roll size!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Cup Size"
                        name="cupSize"
                        rules={[{ required: true, message: 'Please input roll size!' }]}
                    >
                        <Select
                            size={'large'}
                            // onChange={handleChange}
                            options={ROLL_SIZE_OPTIONS}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Paper Supplier"
                        name="paperSupplier"
                        rules={[{ required: true, message: 'Please input roll size!' }]}
                    >
                        <Select
                            size={'large'}
                            // onChange={handleChange}
                            options={PAPER_SUPPLIER_OPTIONS}
                        />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 11, span: 13 }}>
                        <Button style={{ width: 200 }} type="primary" htmlType="submit">
                            {submitBtnLabel}
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}
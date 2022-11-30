import { Button, Col, DatePicker, Form, Input, InputNumber, Row, Select, Typography } from "antd";
import moment from "moment";
import { useAppSelector } from "../../app/hooks";
import { PAPER_SUPPLIER_OPTIONS, ROLL_SIZE_OPTIONS } from "../../utils/constants";

interface OrderFormProps {
    submitBtnLabel?: string;
    orderToEdit?: any;
    onSubmit: (values: any) => void
}

export function OrderForm({ submitBtnLabel = 'Create', orderToEdit, onSubmit }: OrderFormProps) {

    const { createOrderCalling } = useAppSelector(state => state.order)

    const onFormSubmit = (values: any) => {
        onSubmit(values)
    }

    return (
        <Row justify="center">
            <Col span={15}>
                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                    initialValues={{
                        size: 'large',
                        // orderDate: orderToEdit?.orderDate,
                        customerName: orderToEdit?.customerName,
                        rollWeight: orderToEdit?.rollWeight,
                        rollSize: orderToEdit?.rollSize,
                        cupSize: orderToEdit?.cupSize,
                        paperSupplier: orderToEdit?.paperSupplier,
                    }}
                    autoComplete="off"
                    size="large"
                    onFinish={onFormSubmit}
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
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        label="Roll Size"
                        name="rollSize"

                        rules={[{ required: true, message: 'Please input roll size!' }]}
                    >
                        <InputNumber style={{ width: '100%' }} />
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
                        <Button style={{ width: 200 }} type="primary" loading={createOrderCalling} htmlType="submit">
                            {submitBtnLabel}
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}
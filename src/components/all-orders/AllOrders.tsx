import { SyncOutlined } from '@ant-design/icons';
import { Input, Modal, Row, Table, Typography } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { getOrders, deleteOrder, updateOrder } from "../../app/features/orders/ordersAPI";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { DATE_FORMAT } from "../../utils/constants";
import { OrderForm } from "../new-order/OrderForm";
import { OrderActionsPopover } from "./OrderActionsPopover";


export function AllOrders() {

    const { orders } = useAppSelector(state => state.order)

    const dispatch = useAppDispatch()

    const [selectedOrderToEdit, setSelectedOrderToEdit] = useState<any>()
    const [openUpdateOrderModal, setOpenUpdateOrderModal] = useState(false)

    useEffect(() => {
        getOrdersData()
    }, [])

    const getOrdersData = () => {
        dispatch(getOrders())
    }

    const onSubmitUpdate = (values: any) => {
        dispatch(updateOrder({
            ...values,
            orderDate: moment.utc(values.orderDate).format(DATE_FORMAT),
            orderId: selectedOrderToEdit?.id
        }))
        setOpenUpdateOrderModal(false)
    }

    const columns = [
        {
            title: 'Order Date',
            dataIndex: 'orderDate',
            key: 'orderDate',
            render: (_: any, record: any) => {
                const stillUtc = moment.utc(record.orderDate).toDate();
                return <Typography.Text>{moment(stillUtc).local().format(DATE_FORMAT)}</Typography.Text>
            }
        },
        {
            title: 'Customer Name',
            dataIndex: 'customerName',
            key: 'customerName',
        },
        {
            title: 'Roll Weight',
            dataIndex: 'rollWeight',
            key: 'rollWeight',
        },
        {
            title: 'Roll Size',
            dataIndex: 'rollSize',
            key: 'rollSize',
        },
        {
            title: 'Cup Size',
            dataIndex: 'cupSize',
            key: 'cupSize',
        },
        {
            title: 'Paper Supplier',
            dataIndex: 'paperSupplier',
            key: 'paperSupplier',
        },
        {
            title: 'Action',
            dataIndex: 'operation',
            render: (_: any, record: any) => (
                <OrderActionsPopover data={record}
                    onActionSelect={(actionName: string) => onOrderActionSelect(actionName, record)} />
            ),
        },
    ]

    const handleUpdateModalCancel = () => {
        setOpenUpdateOrderModal(false)
    }

    const handleSubmitOrder = () => {
        setOpenUpdateOrderModal(false)
    }

    const onOrderActionSelect = (actionName: string, order: any) => {
        switch (actionName) {
            case 'DELETE':
                dispatch(deleteOrder(order.id))
                break;
            case 'EDIT':
                setSelectedOrderToEdit(order)
                setOpenUpdateOrderModal(true)
                break
            default:
                break;
        }
    }


    return (
        <div>
            <Row justify='end'>
                <SyncOutlined style={{ marginRight: 10, marginTop: 10, fontSize: 20, cursor: 'pointer' }} onClick={getOrdersData} />
                <Input placeholder="Search..." size='large' style={{ width: 350, marginBottom: 10 }} />
            </Row>
            <Table columns={columns} dataSource={orders} pagination={false} />
            {openUpdateOrderModal && <Modal
                open={openUpdateOrderModal}
                title="Edit Order"
                onCancel={handleUpdateModalCancel}
                width={1000}
                footer={null}
            >
                <OrderForm
                    submitBtnLabel={'Update'}
                    orderToEdit={selectedOrderToEdit}
                    onSubmit={onSubmitUpdate} />
            </Modal>}
        </div>
    )
}
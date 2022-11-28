import { Button, Input, Modal, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getOrders, deleteOrder } from "../../app/features/orders/ordersAPI";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { OrderForm } from "../new-order/OrderForm";
import { OrderActionsPopover } from "./OrderActionsPopover";


export function AllOrders() {

    const { orders } = useAppSelector(state => state.order)

    const dispatch = useAppDispatch()

    const [openUpdateOrderModal, setOpenUpdateOrderModal] = useState(false)


    useEffect(() => {
        dispatch(getOrders())
    }, [])


    const columns = [
        {
            title: 'Order Date',
            dataIndex: 'orderDate',
            key: 'orderDate',
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


    const onOrderActionSelect = (actionName: string, Order: any) => {
        switch (actionName) {
            case 'DELETE':
                dispatch(deleteOrder(Order.OrderId))
                break;
            case 'EDIT':
                setOpenUpdateOrderModal(true)
                break
            default:
                break;
        }
    }


    return (
        <div>
            <Input placeholder="Search..." size='large' style={{ width: 350, marginBottom: 10, float: 'right' }} />
            <Table columns={columns} dataSource={orders} pagination={false} />
            {openUpdateOrderModal && <Modal
                open={openUpdateOrderModal}
                title="Edit Order"
                onCancel={handleUpdateModalCancel}
                width={1000}
                footer={null}
            >
                <OrderForm submitBtnLabel={'Update'} />
            </Modal>}
        </div>
    )
}
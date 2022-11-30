import { Result, Typography } from "antd";
import moment from "moment";
import { useState } from "react";
import { createOrder } from "../../app/features/orders/ordersAPI";
import { useAppDispatch } from "../../app/hooks";
import { DATE_FORMAT } from "../../utils/constants";
import { OrderForm } from "./OrderForm";


export function NewOrder() {

    const [showSuccessResult, setSuccessResult] = useState(false);

    const dispatch = useAppDispatch()

    const onSubmit = (values: any) => {
        dispatch(createOrder({ ...values, orderDate: moment.utc(values.orderDate).format(DATE_FORMAT) }))
    }

    return (
        !showSuccessResult ?
            <div>
                <Typography.Title level={3}>New Order Page</Typography.Title>
                <OrderForm onSubmit={onSubmit} />
            </div> :
            <Result
                status="success"
                title="Successfully created a order!"
            />
    )
}
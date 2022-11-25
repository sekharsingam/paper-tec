import { Result, Typography } from "antd";
import { useState } from "react";
import { OrderForm } from "./OrderForm";


export function NewOrder() {

    const [showSuccessResult, setSuccessResult] = useState(false);

    return (
        !showSuccessResult ?
            <div>
                <Typography.Title level={3}>New Order Page</Typography.Title>
                <OrderForm />
            </div> :
            <Result
                status="success"
                title="Successfully created a order!"
            />
    )
}
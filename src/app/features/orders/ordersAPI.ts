import axios from "axios";
import { ORDERS_DATA } from "../../../utils/constants";
import { AppDispatch } from "../../store";
import { getOrdersDone } from "./ordersSlice";

interface OrderPayload {
    orderDate: string,
    customerName: string,
    rollWeight: number,
    rollSize: number,
    cupSize: number,
    paperSupplier: string
}

const API_END_POINT = 'http://localhost:8080'
export const getOrders = () => async (dispatch: AppDispatch) => {
    const response = await axios.get(`${API_END_POINT}/api/v1/orders/getorders`);
    dispatch(getOrdersDone(ORDERS_DATA));
};

export const createOrder = (orderPayload: OrderPayload) => async (dispatch: AppDispatch) => {
    const response = await axios.post(`${API_END_POINT}/api/v1/orders/createorder`, orderPayload);
    // dispatch(getOrdersDone(ORDERS_DATA));
    console.log(response)
};

export const updateOrder = () => async (dispatch: AppDispatch) => {
    const response = await axios.get(`${API_END_POINT}/api/v1/orders/updateorder`);
    dispatch(getOrdersDone(ORDERS_DATA));
};

export const deleteOrder = (orderId: string) => async (dispatch: AppDispatch) => {
    const response = await axios.get(`${API_END_POINT}/api/v1/orders/deleteorder?orderId=${orderId}`);
    dispatch(getOrdersDone(ORDERS_DATA));
};

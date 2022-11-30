import axios from "axios";
import { toast } from "react-toastify";
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
    axios.get(`${API_END_POINT}/api/v1/orders/getorders`).then(response => {
        dispatch(getOrdersDone(response.data));
    });
};

export const createOrder = (orderPayload: OrderPayload) => async (dispatch: AppDispatch) => {
    axios.post(`${API_END_POINT}/api/v1/orders/createorder`, orderPayload).then(response => {
        toast.success('Order has been created successfully.')
    });
};

export const updateOrder = (orderPayload: OrderPayload) => async (dispatch: AppDispatch) => {
    axios.put(`${API_END_POINT}/api/v1/orders/updateorder`, orderPayload).then(response => {
        toast.success('Order has been updated successfully.')
    });
};

export const deleteOrder = (orderId: string) => async (dispatch: AppDispatch) => {
    axios.delete(`${API_END_POINT}/api/v1/orders/deleteorder?orderId=${orderId}`).then(response => {
        toast.success('Order has been deleted successfully.')
    }).catch(err => {
        toast.error('Error while deleting the order')
    });
};

import axios from "axios";
import { ORDERS_DATA } from "../../../utils/constants";
import { AppDispatch } from "../../store";
import { getOrdersDone } from "./ordersSlice";


export const getOrders = () => async (dispatch: AppDispatch) => {
    // const response = await axios.get(``);
    dispatch(getOrdersDone(ORDERS_DATA));
};

export const createOrder = () => async (dispatch: AppDispatch) => {
    const response = await axios.get(``);
    dispatch(getOrdersDone(ORDERS_DATA));
};

export const updateOrder = () => async (dispatch: AppDispatch) => {
    const response = await axios.get(``);
    dispatch(getOrdersDone(ORDERS_DATA));
};

export const deleteOrder = () => async (dispatch: AppDispatch) => {
    const response = await axios.get(``);
    dispatch(getOrdersDone(ORDERS_DATA));
};

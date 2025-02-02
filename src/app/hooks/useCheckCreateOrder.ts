import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "src/store/slices/cart/cartSlice";
import { clearPayloadOrder, clearResponceOrder, orderStore } from "src/store/slices/order/orderSlice";

function useCheckCreateOrder() {
    const dispatch = useDispatch();
    const createOrderResponce = useSelector(orderStore).responce
    useEffect(() => {
        if (createOrderResponce.status === 'success') {
            alert('Заказ успешно создан');
            dispatch(clearPayloadOrder());
            dispatch(clearResponceOrder());
            dispatch(clearCart())
        } else if (createOrderResponce.error !== '') {
            alert(`Ошибка создания заказа. ${createOrderResponce.error}`);
            dispatch(clearPayloadOrder());
            dispatch(clearResponceOrder());
        }
    }, [createOrderResponce.status])
}

export default useCheckCreateOrder;
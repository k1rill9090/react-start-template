import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { clearProducts, initialGetProductsSaga, selectProducts } from "src/store/slices/products/productsSlice";

function useCheckCreateProductStatus() {
    const dispatch = useDispatch();
    const createProductStatus = useSelector(selectProducts).addProduct
    useEffect(() => {
        if (createProductStatus.status === 'success') {
            alert("Товар создан!")
            dispatch(clearProducts())
            dispatch(initialGetProductsSaga())
            
        } else if (createProductStatus.status === 'error') {
            alert("Ошибка создания товара!")
        }
    }, [createProductStatus.status])
}

export default useCheckCreateProductStatus;
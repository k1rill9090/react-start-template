import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearProducts } from "src/store/slices/products/productsSlice";
import { setProfile } from "src/store/slices/profile/profile";
import { clearStatus, TypeTokenState } from "src/store/slices/token/token";


function useCheckAuth(prop: TypeTokenState) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        switch (prop.status) {
            case 'success':
                navigate('/profile');
                dispatch(clearStatus());
                dispatch(clearProducts());
                break;
            case 'error':
                alert(prop.error);
                dispatch(clearStatus());
                break;
        }
    }, [prop.status])
}

export default useCheckAuth;
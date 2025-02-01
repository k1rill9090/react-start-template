import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initialGetProfileSaga } from "src/store/slices/profile/profile";

function useGetProfileInfo() {
    const dispatch = useDispatch();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token !== null) {
            dispatch(initialGetProfileSaga())
        }
    }, [])
}

export default useGetProfileInfo;
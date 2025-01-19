import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearRegState, TypeInitialStateReg } from "src/store/slices/registration/registration";

function useCheckRegStatus(prop: TypeInitialStateReg) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
      if (prop.status === 'complete') {
        if (prop.data.status !== 200) {
          alert(`ОШИБКА: ${prop.data.errors.message}`)
          dispatch(clearRegState())
        } else {
          alert('Учетная запись создана!');
          navigate('/login')
          dispatch(clearRegState())
        }
        
      }
    }, [prop]);
}

export default useCheckRegStatus;
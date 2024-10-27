import { useDispatch } from "react-redux";
import authservice from '../../appwrite/auth.js';
import { logout } from '../../store/authSlice.js';


function LogoutBtn() {
    const dispatch = useDispatch();
    function handleLogout() {
        authservice.logout()
            .then(() => {
                dispatch(logout());
            })
    }
    return <button
        className='inline-bock px-3 py-1 bg-slate-300 duration-200 hover:bg-blue-100 rounded-full'
        onClick={handleLogout}>
        Logout
    </button>
}

export default LogoutBtn;

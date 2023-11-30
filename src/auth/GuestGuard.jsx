import PropTypes from "prop-types";
import {useContext} from "react";
import {AuthContext} from "./JwtContext.jsx";
import {DASHBOARD_ROOTS} from "src/routes/path.jsx";
import {useRouter} from "../routes/useRouter.js";

function GuestGuard({children}){
    const router = useRouter()
    const {IsAuthenticated}  = useContext(AuthContext)

    if(IsAuthenticated){
        router.replace(DASHBOARD_ROOTS.root)
    }
    return (
        <>{children}</>
        )
}

GuestGuard.propTypes = {
    children:PropTypes.node
}

export default  GuestGuard
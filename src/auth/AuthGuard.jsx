import PropTypes from "prop-types";
import {useContext} from "react";
import {AuthContext} from "./JwtContext.jsx";
import {AUTH_ROOTS} from "src/routes/path.jsx";
import {useRouter} from "../routes/useRouter.js";

function AuthGuard({children}){
    const router = useRouter()
    const {IsAuthenticated}  = useContext(AuthContext)

    if(IsAuthenticated===false){
        router.replace(AUTH_ROOTS.login)
    }
    return (
        <>{children}</>
    )
}

AuthGuard.propTypes = {
    children:PropTypes.node
}

export default  AuthGuard
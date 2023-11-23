import { Box } from "@mui/material";
import {useDispatch, useSelector} from "../../redux/store.jsx"
import {useEffect} from "react";

function PostsList(){
    const dispatch = useDispatch();
    const publishState = useSelector((state)=>state.publish);
    
    useEffect(()=>{}, []);
    
    console.log("data", publishState);
    return (
        <Box>
            Hi
        </Box>
    )
}

export default PostsList
import {Box, Grid, Stack} from "@mui/material";
import {useDispatch, useSelector} from "src/redux/store.jsx"
import {useEffect, useMemo} from "react";

import PostInfoCard from './Cards.jsx'

function Posts(){
    const dispatch = useDispatch();
    const publishState = useSelector((state)=>state.publish);

    useEffect(()=>{}, []);
    
    const memoized = useMemo(() => {
        return { notesArray: publishState?.notes };
        }, [publishState]);

    console.log("data", publishState);
    return (
        <Grid container>
        <Grid xs={3}>
            <Box sx={{border:'1px solid black'}}>left side bar</Box>
        </Grid>
            <Grid xs={6} sx={{}}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'scroll',
                    padding:5,
                    height: 800, // Set the desired height for the scrollable area
                }}>
                {
                    memoized.notesArray.map((state, index)=>(
                        <PostInfoCard key={index} title={state.title} description={state.description} publicationDate={state.publicationDate}/>
                    ))
                }
            </Box>
        </Grid>
        <Grid xs={3}>
            <Box sx={{border:'1px solid black'}}>right side bar</Box>
        </Grid>
    </Grid>)
}

export default  Posts
import * as React from 'react';
import { PropTypes } from "prop-types";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useContext} from "react";
import {ThemesContext} from "../../providers/themes/ThemeProvider.jsx";


export default function PostInfoCard({title, description, publicationDate}) {
    const {theme} = useContext(ThemesContext)
   
    return (
        <Card  variant="outlined" sx={{borderRadius:5, marginBottom:4,  overflow: 'visible', backgroundColor:theme.light1 }}>
            <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                      <MoreVertIcon />
                  </IconButton>
                }
                title={title?title:"Dummy Title"}
                subheader={publicationDate?publicationDate:"Thu @28-2018"}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description?description:"This is Dummy Text"}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" color='secondary'>
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share" color='primary'>
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
        );
}

PostInfoCard.propTypes = {
    title: PropTypes.string, description: PropTypes.string, publicationDate: PropTypes.string,
};

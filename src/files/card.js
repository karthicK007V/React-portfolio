import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Cards({img,name,des,codelink,deplink}) {
  return (
    <>
                <Card sx={{ maxWidth: 350, maxHeight: 600, boxShadow: 3  }} className='card-com'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image={img}
        object-fit
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography   color="text.secondary">
          {des}
         
        </Typography>
      </CardContent>
      <CardActions  >
        <Button  variant="outlined" size="large" href={codelink}  target={"_blank"}>Code</Button>
        <Button variant="outlined" size="large" href={deplink}  target={"_blank"}>Live Demo</Button>
        
      </CardActions>
    </Card>

      
    </>
  )
}

export default Cards

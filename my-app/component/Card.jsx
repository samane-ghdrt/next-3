import * as React from 'react';
import { Card,CardContent,CardMedia,Typography,Button,CardActionArea,CardActions} from '@mui/material';


export default function MultiActionAreaCard({members}) {
  return (
    <Grid container spacing={2}>
    {members.map((member)=>{
      <Grid item xs={12} sm={6} md={4} key={member.id}>
   <Card sx={{ maxWidth: 345 }}>
      
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={member.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    
    </Card>
    </Grid>
 })}
 </Grid>
  );
}
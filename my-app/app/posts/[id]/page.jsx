import MultiActionAreaCard from '@/component/Card';
import { getData } from '@/utils/getData';
import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react'

export default async function page({param}) {
const usersData = await getData(`https://dummyjson.com/posts`);
 const user=usersData.users;
 
 
   return (
    
     <Grid container spacing={2}>

       <Card sx={{ maxWidth: 345 }}>
      
      <CardActionArea>
        <CardMedia
          component="img"
          height="70"
          width="70"
          image={usersData.users.id.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {member.maidenName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {member.email}
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
    </Grid>

   )
}
import { useQuery } from '@apollo/client';
import { Avatar, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_AUTHOR_INFO } from '../graphql/query';
import Loader from '../Loader';
import CardEl from '../shared/CardEl';

const AuthorDetail = () => {
    const { slug } = useParams()

    const { loading, error, data } = useQuery(GET_AUTHOR_INFO, {
        variables: { slug }
    })
    if (error) return <h1>Error</h1>
    if (loading) return <Loader/>
    const {author}=data
    console.log(data.author);
    return (
       <Container maxWidth='lg'>
        <Grid container mt={10}>
            <Grid item xs={12} display='flex' flexDirection='column' alignItems='center'>
                <Avatar src={data.author.avatar.url} sx={{width:250,height:250}}/>
                <Typography component='h3' variant='h5' fontWeight={700}>{author.name}</Typography>
                <Typography component='p' variant='h5' color='text.secondary' mt={2}>{author.field}</Typography>
            </Grid>
            <Grid item xs={12}>{author.description.text}</Grid>
            <Grid item xs={12} mt={5}>
                <Typography component='h3' variant='h5' fontWeight={700}>مقالات {author.name}</Typography>
               
            </Grid>
        <Grid container>
                {author.posts.map(post=>(
                    <Grid key={post.id} item xs={12} sm={6} md={4}>
                        <CardEl title={post.title} slug={post.slug} coverPhoto={post.coverPhoto}/>
                    </Grid>
                ))}
            </Grid>   
        </Grid>
       </Container>
    )
}

export default AuthorDetail

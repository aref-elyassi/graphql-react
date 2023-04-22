import { useQuery } from '@apollo/client';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GET_BLOG_INFO } from '../graphql/query';
import Loader from '../Loader';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CommentForm from '../comment/CommentForm';
import Comments from '../comment/Comments';
const BlogDetail = () => {
    const navigate = useNavigate()
    const { slug } = useParams()

    console.log(slug);
    const { data, error, loading } = useQuery(GET_BLOG_INFO, {
        variables: { slug }
    })
    if (error) return <h1>Error</h1>
    if (loading) return <Loader />
    return (
        <Container maxWidth='lg'>
            <Grid container>
                <Grid item xs={12} mt={5} display='flex' alignItems='center' justifyContent='space-between'>
                    <Typography component='h2' variant='h4' color='text.primary' fontWeight={700}>{data.post.title}</Typography>
                    <ArrowBackIcon onClick={() => navigate(-1)} />
                </Grid>
                <Grid xs={12} mt={5}>
                    <img src={data.post.coverPhoto.url} alt={data.post.slug} style={{ width: '100%', borderRadius: '15px' }} />
                </Grid>
                <Grid item xs={12} mt={7} display='flex' alignItems='center'>

                    <Avatar src={data.post.author.avatar.url} sx={{ width: 80, height: 80, marginLeft: 2 }} />
                    <Box component='div' >
                        <Typography component='p' variant='h5' fontWeight={700}>{data.post.author.name}</Typography>
                        <Typography component='p' variant='h5' fontWeight={700} color='text.secondary'>{data.post.author.field} </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} mt={5}>{data.post.content.text}</Grid>
                <Grid item xs={12}>
                    <CommentForm slug={slug} />
                    <Comments slug={slug} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default BlogDetail

import React from 'react'
import { Card, CardHeader, Avatar, Typography, CardMedia, CardContent, Divider, CardActions, Button } from '@mui/material'
import { Link } from 'react-router-dom'
const CardEl = ({ title, slug, coverPhoto, author }) => {
    return (
        <Card sx={{ boxShadow: 'gbas(0,0,0,0.1) 0px 4px 12px', borderRadius: 4 }}>
            {author &&

                <CardHeader
                    avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />}
                    title={<Typography component='p' variant='p' color='text.primary'>{author.name}</Typography>} />
            }
            <CardMedia component='img' sx={{ height: '15rem' }} image={coverPhoto.url} alt={slug} />
            <CardContent>
                <Typography variant='h6' component='h6' color='text.primary'>{title}</Typography>
            </CardContent>
            <Divider variant='middle' />
            <CardActions>
                <Link to={`/blogs/${slug}`} style={{ textDecoration: 'none' }}>
                    <Button variant='outlined' size='small' sx={{ width: '100%' }}>مطالعه مقاله</Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default CardEl
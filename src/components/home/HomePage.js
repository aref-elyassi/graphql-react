import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Authors from '../author/Authors'
import Blogs from '../blog/Blogs'

const HomePage = () => {
    return (
        <Container maxWidth='lg'>
            <Grid container spacing={5} padding={3}>

                <Grid item xs={12} md={2} mt={4}>
                    <Typography component='h3' variant='h5' mb={3}>نویسندگان</Typography>
                    <Authors/>
                </Grid>
                <Grid item xs={12} md={9} mt={4}>
                    <Typography component='h3' variant='h5' mb={3}>مقالات</Typography>
                    <Blogs/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default HomePage
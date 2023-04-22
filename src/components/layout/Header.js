import { AppBar, Toolbar, Container, Typography } from '@mui/material'
import BookIcon from '@mui/icons-material/Book';
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position='sticky'>
            <Container maxWidth='lg'>
                <Toolbar>
                    <Typography component='h1' variant='h5' fontWeight='bold' flex={1}>
                        <Link to='/' style={{textDecoration:'none',color:'rgb(180 180 180)'}}>وبلاگ من
                        </Link>
                    </Typography>
                    <BookIcon />

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
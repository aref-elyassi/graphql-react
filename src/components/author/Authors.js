import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";



import { GET_AUTHORS_INFO } from "../graphql/query";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import Loader from "../Loader";


function Authors() {
  const { data, error, loading } = useQuery(GET_AUTHORS_INFO);
  console.log(data);
  if (error) return <h1>Error</h1>
  if (loading) return <Loader/>

  return (
    <Grid container spacing={2} sx={{ boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px', borderRadius: 4 }} marginTop={2}>
      {data.authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={1}>
            <Link to={`/authors/${author.slug}`} style={{ display: 'flex', textDecoration: 'none', alignItems: 'center' }} >
              <Avatar src={author.avatar.url} sx={{ marginLeft: '10px' }} />
              <Typography variant="p" color='text.secondary' component='p'>{author.name}</Typography>
            </Link>
          </Grid>
          {
            index !== data.authors.length - 1 && (
              <Grid item xs={12}>
                <Divider variant='middle' />
              </Grid>
            )
          }

        </React.Fragment>
      ))
      }
    </Grid >

  );
}

export default Authors;

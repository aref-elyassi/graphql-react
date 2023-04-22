import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_BLOGS_INFO } from '../graphql/query'
import { Grid } from '@mui/material'
import CardEl from '../shared/CardEl'
import Loader from '../Loader'

const Blogs = () => {

  const { data, loading, error } = useQuery(GET_BLOGS_INFO)

  if (error) return <h1>Error...</h1>
  if (loading) return <Loader/>

  if (data)
    return (
      <Grid container spacing={2}>
        {data.posts.map(post => (

          
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <CardEl {...post}/>
          </Grid>
          )
        )}

      </Grid>

    )
}

export default Blogs
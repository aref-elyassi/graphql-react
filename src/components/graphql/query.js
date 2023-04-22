import { gql } from "@apollo/client";



const GET_BLOGS_INFO = gql`
query{

  posts {
    id
    slug
    title
    coverPhoto {
      url
    }
    author {
      name
      avatar {
        url
      }
    }
  }
}

`

const GET_AUTHORS_INFO = gql`
query{
    authors {
    id
    name
    slug
    avatar {
      url
    }
  }
}
`
const GET_AUTHOR_INFO = gql`
query getAuthorInfo($slug:String!) {
  author(where: {slug: $slug}) {
    avatar {
      url
    }
    field
    description {
      text
    }
    name
  posts {
    id
    slug
    title
    coverPhoto {
      url
  }
    }
  }
}
`
const GET_BLOG_INFO=gql`
query getBlogInfo($slug:String!) {
  post(where: {slug: $slug}) {
    author {
      avatar {
        url
      }
      field
      name
    }
    coverPhoto {
      url
    }
    title
    content {
      text
    }
  }
}


`

const GET_POST_COMMENTS = gql`
  query getPostComments($slug: String!) {
    comments(where: {post: {Post: {slug: $slug}}}) {
    id
    name
    text
  }
  }
`;

export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO,GET_BLOG_INFO,GET_POST_COMMENTS }
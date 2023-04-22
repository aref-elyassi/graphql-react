import { gql } from "@apollo/client";

const SEND_COMMENT = gql`
  mutation sendComment(
    $name: String!
    $email: String!
    $text: String!
    $slug: String!
  ) {
    createComment(
        data: {name:$name, text: $text, email: $email, post: {connect: {Post: {slug: $slug}}}}
    ) {
      id
    }
  }
`;

export { SEND_COMMENT };

import { gql } from "@apollo/client";

export const SIGN_IN = gql`
mutation ($username: String!, $password: String!) {
  signIn(signInInput: { username: $username, password: $password }) {
    token
  }
}
`;

export const SIGN_UP = gql`
mutation ($email: String!, $password: String!, $username: String!) {
  signUp(
    signUpInput: { email: $email, password: $password, username: $username }
  ) {
    id
    username
    profile {
      biography
    }
  }
}
`;

import { gql } from "@apollo/client";

export const SIGN_IN_MUTATION = gql`
mutation ($username: String!, $password: String!) {
  signIn(signInInput: { username: $username, password: $password }) {
    token
  }
}
`;

export const SIGN_UP_MUTATION = gql`
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

export const UPDATE_PROFILE_MUTATION = gql`
  mutation($field: String!, $value: String!) {
    updateProfile(updateProfileInput: { field: $field, value: $value })
}
`
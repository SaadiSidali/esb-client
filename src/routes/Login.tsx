import { gql, useMutation } from "@apollo/client";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { LoginType } from "../types/login-type";
import { SignInInput } from "../types/signin-input";

function Login() {
  const SIGN_UP = gql`
    mutation ($username: String!, $password: String!) {
      signIn(signInInput: { username: $username, password: $password }) {
        token
      }
    }
  `;

  const [signUpMutation, { data, loading }] = useMutation<
    LoginType,
    SignInInput
  >(SIGN_UP);

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      signUpMutation({
        variables: {
          password: values.password,
          username: values.userName,
        },
      });
    },
  });

  console.log(data);

  return (
    <>
      <Container centerContent>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : null}
        <form onSubmit={formik.handleSubmit}>
          <Box borderWidth="1px" borderRadius="lg" p={12} mt={16}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                name="userName"
                onChange={formik.handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <PasswordInput onChange={formik.handleChange}></PasswordInput>
            </FormControl>
            <Button
              type="submit"
              colorScheme={"linkedin"}
              mt={8}
              isLoading={loading}
            >
              Sign in
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
}
function PasswordInput({ onChange }: any) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
        name="password"
        onChange={onChange}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
export default Login;

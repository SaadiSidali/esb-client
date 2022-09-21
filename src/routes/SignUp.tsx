import { useMutation } from "@apollo/client";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ErrorAlert from "../components/ErrorAlert";
import { PasswordInput } from "../components/PasswordInput";
import { SIGN_UP_MUTATION } from "../gql/mutations";

import { SignUpInput } from "../types/signup-input";
import { UserType } from "../types/user-type";

function SignUp() {
  const [signUpMutation, { loading, error }] = useMutation<
    UserType,
    SignUpInput
  >(SIGN_UP_MUTATION);

  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      signUpMutation({
        variables: {
          email: values.email,
          password: values.password,
          username: values.userName,
        },
      });
    },
  });

  return (
    <>
      <Container centerContent>
        <form onSubmit={formik.handleSubmit}>
          <Box borderWidth="1px" borderRadius="lg" p={12} mt={16}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
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
            <Flex mt={8} align={"center"}>
              <Button
                type="submit"
                colorScheme={"linkedin"}
                isLoading={loading}
              >
                Sign in
              </Button>
              <Spacer />
              <Text>
                Have an account?{" "}
                <Link color={"blue.400"} as={RouterLink} to={"/login"}>
                  Login.
                </Link>
              </Text>
            </Flex>
            {error ? <ErrorAlert error={error} /> : null}
          </Box>
        </form>
      </Container>
    </>
  );
}

export default SignUp;

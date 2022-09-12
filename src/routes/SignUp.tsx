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
  InputGroup,
  InputRightElement,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { SIGN_UP } from "../gql/mutations";

import { SignUpInput } from "../types/signup-input";
import { UserType } from "../types/user-type";

function SignUp() {
  const [signUpMutation, { data, loading }] = useMutation<
    UserType,
    SignUpInput
  >(SIGN_UP);

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

  console.log(data);

  return (
    <>
      <Container centerContent>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : null}
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
                <Link color={"blue.400"}>
                  <RouterLink to={"/login"}> Login.</RouterLink>
                </Link>
              </Text>
            </Flex>
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
export default SignUp;

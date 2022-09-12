import { useMutation } from "@apollo/client";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
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
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { useAppDispatch } from "../utils/hooks";
import { setToken, setUser } from "../store/authSlice";
import { LoginType } from "../types/login-type";
import { SignInInput } from "../types/signin-input";
import { SIGN_IN } from "../gql/mutations";

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [signInMutation, { data, loading }] = useMutation<
    LoginType,
    SignInInput
  >(SIGN_IN);

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      signInMutation({
        variables: {
          password: values.password,
          username: values.userName,
        },
      });
    },
  });

  if (!loading && data) {
    console.log("not loading and data");
    console.log(data);
    dispatch(setToken(data.signIn.token));
    dispatch(setUser(data.signIn.token));

    localStorage.setItem("token", data.signIn.token);
    navigate("/profile");
  }

  return (
    <>
      <Container centerContent>
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
                Need an account?{" "}
                <Link color={"blue.400"}>
                  <RouterLink to={"/signup"}> Signup.</RouterLink>
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
export default Login;

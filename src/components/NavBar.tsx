import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { logout } from "../store/authSlice";
import { useAppDispatch, useAppSelector } from "../utils/hooks";

function NavBar() {
  const authUser = useAppSelector((x) => x.auth.value.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };


  return (
    <>
      <Box w={"100%"} boxShadow="base" rounded="md">
        <Flex p={4} align={"center"}>
          <RouterLink to="/">
            <Heading>Logo</Heading>
          </RouterLink>
          <Spacer />
          {!authUser ? (
            <>
              <Link mr={2} color={"purple.700"} to="/login" as={RouterLink}>
                Login
              </Link>
              <RouterLink to="/signup">
                <Button backgroundColor={"lavender"}>Signup</Button>
              </RouterLink>
            </>
          ) : (
            <>
              <RouterLink to={"/profile"}>
                <Avatar
                  name={authUser.username}
                  src={authUser.imgUrl}
                  size={"sm"}
                />
              </RouterLink>

              <Link mr={2} color={"purple.700"} onClick={handleLogout} ml={4}>
                Logout
              </Link>
            </>
          )}
        </Flex>
      </Box>
    </>
  );
}

export default NavBar;

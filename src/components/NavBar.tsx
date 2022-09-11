import { Box, Button, Flex, Heading, Link, Spacer } from "@chakra-ui/react";
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
              <RouterLink to="/login">
                <Link mr={2} color={"purple.700"}>
                  Login
                </Link>
              </RouterLink>
              <RouterLink to="/signup">
                <Button backgroundColor={"lavender"}>Signup</Button>
              </RouterLink>
            </>
          ) : (
            <Link mr={2} color={"purple.700"} onClick={handleLogout}>
              Logout
            </Link>
          )}
        </Flex>
      </Box>
    </>
  );
}

export default NavBar;

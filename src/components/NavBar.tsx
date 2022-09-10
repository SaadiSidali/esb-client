import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";

function NavBar() {
  return (
    <>
      <Box w={"100%"} boxShadow="base" rounded="md">
        <Flex p={4}>
          <Heading>Logo</Heading>
          <Spacer />
          <Button>Button</Button>
        </Flex>
      </Box>
    </>
  );
}

export default NavBar;

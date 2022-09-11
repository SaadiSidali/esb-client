import { Heading } from "@chakra-ui/react";
import { PrivateRoute } from "./PrivateRoute";

function Profile() {
  return (
    <>
      <PrivateRoute>
        <Heading>Profile</Heading>
      </PrivateRoute>
    </>
  );
}

export default Profile;

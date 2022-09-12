import { useQuery } from "@apollo/client";
import { PhoneIcon } from "@chakra-ui/icons";
import { IoIosSchool } from "react-icons/io";
import { BsSignpost2Fill } from "react-icons/bs";
import { AiFillGithub, AiOutlineLink, AiFillLinkedin } from "react-icons/ai";
import {
  Container,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  NumberInput,
  NumberInputField,
  Textarea,
} from "@chakra-ui/react";
import { ME } from "../gql/queries";
import { UserType } from "../types/user-type";
import { PrivateRoute } from "./PrivateRoute";

function Profile() {
  const { loading, error, data } = useQuery<{ me: UserType }>(ME);
  return (
    <>
      <PrivateRoute>
        <Heading>Profile</Heading>
        {loading ? "Loading..." : null}

        <Container>
          <FormLabel>First Name</FormLabel>

          <Input placeholder="John" defaultValue={data?.me.profile.firstName} />

          <FormLabel>Last Name</FormLabel>

          <Input placeholder="Doe" defaultValue={data?.me.profile.lastName} />

          <FormLabel>Biography</FormLabel>

          <Textarea
            placeholder="Tell us about yourself..."
            defaultValue={data?.me.profile.biography}
          />
          <FormLabel>Phone</FormLabel>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<PhoneIcon color="gray.300" />}
            />
            <Input
              type="tel"
              placeholder="Phone number"
              defaultValue={data?.me.profile.phoneNumber}
            />
          </InputGroup>
          <FormLabel>Level of study</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children={<IoIosSchool />}
            />
            <Input
              placeholder="Bachelor..."
              defaultValue={data?.me.profile.levelOfStudy}
            />
          </InputGroup>
          <FormLabel>Salary</FormLabel>

          <NumberInput>
            <NumberInputField
              placeholder="Enter amount"
              defaultValue={data?.me.profile.expectedSalary}
            />
          </NumberInput>

          <FormLabel>Wilaya</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children={<BsSignpost2Fill />}
            />
            <Input placeholder="Alger" defaultValue={data?.me.profile.wilaya} />
          </InputGroup>
          <FormLabel>Repository</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children={<AiFillGithub />}
            />
            <Input
              placeholder="Github / Gitlab"
              defaultValue={data?.me.profile.repoUrl}
            />
          </InputGroup>

          <FormLabel>Portfilio</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children={<AiOutlineLink />}
            />
            <Input
              placeholder="www.example.com"
              defaultValue={data?.me.profile.portfolio}
            />
          </InputGroup>
          <FormLabel>LinkedIn</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children={<AiFillLinkedin />}
            />
            <Input
              placeholder="www.linkedin.com/user"
              defaultValue={data?.me.profile.linkedInUrl}
            />
          </InputGroup>
        </Container>
      </PrivateRoute>
    </>
  );
}

export default Profile;

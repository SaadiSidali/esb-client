import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

function ErrorAlert({ error }: any) {
  return (
    <>
      <Alert status="error" flexDirection={"column"} mt={2}>
        <AlertIcon />
        <AlertTitle>Login Failed</AlertTitle>
        <AlertDescription>
          {typeof error.graphQLErrors[0].extensions.response.message ===
          typeof [""] ? (
            <UnorderedList>
              {error.graphQLErrors[0].extensions.response.message.map(
                (m: string) => (
                  <ListItem key={Math.random()}>{m}</ListItem>
                )
              )}
            </UnorderedList>
          ) : (
            error.message
          )}
        </AlertDescription>
      </Alert>
    </>
  );
}

export default ErrorAlert;

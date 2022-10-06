import React from "react";
import {
  Input,
  Box,
  InputGroup,
  InputRightElement,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";

const SignUp = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Flex
        align-items="center"
        justify-contents="cener"
        w={"50%"}
        m="auto"
        flexDirection="column"
      >
        <Text
          color="white"
          fontSize={50}
          textAlign="center"
          fontFamily="sans-serif"
        >
          SignUp
        </Text>
        <Box>
          <Input my={5} variant="outline" placeholder="username" />
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />

            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Input
            my={5}
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Confirm password"
          />
          <Button backgroundColor="blue.500" color="white">
            Sign up
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default SignUp;

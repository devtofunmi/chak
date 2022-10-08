import React, { useEffect, useState } from "react";
import {
  Input,
  Box,
  InputGroup,
  InputRightElement,
  Button,
  Text,
  Flex,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [correctUsername, setCorrectUsername] = useState("");
  const [correctPassword, setCorrectPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const showMessage = (m) => {
    toast({
      description: m,
      status: "error",
      duration: 1000,
      isClosable: true,
    });
  };
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
    } else {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      setCorrectUsername(userInfo.userName);
      setCorrectPassword(userInfo.password);
    }
  });
  function handleSubmit() {
    setLoading(true);
    setTimeout(() => {
      if (!userName) {
        showMessage("enter your username");
      } else if (!password) {
        showMessage("enter password");
      } else if (password != correctPassword) {
        showMessage("password is not correct");
      } else if (userName != correctUsername) {
        showMessage("username is not correct");
      } else {
        toast({
          description: "login successful",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
      }
      setLoading(false);
      navigate("/");
    }, 1000);
  }
  return (
    <>
      <Flex justifyContent={"center"}>
        <Text
          color="white"
          fontSize={30}
          textAlign="center"
          fontFamily="sans-serif"
          mt={"50px"}
        >
          ChakNote ✍️📝
        </Text>
      </Flex>
      <Flex
        align-items="center"
        justify-contents="center"
        w={["70%", "30%"]}
        m="auto"
        flexDirection="column"
        p={"10px"}
        marginTop={"100px"}
      >
        <Text
          color="white"
          fontSize={30}
          textAlign="center"
          fontFamily="sans-serif"
        >
          LogIn 🤗🥳
        </Text>
        <Box>
          <Input
            my={5}
            variant="outline"
            placeholder="username 🥳😚🤗"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password 😚🤗"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
        <Button
          backgroundColor="blue.500"
          color="white"
          onClick={handleSubmit}
          mt={"20px"}
        >
          {loading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="md"
            />
          ) : (
            "Login"
          )}
        </Button>
        <Flex justifyContent={"center"} gap={"5px"} mt={"5px"}>
          New here ?
          <Link to="/signup">
            <Text color="teal.500">Sign Up</Text>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;

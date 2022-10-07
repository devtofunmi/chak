import React, { useState } from "react";
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

const SignUp = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const showMessage = (m) => {
    toast({
      description: m,
      status: "error",
      duration: 1000,
      isClosable: true,
    });
  };
  function generateOTP() {
    var digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }

  function handleForm() {
    setLoading(true);
    setTimeout(() => {
      if (!userName) {
        showMessage("enter username");
      } else if (!password) {
        showMessage("enter password");
      } else if (!confirmPassword) {
        showMessage("enter confirm password");
      } else if (password != confirmPassword) {
        showMessage("password not match");
      } else {
        toast({
          description: "signup successful",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
        const userInfo = {
          userName,
          password,
          confirmPassword,
          OTP: generateOTP(),
        };
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        navigate("/otp");
      }
      setLoading(false);
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
        w={["80%", "60%"]}
        m="auto"
        flexDirection="column"
        border="1px"
        borderColor="gray.200"
        borderRadius={"10px"}
        p={"10px"}
        marginTop={"100px"}
      >
        <Text
          color="white"
          fontSize={30}
          textAlign="center"
          fontFamily="sans-serif"
        >
          SignUp 😚🤗
        </Text>
        <Box>
          <Input
            my={5}
            variant="outline"
            placeholder="username 🤩🥳"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password 🤩🥳"
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
          <Input
            my={5}
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Confirm password 🥳😎"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <Button backgroundColor="blue.500" color="white" onClick={handleForm}>
            {loading ? (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="md"
              />
            ) : (
              "Signup"
            )}
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default SignUp;

import React, { useEffect, useState } from "react";
import {
  Flex,
  Text,
  Box,
  PinInput,
  PinInputField,
  HStack,
  Button,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [pin, setPin] = useState("");
  const [correctOtp, setCorrectOtp] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setCorrectOtp(userInfo.OTP);
  });
  const showMessage = (m) => {
    toast({
      description: m,
      status: "error",
      duration: 1000,
      isClosable: true,
    });
  };
  function subMit() {
    setLoading(true);
    setTimeout(() => {
      if (pin != correctOtp) {
        showMessage("otp is not correct");
      } else if (!pin) {
        showMessage("enter your otp verification");
      } else {
        toast({
          description: "otp is correct",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
      }
      setLoading(false);
      navigate("/login");
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
          OTP VERIFICATION 🤐🤫
        </Text>
        <Box>
          <HStack mt={"30px"}>
            <PinInput placeholder="😚" otp onChange={(otp) => setPin(otp)}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <Button mt={"20px"} onClick={subMit} disabled={pin < 6 || loading}>
            {loading ? (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="md"
              />
            ) : (
              "submit"
            )}
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Otp;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Text,
  TabList,
  TabPanels,
  Tabs,
  Tab,
  TabPanel,
  Box,
} from "@chakra-ui/react";
const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  });
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
        <Tabs variant="unstyled">
          <TabList>
            <Flex justifyContent={"space-between"}>
              <Tab _selected={{ color: "white", bg: "blue.500" }}>Add Note</Tab>
              <Tab _selected={{ color: "white", bg: "green.400" }}>Notes</Tab>
              <Tab _selected={{ color: "white", bg: "orange.400" }}>
                Favourite Notes
              </Tab>
            </Flex>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>Add Note!</p>
            </TabPanel>
            <TabPanel>
              <p>Notes!</p>
            </TabPanel>
            <TabPanel>
              <p>Favourite Note!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
};

export default Dashboard;

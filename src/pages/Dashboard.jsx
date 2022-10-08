import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Text,
  TabList,
  TabPanels,
  Tabs,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import AddNote from "../components/AddNote";
import Notes from "../components/Notes";
import FavouriteNote from "../components/FavouriteNote";
const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  }, []);

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
              <AddNote />
            </TabPanel>
            <TabPanel>
              <Notes />
            </TabPanel>
            <TabPanel>
              <FavouriteNote />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
};

export default Dashboard;

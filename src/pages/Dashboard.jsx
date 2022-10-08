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
  Box,
  Input,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("notes")) {
      localStorage.setItem("notes", JSON.stringify([]));
    } else {
      setNotes(JSON.parse(localStorage.getItem("notes")));
    }
  }, []);

  const toast = useToast();

  const showMessage = (m) => {
    toast({
      description: m,
      status: "error",
      duration: 1000,
      isClosable: true,
    });
  };

  const addNote = () => {
    if (!title) {
      showMessage("enter title");
    } else if (!note) {
      showMessage("enter note");
    } else {
      toast({
        description: "Note Added",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      const userNote = {
        title,
        note,
      };
      setNotes([...notes, userNote]);
      localStorage.setItem("notes", JSON.stringify([...notes, userNote]));
    }
  };
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
              <Input
                placeholder="Enter Title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <Textarea
                placeholder="Enter Note"
                my={5}
                onChange={(e) => {
                  setNote(e.target.value);
                }}
              />
              <Button
                backgroundColor="blue.500"
                color="white"
                onClick={addNote}
              >
                Add Note
              </Button>
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

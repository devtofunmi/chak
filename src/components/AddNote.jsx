import React, { useEffect, useState } from "react";
import { Input, Textarea, Button, useToast } from "@chakra-ui/react";
const AddNote = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

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
      <Button backgroundColor="blue.500" color="white" onClick={addNote}>
        Add Note
      </Button>
    </>
  );
};

export default AddNote;

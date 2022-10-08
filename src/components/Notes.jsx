import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem("notes")));
  }, []);

  return (
    <>
      {notes.map((note, i) => (
        <Box key={i}>
          <Text>{note.title}</Text>
          <Text>{note.note}</Text>
        </Box>
      ))}
    </>
  );
};

export default Notes;

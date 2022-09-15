import {
  Stack,
  Button,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { FormatBold } from "@mui/icons-material";
import { FormatItalic } from "@mui/icons-material";
import { FormatUnderlined } from "@mui/icons-material";
import { useState } from "react";
import React from "react";
function App() {
  const [format, setFormat] = useState<string[]>([]);
  console.log({format});
  const handleFormatChange = (
    event: React.MouseEvent<HTMLElement>,
    updatedFormat: string[]
  ) => {
    setFormat(updatedFormat);
  };
  return (
    <Stack direction="row">
      {/* //buttonGroup//Orientation// */}
      <ButtonGroup
        orientation="vertical"
        variant="contained"
        size="medium"
        color="success"
        aria-label="allignment of Button Group"
      >
        <Button>Left</Button>
        <Button>Center</Button>
        <Button>Rigth</Button>
      </ButtonGroup>
      <ToggleButtonGroup value={format} onChange={handleFormatChange}
      exclusive
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBold />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalic />
        </ToggleButton>
        <ToggleButton value="underline" aris-lable="underline">
          <FormatUnderlined />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}

export default App;

import Icon from "@mui/material/Icon";
import * as React from "react";
import Box from "@mui/material/Box";
import { green } from "@mui/material/colors";

export default function Home() {
  return (
    <main>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <div>
        <Icon>star</Icon>
        <Box>
          <Icon>add_circle</Icon>
          <Icon color="primary">add_circle</Icon>
          <Icon sx={{ color: green[500] }}>add_circle</Icon>
          <Icon fontSize="small">add_circle</Icon>
          <Icon sx={{ fontSize: 30 }}>add_circle</Icon>
        </Box>
      </div>
    </main>
  );
}

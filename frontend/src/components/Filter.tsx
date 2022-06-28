
import {Checkbox, FormControlLabel, TextField } from "@mui/material";
import React, { useEffect } from "react";

export const Filter = ({ onChange }: any) => {
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [check, setCheck] = React.useState(false);
  useEffect(() => {
    onChange(from, to);
  }, [from, to]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >      
      <TextField
        style={{margin: 20}}
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        type="date"

      />
      <TextField
       style={{margin: 20}}
        value={to}
        onChange={(e) => setTo(e.target.value)}
        type="date"
        
      />    
      </div>
  );
};

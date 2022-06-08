import { TextField } from "@mui/material";
import React, { useEffect } from "react";

export const Filter = ({ onChange }: any) => {
  const [from, setFrom] = React.useState<Date>();
  const [to, setTo] = React.useState<Date>();

  useEffect(() => {
    onChange(from, to);
  }, [from, to]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <TextField
        value={from}
        onChange={(e) => setFrom(new Date(e.target.value))}
        type={"date"}
      />
      <TextField
        value={to}
        onChange={(e) => setTo(new Date(e.target.value))}
        type={"date"}
      />
    </div>
  );
};

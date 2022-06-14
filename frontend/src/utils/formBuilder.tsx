import React from "react";
import { TextField } from "@mui/material";
type FormBuilderConfigType = "text" | "date" | "select";

type FormBuilderConfig = {
  type: FormBuilderConfigType;
  label: string;
  value: string;
  placeholder: string;
  onChange: (e: any) => VoidFunction;
};

export const formBuilder = (config: FormBuilderConfig[]) => {
  const form = [];
  for (const val in config) {
    if (config[val].type === "text") {
      form.push(
        React.cloneElement(
          <TextField fullWidth style={{ marginBottom: "1rem" }} />,
          config[val]
        )
      );
    }
    if (config[val].type === "date") {
      form.push(
        React.cloneElement(
          <TextField fullWidth style={{ marginBottom: "1rem"}} type="date"/>,
          config[val]
        )
      );
    }
    if (config[val].type === "select") {
      form.push(
        React.cloneElement(
          <TextField fullWidth style={{ marginBottom: "1rem"}} type="select" />,
          config[val]
        )      );
    }
  }

  return form;
};

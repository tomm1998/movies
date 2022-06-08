import { Card } from "@mui/material";
import React from "react";
import { useSearchBarQuery } from "../hooks/SearchBarContext";

export const SearchBar = () => {
  const { query, setQuery, show } = useSearchBarQuery();
  if (!show) return undefined;

  return (
    <Card>
      <form
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 40px 40px",
          gridGap: "1rem",
          padding: "2rem",
        }}
      >
        <input
          style={{ padding: "1rem" }}
          placeholder="search"
          type="text"
          className="MuiInputBase-input"
          onChange={(e: any) => setQuery(e.target.value)}
          value={query}
        />
        <button
          className="MuiButtonBase-root MuiIconButton-root jss4"
          type="button"
        >
          <svg
            className="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </button>
        <button
          className="MuiButtonBase-root MuiIconButton-root jss4"
          type="submit"
        >
          <svg
            className="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </button>
      </form>
    </Card>
  );
};

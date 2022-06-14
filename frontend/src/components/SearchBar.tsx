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
          name="searchText"
          className="MuiInputBase-input"
          onChange={(e: any) => setQuery(e.target.value)}
          value={query}
        />
        <button
          className="MuiButtonBase-root MuiIconButton-root jss4"
          type="button"
          onClick={() => setQuery("")}
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
      </form>
    </Card>
  );
};

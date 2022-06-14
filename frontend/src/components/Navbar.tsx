import { TimeToLeave } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { linkStyles } from "../utils/linkStyles";

interface TitleItem {
  title: string;
}

interface LinkItem {
  label: string;
  to: string;
}

interface SearchItem {
  icon: any;
  onClick: () => {};
}

export interface MovieAppNavbarConfig {
  items: (TitleItem | LinkItem | SearchItem)[];
}

export const Navbar: React.FC<MovieAppNavbarConfig> = ({ items }) => {
  const renderTitle = (title: TitleItem) => {
    return (
      <Link
        key={title.title}
        style={{
          ...linkStyles,
          color: "#fff",
          fontSize: "30px",
          fontWeight: "bold",
        }}
        to="/movie"
      >
        {title.title}
      </Link>
    );
  };

  const renderLink = (item: LinkItem) => {
    return (
      <Link
        key={item.label}
        style={{
          ...linkStyles,
          color: "#fff",
          fontWeight: "bold",
          marginRight: "1rem",
        }}
        to={item.to}
      >
        {item.label}
      </Link>
    );
  };

  const renderSearchItem = (item: SearchItem) => {
    return (
      <div key={item.icon} style={{ color: "white" }} onClick={item.onClick}>
        {item.icon}
      </div>
    );
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex" }}>
        {items.map((item) => {
          if ("title" in item) {
            return renderTitle(item);
          }
          return null;
        })}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        {items.map((item) => {
          if ("label" in item) {
            return renderLink(item);
          }
          if ("icon" in item) {
            return renderSearchItem(item);
          }
          return null;
        })}
      </div>
    </div>
  );
};

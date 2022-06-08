import React, { useContext, useState } from "react";

export const Context = React.createContext({
  query: "",
  setQuery: (a: any) => {},
  show: false,
  setShow: (a: any) => {},
});

export const SearchBarContextProvider: React.FC = ({ children }) => {
  const [show, setShow] = useState<any>();
  const [query, setQuery] = useState<any>();

  return (
    <Context.Provider
      value={{
        show,
        setShow,
        query,
        setQuery,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useSearchBarQuery = () => {
  return useContext(Context);
};

import React from "react";

export default React.createContext({
  items: [
    {
      id: 1,
      name: "one"
    },
    { id: 2, name: "two" },
    {
      id: 3,
      name: "three"
    },
    { id: 4, name: "Four" }
  ],
  cart: []
});

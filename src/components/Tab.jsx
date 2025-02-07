import { Children } from "react";

function Tab({ children, title, button }) {
  return (
    <>
      <h2>{title}</h2>
      <menu>{button}</menu>
      {children}
    </>
  );
}

export default Tab;

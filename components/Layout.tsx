import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

type Props = { children: JSX.Element[] | JSX.Element };

const Layout = (props: Props) => {
  return (
    <div>
      <NavBar></NavBar>
      {props.children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;

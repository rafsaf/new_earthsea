import React from "react";
import PropTypes from "prop-types";

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

const Layout = ({ children }: Props) => {
  return <div className="layout">{children}</div>;
};

export default Layout;

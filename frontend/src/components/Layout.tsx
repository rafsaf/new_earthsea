import React from "react";


const Layout = (props: {children: React.ReactNode}) => {
  const {children} = props
  return <div className="layout">{children}</div>;
};

export default Layout;

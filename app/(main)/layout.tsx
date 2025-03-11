import React, { PropsWithChildren } from "react";

interface ProjectLayoutProps extends PropsWithChildren {}

const Layout = ({ children }: ProjectLayoutProps) => {
  return <div className="container mx-auto mt-5 px-4">{children}</div>;
};

export default Layout;

import { PropsWithChildren } from "react";

interface AuthLayoutProps extends PropsWithChildren {}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <div className="flex justify-center pt-20">{children}</div>;
};

export default AuthLayout;

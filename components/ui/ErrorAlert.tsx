import React, { FC } from "react";
import classes from "./ErrorAlert.module.css";

interface Props {
  children: React.ReactNode;
}

const ErrorAlert: FC<Props> = ({ children }) => {
  return <div className={classes.alert}>{children}</div>;
};

export default ErrorAlert;

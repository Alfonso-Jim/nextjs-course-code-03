import Link from "next/link";
import { FC, ReactNode } from "react";

import classes from "./Button.module.css";

interface Props {
  children: ReactNode;
  link: string;
}

const Button: FC<Props> = ({ children, link }) => {
  return (
    <Link className={classes.btn} href={link}>
      {children}
    </Link>
  );
};

export default Button;

import Link from "next/link";
import { FC, MouseEventHandler, ReactNode } from "react";

import classes from "./Button.module.css";

interface Props {
  children: ReactNode;
  link?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<Props> = ({ children, link, onClick }) => {
  if (link) {
    return (
      <Link className={classes.btn} href={link}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

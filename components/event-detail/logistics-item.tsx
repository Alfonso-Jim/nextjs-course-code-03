import { FC, ReactNode } from "react";
import classes from "./logistics-item.module.css";

interface Props {
  children: ReactNode;
  Icon: any;
}

const LogisticsItem: FC<Props> = ({ Icon, children }) => {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
};

export default LogisticsItem;

import Link from "next/link";
import { FC } from "react";

import classes from "./EventItem.module.css";

interface Props {
  title: string;
  image: string;
  date: string;
  location: string;
  id: string;
}

const EventItem: FC<Props> = ({ title, image, date, location, id }) => {
  const humanReadableDate = new Date(date).toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />
      <div className={classes.content}>
        <h2>{title}</h2>
        <div className={classes.date}>
          <time>{humanReadableDate}</time>
        </div>
        <div className={classes.address}>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div className={classes.actions}>
        <Link href={exploreLink}>Explore event...</Link>
      </div>
    </li>
  );
};

export default EventItem;

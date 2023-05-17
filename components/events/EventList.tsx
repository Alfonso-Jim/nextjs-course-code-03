import { FC } from "react";
import EventItem from "./EventItem";

import classes from "./EventList.module.css";

interface Props {
  items: {
    id: string;
    title: string;
    description: string;
    location: string;
    date: string;
    image: string;
    isFeatured: boolean;
  }[];
}

const EventList: FC<Props> = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem key={event.id} id={event.id} title={event.title} location={event.location} date={event.date} image={event.image} />
      ))}
    </ul>
  );
};

export default EventList;

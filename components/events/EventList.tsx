import { FC } from 'react';
import EventItem from './EventItem';

import classes from './EventList.module.css';
import { Events } from '../../interfaces/Interfaces';

const EventList: FC<Events> = ({ events }) => {
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem key={event.id} id={event.id} title={event.title} location={event.location} date={event.date} image={event.image} />
      ))}
    </ul>
  );
};

export default EventList;

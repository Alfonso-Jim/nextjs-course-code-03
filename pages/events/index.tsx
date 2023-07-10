import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../helpers/api-util';
import { GetStaticProps, NextPage } from 'next';
import { Events } from '../../interfaces/Interfaces';

const AllEventsPage: NextPage<Events> = (props) => {
  const router = useRouter();
  const findEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={props.events} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allEvents = await getAllEvents();

  return { props: { events: allEvents }, revalidate: 5 };
};

export default AllEventsPage;

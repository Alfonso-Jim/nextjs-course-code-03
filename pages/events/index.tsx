import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../helpers/api-util';
import { GetStaticProps, NextPage } from 'next';
import { Events } from '../../interfaces/Interfaces';
import Head from 'next/head';

const AllEventsPage: NextPage<Events> = (props) => {
  const router = useRouter();
  const findEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <>
      <Head>
        <title>All Events</title>
        <meta name='description' content='Find a lot off cool events that allow you to inform yourself my dudes' />
      </Head>
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

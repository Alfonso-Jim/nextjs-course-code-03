import { GetStaticProps, NextPage } from 'next';
import EventList from '../components/events/EventList';
import { Events } from '../interfaces/Interfaces';
import { getFeaturedEvents } from '../helpers/api-util';
import Head from 'next/head';

const HomePage: NextPage<Events> = (props) => {
  return (
    <div>
      <Head>
        <title>Next Events</title>
        <meta name='description' content='Find a lot off cool events that allow you to inform yourself my dudes' />
      </Head>
      <EventList events={props.events} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return { props: { events: featuredEvents }, revalidate: 30 };
};

export default HomePage;

import { GetStaticProps, NextPage } from 'next';
import EventList from '../components/events/EventList';
import { Events } from '../interfaces/Interfaces';
import { getFeaturedEvents } from '../helpers/api-util';

const HomePage: NextPage<Events> = (props) => {
  return (
    <div>
      <EventList events={props.events} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return { props: { events: featuredEvents }, revalidate: 30 };
};

export default HomePage;

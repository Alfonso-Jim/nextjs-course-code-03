import { Fragment } from 'react';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/ErrorAlert';
import { getEventById, getFeaturedEvents } from '../../helpers/api-util';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Event } from '../../interfaces/Interfaces';
import Head from 'next/head';

const SpecificEventPage: NextPage<Event> = (props) => {
  if (!props.id) {
    return (
      <div className='center'>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{props.title}</title>
        <meta name='description' content={props.description} />
      </Head>
      <EventSummary title={props.title} />
      <EventLogistics date={props.date} address={props.location} image={props.image} imageAlt={props.title} />
      <EventContent>
        <p>{props.description}</p>
      </EventContent>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const eventId = String(context.params.eventId);

  const event = await getEventById(eventId);

  if (!event) {
    return {
      notFound: true,
    };
  }

  return { props: event, revalidate: 10 };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allEvents = await getFeaturedEvents();
  const paths = allEvents.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: true,
  };
};

export default SpecificEventPage;

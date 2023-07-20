import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../helpers/api-util';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultsTitle';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/ErrorAlert';
import { GetServerSideProps, NextPage } from 'next';
import { Events, HasError } from '../../interfaces/Interfaces';
import Head from 'next/head';

const FilteredEventsPage: NextPage<HasError> = (props) => {
  const [events, setEvents] = useState(props.events);
  const router = useRouter();
  const filterData = router.query.slug;

  const { data, error } = useSWR('https://nextjs-course-04-831d3-default-rtdb.firebaseio.com/events.json', (url) => fetch(url).then((res) => res.json()));

  useEffect(() => {
    if (data) {
      const transformedEvents = [];

      for (const key in data) {
        transformedEvents.push({
          id: key,
          ...data[key],
        });
      }

      setEvents(transformedEvents);
    }
  }, [data]);

  if (!events) {
    return <p className='center'>Loading filtered events...</p>;
  }

  const filteredYear = Number(filterData[0]);
  const filteredMonth = Number(filterData[1]);

  if (isNaN(filteredYear) || isNaN(filteredMonth) || filteredYear > 2030 || filteredYear < 2021 || filteredMonth < 1 || filteredMonth > 12 || error) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filters, please check your values!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === filteredYear && eventDate.getMonth() === filteredMonth - 1;
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found with current filters</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(filteredYear, filteredMonth - 1);

  return (
    <div>
      <Head>
        <title>Filtered Events</title>
        <meta name='description' content={`All events for ${filteredMonth}/${filteredYear}`} />
      </Head>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { params } = context;

//   const filterData = params.slug;

//   const filteredYear = Number(filterData[0]);
//   const filteredMonth = Number(filterData[1]);

//   if (isNaN(filteredYear) || isNaN(filteredMonth) || filteredYear > 2030 || filteredYear < 2021 || filteredMonth < 1 || filteredMonth > 12) {
//     return {
//       props: { hasError: true },
//     };
//   }

//   const filteredEvents = await getFilteredEvents({ year: filteredYear, month: filteredMonth });

//   return { props: { events: filteredEvents, date: { year: filteredYear, month: filteredMonth } } };
// };

export default FilteredEventsPage;

import React from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../helpers/api-util';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultsTitle';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/ErrorAlert';
import { GetServerSideProps, NextPage } from 'next';
import { HasError } from '../../interfaces/Interfaces';

const FilteredEventsPage: NextPage<HasError> = (props) => {
  // const router = useRouter();
  // const filterData = router.query.slug;

  // if (!filterData) {
  //   return <p className='center'>Loading filtered events...</p>;
  // }

  // const filteredYear = Number(filterData[0]);
  // const filteredMonth = Number(filterData[1]);

  if (props.hasError) {
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

  const filteredEvents = props.events;

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

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  const filterData = params.slug;

  const filteredYear = Number(filterData[0]);
  const filteredMonth = Number(filterData[1]);

  if (isNaN(filteredYear) || isNaN(filteredMonth) || filteredYear > 2030 || filteredYear < 2021 || filteredMonth < 1 || filteredMonth > 12) {
    return {
      props: { hasError: true },
    };
  }

  const filteredEvents = await getFilteredEvents({ year: filteredYear, month: filteredMonth });

  return { props: { events: filteredEvents, date: { year: filteredYear, month: filteredMonth } } };
};

export default FilteredEventsPage;

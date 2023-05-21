import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
  const allEvents = getAllEvents();
  const router = useRouter();
  const findEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={allEvents} />
    </>
  );
};

export default AllEventsPage;

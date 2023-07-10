import { Event } from '../interfaces/Interfaces';

export async function getAllEvents() {
  const response = await fetch('https://nextjs-course-04-831d3-default-rtdb.firebaseio.com/events.json');
  const data = await response.json();

  const transformedEvents: Array<Event> = [];

  for (const key in data) {
    transformedEvents.push({
      id: key,
      ...data[key],
    });
  }

  return transformedEvents;
}

export async function getFeaturedEvents() {
  const allEvents: Array<Event> = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id: string) {
  const allEvents: Array<Event> = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

import { Events } from '../interfaces/Interfaces';

export async function getAllEvents() {
  const response = await fetch('https://nextjs-course-04-831d3-default-rtdb.firebaseio.com/events.json');
  const data = await response.json();

  const transformedEvents: Events = { events: [] };

  for (const key in data) {
    transformedEvents.events.push({
      id: key,
      ...data[key],
    });
  }

  return transformedEvents;
}

export async function getFeaturedEvents() {
  const allEvents: Events = await getAllEvents();
  return allEvents.events.filter((event) => event.isFeatured);
}

import Link from "next/link";
import { FC } from "react";

interface Props {
  title: string;
  image: string;
  date: string;
  location: string;
  id: string;
}

const EventItem: FC<Props> = ({ title, image, date, location, id }) => {
  const humanReadableDate = new Date(date).toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li>
      <img src={`/${image}`} alt={title} />
      <div>
        <h2>{title}</h2>
        <div>
          <time>{humanReadableDate}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div>
        <Link href={exploreLink}>Explore event...</Link>
      </div>
    </li>
  );
};

export default EventItem;

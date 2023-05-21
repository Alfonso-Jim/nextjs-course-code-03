import { FC } from "react";
import Button from "../ui/Button";
import classes from "./ResultsTitle.module.css";

interface Props {
  date: Date;
}

const ResultsTitle: FC<Props> = ({ date }) => {
  const humanReadableDate = new Date(date).toLocaleDateString("pl-PL", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
};

export default ResultsTitle;

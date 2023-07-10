export interface Events {
  events: Array<Event>;
}

export interface Event {
  id: string;
  date: string;
  description: string;
  image: string;
  isFeatured: boolean;
  location: string;
  title: string;
}

export interface HasError {
  hasError: boolean;
  events: Array<Event>;
  date: Date;
}

export interface Date {
  year: number;
  month: number;
}

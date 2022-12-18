import { Timestamp } from "firebase/firestore";

export const formatDate = (timestamp) => {
  const date = new Timestamp(timestamp.seconds, timestamp.nanoseconds)
    .toDate()
    .toDateString();

  return date;
};
export const formatTime = (timestamp) => {
  const date = new Timestamp(timestamp.seconds, timestamp.nanoseconds)
    .toDate()
    .toTimeString();

  return date;
};

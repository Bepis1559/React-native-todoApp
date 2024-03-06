import { formatDate } from "./formatDate";

export function getToDoReadyFormattedDate(
  year: number,
  month: number,
  date: number,
  hour: number,
  minutes: number,
) {
  return formatDate(new Date(year, month, date, hour, minutes));
}

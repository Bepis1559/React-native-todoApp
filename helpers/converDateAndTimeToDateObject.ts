import { parse } from "date-fns";

export function converDateAndTimeToDateObject(
  dueDate?: string,
  dueTime?: string,
) {
  const dateTime = dueDate + " " + dueTime;
  const dateObject = parse(dateTime, "M/d/yyyy h:mm:ss a", new Date());
  return dateObject;
}

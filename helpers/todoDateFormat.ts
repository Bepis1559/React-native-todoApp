import { parse } from "date-fns";

export function todoDateFormat(dueDate: string) {
  return parse(dueDate, "MMM d, yyyy, h:mm aa", new Date());
}

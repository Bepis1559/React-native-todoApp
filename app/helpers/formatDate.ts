import { format } from "date-fns";

export function formatDate(date: Date) {
  const now = new Date();
  let dateFormat = "MMM d, h:mm aa";
  if (date.getFullYear() !== now.getFullYear())
    dateFormat = "MMM d, yyyy, h:mm aa";
  return format(date, dateFormat);
}

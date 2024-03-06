import { isPast } from "date-fns";

export function isDateOverdue(dueDate: string) {
  const dateParts = dueDate.split(",");
  if (dateParts.length == 2) {
    const today = new Date();
    const currentYear = today.getFullYear();
    dateParts.splice(1, 0, currentYear.toString());
    dueDate = dateParts.join(" ");
  }
  return isPast(dueDate);
}

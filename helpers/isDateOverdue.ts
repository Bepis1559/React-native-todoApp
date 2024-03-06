import { isPast, parse } from "date-fns";

export function isDateOverdue(dueDate: string) {
  const today = new Date();
  const dateParts = dueDate.split(",");
  if (dateParts.length == 2) {
    const currentYear = today.getFullYear();
    dateParts.splice(1, 0, currentYear.toString());
    dueDate = dateParts.join(" , ");
    const parts = dueDate.split(" ");
    const monthNumber = getMonthNumber(parts[0]);
    const dayOfMonth = parseFloat(parts[1]);
    const year = parseFloat(parts[3]);
    const [hours, minutes] = convertTo24Hour(parts[6], parts[7]);

    const dueDate_asDateObject = new Date(
      year,
      monthNumber,
      dayOfMonth,
      hours,
      minutes,
    );
    return isPast(dueDate_asDateObject);
  }

  const parts = dueDate.split(" ");
  const monthNumber = getMonthNumber(parts[0]);
  const dayOfMonth = parseFloat(parts[1]);
  const year = parseFloat(parts[2]);
  const [hours, minutes] = convertTo24Hour(parts[3], parts[4]);
  const dueDate_asDateObject = new Date(
    year,
    monthNumber,
    dayOfMonth,
    hours,
    minutes,
  );
  return isPast(dueDate_asDateObject);
}

function getMonthNumber(monthString: string) {
  const date = parse(monthString, "MMM", new Date());
  return date.getMonth();
}

function convertTo24Hour(timeString: string, amPmString: string) {
  const [hour, minute] = timeString.split(":");
  const date = new Date(1970, 0, 1, parseFloat(hour), parseFloat(minute));

  if (amPmString.toUpperCase() === "PM" && hour !== "12") {
    date.setHours(date.getHours() + 12);
  } else if (amPmString.toUpperCase() === "AM" && hour === "12") {
    date.setHours(0);
  }

  return [date.getHours(), date.getMinutes()];
}

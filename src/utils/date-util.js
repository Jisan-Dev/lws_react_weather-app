function getFormattedDate(value, type, inMS = false) {
  if (!value) return;
  if (!type) return value;

  if (!inMS) value *= 1000;

  const dateTime = new Date(value);
  let options;

  if (type === "time") {
    options = {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    };
  } else if (type === "date") {
    options = {
      day: "numeric",
      weekday: "long",
      year: "numeric",
      month: "long",
    };
  }

  return new Intl.DateTimeFormat("en-BS", options).format(dateTime);
}

export { getFormattedDate };

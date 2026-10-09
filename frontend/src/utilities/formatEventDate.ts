const shortDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

const longDate = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

const time = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
});

export function formatEventDate(value?: string | null, detailed = false) {
  if (!value) return "Not set";
  const day = value.match(/^\d{4}-\d{2}-\d{2}(?=T|$)/)?.[0];
  if (!day) return "Invalid date";
  const date = new Date(`${day}T00:00:00.000Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== day) {
    return "Invalid date";
  }

  return (detailed ? longDate : shortDate).format(date);
}

export function formatEventTime(value?: string | null) {
  if (!value) return "Not set";
  const clockTime = value.match(/^([01]\d|2[0-3]):([0-5]\d)(?::([0-5]\d))?$/);
  const date = clockTime
    ? new Date(2000, 0, 1, Number(clockTime[1]), Number(clockTime[2]))
    : new Date(value);

  return Number.isNaN(date.getTime()) ? "Invalid time" : time.format(date);
}

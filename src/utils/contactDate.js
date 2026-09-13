export const CONTACT_TIMEZONE = "America/Argentina/Buenos_Aires";

export function getContactDay(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: CONTACT_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

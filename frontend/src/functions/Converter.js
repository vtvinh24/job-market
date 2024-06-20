export function convertToUnixTimestamp(dateString) {
  // 2024-05-25T18:55:40.653Z
  // dateString was already in GMT +7
  const timestamp = new Date(dateString).getTime();
  return Math.floor(timestamp / 1000);
}

export function getMoment(dateString) {
  const nowUTC = Date.now() / 1000;

  // convert nowUTC to GMT +7
  const now = nowUTC + 7 * 3600;
  const diff = now - convertToUnixTimestamp(dateString);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  var result = "";
  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    if (diff >= interval.seconds) {
      const count = Math.floor(diff / interval.seconds);
      result = `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
      return result;
    }
  }
  result = "Just now";
  return result;
}

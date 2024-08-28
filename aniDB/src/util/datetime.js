export function formatTimeStampToDateTime(timestamp) {
  const year = timestamp[0];
  const month = timestamp[1];
  const day = timestamp[2];
  const hour = timestamp[3];
  const minute = timestamp[4];
  const second = timestamp[5];

  const padZero = (num) => num.toString().padStart(2, '0');
  const formattedTimeString = `${year}-${padZero(month)}-${padZero(day)}, ${padZero(hour)}:${padZero(minute)}:${padZero(second)}`;

  return formattedTimeString;
}

export function formatTimeStampToDate(timestamp) {
    const year = timestamp[0];
    const month = timestamp[1];
    const day = timestamp[2];
    const hour = timestamp[3];
    const minute = timestamp[4];
    const second = timestamp[5];

  const padZero = (num) => num.toString().padStart(2, '0');
  const formattedTimeString = `${year}-${padZero(month)}-${padZero(day)}}`;
    return formattedTimeString;
}
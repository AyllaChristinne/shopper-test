export function formatTime(secondsString: string) {
  const seconds = Number(secondsString.replace("s", ""));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours > 0) {
    return `${hours}h ${minutes}min`;
  }
  return `${minutes}min`;
}

export function formatDistance(meters: number) {
  const kilometers = meters / 1000;
  return `${kilometers.toFixed(1)}km`;
}

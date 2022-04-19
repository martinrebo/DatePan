export function capitalize(s: string) {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function checkJoined(joiners: [] | undefined, userId: string) {
  if (joiners === undefined) {
    return false;
  }
  if (joiners.some((j: any) => j.id === userId)) {
    return true;
  }
}

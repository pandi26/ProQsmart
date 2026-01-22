export function percentageDiff(estimated, actual) {
  const est = Number(estimated);
  const act = Number(actual);

  if (!est) return "0%";

  const diff = ((act - est) / est) * 100;
  return diff.toFixed(2) + "%";
}

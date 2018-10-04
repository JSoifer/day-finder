

export function getInputtedDate(value) {

  let userDate = new Date(value);
  // let dateValue = getInputtedDate(value);
  let dayIndex = userDate.getDay();
  return dayIndex;
}
export function switchTest(day) {
  switch (day) {
  case 0:
  return 'Monday';
  case 1:
  return 'Tuesday';
  case 2:
  return 'Wednesday';
  case 3:
  return 'Thursday';
  case 4:
  return 'Friday';
  case 5:
  return 'Saturday';
  case 6:
  return 'Sunday';
  default:
  return 'Please try again!';
  }
}

/* 
Challenge:

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

To get the number of hours, minutes, seconds from an integer of seconds

Number of seconds in an hour 3600
Divide by 3600 to get number of hours 
Then divide the remainder of this operation to get the number of minutes

*/

const humanReadable = (second: number): string => {
  const conversion = second;

  let hours = Math.floor(second / 3600);
  let mins = Math.floor((conversion % 3600) / 60);
  let secs = conversion - conversion / 3600 + (conversion % 3600);
  let result: string = `${hours}:${mins}:${secs}`;
  return result;
};

export default humanReadable;

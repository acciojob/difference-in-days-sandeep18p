var dateDiffInDays = function (date1, date2) {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const utcDate1 = Date.UTC(
    parseInt(date1.substring(0, 4)),
    parseInt(date1.substring(5, 7)),
    parseInt(date1.substring(8))
  );
  const utcDate2 = Date.UTC(
    parseInt(date2.substring(0, 4)),
    parseInt(date2.substring(5, 7)),
    parseInt(date2.substring(8))
  );

  // Calculate the difference in milliseconds between the two dates
  const timeDiff = utcDate2 - utcDate1;

  // Convert the difference to days
  const diffInDays = Math.round(timeDiff / millisecondsPerDay);

  return diffInDays;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));

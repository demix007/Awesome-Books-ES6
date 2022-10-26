/* eslint-disable no-undef */
const currentDate = () => {
  const { DateTime } = luxon;
  const now = DateTime.now();
  return now.toLocaleString(DateTime.DATETIME_MED);
};

export default currentDate;
import moment from "moment";

const getFormattedDate = (date: string) => {
  return moment(date).format("D MMMM");
};

const getFormattedTime = (date: string) => {
  return moment(date).format("hh:mm A");
};
export { getFormattedDate, getFormattedTime };

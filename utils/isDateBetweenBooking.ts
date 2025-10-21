export const isDateBetweenBooking = (date: string, fromDate: string, toDate: string) => {
  return (new Date(date).getTime() >= new Date(fromDate).getTime() && new Date(date).getTime() < new Date(toDate).getTime());
};

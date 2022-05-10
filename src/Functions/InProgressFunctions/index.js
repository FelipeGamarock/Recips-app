export default function getCurrentDate() {
  const data = new Date();
  const day = data.getDate();
  const month = data.getMonth() + 1;
  const year = data.getFullYear();
  const completeDate = `${day}/${month}/${year}`;
  return completeDate;
}

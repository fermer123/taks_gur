const formatDate = (dateString: string): string => {
  const date = new Date(dateString.slice(0, -6).replace('T', ' '));
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${day}.${month}.${year}, ${hours}.${minutes}`;
};

export default formatDate;

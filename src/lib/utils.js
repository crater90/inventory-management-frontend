//helper functions used in more than one pages

const formatDate = (oldDate) => {
  const date = new Date(oldDate);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  return `${day}-${month}-${year}`;
}

const formatUserType = (type) => {
  if (type === 0) {
    return 'Super admin';
  } else if (type === 1) {
    return 'Admin';
  }
  return 'Employee';
}

const tagColor = (type) => {
  if (type === 0) {
    return 'bg-red-100 text-red-600';
  } else if (type === 1) {
    return 'bg-yellow-100 text-yellow-600';
  }
  return 'bg-green-100 text-green-600';
}

export {formatDate, formatUserType, tagColor}
export const formatDate = (
  date: Date,
  format: string
) => {
    const dateVal = date?.getDate?.();
    const month = date?.getMonth?.() + 1;
    const year = date?.getFullYear?.();
    format=format.replaceAll(/yyyy|YYYY/g, year?.toString());
    format=format.replaceAll(/mm|MM/g, `0${month}`?.toString().slice(-2));
    format=format.replaceAll(/dd|DD/g, dateVal?.toString());
    return format;
};

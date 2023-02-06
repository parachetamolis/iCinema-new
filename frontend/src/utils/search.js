export default function (items, filter, filterBy) {
  if (!items) return null;
  if (
    !filter ||
    !filterBy ||
    !Object.prototype.hasOwnProperty.call(items[0], filterBy) ||
    !filter.trim()
  )
    return items;
  return items.filter((element) =>
    element[filterBy]
      .toString()
      .toLowerCase()
      .startsWith(filter.toString().toLowerCase())
  );
}

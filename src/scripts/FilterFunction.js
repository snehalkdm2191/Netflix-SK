export function dataFilter(objArray, filterKey, filterValue) {
  return objArray.filter(obj => obj[filterKey] === filterValue);
}

export function searchFilter(objArray, filterKey1, filterKey2, filterValue) {
  const query = new RegExp(filterValue, 'i');
  return objArray.filter(
    obj => obj[filterKey1].match(query) || obj[filterKey2].match(query)
  );
}

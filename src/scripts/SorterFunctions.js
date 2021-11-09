export function dataSort(objArray, objSortKey) {
  return objArray
    .slice()
    .sort((objA, objB) => (objA[objSortKey] > objB[objSortKey] ? 1 : -1));
}

export function reverseSort(objArray, objSortKey) {
  return objArray
    .slice()
    .sort((objA, objB) => (objA[objSortKey] < objB[objSortKey] ? 1 : -1));
}

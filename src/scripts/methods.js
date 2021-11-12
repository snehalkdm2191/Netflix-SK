export function getTop1(list) {
    if (list !== undefined) {
      const filteredList = list.sort((a, b) => b.Ratings - a.Ratings);
      return filteredList.slice(0, 1);
    } else {
      return [];
    }
  }

export function getTop10(list) {
    if (list !== undefined) {
      const filteredList = list.sort((a, b) => b.Ratings - a.Ratings);
      return filteredList.slice(0, 9);
    } else {
      return [];
    }
  }
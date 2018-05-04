export class ImmutableHelperService {

  constructor() {
  }

  setItemProperty(array, data) {
    const newArray = array.slice();
    newArray[data.index][data.property] = data.value;
    return newArray;
  }

  replaceItem(array, data) {
    const newArray = array.slice();
    newArray[data.index] = data.item;
    return newArray;
  }

  pushItem(array, item) {
    const newArray = array.slice();
    newArray.push(item);
    return newArray;
  }

  removeItem(array, data) {
    const newArray = array.slice();
    newArray.splice(data.index, 1);
    return newArray;
  }
}

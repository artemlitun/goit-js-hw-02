const logItems = function (array) {
  for (const elem of array) {
    const index = array.indexOf(elem) + 1;
    const result = `${index} - ${elem}`;
    console.log(result);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

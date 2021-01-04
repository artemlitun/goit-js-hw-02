const calculateEngravingPrice = function (message, pricePerWord) {
  const wordsArr = message.split(" ");
  const engravingPrice = wordsArr.length * pricePerWord;

  return console.log(engravingPrice);
};

calculateEngravingPrice(
  "Proin sociis natoque et magnis parturient montes mus",
  10
);

calculateEngravingPrice(
  "Proin sociis natoque et magnis parturient montes mus",
  20
);

calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40);

calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20);

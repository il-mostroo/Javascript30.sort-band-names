const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];
const bandsCopy = [...bands];
const articles = ["The", "A", "An"];

bands.forEach((band, index) => {
  articles.forEach((article) => {
    if (band.includes(article + " "))
      bands[index] = band.slice(article.length + 1);
  });
});
sortedBands = bands.sort();
sortedBands.forEach((sortedBand, index) => {
  bandsCopy.forEach((bandCopy) => {
    articles.forEach((article) => {
      if (bandCopy === article + " " + sortedBand)
        sortedBands[index] = bandCopy;
    });
  });
});
const bandsItems = document.querySelector("#bands");
sortedBands.forEach((band) => {
  const bandItem = document.createElement("li");
  bandItem.innerText = band;
  bandsItems.append(bandItem);
});

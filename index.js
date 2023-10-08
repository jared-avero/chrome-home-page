// add comment
const $ = (element) => {
  const split = element.split(/(\.|\#)/)[2];
  if (element.indexOf(".") === 0) {
    return document.getElementsByClassName(split);
  } else if (element.indexOf("#") === 0) {
    return document.getElementById(split);
  }
};

const startHeart = () => {
  const ele = $("#love-heart");
  const colors = ["red", "blue", "green", "yellow"];
  let counter = 1;
  setInterval(() => {
    ele.style.color = colors[counter % 3];
    counter++;
  }, 3000);
};

const getSearch = (engine, term) => {
  const searchTerm = term.split(" ").join("+");
  switch (engine) {
    case "google":
      return `https://google.com/search?q=${searchTerm}`;
    case "stackoverflow":
      return `https://stackoverflow.com/search?q=${searchTerm}`;
  }
};

const searchButton = () => {
  const val = $("#search-bar").value;
  console.log("val: ", val);
  const googleSearch = $("#google-search");
  const stackOverflowSearch = $("#so-search");
  const googleAnchor = document.createElement("a");
  let search = getSearch("google", val);
  googleAnchor.href = search;
  googleAnchor.target = "_blank";
  googleAnchor.innerHTML = "Search on Google";
  googleSearch.appendChild(googleAnchor);
  const stackOverflowAnchor = document.createElement("a");
  search = getSearch("stackoverflow", val);
  stackOverflowAnchor.href = search;
  stackOverflowAnchor.target = "_blank";
  stackOverflowAnchor.innerHTML = "Search on Stack Overflow";
  stackOverflowSearch.appendChild(stackOverflowAnchor);
};

function str(family) {
  let result;

  if (family === "Tally" || family === "Stark") {
    result = "friend";
  } else if (family === "other" || family === "some") {
    result = "enemy";
  } else {
    result = "neutral";
  }

  return result;
}

console.log(str("Tally"));//friend

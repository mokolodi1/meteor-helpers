function onlyHash (obj) {
  return JSON.stringify(obj.hash) === "{}";
}

Template.registerHelper("print", function (first, second, third, fourth) {
  if (first === undefined || second === undefined) {
    console.log("No arguments given to global print helper :(");
  } else if (third === undefined) {
    console.log(first);
  } else if (fourth === undefined) {
    console.log(first, second);
  } else {
    console.log("the current print helper only does 2 arguments...");
  }
});

Template.registerHelper("compare", function (first, second) {
  if (typeof first === "object" && typeof second === "object") {
    return _.isEqual(first, second); // do a object comparison
  } else {
    return first === second;
  }
});

Template.registerHelper("length", function (first) {
  if (!first) {
    console.log("Could not calculate length of", first);
    return;
  }

  if (first.count) {
    return first.count();
  }

  if (first.length !== undefined) {
    return first.length;
  }

  console.log("Could not calculate length of", first);
});

Template.registerHelper("fromNow", function (date) {
  return moment(date).fromNow();
});

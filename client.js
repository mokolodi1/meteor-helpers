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

Template.registerHelper("isUndefined", function (thing) {
  return thing === undefined;
});

Template.registerHelper("length", function (first) {
  if (!first) {
    return;
  }

  if (first.count) {
    return first.count();
  }

  if (first.length !== undefined) {
    return first.length;
  }

   // can't find length :(
});

Template.registerHelper("getInstanceReactive", function (varName) {
  var variable = Template.instance()[varName];
  if (variable && variable.get) {
    return variable.get();
  }

  throw "Couldn't get reactive instance variable " + varName;
});

// TODO: make reactive, update ever minute or so
Template.registerHelper("fromNow", function (date) {
  return moment(date).fromNow();
});

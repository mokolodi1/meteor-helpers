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

Template.registerHelper("getInstanceVar", function (varName) {
  var variable = Template.instance()[varName];
  if (variable) {
    return variable;
  }

  throw "Couldn't get instance variable " + varName;
});

// update every 10 seconds
setInterval(function() {
  Session.set("mokolodi1-helpers-momentjs-tick", new Date())
}, 10 * 1000);

Template.registerHelper("fromNow", function (time) {
  Session.get("mokolodi1-helpers-momentjs-tick");

  return moment(time).fromNow();
});

Template.registerHelper("getSession", function (sessionVarName) {
  return Session.get(sessionVarName);
});

Template.registerHelper("not", function (thing) {
  return !!!thing;
});

Template.registerHelper("or", function (first, second) {
  return first || second;
});

Template.registerHelper("and", function (first, second) {
  return first && second;
});

Template.registerHelper("ne", function (first, second) {
  return first !== second;
});

Template.registerHelper("neither", function (first, second) {
  return !first && !second;
});

Template.registerHelper("getReactive", function (variable) {
  return variable.get();
});

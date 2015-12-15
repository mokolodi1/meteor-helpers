Moko = {};

Moko.ensureIndex = function (collection, index) {
  collection.rawCollection().ensureIndex(index, function (error) {
    if (error) {
      throw error;
    }
  });
};

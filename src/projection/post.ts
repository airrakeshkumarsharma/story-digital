/**
 * Get users necessary data from the data for specific work
 * @param includeFunctions function need to execute
 */
const build = (includeFunctions: any[]) => {
  let projection = {};

  if (includeFunctions) {
    if (includeFunctions.length > 0) {
      for (const fun of includeFunctions) {
        projection = {
          ...projection,
          ...mapFunction(fun)
        };
      }
    }
  }

  /* Final Security Resort to make sure projection is not {} */
  if (Object.keys(projection).length === 0) {
    projection = { ...basic() };
  }
  return projection;
};

/* Mapping projection function strings to projection function */
const mapFunction = (fun: any) => {
  switch (fun) {
    case "basic":
      return basic();
    case "minimal":
      return minimal();
  }
};

/**
 * Basic projection can be used for
 * read-many case
 */
function basic() {
  return {
    userId: 1,
    title: 1,
    media: 1
  };
}

/**
 * Minimal Can be used for
 * Read-many So more details option can be seen by the client
 */
function minimal() {
  return {
    text: 1,
    createdAt: 1,
    updatedAt: 1
  };
}

export { build as postProjection };

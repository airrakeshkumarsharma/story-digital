export const CONSTANTS = {
  USER: {
    MIN_PASSWORD_LEN: 8,
    MAX_FIRST_NAME_LEN: 50
  },
  REGEX: {
    MONGO_OBJECT_ID: /^[a-z\d]{24}$/
  },
  // All collection name
  COLLECTIONS: {
    USERS: "users",
    POST: "post"
  },

  TOKEN_EXPIRE_TIME: {
    LOGIN: "30d"
  },

  SALT_ROUNDS: 8,
  PAGINATION: {
    PER_PAGE: 100
  }
};

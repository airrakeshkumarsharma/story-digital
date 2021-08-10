import boom from "@hapi/boom";

const error = {
  unauthorized: (errorMessage: any) => boom.unauthorized(errorMessage),
  conflict: (errorMessage: any) => boom.conflict(errorMessage),
  forbidden: (errorMessage: any) => boom.forbidden(errorMessage),
  notFound: (errorMessage: any) => boom.notFound(errorMessage),
  badRequest: (errorMessage: any) => boom.badRequest(errorMessage),
  badImplementation: (errorMessage: any) => boom.badImplementation(errorMessage),
  serverUnavailable: (errorMessage: any) => boom.serverUnavailable(errorMessage)
};

export const errorRes = {
  login: () => error.unauthorized("Username/password in incorrect"),
  wrongData: () => error.badRequest("Invalid data"),
  dataExists: () => error.conflict("Data exists"),
  invalidToken: () => error.unauthorized("Invalid token"),
  systemError: () => error.badImplementation("Something went wrong")
};

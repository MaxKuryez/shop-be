import { ErrorRequestHandler } from "express-serve-static-core";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);

  res.status(500).json({ message: err.message });
};

import { RequestHandler } from "express";

const handleAsyncErrors = (fn: Function): RequestHandler => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

export { handleAsyncErrors };

import Express from "express";

export function one(
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) {
  console.log("page one");
  res.status(200).json({ page: "one" });
}

export function two(
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) {
  console.log("page two");
  res.status(200).json({ page: "two" });
}

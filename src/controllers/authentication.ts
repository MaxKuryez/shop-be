import { RequestHandler } from "express";
import passport from "passport";
import googlePassport from "passport-google-oauth20";

const Users: { email: string; password: string;}[] = [];

export const register: RequestHandler = (req, res, next) => {
  const { email, password } = req.body;
  const newUser = { email, password };

  Users.push(newUser);

  res.status(201).json({message: "Created product!", product: newUser});
};

export const signIn: RequestHandler = (req, res, next) => {
  const { email, password } = req.body;
  const oldUser = { email, password };

  res.status(201).json({user: oldUser});
};

export const getUsers: RequestHandler = (req, res, next) => {
  res.status(201).json({Users});
};

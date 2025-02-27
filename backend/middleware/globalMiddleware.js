import morgan from "morgan";
import cors from "cors";
import express from "express";

export const globalMiddleware = [
cors({
    origin: ["https://meow-chat.netlify.app"], // Netlify & local frontend
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow authorization headers & cookies
  }),
  morgan("dev"), // Log HTTP requests in "dev" format
  express.json(), // Parse incoming JSON requests
  express.urlencoded({ extended: true }),
];

// error handler middleware for global errors. It should be the last middleware in the app. this only can catch errors that are thrown synchronously.
export const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "unexpected internal server error" });
};

export default function errorHandler(error, req, res, next) {
  console.log("ERROR RECEIVED:", {
    name: error.name,
    message: error.message,
    status: error.status,
    code: error.code,
    headersSent: res.headersSent,
  });

  if (error.status === 404) {
    return res.status(404).json({
      message: error.message,
    });
  }

  if (error.code === 11000) {
    return res.status(400).json({
      message: "An event with that same name exists",
    });
  }

  if (error.name === "CastError") {
    return res.status(400).json({
      message: [`Invalid value for ${error.path}. Expected ${error.kind}.`],
    });
  }

  if (error.name === "ValidationError") {
    return res.status(400).json({
      errors: Object.values(error.errors).map((fieldError) => {
        if (fieldError.name === "CastError") {
          return `Invalid value for ${fieldError.path}. Expected ${fieldError.kind}.`;
        }
        return fieldError.message;
      }),
    });
  }

  return res.status(500).json({
    message: "Internal server error",
  });
}

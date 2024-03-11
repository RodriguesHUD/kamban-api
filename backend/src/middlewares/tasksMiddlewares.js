const validateFieldTitle = (request, response, next) => {
  const { body } = request;

  if (body.title === undefined) {
    return response
      .status(400)
      .json({ message: 'The field "title" is required' });
  }

  if (body.title === "") {
    return response.status(400).json({ message: "Title canoot be empty" });
  }

  next();
};
const validaFieldStatus = (request, response, next) => {
  const { body } = request;

  if (body.status === undefined) {
    return response
      .status(400)
      .json({ message: 'The field "Status" is required' });
  }

  if (body.Status === "") {
    return response.status(400).json({ message: "Status canoot be empty" });
  }

  next();
};

module.exports = {
  validateFieldTitle,
  validaFieldStatus,
};



const errHandler = (err, req, res, next) => {
  console.dir(err);
  err = typeof err === "string" ? new Error(err) : err;

  switch (err.constructor) {
    case Error: res.status(300).json(err.message); break; 
  
    default:
      res.status(404).json({ message: "Ошибка по умолчанию в errHandler" });
  }
};






module.exports = {
  errHandler
};
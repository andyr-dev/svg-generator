const shapeChoices = ["circle", "triangle", "square", "roundedSquare"];
 const questions = [
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters:",
      validate: (input) => {
        if (input.length > 3) {
          return "Input should not be more than 3 characters, delete some and try again!";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a color or hexadecimal number for the text:",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: shapeChoices,
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a color or hexadecimal number for the shape:",
    },
  ]

  module.exports = questions
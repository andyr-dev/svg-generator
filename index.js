//import required modules
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square, RoundedSquare } = require("./lib/shapes");
const questions = require("./lib/questions");
inquirer
  .prompt(questions)
  // passes answers and checks for the shapeType to instantiate the class
  .then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;
    let shapeType;
    switch (shape) {
      case "circle":
        shapeType = new Circle(text, textColor, shapeColor);
        break;
      case "triangle":
        shapeType = new Triangle(text, textColor, shapeColor);
        break;
      case "square":
        shapeType = new Square(text, textColor, shapeColor);
        break;
      case "roundedSquare":
        shapeType = new RoundedSquare(text, textColor, shapeColor);
    }
    //runs the generateSVG method to pass the properties and create the svg string and save in the examples folder
    const logo = shapeType.generateSVG();
    fs.writeFile("./examples/logo.svg", logo, (err) => {
      if (err) throw err;
      console.log("Generated logo.svg");
    });
  })
  //returns error if an error is encountered
  .catch((err) => {
    console.error(err);
  });

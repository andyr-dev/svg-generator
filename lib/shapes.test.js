const { Shapes, Circle, Triangle, Square, RoundedSquare } = require("./shapes");

describe("Shapes", () => {
  describe("Circle", () => {
    it("should render a circle SVG string with the shape color provided", () => {
      const circle = new Circle();
      circle.render("black");
      expect(circle.render()).toEqual(
        `<circle cx="150" cy="100" r="75" fill="${this.color}" />`
      );
    });
  });

  describe("Triangle", () => {
    it("should render a triangle SVG string with the shape color provided", () => {
      const triangle = new Triangle("red");
      triangle.render("red");
      expect(triangle.render()).toEqual(
        `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
      );
    });
  });

  describe("Square", () => {
    it("should render a square SVG string with the shape color provided", () => {
      const square = new Square("blue");
      square.render("blue");
      expect(square.render()).toEqual(
        `<rect x="25" y="25" width="150" height="150" fill="${this.color}" />`
      );
    });
  });

  describe("RoundedSquare", () =>{
    it("should render a rounded square SVG string with the shape color provided", ()=> {
        const roundedSquare = new RoundedSquare("yellow")
        roundedSquare.render("yellow");
        expect(roundedSquare.render()).toEqual(`<rect x="25" y="25" rx="10" ry="10" width="150" height="150" stroke="black" fill="${this.color}" stroke-width="5"/>`)
    });
    });
  })
class Shapes {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

class Circle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render(color) {
    this.color = color;
    return `<circle cx="150" cy="100" r="75" fill="${color}" />`;
  }

  generateSVG() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="75" fill="${this.shapeColor}" />
      <text x="150" y="110" fill="${this.textColor}" text-anchor="middle" font-size="45" font-family="Arial">${this.text}</text>
    </svg>`;
  }
}

class Triangle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render(color) {
    this.color = color;
    return `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`;
  }

  generateSVG() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
      <text x="150" y="150" fill="${this.textColor}" text-anchor="middle" font-size="55" font-family="Arial">${this.text}</text>
    </svg>`;
  }
}

class Square extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render(color) {
    this.color = color;
    return `<rect x="25" y="25" width="150" height="150" fill="${color}" />`;
  }

  generateSVG() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="25" width="150" height="150" fill="${this.shapeColor}" />
      <text x="100" y="100" fill="${this.textColor}" text-anchor="middle" font-size="60" font-family="Arial">${this.text}</text>
    </svg>`;
  }
}

class RoundedSquare extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render(color) {
    this.color = color;
    return `<rect x="25" y="25" rx="10" ry="10" width="150" height="150" stroke="black" fill="${this.shapeColor}" stroke-width="5"/>`;
  }
  generateSVG() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="25" rx="10" ry="10" width="150" height="150" stroke="black" fill="${this.shapeColor}" stroke-width="5"/>
    <text x="100" y="100" fill="${this.textColor}" text-anchor="middle" font-size="60" font-family="Arial">${this.text}</text>
    </svg>`;
  }
}
module.exports = { Shapes, Circle, Triangle, Square, RoundedSquare };

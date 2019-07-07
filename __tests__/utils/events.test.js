const Events = require("../../js/utils/Events");

const request = require("supertest")
const app = require("../../js/app")

let events;

beforeEach(() => {
  events = new Events();
});

describe("JS events integration testing", () => {
  test("should read sideNav width", () => {
    // Arrange
    request(app)
    // Act
    .get("/#")
    .then(response => {
      console.log(document.querySelector(".side-nav"))
      // Assert
      expect(document.querySelector(".side-nav").style.width).toBe("0");
    })
  })
})
const Components = require("../../js/utils/Components");

let components;

beforeEach(() => {
    components = new Components()
})


describe("createElement", () => {
    test("should create an element", () => {
        expect(components.createElement('p') instanceof HTMLParagraphElement).toBeTruthy()
    })

    test('should throw error when no parameter is passed', () => {
        expect(() => {
            components.createElement()
        }).toThrow('Must pass valid HTML Element')
    })
})

describe('createNavigationMenu', () => {
    test('should create a HTMLNavElement', () => {
        expect(components.createNavigationMenu() instanceof HTMLElement).toBeTruthy()
    })

    test('should contain an unordered list', () => {
        console.log(components.createNavigationMenu().querySelector('ul'))
        expect(components.createNavigationMenu().querySelector('ul') instanceof HTMLUListElement).toBeTruthy()
    })
})
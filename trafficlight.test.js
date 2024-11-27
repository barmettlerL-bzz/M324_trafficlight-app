const app = require("./trafficlight");

describe('test suite traffic light', () => {
    it(`case red light`, () => {
        expect(app.trafficLight("red")).toBe("DON'T WALK!");
    });
    it(`case red light`, () => {
        expect(app.trafficLight("confusion")).toBe("OUT OF ORDER");
    });
    it(`case red light`, () => {
        expect(app.trafficLight("orange")).toBe("ATTENTION!");
    });
    it(`case red light`, () => {
        expect(app.trafficLight("red")).toBe("DON'T WALK!");
    });
});

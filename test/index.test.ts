import { max, min, avg } from "../src/index";

describe("max", () => {
  test("", () => {
    expect(max([1, 2, 3, 4, 8])).toEqual(8);
    expect(max([11, 52, 63, 54, 78])).toEqual(78);
    expect(max([11, 22, 23, 34, 98])).toEqual(98);
    expect(max([101, 52, 3, 44, 88])).toEqual(101);

    const tests: [number[], number][] = [
      [[1, 2, 3, 4, 8], 8],
      [[11, 52, 63, 54, 78], 78],
      [[11, 22, 23, 34, 98], 98],
      [[101, 52, 3, 44, 88], 101],
    ];

    tests.forEach((test) => {
      let [input, expected] = test;
      expect(max(input)).toEqual(expected);
    });
  });

  test("error", () => {
    expect(() => {
      max([]);
    }).toThrow();
  });

  test("error", () => {
    expect(() => {
      max([]);
    }).toThrowError("Error");
  });
});

describe("min", () => {
  test("", () => {
    expect(min([1, 2, 3, 4, 8])).toEqual(1);
    expect(min([11, 52, 63, 54, 78])).toEqual(11);
    expect(min([12, 22, 23, 34, 98])).toEqual(12);
    expect(min([101, 52, 3, 44, 88])).toEqual(3);
  });

  const tests: [number[], number][] = [
    [[1, 2, 3, 4, 8], 1],
    [[11, 52, 63, 54, 78], 11],
    [[11, 22, 23, 34, 98], 12],
    [[101, 52, 3, 44, 88], 3],
  ];

  tests.forEach((test) => {
    let [input, expected] = test;
    expect(max(input)).toEqual(expected);
  });
});

describe("avg", () => {
  test("", () => {
    expect(avg([1, 2, 3, 4, 8])).toEqual(3.6);
    expect(avg([11, 52, 63, 54, 78])).toEqual(51.6);
    expect(avg([11, 22, 23, 34, 98])).toEqual(37.6);
    expect(avg([101, 52, 3, 44, 88])).toEqual(57.6);
  });
});

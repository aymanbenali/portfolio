import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const sum = (a, b) => a + b;
const inArray = (array, item) => {
  /*
  let flag = false;
  array.forEach((element) => {
    if (element === item) {
      flag = true;
    }
  });
  return flag;
  */
  return array.some((element) => element === item);
  //return !!array.find((e) => e === item);
};

const people = [
  {
    name: "aaa",
    phone: "21234",
  },
  {
    name: "bbb",
    phone: "21234",
  },
  {
    name: "ccc",
    phone: "21234",
  },
];

it("should retykkk", () => {
  const result = people.filter((person, index) => {
    if (person.name === "aaa") return true;
  });
  console.log(result);
});

test("renders learn react link", () => {
  // const { getByText } = render(<App />);
  // console.log({ getByText });
  //const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();

  const result = sum(2, 3);

  expect(result).toBe(5);
});

it("should return true if the element exist", () => {
  const result = inArray([1, 2, 3, 4, 5], 3);

  expect(result).toBe(true);
});

it("should return false if the element not exist", () => {
  const result = inArray([1, 2, 3, 4, 5], 7);

  expect(result).toBe(false);
});

it("should return false if the element not exist", () => {
  const result = inArray([1, 2, 3, 4, 5], undefined);

  expect(result).toBe(false);
});

it("should return true if the element is exist", () => {
  const result = inArray([1, 2, 3, 0, 4, 5], 0);

  expect(result).toBe(true);
});

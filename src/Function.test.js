import { render, screen } from "@testing-library/react";
import Sum from "./Sumfunction";

test('Sum Function test', () => {
  const result = Sum(10, 5);
  expect(result).toBe(15);
});

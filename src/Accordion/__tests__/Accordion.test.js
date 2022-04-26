import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Accordion from "../Accordion";
// import Accordion from "../MultiAccordion";

const hats = { title: "Favorite Hats", contents: "Fedoras are classy" };
const footware = {
	title: "Favorite Footware",
	contents: "Flipflops are the best",
};

test("can open hats accordion items to see the contents", () => {
	render(<Accordion items={[hats, footware]} />);

	expect(screen.getByText(hats.contents)).toBeInTheDocument();
	expect(screen.queryByText(footware.contents)).not.toBeInTheDocument();
});

test("can open footwear accordion items to see the contents", () => {
	// Arrange
	render(<Accordion items={[hats, footware]} />);

	// Act
	userEvent.click(screen.getByText(footware.title));

	// Assert
	expect(screen.getByText(footware.contents)).toBeInTheDocument();
	expect(screen.queryByText(hats.contents)).not.toBeInTheDocument();
});

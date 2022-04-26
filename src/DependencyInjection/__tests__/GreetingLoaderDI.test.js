import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { GreetingLoader } from "../GreetingLoaderDI";

test("loads greetings on click", async () => {
	const mockLoadGreeting = jest.fn();
	const testGreeting = "TEST_GREETING";
	mockLoadGreeting.mockResolvedValueOnce({ data: { greeting: testGreeting } });
	render(<GreetingLoader loadGreeting={mockLoadGreeting} />);
	const nameInput = screen.getByLabelText(/name/i);
	const loadButton = screen.getByText(/load/i);
	userEvent.type(nameInput, "Mary");
	userEvent.click(loadButton);
	expect(mockLoadGreeting).toHaveBeenCalledWith("Mary");
	expect(mockLoadGreeting).toHaveBeenCalledTimes(1);
	await waitFor(() =>
		expect(screen.getByLabelText(/greeting/i)).toHaveTextContent(testGreeting)
	);
});

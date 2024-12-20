import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutCard from "../src/Components/Checkout-Card/Checkout-Card.jsx";
import { MemoryRouter } from "react-router-dom";

describe("Checkout Card Component", () => {
    let total = 200;
    let onClick = vi.fn();
        beforeEach(() => {
            render(
            <MemoryRouter>
                <CheckoutCard total={total} onClick={onClick} />
            </MemoryRouter>
            );
        })
    it("renders summary container", () => {
        expect(screen.getByTestId(/checkout-container/i)).toBeInTheDocument();
    })
    it("render total value", () => {
        expect(screen.getAllByText("200 $").length).toBe(2);
    })
    it("calls function when button clicked", async() => {
        const user = userEvent.setup();
        const button = screen.getByRole("button", {name: /checkout/i});
        await user.click(button);
        expect(onClick).toBeCalled();
    })
        it("matches snapshot", () => {
            let total = 200;
            let onClick = vi.fn();
            const {container} = render(
                <MemoryRouter>
                    <CheckoutCard total={total} onClick={onClick} />
                </MemoryRouter>
            );
            expect(container).toMatchSnapshot();
        });
})
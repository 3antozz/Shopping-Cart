import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutProduct from "../src/Components/Checkout-Product/Checkout-Product.jsx";
import { MemoryRouter } from "react-router-dom";

describe("Product Card component", () => {
    let onChange;
    let onRemove;
    beforeEach(() => {
        onChange = vi.fn();
        onRemove = vi.fn();
        const product = {
            id: 1,
            title: "test",
            price: 69,
            category: "...",
            description: "...",
            image: "...",
            quantity: 1,
        };
        render(
            <MemoryRouter initialEntries={["/shop"]}>
                <CheckoutProduct
                    product={product}
                    onChange={onChange}
                    onRemove={onRemove}
                />
            </MemoryRouter>
        );
    });
    it("card container is rendered", () => {
        expect(screen.getByTestId(/product-container/i)).toBeInTheDocument();
    });
    it("should call prop function when clicked", async () => {
        const user = userEvent.setup();
        const cartButton = screen.getByRole("button", { name: /x/i });

        await user.click(cartButton);
        expect(onRemove).toBeCalled();
    });
    it("navigates to product link", () => {
        expect(screen.getByText(/test/i)).toHaveAttribute(
            "href",
            "/shop/products/1"
        );
    });
    it("should increment and decrement when clicked", async () => {
        const user = userEvent.setup();
        const incrementButton = screen.getByRole("button", { name: "+" });
        const decrementButton = screen.getByRole("button", { name: "-" });

        const input = screen.getByDisplayValue("1");
        await user.click(incrementButton);
        expect(input.value).toBe("2");
        await user.click(decrementButton);
        expect(input.value).toBe("1");
    });
    it("matches snapshot", () => {
        const onChange = vi.fn();
        const onRemove = vi.fn();
        const product = {
            id: 1,
            title: "test",
            price: 69,
            category: "...",
            description: "...",
            image: "...",
            quantity: 1,
        };
        const { container } = render(
            <MemoryRouter initialEntries={["/shop"]}>
                <CheckoutProduct
                    product={product}
                    onChange={onChange}
                    onRemove={onRemove}
                />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });
});

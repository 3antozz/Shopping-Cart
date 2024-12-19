import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "../src/Components/Product-Card/Product-Card.jsx";
import { MemoryRouter } from "react-router-dom";

describe("Product Card component", () => {
    let onSubmit;
    let handlePopup;
    beforeEach(() => {
        onSubmit = vi.fn();
        handlePopup = vi.fn();
        const product = {
                id: 1,
                title: "test",
                price: 69,
                category: "...",
                description: "...",
                image: "...",
            }
        render(
            <MemoryRouter initialEntries={['/shop']}>
                <ProductCard 
                product={product}
                onSubmit={onSubmit}
                handlePopup={handlePopup} />
            </MemoryRouter>
        );
    });
    it("card container is rendered", () => {
        expect(screen.getByTestId(/container/i)).toBeInTheDocument();
    })
    it("navigates to product link", () => {
        expect(screen.getByText(/test/i)).toHaveAttribute("href", "/products/1");
    });
    it("should call prop functions when clicked", async () => {
        const user = userEvent.setup();
        const cartButton = screen.getByRole("button", {name: /Add to Cart/i});

        await user.click(cartButton);
        expect(handlePopup).toBeCalled();
        expect(onSubmit).toBeCalled();
    })
    it("should increment and decrement when clicked", async () =>{
        const user = userEvent.setup();
        const incrementButton = screen.getByRole("button", {name: "+"});
        const decrementButton = screen.getByRole("button", {name: "-"});

        const input = screen.getByDisplayValue("1");
        await user.click(incrementButton);
        expect(input.value).toBe("2");
        await user.click(decrementButton);
        expect(input.value).toBe("1");
    })
    it("matches snapshot", () => {
        const onSubmit = vi.fn();
        const handlePopup = vi.fn();
        const product = {
                id: 1,
                title: "test",
                price: 69,
                category: "...",
                description: "...",
                image: "...",
            }
        const {container} = render(
            <MemoryRouter>
                <ProductCard 
                    product={product}
                    onSubmit={onSubmit}
                    handlePopup={handlePopup}
                />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });
});

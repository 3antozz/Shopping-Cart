import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Details from "../src/Components/Details/Details.jsx";
import { MemoryRouter, Outlet, Routes, Route } from "react-router-dom";

describe("Details Component", () => {
    const handleAddToCart = vi.fn()
    const context = {
        loading: false,
        handleAddToCart,
        products: [{
                id: 1,
                title: "test",
                price: 69,
                category: "...",
                description: "...",
                image: "...",
                rating: {
                    rate: 102,
                    count: 69
                }
            }, {
                id: 2,
                title: "test2",
                price: 69,
                category: "...",
                description: "...",
                image: "...",
                rating: {
                    rate: 102,
                    count: 69
                }
            }]
    }
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={["/shop/products/1"]}>
            <Routes>
              <Route path="/shop" element={<div>
                <h1>SHOP ROUTE</h1>
                <Outlet context={context} />
              </div>}>
                <Route path="products/:productId" element={<Details />} />
              </Route>
            </Routes>
          </MemoryRouter>
        );

    })
    it("should render component", () => {
        expect(screen.getByTestId("container")).toBeInTheDocument();
    });

    it("calls functions on click", async() => {
        const user = userEvent.setup();
        const button = screen.getByRole("button", {name: /add to cart/i});
        await user.click(button);
        expect(handleAddToCart).toBeCalled();
        expect(screen.getByText(/Item added to the cart!/i)).toBeInTheDocument();
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
            const handleAddToCart = vi.fn()
            const context = {
                loading: false,
                handleAddToCart,
                products: [{
                        id: 1,
                        title: "test",
                        price: 69,
                        category: "...",
                        description: "...",
                        image: "...",
                        rating: {
                            rate: 102,
                            count: 69
                        }
                    }, {
                        id: 2,
                        title: "test2",
                        price: 69,
                        category: "...",
                        description: "...",
                        image: "...",
                        rating: {
                            rate: 102,
                            count: 69
                        }
                    }]
            }
            const {container} = render(
                <MemoryRouter initialEntries={["/shop/products/1"]}>
                <Routes>
                  <Route path="/shop" element={<div>
                    <h1>SHOP ROUTE</h1>
                    <Outlet context={context} />
                  </div>}>
                    <Route path="products/:productId" element={<Details />} />
                  </Route>
                </Routes>
              </MemoryRouter>
            );
            expect(container).toMatchSnapshot();
        });
});
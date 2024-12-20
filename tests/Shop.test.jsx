import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "../src/Components/Shop/Shop.jsx";
import { MemoryRouter, Outlet, Routes, Route } from "react-router-dom";
import { act } from "react";
import userEvent from "@testing-library/user-event";

describe("Shop Component with products no loading", () => {
    const context = {
        products: [
            {
                id: 1,
                title: "test",
                price: 420,
                category: "...",
                description: "...",
                image: "...",
                quantity: 1,
            },
            {
                id: 2,
                title: "3antozz",
                price: 69,
                category: "...",
                description: "...",
                image: "...",
                quantity: 1,
            },
        ],
        error: false,
        loading: false,
        handleAddToCart: vi.fn(),
    };
    beforeEach(() => {
        act(() => {
            render(
                <MemoryRouter initialEntries={["/shop"]}>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <div>
                                    <h1>APP ROUTE</h1>
                                    <Outlet context={context} />
                                </div>
                            }>
                            <Route path="shop" element={<Shop />}></Route>
                        </Route>
                    </Routes>
                </MemoryRouter>
            );
        })
    });
    it("renders shop container", () => {
        expect(screen.getByTestId(/shop-container/i)).toBeInTheDocument();
    });
    it("renders product card container", () => {
        expect(screen.getAllByTestId("container").length).toBe(2);
    });
    it("renders search input", () => {
        expect(screen.getByPlaceholderText(/search for a product/i)).toBeInTheDocument();
    });
    it("should render popup when product added to card", async () => {
        const user = userEvent.setup();
        const cartButton = screen.getAllByRole("button", {name: /Add to Cart/i});

        await user.click(cartButton[0]);
        expect(screen.getByText("Item added to the cart!")).toBeInTheDocument();
    })
        it("matches snapshot", () => {
            const context = {
                products: [
                    {
                        id: 1,
                        title: "test",
                        price: 420,
                        category: "...",
                        description: "...",
                        image: "...",
                        quantity: 1,
                    },
                    {
                        id: 2,
                        title: "3antozz",
                        price: 69,
                        category: "...",
                        description: "...",
                        image: "...",
                        quantity: 1,
                    },
                ],
                error: false,
                loading: false,
                handleAddToCart: vi.fn(),
            };
            const { container } =         act(() => {
                render(
                    <MemoryRouter initialEntries={["/shop"]}>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <div>
                                        <h1>APP ROUTE</h1>
                                        <Outlet context={context} />
                                    </div>
                                }>
                                <Route path="shop" element={<Shop />}></Route>
                            </Route>
                        </Routes>
                    </MemoryRouter>
                );
            })
            expect(container).toMatchSnapshot();
        });
});
describe("Shop component while loading", () => {
    const context = {
        products: [
            {
                id: 1,
                title: "test",
                price: 69,
                category: "...",
                description: "...",
                image: "...",
                quantity: 1,
            },
        ],
        error: false,
        loading: true,
        handleAddToCart: vi.fn(),
    };
    
    it("renders loading spinner", () => {
        render(
            <MemoryRouter initialEntries={["/shop"]}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <h1>APP ROUTE</h1>
                            <Outlet context={context} />
                        </div>
                    }>
                    <Route path="shop" element={<Shop />}></Route>
                </Route>
            </Routes>
        </MemoryRouter>
        );
        expect(screen.getByTestId("loading-container")).toBeInTheDocument();
    })
})
describe("Shop component with an error", () => {
    const context = {
        products: [
            {
                id: 1,
                title: "test",
                price: 69,
                category: "...",
                description: "...",
                image: "...",
                quantity: 1,
            },
        ],
        error: true,
        loading: false,
        handleAddToCart: vi.fn(),
    };
    
    it("renders loading spinner", () => {
        render(
            <MemoryRouter initialEntries={["/shop"]}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <h1>APP ROUTE</h1>
                            <Outlet context={context} />
                        </div>
                    }>
                    <Route path="shop" element={<Shop />}></Route>
                </Route>
            </Routes>
        </MemoryRouter>
        );
        expect(screen.getByText(/Oops, an Error has Occured! Please try again later/i)).toBeInTheDocument();
    })
})
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Summary from "../src/Components/Order-Summary/Order-Summary.jsx";
import { MemoryRouter, Outlet, Routes, Route } from "react-router-dom";

describe("Summary Component", () => {
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
        loading: false,
        cartIDs: [
            {
                id: 1,
                quantity: 2,
            },
        ],
        handleAddToCart: vi.fn(),
        removeProduct: vi.fn(),
        clearCart: vi.fn(),
    };
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={["/summary"]}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <h1>APP ROUTE</h1>
                                <Outlet context={context} />
                            </div>
                        }
                    >
                        <Route path="summary" element={<Summary />}></Route>
                    </Route>
                </Routes>
            </MemoryRouter>
        );
    });
    it("renders summary container", () => {
        expect(screen.getByTestId(/summary-container/i)).toBeInTheDocument();
    });
    it("renders checkout card container", () => {
        expect(screen.getByTestId(/checkout-container/i)).toBeInTheDocument();
    });
    it("renders product card container", () => {
        expect(screen.getByTestId(/product-container/i)).toBeInTheDocument();
    });
    it("matches snapshot", () => {
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
            loading: false,
            cartIDs: [
                {
                    id: 1,
                    quantity: 2,
                },
            ],
            handleAddToCart: vi.fn(),
            removeProduct: vi.fn(),
            clearCart: vi.fn(),
        };
        const { container } = render(
            <MemoryRouter initialEntries={["/summary"]}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <h1>APP ROUTE</h1>
                                <Outlet context={context} />
                            </div>
                        }
                    >
                        <Route path="summary" element={<Summary />}></Route>
                    </Route>
                </Routes>
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });
});

import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Homepage from "../src/Components/Homepage/Homepage.jsx";
import { MemoryRouter } from "react-router-dom";

describe("Homepage component", () => {
    // const router = createMemoryRouter(routes);
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Homepage />
            </MemoryRouter>
        );
    });
    it("renders heading", () => {
        expect(screen.getByRole("heading", { name: /welcome to 3antoshop/i })).toBeInTheDocument();
    });
    it("renders button", () => {
        expect(screen.getByRole("link", { name: /shop now/i })).toBeInTheDocument();
    });
    it("navigates to the shop page on click", () => {
        expect(screen.getByRole("link", { name: /shop now/i })).toHaveAttribute("href", "/shop");
    });
    it("matches snapshot", () => {
        const {container} = render(
            <MemoryRouter>
                <Homepage />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });
});

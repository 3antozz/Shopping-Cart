import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "../src/Components/Navbar/Navbar.jsx";
import { MemoryRouter } from "react-router-dom";

describe("Navbar component", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Navbar/>
            </MemoryRouter>
        );
    });
    it("renders links", () => {
        expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /Shop/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /go to summary/i })).toBeInTheDocument();
    });
    it("navigates to different links on click", () => {
        expect(screen.getByRole("link", { name: /Home/i })).toHaveAttribute("href", "/home");
        expect(screen.getByRole("link", { name: /Shop/i })).toHaveAttribute("href", "/shop");
        expect(screen.getByRole("link", { name: /go to summary/i })).toHaveAttribute("href", "/summary");
    });
    it("renders correct count", () => {
        render(
            <MemoryRouter>
                <Navbar count={69}/>
            </MemoryRouter>
        );
        expect(screen.getByText(/69/)).toBeInTheDocument();
    })
    it("matches snapshot", () => {
        const {container} = render(
            <MemoryRouter>
                <Navbar count={1} />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });
})
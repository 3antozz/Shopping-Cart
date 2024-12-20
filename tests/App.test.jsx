import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { act } from "react";
import App from "../src/App";
import Homepage from "../src/Components/Homepage/Homepage.jsx";
import ErrorPage from "../src/ErrorPage.jsx";

describe("app component", () => {
    beforeEach(() => {
        act(() => {
            render(
                <MemoryRouter initialEntries={["/home"]}>
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route path="home" element={<Homepage />}></Route>
                        </Route>
                    </Routes>
                </MemoryRouter>
            );
        });
    });
    it("should render navbar container", () => {
        expect(screen.getByTestId("navbar-container")).toBeInTheDocument();
    })
    it("should render a link to the shop", () => {
        expect(screen.getByRole("link", {name: /shop now/i})).toBeInTheDocument();
    })
});

describe("error page", () => {
    beforeEach(() => {
        act(() => {
            render(
                <MemoryRouter initialEntries={["/koko"]}>
                    <Routes>
                        <Route path="/" element={<App />} errorElement={<ErrorPage />}/>
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </MemoryRouter>
            );
        });
    });
    it("should render a link to back to homepage", () => {
        expect(screen.getByRole("link", {name: /You can go back to the home page by clicking here, though!/i})).toBeInTheDocument();
    })
});

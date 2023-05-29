import { MemoryRouter } from "react-router-dom";

const mockNavigate = jest.fn();
const mockUseNavigate = jest.fn(() => mockNavigate);

export { MemoryRouter, mockNavigate, mockUseNavigate };

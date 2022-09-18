import React from "react";
import { render, screen } from "@testing-library/react";
import SitePagination from "./pagination";

describe('<SitePagination />', () => {
    test('renders correctly', () => {
        const { container } = render(<SitePagination listSize={20} pageSize={1} />);
        expect(container).toMatchSnapshot();
    });
    test('check 20th page exist', () => {
        render(<SitePagination listSize={200} pageSize={10} />);
        expect(screen.getByText('20')).toBeVisible();
    });
});
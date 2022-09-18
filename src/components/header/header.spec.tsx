import React from "react";
import { render, screen } from "@testing-library/react";
import SiteHeader from './header';

describe('<SiteHeader />', () => {
    test('renders correctly', () => {
        const { container } = render(<SiteHeader />);
        expect(container).toMatchSnapshot();
    });
});
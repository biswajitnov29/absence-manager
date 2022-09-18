import React from "react";
import { render, screen } from "@testing-library/react";
import SiteFilters from "./filters";

const statusListTest:string[] = ['Requested', 'Confirmed', 'Rejected'];
describe('<SiteFilters />', () => {
    test('renders correctly', () => {
        const { container } = render(<SiteFilters statusList={statusListTest} />);
        expect(container).toMatchSnapshot();
    });
    test('check status in the list', () => {
        render(<SiteFilters statusList={statusListTest} />);
        expect(screen.getByText('Requested')).toBeDefined();
    });
});
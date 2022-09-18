import React from "react";
import { render, screen } from "@testing-library/react";
import SiteFilters from "./filters";

const statusListTest:string[] = ['Requested', 'Confirmed', 'Rejected'];
const typeListTest:string[] = ['sickness', 'vacation'];
describe('<SiteFilters />', () => {
    test('renders correctly', () => {
        const { container } = render(<SiteFilters statusList={statusListTest} typeList={typeListTest} />);
        expect(container).toMatchSnapshot();
    });
    test('check status in the list', () => {
        render(<SiteFilters statusList={statusListTest} typeList={typeListTest} />);
        expect(screen.getByText('Requested')).toBeDefined();
    });
});
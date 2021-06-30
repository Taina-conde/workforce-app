import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchForm from '.';

describe('SearchForm', () => {
    it('renders dropdown correctly', () => {
        const { container, getByTestId, getByText } = render(
            <SearchForm />
        );

        expect(container).toMatchSnapshot()

        userEvent.change(getByTestId('search-dropdown'))

        expect(container).toMatchSnapshot()
        
        expect(getByText('Nome')).toBe(undefined)
    })
    it('', () => {})
});

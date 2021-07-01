import { useContext } from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils'
import Context, { ContextProvider } from '.';
import { ExpansionPanelActions } from '@material-ui/core';
import { it } from 'date-fns/locale';

const DummyComponent = () => <div />;

const withContext = (Component) => {
    return () => {
        const contextProps = useContext(Context);
        return <Component
            {...contextProps}
        />
    }
};

const DummyComponentWithContext = withContext(DummyComponent);

const mockEmployees = [
    {
        nome: 'Josue Batista'
    },
    {
        nome: 'Agnaldo Macedo'
    }
]

const mockGetEmployees = jest.fn();

describe('ContextProvider', () => {
    it('fetches employees and stores in employees state on first render', async () => {
        mockGetEmployees.mockResolvedValueOnce(mockEmployees);
        const wrapper = mount(
            <ContextProvider
                getEmployees={mockGetEmployees}
            >
                <DummyComponentWithContext />
            </ContextProvider>
        );
        await act(async () => {
            await new Promise(resolve => setImmediate(resolve));
            wrapper.update();
        });

        expect(wrapper.find('DummyComponent').prop('employees')).toEqual(mockEmployees);
    });

    it('', () => {});
});
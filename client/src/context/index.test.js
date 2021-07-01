// import { useContext } from 'react';
// import { shallow, mount } from 'enzyme';
// import { act } from 'react-dom/test-utils'
import Context, { ContextProvider } from '.';


// const DummyComponent = () => <div />;

// const withContext = (Component) => {
//     return () => {
//         const contextProps = useContext(Context);
//         return <Component
//             {...contextProps}
//         />
//     }
// };

// const DummyComponentWithContext = withContext(DummyComponent);

// const mockEmployees = [
//     {
//         nome: 'Josue Batista',
//         ufNasc: 'MG',
//         cpf: 123,
//     },
//     {
//         nome: 'Agnaldo Macedo',
//         ufNasc: 'MG',
//         cpf: 456,
//     }
// ]

// describe('ContextProvider', () => {

//     let wrapper;
//     const mockGetEmployees = jest.fn();
//     const mockGetByCategory = jest.fn();
//     const mockDeleteEmployee = jest.fn();
//     beforeAll(async () => {
//         mockGetByCategory.mockResolvedValue(mockEmployees);
//         mockGetEmployees.mockResolvedValue(mockEmployees);
//         mockGetByCategory.mockImplementation(() => new Promise(resolve => resolve(mockEmployees)));
//         mockGetEmployees.mockImplementation(() => new Promise(resolve => resolve(mockEmployees)));

//         console.log('out of component', await mockGetByCategory())
//         wrapper = mount(
//             <ContextProvider
//                 getEmployees={mockGetEmployees}
//                 getByCategory={mockGetByCategory}
//                 deleteEmployee={mockDeleteEmployee}
//             >
//                 <DummyComponentWithContext />
//             </ContextProvider>
//         );
//         await act(async () => {
//             await new Promise(resolve => setImmediate(resolve));
//             wrapper.update();
//         });
//         return wrapper;
//     });
    

//     // injetando dependencias para facilitar os testes unitários
//     it('fetches employees and stores in employees state on first render', async () => {
//         expect(wrapper.find('DummyComponent').prop('employees')).toEqual(mockEmployees);
//     });

//     it('detete employee method works as expected', async () => {
//         expect(wrapper.find('DummyComponent').prop('searchStarted')).toBe(false);
//         expect(wrapper.find('DummyComponent').prop('searchedEmployees')).toEqual([]);
//         // simulate an employee search to pupolate search empployee array
//         await act(async () => {
//             await wrapper.find('DummyComponent').prop('onSearchEmployee')(
//                 'ufNasc',
//                 'MG'
//             );
//             wrapper.update();
//         })
//         console.log('dummy props', wrapper.props())
//         expect(wrapper.find('DummyComponent').prop('searchStarted')).toBe(true);
//         expect(wrapper.find('DummyComponent').prop('searchedEmployees')).toEqual(mockEmployees);

//         // simulate employee being deleted
//         await act(async () => {
//             await wrapper.find('DummyComponent').prop('deleteEmployee')(123);
//             wrapper.update();
//         })
//         expect(wrapper.find('DummyComponent').prop('searchedEmployees')).toEqual([
//             mockEmployees[1]
//         ]);
//     });
// });
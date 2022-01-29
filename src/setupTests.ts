import { createSerializer } from '@emotion/jest';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

expect.addSnapshotSerializer(createSerializer());

jest.mock('react-intl', () => ({
    useIntl: jest.fn(() => ({ formatMessage: (m: any) => m.defaultMessage })),
}));

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useLocation: jest.fn(() => ({ search: {} })),
}));

Enzyme.configure({ adapter: new Adapter() });


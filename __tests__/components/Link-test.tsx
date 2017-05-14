import { shallow } from 'enzyme';
import * as React from 'react';

jest.dontMock('../../src/components/Link');
import Link from '../../src/components/Link';

describe('<Link />', () => {

  it('should render link when component is not active', () => {
    const mockHandler = jest.fn();
    const wrapper = shallow(
      <Link
        active={false}
        filter= {'filter'}
        onClick={mockHandler}
      >
        test link
      </Link>,
    );
    expect(wrapper.type()).toEqual('a');
  });

  it('should not render link when component is active', () => {
    const mockHandler = jest.fn();
    const wrapper = shallow(
      <Link
        active={true}
        filter= {'filter'}
        onClick={mockHandler}
      >
        test link
      </Link>,
    );
    expect(wrapper.type()).toEqual('span');
  });

  it('simulates click events', () => {
    const mockHandler = jest.fn();
    const wrapper = shallow(
      <Link
        active={false}
        filter= {'filter'}
        onClick={mockHandler}
      >
        test link
      </Link>,
    );

    wrapper.simulate('click', {
      preventDefault: () => {
        return;
      },
    });
    expect(mockHandler).toHaveBeenCalled();
  });
});

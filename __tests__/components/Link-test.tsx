import { shallow } from 'enzyme';
import * as React from 'react';

jest.dontMock('../../src/components/Link');
import Link from '../../src/components/Link';

/*
beforeEach(() => {
  前処理. 非同期な処理の場合はPromiseを返せば終わった後にテストが動く.
});

afterEach(() => {
  後処理
});
*/
describe('<Link />', () => {

  it('should render link when component is not active', () => {
    const wrapper = shallow(
      <Link
        active={false}
        filter= {'filter'}
        onClick={jest.fn()}
      >
        test link
      </Link>,
    );
    expect(wrapper.type()).toEqual('a');
  });

  it('should not render link when component is active', () => {
    const wrapper = shallow(
      <Link
        active={true}
        filter= {'filter'}
        onClick={jest.fn()}
      >
        test link
      </Link>,
    );
    expect(wrapper.type()).toEqual('span');
  });

  it('simulates click event', () => {
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

import React from 'react'
import { shallow } from 'enzyme'
import Button from '../index'

describe('<Button />', () => {
    const renderedComponent = shallow(<Button label="Back"/>);
    it('should render a <Button /> tag', () => {
        expect(renderedComponent.instance());
    })
    it('should have an wrapper', () => {
        expect(renderedComponent.find('.button-section')).toHaveLength(1);
    })
    it('should have a button', () => {
        expect(renderedComponent.find('button')).toHaveLength(1);
        expect(renderedComponent.find('button').text()).toEqual('Back');
    })

    it('should have enabled button', () => {
        expect(renderedComponent.find('button').prop('disabled')).not.toEqual(true);
    })
    it('button click', () => {
        const mockCallBack = jest.fn();
        const button = shallow(<Button onClick={mockCallBack} label="test"/>);
        button.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1)
    })
})
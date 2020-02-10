import React from 'react'
import { shallow, render } from 'enzyme'
import DonePage from '../index'

describe('<DonePage />', () => {
    const renderedComponent = shallow(<DonePage />);
    it('should render a <DonePage /> tag', () => {
        expect(renderedComponent.instance());
    })
    it('should have an wrapper', () => {
        expect(renderedComponent.find('#done-page')).toHaveLength(1)
    })
    it('should have two columns', () => {
        expect(renderedComponent.find('.column')).toHaveLength(2)
    })
    it('should have a back button', () => {
        expect(renderedComponent.find('Button')).toHaveLength(1);
        expect(renderedComponent.find('Button').prop('label')).toEqual('Back');
    })
    it('shold have 6 row classes', () => {
        expect(renderedComponent.find('div.row')).toHaveLength(6);
    })
    it('should have 6 labels', () => {
        expect(renderedComponent.find('span.label')).toHaveLength(6);
    })
    it('should have 6 values', () => {
        expect(renderedComponent.find('span.value')).toHaveLength(6);
    })
    it('should have two titles', () => {
        expect(renderedComponent.find('h4').first().text()).toEqual('Previous Subscription');
        expect(renderedComponent.find('h4').last().text()).toEqual('Updated Subscription');
    })
})
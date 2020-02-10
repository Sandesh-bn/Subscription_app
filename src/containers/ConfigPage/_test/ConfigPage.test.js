import React from 'react'
import { shallow } from 'enzyme'
import ConfigPage from '../index'

describe('<ConfigPage />', () => {
    const renderedComponent = shallow(<ConfigPage />);
    it('should render a <ConfigPage /> tag', () => {
        expect(renderedComponent.instance());
    })    
    it('should have an wrapper', () => {
        expect(renderedComponent.find('.config-page')).toHaveLength(1)
        expect(renderedComponent.find('.product')).toHaveLength(1)
    })
    it('should have 3 widget', () => {
        expect(renderedComponent.find('.edit-plan')).toHaveLength(1)
        expect(renderedComponent.find('.edit-seats')).toHaveLength(1)
        expect(renderedComponent.find('.price')).toHaveLength(1)
    })
    it('should have input elements', () => {
        expect(renderedComponent.find('select')).toHaveLength(1)
        expect(renderedComponent.find('select').prop('className')).toEqual('plan-input')
        expect(renderedComponent.find('input')).toHaveLength(1)
        expect(renderedComponent.find('input').prop('id')).toEqual('seats-input')
        expect(renderedComponent.find('#cost-value')).toHaveLength(1)
    })
    it('should have 3 labels', () => {
        expect(renderedComponent.find('.label')).toHaveLength(3)
    })
    it('should have title', () => {
        expect(renderedComponent.find('h2')).toHaveLength(1)
        expect(renderedComponent.find('h2').text()).toEqual('Subscription')
    })
    it('should have a button', () => {
        expect(renderedComponent.find('Button')).toHaveLength(1);
        expect(renderedComponent.find('Button').prop('label')).toEqual('Update Subscription')
    })
})
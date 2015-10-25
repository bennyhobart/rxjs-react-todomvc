import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {expect} from 'chai';
import App from '../../app/app';

describe('Component: App', () => {
    let instance;
    beforeEach(() => {
        instance = TestUtils.renderIntoDocument(<div><App/></div>);
    });

    it('should should render a TodoList Component', () => {

    });

    it('should render a AddTodo Component', () => {
    });
});

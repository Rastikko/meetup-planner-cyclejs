import {expect} from 'chai';
import {Observable} from 'rx'
import {mockDOMSource} from '@cycle/dom';
import registerIntent from '../src/components/register/register-intent'

describe('main', function() {

  describe('#main', function() {
    // TODO
    it('true should be true', function() {
      const mockedDOM = mockDOMSource({
        '#registerBtn': {
          'click': Observable.fromArray([])
        }
      });
      const actions = registerIntent({DOM: mockedDOM});
      expect(true).to.be.true;
    });
  });

});

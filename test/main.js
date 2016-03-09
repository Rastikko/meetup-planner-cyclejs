import {expect} from 'chai';
import {Observable} from 'rx'
import {mockDOMSource} from '@cycle/dom';
import main from '../src/main'

describe('main.js', function() {

  describe('#main', function() {
    it('main should return a function', function() {
      expect(main).to.be.a('function');
    });

    it('we should be able to run main with DOM and firebase placeholders', function() {
      const mockedDOM = mockDOMSource();
      const mockedFirebase = {
        uid$: {
          map: function() {
            return {
              map: function() {}
            }
          }
        }
      };
      main({DOM: mockedDOM, firebase: mockedFirebase});
    });
  });

});

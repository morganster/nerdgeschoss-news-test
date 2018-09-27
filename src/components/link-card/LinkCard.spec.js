
import React from 'react';
import { shallow } from 'enzyme';
import LinkCard from './LinkCard';

describe('<LinkCard />', () => {
    it('should have at least 1 container with class card', () => {
      const wrapper = shallow(<LinkCard />);
      const actual = wrapper.find('.card');
  
      expect(actual.length).toEqual(1);
  });
});

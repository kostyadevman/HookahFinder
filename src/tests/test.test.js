import  { Test } from '../components/TestPage/Test'

import { shallow, mount, render } from 'enzyme';


describe('<Test />', () => {
    beforeEach(()=>{
        let wrapper = shallow(<Test />)
        let input1 = wrapper.find('#var1')
        let input2 = wrapper.find('#var2')
        let res = wrapper.find('#res')

    })
    it('renders three <Foo /> components', () => {
        var1 = '1';
        input1.simulate('focus');
        input.simulate('change', { target: { value: '15' } });
        expect(input.get(0).value).to.equal('15');
  });
})

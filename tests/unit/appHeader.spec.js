import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import AppHeader from '@/components/AppHeader.vue';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('AppHeader.vue', () => {
  let getters;
  let store;  

  beforeEach(() => {
    getters = {
      isLoggedIn: () => false,
    };

    store = new Vuex.Store({
      getters
    });
  }); 

  it('should render AppHeader', () => {
    const wrapper = shallowMount(AppHeader, { store, localVue, stubs: ['router-link'] })
    expect(wrapper).toBeDefined();
  });
});
  
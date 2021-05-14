import {} from 'jest';
// Doc: https://vue-test-utils.vuejs.org/api/
import { createLocalVue, config, shallowMount } from '@vue/test-utils';
import MbIcon from '@/components/global/MbIcon.vue';
import NuxtStubs from '@/tests/nuxt-stubs';

const localVue = createLocalVue();

// Doc: https://vue-test-utils.vuejs.org/api/#config
config.showDeprecationWarnings = true;

describe('MbIcon.vue', () => {
  const wrapper = shallowMount(MbIcon, {
    localVue,
    propsData: {
      icon: 'calendar'
    },
    stubs: {
      ...NuxtStubs,
      FontAwesomeIcon: NuxtStubs.ClientOnly,
    }
  });

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('matches the snapshot', async () => {
    expect(wrapper).toMatchSnapshot();

    await wrapper.setProps({ type: 'solid' });
    expect(wrapper).toMatchSnapshot();

    await wrapper.setProps({ type: 'brand' });
    expect(wrapper).toMatchSnapshot();
  });
});

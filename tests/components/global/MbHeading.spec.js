import {} from 'jest';
// Doc: https://vue-test-utils.vuejs.org/api/
import { createLocalVue, config, shallowMount } from '@vue/test-utils';
import MbHeading from '@/components/global/MbHeading.vue';
import NuxtStubs from '@/tests/nuxt-stubs';

const localVue = createLocalVue();

// Doc: https://vue-test-utils.vuejs.org/api/#config
config.showDeprecationWarnings = true;

describe('MbHeading.vue', () => {
  const wrapper = shallowMount(MbHeading, {
    localVue,
    stubs: NuxtStubs
  });

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('matches the snapshot', async () => {
    expect(wrapper).toMatchSnapshot();

    await wrapper.setProps({ level: 1 });
    expect(wrapper).toMatchSnapshot();

    await wrapper.setProps({ level: 2, accent: true, primary: false, secondary: false });
    expect(wrapper).toMatchSnapshot();

    await wrapper.setProps({ level: 3, accent: false, primary: true, secondary: false });
    expect(wrapper).toMatchSnapshot();

    await wrapper.setProps({ level: 4, accent: false, primary: false, secondary: true });
    expect(wrapper).toMatchSnapshot();
  });
});

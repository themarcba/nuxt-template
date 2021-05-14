import {} from 'jest';
// Doc: https://vue-test-utils.vuejs.org/api/
import { createLocalVue, config, shallowMount } from '@vue/test-utils';
import MbBox from '@/components/global/MbBox.vue';
import NuxtStubs from '@/tests/nuxt-stubs';

const localVue = createLocalVue();

// Doc: https://vue-test-utils.vuejs.org/api/#config
config.showDeprecationWarnings = true;

describe('MbBox.vue', () => {
  const wrapper = shallowMount(MbBox, {
    localVue,
    stubs: NuxtStubs
  });

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

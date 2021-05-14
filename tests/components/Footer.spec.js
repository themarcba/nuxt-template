import {} from 'jest';
// Doc: https://vue-test-utils.vuejs.org/api/
import { createLocalVue, config, shallowMount } from '@vue/test-utils';
import Footer from '@/components/Footer.vue';
import NuxtStubs from '@/tests/nuxt-stubs';

const localVue = createLocalVue();

// Doc: https://vue-test-utils.vuejs.org/api/#config
config.showDeprecationWarnings = true;

describe('Footer.vue', () => {
  const wrapper = shallowMount(Footer, {
    localVue,
    stubs: {
      ...NuxtStubs,
      MbIcon: NuxtStubs.ClientOnly,
      MbLink: NuxtStubs.ClientOnly,
    }
  });

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

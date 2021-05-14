import {} from 'jest';
// Doc: https://vue-test-utils.vuejs.org/api/
import { createLocalVue, config, shallowMount } from '@vue/test-utils';
import MbParagraph from '@/components/global/MbParagraph.vue';
import NuxtStubs from '@/tests/nuxt-stubs';

const localVue = createLocalVue();

// Doc: https://vue-test-utils.vuejs.org/api/#config
config.showDeprecationWarnings = true;

describe('MbParagraph.vue', () => {
  const wrapper = shallowMount(MbParagraph, {
    localVue,
    stubs: NuxtStubs
  });

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('matches the snapshot', async () => {
    expect(wrapper).toMatchSnapshot();

    await wrapper.setProps({ secondary: true });
    expect(wrapper).toMatchSnapshot();
  });
});

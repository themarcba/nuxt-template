import {} from 'jest';
// Doc: https://vue-test-utils.vuejs.org/api/
import { createLocalVue, config, shallowMount } from '@vue/test-utils';
import MbLink from '@/components/global/MbLink.vue';
import NuxtStubs from '@/tests/nuxt-stubs';

const localVue = createLocalVue();

// Doc: https://vue-test-utils.vuejs.org/api/#config
config.showDeprecationWarnings = true;

describe('MbLink.vue', () => {
  const wrapper = shallowMount(MbLink, {
    localVue,
    stubs: NuxtStubs
  });

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('matches the snapshot', async () => {
    expect(wrapper).toMatchSnapshot();

    await wrapper.setProps({ boxed: true });
    expect(wrapper).toMatchSnapshot();

    await wrapper.setProps({ inverted: true });
    expect(wrapper).toMatchSnapshot();

    await wrapper.setProps({ success: true, danger: false, warning: false, info: false });
    expect(wrapper).toMatchSnapshot();

    await wrapper.setProps({ success: false, danger: true, warning: false, info: false });
    expect(wrapper).toMatchSnapshot();

    await wrapper.setProps({ success: false, danger: false, warning: true, info: false });
    expect(wrapper).toMatchSnapshot();

    await wrapper.setProps({ success: false, danger: false, warning: false, info: true });
    expect(wrapper).toMatchSnapshot();

    await wrapper.setProps({ href: 'https://google.com' });
    expect(wrapper).toMatchSnapshot();

    await wrapper.setProps({ to: { path: '/', query: { id: '123' } } });
    expect(wrapper).toMatchSnapshot();
  });
});

import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Comment from './../src/components/Comment.vue';

describe('Comment', () => {
  const Constructor = Vue.extend(Comment);
  const vm = new Constructor({
    propsData: {
      username: 'Brad',
      role: 'Author',
      photo: 'man.webp',
      body:
        'So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork',
      replies: 21,
      upvotes: 123,
      downvotes: 0,
      createdAt: 'Sat Mar 21 2020 16:40:02 GMT-0400'
    }
  }).$mount();

  it('renders the propsData correctly', () => {
    expect(vm.$el.querySelector('.card-title > h4').textContent).toEqual('Brad');
    expect(vm.$el.querySelector('.card-title .role').textContent).toEqual('Author');
    expect(vm.$el.querySelector('#upvotes').textContent).toEqual('^ 123');
    expect(vm.$el.querySelector('#downvotes').textContent).toEqual('^ 0');
  });

  it('removes the text-light class on hover', async () => {
    const component = shallowMount(Comment);

    expect(component.element.querySelector('#upvotes').classList.contains('text-light')).toBe(true);

    component.trigger('mouseover');
    await component.vm.$nextTick();

    expect(component.element.querySelector('#upvotes').classList.contains('text-light')).toBe(false);
  });

  it('clicking upvotes or downvotes should increment the count', async () => {
    const component = shallowMount(Comment);
    const upvotes = vm.$el.querySelector('#upvotes');

    expect(upvotes.textContent).toEqual('^ 123');

    component.find('#upvotes').trigger('click');
    await component.vm.$nextTick();

    expect(upvotes.textContent).toEqual('^ 124');
  });
});

import { shallowMount } from '@vue/test-utils';
import Comment from './../src/components/Comment.vue';

describe('Comment', () => {
  let component;

  it('renders the propsData correctly', () => {
    component = shallowMount(Comment, {
      propsData: {
        usernameProp: 'Brad',
        roleProp: 'Author',
        photoProp: 'man.webp',
        bodyProp:
          'So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork',
        repliesProp: 21,
        upvotesProp: 123,
        downvotesProp: 0,
        createdAtProp: new Date('Sat Mar 21 2020 16:40:02 GMT-0400')
      }
    });
    component.setData({
      username: 'Brad',
      role: 'Author',
      photo: 'man.webp',
      body:
        'So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork',
      replies: 21,
      upvotes: 123,
      downvotes: 0,
      createdAt: new Date('Sat Mar 21 2020 16:40:02 GMT-0400')
    });
    console.log("VM dot el", component.text());
    expect(component.find('.card-title > h4').text()).toEqual('Brad');
    expect(component.find('.card-title .role').text()).toEqual('Author');
    expect(component.find('#upvotes').text()).toEqual('^ 123');
    expect(component.find('#downvotes').text()).toEqual('˅ 0');
  });

  it('removes the text-light class on hover', async () => {
    component = shallowMount(Comment, {
      propsData: {
        usernameProp: 'Brad',
        roleProp: 'Author',
        photoProp: 'man.webp',
        bodyProp:
          'So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork',
        repliesProp: 21,
        upvotesProp: 123,
        downvotesProp: 0,
        createdAtProp: new Date('Sat Mar 21 2020 16:40:02 GMT-0400')
      }
    });

    expect(component.element.querySelector('#upvotes').classList.contains('text-light')).toBe(true);

    component.trigger('mouseover');
    await component.vm.$nextTick();

    expect(component.element.querySelector('#upvotes').classList.contains('text-light')).toBe(false);
  });

  it('clicking upvotes or downvotes should increment the count', async () => {
    component = shallowMount(Comment, {
      propsData: {
        usernameProp: 'Brad',
        roleProp: 'Author',
        photoProp: 'man.webp',
        bodyProp:
          'So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork',
        repliesProp: 21,
        upvotesProp: 123,
        downvotesProp: 0,
        createdAtProp: new Date('Sat Mar 21 2020 16:40:02 GMT-0400')
      }
    });
    const upvotes = component.element.querySelector('#upvotes');

    expect(upvotes.textContent).toEqual('^ 123');

    component.find('#upvotes').trigger('click');
    await component.vm.$nextTick();

    expect(upvotes.textContent).toEqual('^ 124');
  });
});

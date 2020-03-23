import { shallowMount } from '@vue/test-utils';
import Comment from './../src/components/Comment.vue';

describe('Comment.vue', () => {
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

    expect(component.find('.card-title > h4').text()).toEqual('Brad');
    expect(component.find('.card-title .role').text()).toEqual('Author');
    expect(component.find('#upvotes').text()).toEqual('123');
    expect(component.find('#downvotes').text()).toEqual('0');
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

    expect(upvotes.textContent).toEqual('123');

    component.find('#upvotes').trigger('click');
    await component.vm.$nextTick();

    expect(upvotes.textContent).toEqual('124');
  });

  describe('Date/time calculations', () => {
    let createdAt;
    let mockedNow;
    const PROPS = {
      usernameProp: 'Brad',
      roleProp: 'Author',
      photoProp: 'man.webp',
      bodyProp:
        'So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork',
      repliesProp: 21,
      upvotesProp: 123,
      downvotesProp: 0
    };

    beforeEach(() => {
      mockedNow = () => new Date(Date.now());
      jest
        .spyOn(global.Date, 'now')
        .mockImplementation(() =>
          new Date(1584980968567)
        );
    })

    it('returns "yesterday" if comment was made 1 day ago', () => {
      component = shallowMount(Comment, {
        propsData: {
          ...PROPS,
          createdAtProp: new Date('Sun Mar 22 2020 10:40:02 GMT-0400')
        }
      });
      createdAt = component.element.querySelector('#createdAt');

      expect(mockedNow()).toEqual(new Date(1584980968567));
      expect(createdAt.textContent).toContain('Yesterday');
    });

    it('returns number of days ago if comment was made more than 1 day ago', () => {
      component = shallowMount(Comment, {
        propsData: {
          ...PROPS,
          createdAtProp: new Date('Fri Mar 20 2020 16:40:02 GMT-0400')
        }
      });
      createdAt = component.element.querySelector('#createdAt');

      expect(mockedNow()).toEqual(new Date(1584980968567));
      expect(createdAt.textContent).toContain('2 days ago');
    });

    it('returns number of minutes if commented less than an hour ago', () => {

      component = shallowMount(Comment, {
        propsData: {
          ...PROPS,
          createdAtProp: new Date('Mon Mar 23 2020 11:40:02 GMT-0400')
        }
      });
      createdAt = component.element.querySelector('#createdAt');

      expect(mockedNow()).toEqual(new Date(1584980968567));
      expect(createdAt.textContent).toContain('49 minutes ago');
    });

    it('returns "just now" if commented less than 2 minutes ago', () => {

      component = shallowMount(Comment, {
        propsData: {
          ...PROPS,
          createdAtProp: new Date('Mon Mar 23 2020 12:28:00 GMT-0400')
        }
      });
      createdAt = component.element.querySelector('#createdAt');

      expect(mockedNow()).toEqual(new Date(1584980968567));
      expect(createdAt.textContent).toContain('Just now');
    });

    it('returns number of hours if commented less than 24hours ago', () => {
      component = shallowMount(Comment, {
        propsData: {
          ...PROPS,
          createdAtProp: new Date('Mon Mar 23 2020 08:40:02 GMT-0400')
        }
      });
      createdAt = component.element.querySelector('#createdAt');

      expect(mockedNow()).toEqual(new Date(1584980968567));
      expect(createdAt.textContent).toContain('3 hours ago');
    });

    it('returns "an hour ago" if commented more than an hour ago', () => {
      component = shallowMount(Comment, {
        propsData: {
          ...PROPS,
          createdAtProp: new Date('Mon Mar 23 2020 10:40:02 GMT-0400')
        }
      });
      createdAt = component.element.querySelector('#createdAt');

      expect(mockedNow()).toEqual(new Date(1584980968567));
      expect(createdAt.textContent).toContain('An hour ago');
    });
  })


});

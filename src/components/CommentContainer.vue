<template>
  <div>
    <Comment
      v-for="comment in comments"
      :key="comment.id"
      :username="comment.username"
      :role="comment.role"
      :body="comment.body"
      :replies="comment.replies"
      :upvotes="comment.upvotes"
      :downvotes="comment.downvotes"
      :created-at="comment.createdAt"
    />
  </div>
</template>

<script>
import Comment from './Comment.vue';
export default {
  name: 'CommentContainer',
  components: {
    Comment
  },
  data: () => {
    return {
      isHovering: true,
      comments: [
        {
        id: 0,
        username: 'Jesse',
        role: 'Author',
        body:
          'We could continue talking about the downfall of Taycan but I think there has already been too much chatter around that topic',
        replies: 124,
        upvotes: 1000,
        downvotes: 10,
        createdAt: 'Sat Mar 21 2020 17:40:02 GMT-0400'
      },
      {
        id: 1,
        username: 'Brad',
        role: 'Author',
        body:
          'So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork',
        replies: 21,
        upvotes: 123,
        downvotes: 0,
        createdAt: 'Sat Mar 21 2020 16:40:02 GMT-0400'
      }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

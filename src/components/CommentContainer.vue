<template>
  <div>
    <div>
      <div class="card-body">
        <div class="card-body-title">
          <h4>Name:</h4>
          <input placeholder="Enter Your name" type="text" v-model="currentUser.username" />
        </div>
        <textarea placeholder="Have a comment?" type="text" v-model="currentUser.body"></textarea>
        <button v-on:click="updateComments">Post Comment</button>
      </div>
    </div>

    <Comment
      v-for="comment in comments"
      :key="comment.id"
      :username-prop="comment.username"
      :role-prop="comment.role"
      :photo-prop="comment.photo"
      :body-prop="comment.body"
      :replies-prop-prop="comment.replies"
      :upvotes-prop="comment.upvotes"
      :downvotes-prop="comment.downvotes"
      :created-at-prop="comment.createdAt"
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
      currentUser: {
        id: 0,
        username: '',
        role: 'Author',
        photo: false,
        body: '',
        replies: 0,
        upvotes: 0,
        downvotes: 0,
        createdAt: Date.now()
      },
      comments: [
        {
          id: 0,
          username: 'Jesse',
          role: 'Author',
          photo: 'woman.webp',
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
          photo: 'man.webp',
          body:
            'So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork',
          replies: 21,
          upvotes: 123,
          downvotes: 0,
          createdAt: 'Sat Mar 21 2020 16:40:02 GMT-0400'
        }
      ]
    };
  },
  methods: {
    updateComments() {
      let newComment = { ...this.currentUser };
      newComment.id = this.comments.length;
      this.comments.unshift(newComment);
      return this.clearCuurrentUser();
    },
    clearCuurrentUser() {
      this.currentUser = {
        id: 0,
        username: '',
        role: 'Author',
        body: '',
        replies: 0,
        upvotes: 0,
        downvotes: 0,
        createdAt: Date.now()
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.75rem 1rem;
}

.card-body-title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0 1.5rem 0;
  h4 {
    text-transform: uppercase;
  }
  input {
    border: none;
    padding: 0 0.75rem;
    font-size: 1rem;
    font-family: "Avenir";
  }
}
textarea {
  border: 1px #ebe9e9 solid;
  border-radius: 4px;
  min-height: 2.5rem;
  padding: 0.75rem;
  align-self: stretch;
  font-size: 1rem;
  font-family: "Avenir";
  margin: 0 0 1.5rem 0;
}
button {
  background-color: #603b8c;
  border-radius: 0.25rem;
  padding: 0.5rem 1.5rem;
  color: #fff;
  font-size: 0.75rem;
  text-transform: uppercase;
  align-self: flex-end;
  border: none;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
</style>

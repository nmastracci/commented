<template>
  <div
    @mouseover="isHovering = false"
    @mouseout="isHovering = true"
    class="comment"
  >
    <div class="user">
      <div class="circle">
        <img v-if="hasPhoto" :src="'/img/'+photo" alt="profile picture of the user">
      </div>
    </div>
    <div>
      <div class="card-title">
        <h4>{{ username }}</h4>
        <h4 class="role">{{ role }}</h4>
        <i>&#183;</i>
        <h4 :class="[{ 'text-light': isHovering }, 'secondary-text']">
          {{ converDate(createdAt) }}
        </h4>
      </div>
      <p>{{ body }}</p>
      <div class="interactions">
        <span :class="[{ 'text-light': isHovering }, 'mr', 'secondary-text', 'pointer']">Reply</span>
        <span :class="[{ 'text-light': isHovering }, 'mr', 'secondary-text']">{{ replies }} Replies</span>
        <span
          id="upvotes"
          :class="[{ 'text-light': isHovering }, 'mr', 'secondary-text', 'pointer']"
          @click="upvotes += 1"
        >^ {{ upvotes }}</span>
        <span
          id="downvotes"
          :class="[{ 'text-light': isHovering }, 'mr', 'secondary-text', 'pointer']"
          @click="downvotes += 1"
        >&#709; {{ downvotes }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
      usernameProp: {
        type: String,
        required: true
      },
      roleProp: {
        type: String,
        required: true
      },
      photoProp: {
        type: String,
        required: true
      },
      bodyProp: {
        type: String,
        required: true
      },
      repliesProp: {
        type: Number,
        required: true
      },
      upvotesProp: {
        type: Number,
        required: true
      },
      downvotesProp: {
        type: Number,
        required: true
      },
      createdAtProp: {
        type: Date,
        required: true
      }
    },
  data: () => {
    return {
      isHovering: true,
      username: '',
      role: '',
      photo: '',
      body: '',
      replies: 0,
      upvotes: 0,
      downvotes: 0,
      createdAt: ''
    };
  },
  created() {
    this.username = this.usernameProp;
    this.role = this.roleProp;
    this.photo = this.photoProp;
    this.body = this.bodyProp;
    this.upvotes = this.upvotesProp;
    this.downvotes = this.downvotesProp;
    this.createdAt = this.createdAtProp;
  },
  methods: {
    converDate: function(createdAt) {
      const commentDate = new Date(createdAt);

      const timeDifferenceInMinutes = Math.floor(
        (Date.now() - commentDate) / 1000 / 60
      );
      if (timeDifferenceInMinutes < 60) {
        return `${timeDifferenceInMinutes} minutes ago`;
      }
      if (timeDifferenceInMinutes > 60) {
        if (timeDifferenceInMinutes / 60 > 24) {
          return 'more than a day ago';
        }
        return `${Math.floor(timeDifferenceInMinutes / 60)} hours ago`;
      }
      return createdAt;
    },
    hasPhoto() {
      return this.photo;
    }
  }
};
</script>

<style lang="scss" scoped>
.comment {
  border-top: 0.0625rem solid #e9ecef;
  border-bottom: 0.0625rem solid #e9ecef;
  display: grid;
  grid-template-columns: 1fr 7fr;
  grid-template-rows: 1fr;
  text-align: left;
  padding: 0.75rem;
  &:hover {
    color: #212529;
  }
}
.user {
  min-width: 3rem;
}
.interactions {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    color: #212529;
  }
}
.secondary-text {
  text-transform: uppercase;
  font-size: 0.75rem;
  &:hover {
    color: #212529;
  }
}
.text-light {
  color: #e9ecef;
}
.mr {
  margin-right: 1.25rem;
}
.role {
  background-color: #212529;
  border-radius: 2rem;
  padding: 0.125rem 0.5rem;
  color: #fff;
  font-size: 0.75rem;
  text-transform: uppercase;
}
.circle {
  width: 3rem;
  height: 3rem;
  background: #d9a967;
  // #ff7f00
  border-radius: 50%;

  img {
    @extend .circle;
    background:none;
    object-fit: cover;
  }
}
.card-title {
  @extend .interactions;
  h4 {
    margin-right: 0.5rem;
  }
  i {
    margin-right: 0.5rem;
    font-size: 1.5rem;
    color: #e9ecef;
  }
}
.pointer {
  cursor: pointer;
}
</style>

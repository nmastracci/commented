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
        <h4 id="createdAt" :class="[{ 'text-light': isHovering }, 'secondary-text']">
          {{ converDateToRelativeTime(createdAt) }}
        </h4>
      </div>
      <p>{{ body }}</p>
      <div class="interactions">
        <span :class="[{ 'text-light': isHovering }, 'mr', 'secondary-text', 'pointer']">Reply</span>
        <span :class="[{ 'text-light': isHovering }, 'mr', 'secondary-text', 'pointer']">{{ replies }} Replies</span>
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
    this.replies = this.repliesProp;
    this.upvotes = this.upvotesProp;
    this.downvotes = this.downvotesProp;
    this.createdAt = this.createdAtProp;
  },
  methods: {
    converDateToRelativeTime: function(createdAt) {
      const timeDifferenceInMinutes = Math.floor(
        (Date.now() - createdAt) / 1000 / 60
      );

      if (timeDifferenceInMinutes > 60) {
        const timeDifferenceInHours = Math.floor(timeDifferenceInMinutes / 60);

        if (timeDifferenceInHours > 24) {
          const timedifferenceInDays = Math.floor(timeDifferenceInHours/24);

          return timedifferenceInDays === 1 ? 'Yesterday' : `${timedifferenceInDays} days ago`;
        }
        return timeDifferenceInHours > 1 ? `${timeDifferenceInHours} hours ago` : 'An hour ago';
      }
      return timeDifferenceInMinutes > 1 ? `${timeDifferenceInMinutes} minutes ago` : 'Just now';
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
  p {
    margin: 0.25rem 0 0.75rem;
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
  color: #adb5bd;
}
.mr {
  margin-right: 1.25rem;
}
.role {
  background-color: #212529;
  border-radius: 2rem;
  padding: 0.125rem 0.5rem;
  color: #fff;
  font-size: 0.5rem;
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
  &:first-child {
    font-size: 1.1rem;
  }
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

<template>
  <div
    @mouseover="isHovering = false"
    @mouseout="isHovering = true"
    class="comment"
  >
    <div class="user">
      <div class="circle"></div>
    </div>
    <div>
      <div class="card-title">
        <h4 class="">Brad</h4>
        <h4 class=" tag">Author</h4>
        <i>&#183;</i>
        <h4 :class="[{ 'text-light': isHovering }, 'secondary-text']">
          2 minutes ago
        </h4>
      </div>
      <p>
        So what the German automaker is likey to focus on today is the bigger
        picture. Thishi will be the first time we see the Taycan free from any
        prototype bodywork.
      </p>
      <div class="interactions">
        <span :class="[{ 'text-light': isHovering }, 'mr', 'secondary-text']"
          >Reply</span
        >
        <span :class="[{ 'text-light': isHovering }, 'mr', 'secondary-text']"
          >21 Replies</span
        >
        <span :class="[{ 'text-light': isHovering }, 'mr', 'secondary-text']"
          >^ 123</span
        >
        <span :class="[{ 'text-light': isHovering }, 'mr', 'secondary-text']"
          >^ 0</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  data: () => {
    return {
      isHovering: true,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.tag {
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
  background: #ff7f00;
  // #d9a967
  border-radius: 50%;
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
</style>
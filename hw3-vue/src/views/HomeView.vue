<template>
  <div class="home">
    <h1>Welcome to PostIT!</h1>
    <p>This is the homepage. Use the navigation to sign up.</p>
  </div>

  <main>
    <div id="sidebar-left">
      <p>sidebar-left</p>
    </div>
    <div id="main-content">
      <post v-for="post in postsList" :key="post.id" :post="post"></post>
      <button class="reset-likes" v-on:click="ResetLikes">Reset Likes</button>
    </div>
    <div id="sidebar-right">
      <p>sidebar-right</p>
    </div>
  </main>


</template>

<script>
import Post from "@/components/Post.vue";
export default {
  name: "HomeView",
  components: {
    Post,
  },
  data: function () {
    return {
    }
  },
  methods: {
    ResetLikes: function () {
      this.$store.dispatch("ResetLikesAct");
    },
  },
  computed: {
    postsList() {
      return this.$store.state.postsList;
    }
  }
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 5rem;
}
</style>

<style>
main {
  display: flex;
  flex: 1;
  margin: 0 10px;
}

#main-content {
  flex: 1;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  margin: 30px;
}

#sidebar-left,
#sidebar-right {
  background: #d9d9d9;
  border: 1px solid #c6c6c6;
  padding: 20px;
  border-radius: 10px;
  color: #2b2b2b;
  width: 200px;
  min-height: 400px;
}

.reset-likes {
  display: block;
  color: white;
  border-width: 1px;
  padding: 1rem;
  background-color: #42a36b;
  border-radius: 1rem;
  margin: 0.75rem auto 0;
  transition: background-color 200ms ease, color 200ms ease;
  will-change: background-color, color;
}

.reset-likes:hover {
  color: #35495e;
  background-color: #54c77f;
  cursor: grab;
}

</style>

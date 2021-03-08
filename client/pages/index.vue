<template>
  <div class="menn-container">
    <div>
      <Logo />
      <div class="links">
        <a
          href="https://github.com/seunafara/nuxt-express-boilerplate.git"
          target="_blank"
          rel="noopener noreferrer"
          class="button button--green"
        >
          GitHub
        </a>
        <button
          v-if="authenticated"
          @click.prevent="logOut"
          rel="noopener noreferrer"
          class="button button--grey"
        >
          Logout
        </button>
        <button
          v-else
          @click.prevent="$router.push('auth/login')"
          rel="noopener noreferrer"
          class="button button--grey"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Welcome | MENN",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Don't rewrite codes over and over. Just clone this MENN boilerplate and kick off your project"
        }
      ]
    };
  },
  methods: {
    async logOut() {
      try {
        await this.$auth.logout();
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>

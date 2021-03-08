<template>
  <div class="as-menn-auth-cover">
    <Logo />
    <form @submit.prevent="loginUser" class="as-menn-auth-container">
      <h2>Login</h2>
      <!-- <div v-if="error">
        <Error v-for="err in error" :key="err.param" :msg="err.msg" />
      </div> -->
      <div class="as-menn-form-group">
        <label for="auth_email">Email Address</label>
        <input
          type="email"
          id="auth_email"
          v-model="form.email_address"
          class="as-menn-form-input"
        />
      </div>
      <div class="as-menn-form-group">
        <label for="auth_password">Password</label>
        <input
          type="password"
          id="auth_password"
          v-model="form.password"
          class="as-menn-form-input"
        />
      </div>
      <div class="as-menn-form-group">
        <button class="as-menn-primary-btn" type="submit">Login</button>
      </div>
    </form>
    <div class="as-menn-existing-user-box">
      <p>Not a user?</p>
      <nuxt-link to="/auth/register">Register</nuxt-link>
    </div>
    <Copyright />
  </div>
</template>

<script>
import Error from "../../components/Errors";
export default {
  middleware: "guest",
  components: {
    Error
  },
  data() {
    return {
      form: {
        email_address: "obavigo@gmail.com",
        password: "12345678"
      }
      // error: []
    };
  },
  methods: {
    async loginUser() {
      try {
        await this.$auth.login({ data: this.form });
        this.$router.push(
          this.$route.query.redirect ? this.$route.query.redirect : "/"
        );
      } catch (error) {
        console.log(error);
        return;
      }
    }
  }
};
</script>

<style></style>

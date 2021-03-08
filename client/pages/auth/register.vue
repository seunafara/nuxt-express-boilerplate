<template>
  <div class="as-menn-auth-cover">
    <Logo />
    <form @submit.prevent="registerUser" class="as-menn-auth-container">
      <h2>Create an Account</h2>
      <div v-if="error">
        <Error v-for="err in error" :key="err.param" :msg="err.msg" />
      </div>
      <div class="as-menn-form-group">
        <label for="auth_full_name">Full Name</label>
        <input
          type="text"
          id="auth_full_name"
          v-model="form.full_name"
          class="as-menn-form-input"
        />
      </div>
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
        <button class="as-menn-primary-btn" type="submit">Sign Up</button>
      </div>
    </form>
    <div class="as-menn-existing-user-box">
      <p>Already a user?</p>
      <nuxt-link to="/auth/login">Log in</nuxt-link>
    </div>
    <Copyright />
  </div>
</template>

<script>
import Error from "../../components/Errors";
export default {
  head() {
    return {
      title: "Register | MENN",
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
  middleware: "guest",
  components: {
    Error
  },
  data() {
    return {
      form: {
        full_name: "Afara Seun",
        password: "12345678",
        email_address: "obavigo@gmail.com"
      },
      error: []
    };
  },
  methods: {
    async registerUser() {
      try {
        await this.$axios.post("/auth/register", this.form);
      } catch (error) {
        console.log("error");
        return;
      }

      this.$auth.login({ data: this.form });

      this.$router.push({ name: "index" });
    }
  }
};
</script>

<style></style>

<template>
  <main class="center-wrapper">
    <div class="signup-box">
      <h2>Welcome to PostIT</h2>
      <p>Create an Account</p>

      <form @submit.prevent="handlesignup">
        <input type="text" v-model="username" placeholder="Username" required />
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />

        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

        <button type="submit">Sign Up</button>
      </form>

      <router-link to="/signup">Already have an account? Log in</router-link>
    </div>
  </main>
</template>

<script>
export default {
  name: "signupView",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    handlesignup() {
      const errors = [];

      if (this.password.length < 8 || this.password.length > 15)
        errors.push("Must be 8–15 characters long.");
      if (!/[A-Z]/.test(this.password))
        errors.push("Needs at least one uppercase letter.");
      if ((this.password.match(/[a-z]/g) || []).length < 2)
        errors.push("Needs at least two lowercase letters.");
      if (!/\d/.test(this.password))
        errors.push("Needs at least one number.");
      if (!/^[A-Z]/.test(this.password))
        errors.push("Must start with an uppercase letter.");
      if (!/_/.test(this.password))
        errors.push("Must include '_'.");

      if (errors.length) {
        this.errorMessage = "The password is not valid – " + errors.join(" ");
      } else {
        this.errorMessage = "";
        alert("signup successful!");
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
/*---------------------*/
.center-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 50px); /* subtract navbar height */
}

/* signup Box */
.signup-box {
  background-color: #e0e0e0;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
}

.signup-box h2 {
  margin-bottom: 10px;
}

.signup-box a {
  color: #00aaff;
  display: block;
  margin: 5px 0;
}

.signup-box a ~ p {
  font-size: medium;
}

.signup-box input[type="email"],
.signup-box input[type="password"],
.signup-box input[type="text"] {
  width: 65%;
  padding: 8px;
  margin: 6px 0;
  border: 1px solid #ccc;
  border-radius: 3px;
}





/*-------------------*/

.signup-box {
  max-width: 400px;
  margin: 3rem auto;
  padding: 2rem;
}
.error {
  color: red;
  font-size: 0.9em;
}

.signup-box button {
  width: 70%;
  padding: 8px;
  margin-top: 10px;
  background-color: #00aaff;
  border: none;
  border-radius: 3px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.signup-box button:hover {
  background-color: #008fcc;
}

</style>

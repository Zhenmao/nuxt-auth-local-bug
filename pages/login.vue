<template>
  <form @submit.prevent="submit">
    <p>Sign-In:</p>

    <button>Username and Password</button>
  </form>
</template>
<script setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/",
  },
});
const { signIn } = useAuth();
const submit = async () => {
  await signIn("credentials", {
    username: "kminchelle",
    password: "0lelplR",
    redirect: false,
  });
  navigateTo("/");
};
</script>

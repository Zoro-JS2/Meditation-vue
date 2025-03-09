<template>
  <div>
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/about">О нас</router-link> |
      <router-link to="/service">Услуги</router-link> |
      <router-link to="/contact">Контакты</router-link>
      <span class="login-icon" @click="showLogin = true">👤</span>
      <LoginDialog
        v-if="showLogin"
        :show="showLogin"
        @update:show="showLogin = $event"
      />
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
import LoginDialog from './components/LoginDialog.vue';
export default {
  data() {
    return { showLogin: false };
  },
  components: { LoginDialog },
};
</script>

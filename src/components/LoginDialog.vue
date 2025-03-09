<template>
  <div v-if="show" class="dialog-overlay" @click.self="close">
    <div class="dialog">
      <!-- Кнопки для переключения между входом и регистрацией -->
      <button @click="setLogin">Вход</button>
      <button @click="setRegister">Регистрация</button>

      <!-- Форма для входа -->
      <div v-if="isLogin">
        <input type="text" placeholder="Логин" v-model="user.name" />
        <input type="password" placeholder="Пароль" v-model="user.password" />
      </div>

      <!-- Форма для регистрации -->
      <div v-if="!isLogin">
        <input type="text" placeholder="Имя" v-model="user.name" />
        <input type="email" placeholder="Email" v-model="user.email" />
        <input type="password" placeholder="Пароль" v-model="user.password" />
      </div>

      <button @click="save">Сохранить</button>
      <button @click="close">Закрыть</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['show'],
  data() {
    return {
      user: { name: '', password: '', email: '' },
      isLogin: true, // Состояние по умолчанию — форма входа
    };
  },
  methods: {
    // Метод для переключения на форму входа
    setLogin() {
      this.isLogin = true;
    },
    // Метод для переключения на форму регистрации
    setRegister() {
      this.isLogin = false;
    },
    // Метод для сохранения данных (например, регистрация)
    save() {
      if (this.isLogin) {
        // Логика для входа
        console.log('Вход', this.user);
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        // Логика для регистрации
        localStorage.setItem('user', JSON.stringify(this.user));
        console.log('Регистрация', this.user);
      }
      this.$emit('update:show', false); // Закрыть диалог
    },
    close() {
      this.$emit('update:show', false); // Закрыть диалог
    },
  },
};
</script>

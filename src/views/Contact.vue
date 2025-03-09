<template>
  <div class="content">
    <h1>Контакты</h1>
    <p>
      Свяжитесь с нами по указанным контактным данным или оставьте сообщение
      через форму обратной связи.
    </p>
    <div class="contact-details">
      <p><strong>Телефон:</strong> +380 44 123 4567</p>
      <p><strong>Email:</strong> info@company.com</p>
      <p><strong>Адрес:</strong> Киев, Украина</p>
    </div>
    <form @submit.prevent="submitForm">
      <label for="name">Имя:</label>
      <input type="text" id="name" v-model="form.name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="form.email" required />

      <label for="message">Сообщение:</label>
      <textarea id="message" v-model="form.message" required></textarea>

      <button type="submit">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  mounted() {
    this.loadMap();
  },
  methods: {
    submitForm() {
      alert('Ваше сообщение отправлено!');
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    },
  },
};
</script>

<style scoped>
.content {
  text-align: center;
}
.contact-details {
  margin-bottom: 20px;
}
form {
  display: flex;
  text-align: center;
  flex-direction: column;
  max-width: 400px;
}
label {
  margin-top: 10px;
}
input,
textarea {
  padding: 8px;
  margin-top: 5px;
}
button {
  margin-top: 15px;
  padding: 10px;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
}
#map {
  height: 300px;
  margin-top: 20px;
}
</style>

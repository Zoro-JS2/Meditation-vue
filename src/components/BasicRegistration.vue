<template>
  <div class="registration-form">
    <h2>Форма подачи заявки</h2>
    <form @submit.prevent="submitForm">
      <label for="name">ФИО:</label>
      <input type="text" id="name" v-model="form.name" required />

      <label for="phone">Телефон:</label>
      <input type="tel" id="phone" v-model="form.phone" required />

      <label for="email">Почта:</label>
      <input type="email" id="email" v-model="form.email" required />

      <label for="city">Город:</label>
      <select id="city" v-model="form.city">
        <option value="Киев">Киев</option>
        <option value="Львов">Львов</option>
        <option value="Одесса">Одесса</option>
        <option value="Харьков">Харьков</option>
        <option value="Днепр">Днепр</option>
      </select>

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
        phone: '',
        email: '',
        city: 'Киев',
      },
    };
  },
  methods: {
    async submitForm() {
      console.log('Форма отправлена:', this.form);

      try {
        // Отправка POST-запроса с данными формы на сервер
        const response = await fetch('http://localhost:3000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.form),
        });

        if (response.ok) {
          alert('Заявка отправлена!');
          this.resetForm();
        } else {
          alert('Ошибка при отправке заявки');
        }
      } catch (error) {
        console.error('Ошибка:', error);
        alert('Ошибка при отправке заявки');
      }
    },
    resetForm() {
      this.form = {
        name: '',
        phone: '',
        email: '',
        city: 'Киев',
      };
    },
  },
};
</script>

<style scoped>
.registration-form {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #2c3e50;
}
.registration-form label {
  display: block;
  margin-top: 10px;
}
.registration-form input,
.registration-form select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}
.registration-form button {
  margin-top: 15px;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}
</style>

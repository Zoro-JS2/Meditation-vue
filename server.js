import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(
  cors({
    origin: 'http://localhost:5173', // Указываем точный адрес вашего фронтенда
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
);

app.use(bodyParser.json());

// Настройка транспортира для отправки письма
const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: true, // Это означает, что мы используем STARTTLS, а не SSL
  auth: {
    user: 'demagedzuke@outlook.com', // Ваш почтовый адрес
    pass: 'waumjbjehyfpkmxh', // Ваш App Password
  },
});

// Обработчик запроса на отправку формы
app.post('/send-email', (req, res) => {
  const { name, phone, email, city } = req.body;

  const mailOptions = {
    from: 'demagedzuke@outlook.com',
    to: 'dema2000g@gmail.com',
    subject: 'Новая заявка на медитацию',
    text: `
      Имя: ${name}
      Телефон: ${phone}
      Email: ${email}
      Город: ${city}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Ошибка при отправке письма:', error); // Логируем ошибку на сервере
      return res
        .status(500)
        .send('Ошибка при отправке письма: ' + error.message); // Отправляем подробное сообщение об ошибке
    }
    console.log('Письмо отправлено:', info);
    res.status(200).send('Заявка отправлена');
  });
});

app.listen(port, () => {
  console.log(`Сервер работает на порту ${port}`);
});

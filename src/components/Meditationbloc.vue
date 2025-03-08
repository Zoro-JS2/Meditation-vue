<template>
  <div class="meditation-blocks">
    <div class="block">
      <img src="/src/views/images/image.png" alt="Медитация 1" />
      <p>
        Медитация помогает расслабиться и очистить разум. Она позволяет нам
        лучше понимать себя, находить гармонию и баланс. Практика медитации
        снижает стресс и помогает улучшить общее самочувствие.
      </p>
    </div>
    <div class="block">
      <img src="/src/views/images/home2.jpg" alt="Медитация 2" />
      <p>
        Дыхательные практики улучшают концентрацию и самочувствие. Они помогают
        регулировать уровень энергии, способствуют снижению тревожности и
        позволяют достичь внутреннего спокойствия.
      </p>
    </div>
    <div class="block">
      <img src="/src/views/images/home3.jpg" alt="Медитация 3" />
      <p>
        Регулярная медитация способствует душевному равновесию, укрепляет
        психическое здоровье и помогает улучшить качество сна. Практикуя
        медитацию ежедневно, можно развить осознанность и внутреннюю гармонию.
      </p>
    </div>
  </div>
</template>
<style scoped>
.meditation-blocks {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 2%;
}
.block {
  text-align: center;
  padding: 20px;
  border-radius: 15px;
  background-color: #2c3e50;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
}
.block p {
  color: #ffffff;
}
.block:hover {
  cursor: pointer;
  transform: scale(1.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.block img {
  width: 100%;
  border-radius: 10px;
}
.block p {
  font-size: 18px;
  margin-top: 10px;
}
</style>

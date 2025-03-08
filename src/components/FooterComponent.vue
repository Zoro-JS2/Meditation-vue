<template>
  <footer class="footer">
    <div class="footer-content">
      <img
        src="/src/views/images/logo.png"
        alt="Логотип компании"
        class="logo"
      />
      <div class="contacts">
        <p>Телефон: +380 44 123 4567</p>
        <p>Email: info@company.com</p>
        <p>Адрес: Киев, Украина</p>
      </div>
      <div class="links">
        <router-link to="/about">О компании</router-link>
        <router-link to="/services">Услуги</router-link>
      </div>
    </div>
    <div id="map"></div>
  </footer>
</template>

<script>
export default {
  mounted() {
    this.loadMap();
  },
  methods: {
    loadMap() {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAuY5uJanHZ_5zWrWEv7FXSDaxKW6OWUOI&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      window.initMap = this.initMap;
    },
    initMap() {
      new google.maps.Map(document.getElementById('map'), {
        center: { lat: 50.4501, lng: 30.5234 },
        zoom: 14,
      });
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
}
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
.logo {
  height: 50px;
}
.contacts p,
.links a {
  color: white;
  text-decoration: none;
}
#map {
  height: 300px;
  margin-top: 20px;
}
</style>

<template>
  <div>
    <MeditationInfo />
    <Meditationbloc />
    <BasicRegistration />
    <FooterComponent />
  </div>
</template>
<script>
import MeditationInfo from '../components/MeditationInfo.vue';
import Meditationbloc from '../components/Meditationbloc.vue';
import BasicRegistration from '../components/BasicRegistration.vue';
import FooterComponent from '../components/FooterComponent.vue';
export default {
  components: {
    MeditationInfo,
    Meditationbloc,
    BasicRegistration,
    FooterComponent,
  },
};
</script>

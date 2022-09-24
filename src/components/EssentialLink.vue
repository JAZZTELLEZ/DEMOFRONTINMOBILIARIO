<template>
  <q-item clickable tag="a" @click="navegar">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
export interface EssentialLinkProps {
  title?: string;
  caption?: string;
  link?: string;
  icon?: string;
}
import { useRouter } from 'vue-router';

const route = useRouter()
const props = withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  link: '#',
  icon: '',
});



async function navegar() {

  route.push({ name: props.link })
}

</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Project Manager </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-primary" dark>
      <q-img src="src/assets/images/logo.png" class="q-my-xl q-mx-md" style="width: 85%" />
      <hr style="border-style: dashed; color: lightgrey" class="q-mb-xl" />

      <q-list>
        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" class="q-my-md" />
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';
// import { useRoute } from 'vue-router';

const linksList: EssentialLinkProps[] = [
  {
    title: 'Inventory',
    caption: 'Check what you have in stock',
    icon: 'inventory',
    link: '/inventory',
  },
  {
    title: 'Daily Projects',
    caption: "See today's needed equipement",
    icon: 'build',
    link: '/daily-equipment',
  },
  {
    title: 'Upload Receipts',
    caption: 'Add new purchased receipts',
    icon: 'upload',
    link: '/upload-receipts',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

// const route = useRoute();
</script>

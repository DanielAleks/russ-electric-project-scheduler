<template>
  <q-card class="my-card">
    <q-card-section class="bg-primary text-white">
      <div class="text-h6">{{ props.name }}</div>
      <div class="text-subtitle2">Team {{ props.team }}</div>
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
      <q-btn flat icon="edit" color="primary">Edit</q-btn>
      <q-btn flat icon="delete" color="red">Delete</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InventoryCard',
  props: {
    name: {
      type: String,
      required: false,
      default: 'Unnamed Item',
    },
    team: {
      type: String,
      default: 'All',
    },
  },
  setup(props) {
    return {
      props,
    };
  },
});
</script>

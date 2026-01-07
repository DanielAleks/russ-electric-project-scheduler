<template>
  <q-page class="column">
    <div class="q-mx-xl">
      <h4>Inventory Page</h4>
      <hr />

      <div class="row q-mt-xl">
        <!-- <InventoryCard :name="item.name" :team="item.team" /> -->
        <q-input filled icon="remove" label="Search" v-model="state.search"
          ><template #append><q-icon name="search" /></template
        ></q-input>
        <InventoryTable title="" name="Name" team="Team" class="q-my-md" style="width: 100%" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
// import InventoryCard from 'components/inventory/InventoryCard.vue';
import InventoryTable from 'components/inventory/InventoryTable.vue';
import { reactive } from 'vue';

export default {
  components: {
    // InventoryCard,
    InventoryTable,
  },
  setup() {
    const state = reactive({
      search: '',
    });
    const inventoryItems = [
      { id: 1, name: 'x34 Light Switches', team: 'Ruslan' },
      { id: 2, name: 'x3 Light Switches', team: 'Ivan' },
    ];

    return {
      state,
      inventoryItems,
    };
  },
};
</script>

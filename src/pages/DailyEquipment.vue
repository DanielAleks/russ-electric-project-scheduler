<template>
  <q-page class="column">
    <div class="q-mx-xl">
      <h4>Daily Equipment Page</h4>
      <hr />

      <div class="row q-mt-xl">
        <div v-for="item in inventoryItems" :key="item.id" style="width: 100%">
          <!-- <InventoryCard :name="item.name" :team="item.team" /> -->
          <InventoryTable
            :title="item.team"
            :name="item.name"
            :team="item.team"
            selectable
            class="q-my-md"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
// import InventoryCard from 'components/inventory/InventoryCard.vue';
import InventoryTable from 'components/inventory/InventoryTable.vue';

export default {
  components: {
    // InventoryCard,
    InventoryTable,
  },
  setup() {
    const inventoryItems = [
      { id: 1, name: 'x34 Light Switches', team: 'Ruslan' },
      { id: 2, name: 'x3 Light Switches', team: 'Ivan' },
    ];

    return {
      inventoryItems,
    };
  },
};
</script>

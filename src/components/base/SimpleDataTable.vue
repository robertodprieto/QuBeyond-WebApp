<script setup lang="ts">
const props = defineProps<{
  headers: Array<any>;
  rows: any[] | undefined;
  allowPrevPage: boolean;
  allowNextPage: boolean;
}>();

const emit = defineEmits(['prevPage', 'nextPage', 'sortItems']);

const prevPage = () => {
  emit('prevPage');
};

const nextPage = () => {
  emit('nextPage');
};

const sortItems = (key: string) => {
  emit('sortItems', key);
};
</script>

<template>
  <div class="data-table-container">
    <table class="data-table">
      <thead>
        <tr>
          <th v-for="(header, index) in props.headers" :key="index">
            {{ header.value }}
            <span class="sort-item" v-if="header.sortable" @click="sortItems(header.key)">
              &darr; &uarr;</span
            >
          </th>
        </tr>
      </thead>
      <tbody v-if="props.rows?.length">
        <template v-for="(row, rowIndex) in props.rows" :key="rowIndex">
          <tr>
            <td v-for="(cell, cellIndex) in row" :key="cellIndex">
              <template v-if="!Array.isArray(cell)">
                <span v-tooltip :title="cell">{{ cell }}</span>
              </template>

              <template v-else>
                <span
                  class="multi-row-item"
                  v-tooltip
                  :title="data"
                  v-for="(data, dataIndex) in cell"
                  :key="dataIndex"
                >
                  {{ data }}
                </span>
              </template>
            </td>
          </tr>
        </template>
      </tbody>
      <tbody class="no-items">
        <tr>
          <td :colspan="props.headers.length">No items to show</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="data-table-footer">
    <button :disabled="!allowPrevPage" @click="prevPage">Prev Page</button>
    <button :disabled="!allowNextPage" @click="nextPage">Next Page</button>
  </div>
</template>

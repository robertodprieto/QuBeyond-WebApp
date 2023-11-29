<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { fetchPlanets } from '@/api/requests';
import { FETCH_PLANETS_INITIAL_ROUTE } from '@/api/apiRoutes';
import { sortArray } from '@/utils/array';
import SimpleDataTable from '@/components/base/SimpleDataTable.vue';
import Spinner from '@/components/base/Spinner.vue';
import {
  type PlanetsResponse,
  type PlanetsResults,
  PlanetsDataTableHeaders,
  SORTING_ORDER
} from '@/models/business-models';

let items = ref<PlanetsResults[] | undefined>();
let planets = ref<PlanetsResponse | undefined>();

let sortingTrack = {
  key: '',
  order: SORTING_ORDER.NoOrder
};

let isLoading = ref(false);

onMounted(() => {
  getPlanets(FETCH_PLANETS_INITIAL_ROUTE);
});

const getPlanets = async (url: string) => {
  isLoading.value = true;
  planets.value = await fetchPlanets(url);
  isLoading.value = false;
  items.value = planets.value?.results;
};

const prevPage = async () => {
  if (planets.value && planets.value.previous) {
    getPlanets(planets.value.previous);
  }
};

const nextPage = async () => {
  if (planets.value && planets.value.next) {
    getPlanets(planets.value.next);
  }
};

const sortItems = (key: keyof PlanetsResults) => {
  if (items.value) {
    const order =
      key !== sortingTrack.key ||
      sortingTrack.order === SORTING_ORDER.NoOrder ||
      sortingTrack.order === SORTING_ORDER.Descending
        ? SORTING_ORDER.Ascending
        : SORTING_ORDER.Descending;
    items.value = sortArray<PlanetsResults>(items.value, key, order);
    sortingTrack.key = key;
    sortingTrack.order = order;
  }
};

const allowPrevPage = computed(() => {
  return !!planets.value?.previous;
});

const allowNextPage = computed(() => {
  return !!planets.value?.next;
});
</script>

<template>
  <div class="planets-list">
    <h1>Planets List</h1>
    <SimpleDataTable
      :headers="PlanetsDataTableHeaders"
      :rows="items"
      :allowPrevPage="allowPrevPage"
      :allowNextPage="allowNextPage"
      @prev-page="prevPage"
      @next-page="nextPage"
      @sort-items="sortItems"
    />
    <Spinner v-if="isLoading" />
  </div>
</template>

<template>
  <div class="about">
    <h1>Le total des counts : {{ counter }}</h1>
  </div>
</template>
<script>
import { GET_COUNTER } from "../store/mutation-types";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const counter = computed(() => store.getters[GET_COUNTER]);
    return {
      counter,
    };
  },
};
</script>

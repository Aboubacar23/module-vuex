<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <h2>Increment:</h2>
    </div>
    <div>Counter = {{ counter }}</div>
    <button class="btn btn-primary" @click="decrement">-</button>
    <button class="btn btn-primary" @click="increment">+</button>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  DE_SET_COUNTER,
  GET_COUNTER,
  SET_COUNTER,
} from "../store/mutation-types";
import { mapActions, useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Home",

  setup() {
    const store = useStore();
    const counter = computed(() => store.getters[GET_COUNTER]);
    return {
      counter,
      ...mapActions({
        increment: SET_COUNTER,
        decrement: DE_SET_COUNTER,
      }),
    };
  },
};
</script>
<style scoped>
button {
  padding: 10px;
  margin: 10px;
}
</style>
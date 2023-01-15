<template>
  <div class="base-input">
    <span class="label">{{ props.label }}</span>
    <input
      class="input"
      type="text"
      v-model="text"
      :style="{ width: props.width }"
      :placeholder="props.placeholder"
      @input="onInput"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  label: String,
  placeholder: String,
});
const emit = defineEmits(["input"]);

const text = ref("");

function onInput() {
  emit("input", text.value);
}
</script>

<style lang="scss" scoped>
.base-input {
  .label {
    color: #3cbc8d;
  }
  .input {
    width: 200px;
    padding: 10px;
    background-color: #3cbc8d;
    color: aliceblue;
    border-radius: 10px;
    outline: 0;
    border: 0;
    margin-left: 5px;
  }
}
</style>

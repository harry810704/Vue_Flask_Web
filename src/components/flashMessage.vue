<template>
  <div
    class="alert alert-dismissible fade show"
    :style="{ background: color }"
    role="alert"
  >
    <strong>{{ text }}</strong>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
</template>
<script>
export default {
  name: 'flashMessage',
  props: {
    text: String,
    color: String,
  },
};
</script>

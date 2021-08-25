<template>
  <div>
    <center>
      <img :src="{ path }" :alt="{ name }" />
    </center>
  </div>
</template>

<script>
export default {
  name: 'photo',
  props: {
    path: String,
    name: String,
  },
};
</script>

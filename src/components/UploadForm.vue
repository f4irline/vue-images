<template>
  <div class="file-drop">
    <input
      type="file"
      accept="image/*"
      multiple
      @change="uploadImages($event.target.files)"
    />
    <span>Drop image here to upload it</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UploadForm",
  methods: mapActions(["uploadImages"]),
};
</script>

<style scoped>
.file-drop {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  border: 2px dashed black;
  border-radius: 5px;
}

.file-drop:hover {
  background-color: #eee;
}

.file-drop input {
  width: 100%;
  height: 30vh;
  position: absolute;
  opacity: 0;
}
</style>

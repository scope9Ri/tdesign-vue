<template>
  <div style="width: 100%">
    <t-tag-input v-model="tags" placeholder="最多只能输入 3 个标签" :max="3" @enter="onEnter" />
  </div>
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';

export default {
  data() {
    return {
      tags: [],
    };
  },
  methods: {
    onEnter(value, { inputValue }) {
      if (value.length >= 3 && inputValue) {
        MessagePlugin.warning('最多只能输入 3 个标签!');
      }
    },
  },
};
</script>

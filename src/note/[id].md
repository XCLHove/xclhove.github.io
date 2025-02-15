---
prev:
  text: '笔记'
  link: '/笔记'
---

<script setup lang="ts">
import { useData } from 'vitepress';
import { onMounted } from 'vue';
const { params } = useData();
onMounted(() => {
document.title = params.value.title;
})
</script>

<!-- @content -->

最近更新：{{ $params.updateTime }}

原文链接：<a target="_blank" :href="$params.sourceUrl">{{ $params.title }}</a>

<span>
<a class="prev" v-if="$params.prev" :href="$params.prev.link">{{ $params.prev.text }}</a>
<span v-if="$params.prev && $params.next" style="margin: 0 5px">|</span>
<a v-if="$params.next" :href="$params.next.link">{{ $params.next.text }}</a>
</span>

<script lang="ts">
  import { marked } from 'marked'

  let { text } = $props();

  const BASE = 'https://raw.githubusercontent.com/nhaar/Waddle-Forever/main/guide/';

  marked.use({
    renderer: {
      image({ href, title, text }) {
        return `<img src="${BASE}${href}" alt="${text}" />`;
      }
    }
  })
</script>

<div class="prose prose-invert">{@html marked(text)}</div>
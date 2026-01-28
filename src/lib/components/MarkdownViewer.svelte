<script lang="ts">
  import { marked } from 'marked'

  let { md } = $props();

  const BASE = 'https://raw.githubusercontent.com/nhaar/Waddle-Forever/main/guide/';

  marked.use({
    renderer: {
      image({ href, title, text }) {
        return `<img src="${BASE}${href}" alt="${text}" />`;
      }
    }
  })
</script>

<div class="max-w-prose md-viewer">{@html marked(md)}</div>
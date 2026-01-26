<script lang="ts">
  interface QA {
    question: string
    answer: string
  }

  const faqs: QA[] = [
    { question: "How do I make an account?", answer: "Simply log in with any username and password." },
    { question: "Why are servers populated/full?", answer: "This is just decoration, the game is offline." },
  ];
</script>

<div class="max-w-4xl mx-auto p-6">
  <h1 class="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
  <ul class="space-y-4">
    {#each faqs as { question, answer }, index (index)}
      <li class="border-b pb-4">
        <h2 class="text-2xl font-semibold">{question}</h2>
        <p class="text-lg mt-2">{answer}</p>
      </li>
    {/each}
  </ul>
</div>
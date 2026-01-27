import { error } from '@sveltejs/kit';

export async function fetchMarkdown(name: string) {
  const res = await fetch(`https://raw.githubusercontent.com/nhaar/Waddle-Forever/main/guide/${name}.md`);

  if (!res.ok) {
    throw error(502, 'Could not get MD file');
  }

  return await res.text();
}
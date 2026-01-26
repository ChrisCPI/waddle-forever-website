import { redirect } from '@sveltejs/kit';

export function load() {
  return redirect(303, 'https://github.com/nhaar/Waddle-Forever/blob/main/LINUX.md');
}
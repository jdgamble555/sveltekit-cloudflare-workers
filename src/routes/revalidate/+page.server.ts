import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

// @ts-expect-error - Cloudflare Worker Cache
const cache = caches.default;

export const actions = {

    default: async () => {

        const url = 'https://sveltekit-cloudflare-workers.pages.dev/';
        const request = new Request(url);

        const response = await cache.delete(request);

        if (!response.ok) {
            return fail(400, { error: 'Revalidate Error: ' + response });
        }

        return { success: true };
    }

} satisfies Actions;

import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';


export const actions = {

    default: async () => {

        // @ts-expect-error - Cloudflare Worker Cache
        const cache = caches.default;

        const url = 'https://sveltekit-cloudflare-workers.pages.dev/';
        const request = new Request(url);

        const response = await cache.delete(request);

        if (!response) {
            return fail(400, { error: 'Revalidate Error: ' + response });
        }

        return { success: true };
    }

} satisfies Actions;

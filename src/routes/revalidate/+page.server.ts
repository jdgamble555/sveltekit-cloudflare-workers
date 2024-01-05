import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';


export const actions = {

    default: async () => {

        // @ts-expect-error - Cloudflare Worker Cache
        const cache = caches.default;

        const url = 'https://sveltekit-cloudflare-workers.pages.dev/';
        const deleteRequest = new Request(url);

        const isDeleted = await cache.delete(deleteRequest);

        if (!isDeleted) {
            return fail(400, { error: 'Revalidate Error: Not in Cache!' });
        }

        /*const putRequest = new Request(url, {
            headers: {
                'Cache-Control': 'max-age=31536000, s-maxage=31536000',
                'Cloudflare-CDN-Cache-Control': 'max-age=31536000',
                'CDN-Cache-Control': 'max-age=31536000'
            }
        });

        await cache.put(putRequest);*/

        return { success: true };
    }

} satisfies Actions;

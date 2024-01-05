import type { PageServerLoad } from './$types';


export const load = (async ({ setHeaders }) => {

    const n = Math.random();

    setHeaders({
        'Cache-Control': 'max-age=31536000, s-maxage=31536000',
        'Cloudflare-CDN-Cache-Control': 'max-age=31536000',
        'CDN-Cache-Control': 'max-age=31536000'
    });

    return {
        n
    };
}) satisfies PageServerLoad;
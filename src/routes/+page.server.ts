import type { PageServerLoad } from './$types';


export const load = (async ({ setHeaders }) => {

    const n = Math.random();

    setHeaders({
        'Cache-Control': 'max-age=31536000'
    });

    return {
        n
    };
}) satisfies PageServerLoad;
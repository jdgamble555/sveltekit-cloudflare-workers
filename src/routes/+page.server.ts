import type { PageServerLoad } from './$types';


export const load = (async () => {

    const n = Math.random();

    return {
        n
    };
}) satisfies PageServerLoad;
import sanityclient from '@sanity/client'; 
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityclient({
    projectId: 'onmk7xp0',
    dataset: 'production',
    apiVersion: '2023-01-09',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
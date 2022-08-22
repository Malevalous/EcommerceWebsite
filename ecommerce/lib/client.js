import sanityClient from '@sanity/client';
import imgUrlBuilder from '@sanity/image-url';
import ImageUrlBuilder  from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'jm5v7jaw',
    dataset: 'production',
    apiVersion: '2022-08-11',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_TOKEN
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

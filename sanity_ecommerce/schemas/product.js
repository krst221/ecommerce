export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{type: 'image'}],
        options: {
          hotspot: true,
        }
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
      },
      {
        name: 'votes',
        title: 'Votes',
        type: 'number',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'details',
        title: 'Details',
        type: 'string',
      },
    ],
};
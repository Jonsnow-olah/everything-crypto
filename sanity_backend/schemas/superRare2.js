export default {
    name: 'superRares2',
    title: 'SuperRares2',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
    
      {
        name: 'vendor',
        title: 'Vendor',
        type: 'string',
      },
      {
        name: 'rate',
        title: 'Rate',
        type: 'string',
      },
      {
        name: 'projectLink',
        title: 'Project Link',
        type: 'string',
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
     
    ],
  };
// sanity/schemas/homepage.js
export default {
  name: "homepage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Header image",
      type: "image",
    },
    {
      name: "title",
      title: "Header title",
      type: "string",
      description: "What's the title of the homepage hero?",
    },
    {
      name: "subtitle",
      title: "Header subtitle",
      type: "document",
      fields: [
        {
          name: "subOne",
          type: "string",
        },
        {
          name: "subTwo",
          type: "string",
        },
      ],
    },
    {
      name: "home_page_content",
      title: "Home Page Content",
      type: "document",
      fields: [
        {
          name: "section_one",
          title: "Section One",
          type: "document",
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'array',
              of: [{type: 'string'}],
            },
            {
              title: 'Body One',
              name: 'body_one',
              type: 'array',
              of: [{type: 'string'}],
            },
             {
              title: 'Body Two',
              name: 'body_two',
              type: 'array',
              of: [{type: 'string'}],
            },
          ],
        },
        {
          name: "stat_section",
          title: "Statistic Spotlight",
          type: "document",
          fields: [
            {
              name: "stat",
              title: "Statistic",
              type: "string",
              description: "What's a statistic you would like to spotlight?",
            },
            {
              name: "stat_image",
              title: "Statistic Background Image",
              type: "image",
              description: "what image do you want behind the highlighted statistic?",
            },
          ],
        },
        {
          name: "section_two",
          title: "Section Two",
          type: "document",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "body_one",
              title: "Body One",
              type: "string",
            },
            {
              name: "body_two",
              title: "Body Two",
              type: "string",
            },
            {
              title: 'body Three',
              name: 'actions',
              type: 'array',
              of: [{type: 'string'}],
            },
          ],
        },
        {
          name: "section_three",
          title: "Section Three",
          type: "document",
          fields: [
            {
              name: "image",
              title: "Background Image",
              type: "image",
              description: "what background image do you want behind the why section",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
              description: "What's the title for the third section?",
            },
            {
              name: "body_one",
              title: "Body One",
              type: "string",
              description: "What's the main content for the third section?",
            },
             {
              title: 'Body Two',
              name: 'body_two',
              type: 'array',
              of: [{type: 'string'}],
            },
             {
              title: 'Body Three',
              name: 'body_three',
              type: 'array',
              of: [{type: 'string'}],
            },
          ],
        },
      ],
    },
  ],
};


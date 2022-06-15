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
              name: "title",
              title: "Title",
              type: "document",
              fields: [
                {
                  name: "one",
                  type: "string",
                },
                {
                  name: "two",
                  type: "string",
                },
                {
                  name: "three",
                  type: "string",
                },
              ],
            },
            {
              name: "body",
              title: "Content",
              type: "string",
              description: "What's the main content for the first section?",
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
              description: "What's the title for the second section?",
            },
            {
              name: "body",
              title: "Content",
              type: "string",
              description: "What's the main content for the second section?",
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
              name: "body",
              title: "Content",
              type: "string",
              description: "What's the main content for the third section?",
            },
          ],
        },
      ],
    },
  ],
};
// {
//   name: 'cta',
//   description: "What's URL for the homepage CTA?",
//   title: 'CTA',
//   type: 'slug',
//   options: {
//     maxLength: 200,
//   },
//   validation: (Rule) => [Rule.required().error('Field cannot be empty')],
// },

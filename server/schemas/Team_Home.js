export default {
  name: "about_us",
  title: "about_us",
  type: "document",
  fields: [
    {
      name: "header",
      title: "Header",
      type: "string",
      description: "What would you like your header to be?",
    },
    {
      name: "title",
      title: "title",
      type: "string",
      description: "What would you like to be the main header for this page?",
    },
    {
      name: "hero_content",
      title: "hero_content",
      type: "string",
      description: "What would you like the main content of this page to say?",
    },
    {
      name: "about_us_content",
      title: "about_us_content",
      type: "document",
      fields: [
        {
          name: "section_1",
          title: "section_1",
          type: "document",
          fields: [
            {
              name: "title",
              title: "title",
              type: "string",
            },
            {
              name: "body",
              title: "body",
              type: "string",
              description: "What would you like the main content of this page to say?",
            },
          ],
        },
        {
          name: "section_2",
          title: "section_2",
          type: "document",
          fields: [
            {
              name: "title",
              title: "title",
              type: "string",
            },
            {
              name: "body",
              title: "body",
              type: "string",
              description: "What would you like the main content of this page to say?",
            },
          ],
        },
        {
          name: "section_3",
          title: "section_3",
          type: "document",
          fields: [
            {
              name: "title",
              title: "title",
              type: "string",
            },
            {
              name: "body",
              title: "body",
              type: "string",
              description: "What would you like the main content of this page to say?",
            },
          ],
        },
        {
          name: "section_4",
          title: "section_4",
          type: "document",
          fields: [
            {
              name: "title",
              title: "title",
              type: "string",
            },
            {
              name: "body",
              title: "body",
              type: "string",
              description: "What would you like the main content of this page to say?",
            },
          ],
        },
      ],
    },
  ],
};

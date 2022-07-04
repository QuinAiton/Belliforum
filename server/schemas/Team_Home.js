export default {
  name: "team_home",
  title: "Team Home Page",
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
      name: "body",
      title: "Body",
      type: "string",
      description: "What would you like the main content of this page to say?",
    },
    {
      name: "about_us",
      title: "about us",
      type: "document",
      fields: [
        {
          name: "",
          title: "content",
          type: "string",
          description: "What would you like the to tell people about your company?",
        },
        {
          name: "Body",
          title: "content",
          type: "string",
          description: "What would you like the to tell people about your company?",
        },
        {
          name: "Body",
          title: "content",
          type: "string",
          description: "What would you like the to tell people about your company?",
        },
        {
          name: "Body",
          title: "content",
          type: "string",
          description: "What would you like the to tell people about your company?",
        },
      ],
    },
  ],
};

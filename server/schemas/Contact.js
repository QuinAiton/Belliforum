export default {
  name: "contact",
  title: "Contact Information",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "what do you want the contact header to say?",
    },
    {
      name: "location",
      title: "Buisness Location",
      type: "string",
      description: "where is your buisness located",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      description: "What's the best email to contact you at?",
    },
  ],
};

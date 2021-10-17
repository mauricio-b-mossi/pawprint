export default {
  name: "members",
  title: "Meet The Team",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Order",
      description: "Number in which member appears in the website",
      type: "number",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "position",
      title: "Position",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "position",
      media: "author.image",
    },
  },
};

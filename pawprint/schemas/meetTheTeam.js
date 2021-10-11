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
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "position",
      title: "Position",
      type: "string",
    },
    {
      name: "biography",
      title: "Biography",
      type: "text",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

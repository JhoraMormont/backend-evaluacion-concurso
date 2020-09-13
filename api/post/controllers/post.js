"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const buildPost = async (posts) => {
  const response = [];
  for (const post of posts) {
    const { id, title, content, music_url, author, category } = post;

    console.log(category.id);

    const categories = await strapi.services.category.findOne(category.id, [
      "id",
      "criteria",
    ]);

    console.log("Critrios", categories);

    const newPost = {
      id,
      title,
      content,
      music_url,
      author,
      category,
    };

    response.push(newPost);
  }

  console.log("response", response);

  return response;
};

module.exports = {
  async find(ctx) {
    let posts = await strapi.services.post.find();
    const response = await buildPost(posts);
    return response;
  },
};

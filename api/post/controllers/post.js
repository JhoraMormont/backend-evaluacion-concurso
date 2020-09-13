"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const buildPost = async (posts) => {
  const response = [];
  for (const post of posts) {
    const { id, title, content, music_url, author, category } = post;

    const dbCategory = await strapi.services.category.findOne({
      id: category.id,
    });

    const newPost = {
      id,
      title,
      content,
      music_url,
      author,
      category,
      criteria: dbCategory.criteria,
    };

    response.push(newPost);
  }

  return response;
};

module.exports = {
  async find(ctx) {
    let posts = await strapi.services.post.find();
    const response = await buildPost(posts);

    return response;
  },
};

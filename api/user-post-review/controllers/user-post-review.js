"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    const { posts, users } = ctx.request.body;

    const rows = await strapi.services["user-post-review"].find();
    console.log(strapi.services);
    let found = false;
    rows.forEach((row) => {});
  },
};

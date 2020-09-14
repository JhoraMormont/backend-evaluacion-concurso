"use strict";

const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const validateExistOnDb = () => {};

module.exports = {
  async create(ctx) {
    const { post, user } = ctx.request.body;

    const rows = await strapi.services["user-post-review"].find();

    if (rows.lenght !== 0) {
      for (const row of rows) {
        if (row.user.id === user.id && row.post.id === post.id) {
          return ctx.response.send("Register already exist");
        }
      }
    }

    const _ = await strapi.services["user-post-review"].create(
      ctx.request.body
    );

    return ctx.response.send("Sucessfull");
  },
};

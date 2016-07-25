import _ from 'lodash/lodash';

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('/users', function(schema, request) {
    let { page, limit, sort, dir, search } = request.queryParams;
    let users = schema.users.all().models;
    let total = users.length;

    page = page || 1;
    limit = limit || 20;
    dir = dir || 'asc';

    if (sort) {
      users = _.sortBy(users, sort);
      if (dir !== 'asc') {
        users = users.reverse();
      }
    }

    let offset = (page - 1) * limit;
    users = _.take(_.drop(users, offset), limit);

    return {
      users,
      meta: {
        total
      }
    };
  });

  this.put('/users/:id', function(schema, request) {
    var data = JSON.parse(request.requestBody);
    schema.users.find(request.params.id).update(data.user);
  });

  this.del('/users/:id');

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.0-beta.7/shorthands/
  */
}

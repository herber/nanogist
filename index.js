const fetch = require('isomorphic-fetch');

module.exports = (token) => {
  const headers = {
    'User-Agent': 'nanogist'
  };

  if (token != undefined) headers['Authorization'] = `token ${ token }`;

  return {
    get: (id) => {
      return fetch('https://api.github.com/gists/' + id, { headers }).then((res) => {
        return res.json();
      });
    },
    delete: (id) => {
      return fetch('https://api.github.com/gists/' + id, { headers, method: 'delete' }).then((res) => {
        return res.status == 204 ? true : false;
      });
    },
    update: (id, body) => {
      return fetch('https://api.github.com/gists/' + id, { headers: Object.assign(headers, { 'Content-Type': 'application/json' }), method: 'patch', body: JSON.stringify(body) }).then((res) => {
        return res.json();
      });
    },
    create: (body) => {
      return fetch('https://api.github.com/gists', { headers: Object.assign(headers, { 'Content-Type': 'application/json' }), method: 'post', body: JSON.stringify(body) }).then((res) => {
        return res.json();
      });
    },
  };
};

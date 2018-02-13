# Nanogist

Isomorphic gist client

## Install

```
$ npm install nanogist
```

## Usage

```js
const nanogist = require('nanogist');
const gist = nanogist('token');

gist.get('fa43cd476b09d1f10aebf4cac0351c4e').then((data) => {
  console.log(data);
})
```

## API

## nanogist([token])

#### token

Type: `string`

Your OAuth token for accessing github's api.

If no token is supplied you can only create anonymous gists.

#### .get(id)

Get a gists content by it's id.

##### Example

```js
gist.get('50d1014b0e35be4675b6917719afb2de').then((content) => {
  console.log('Username: ' + content.owner.login);
});
```

#### .create(data)

Create a new gist.

##### Example

```js
gist.create({
  description: 'A new gist.',
  public: false,
  files: {
    'home.txt': {
      content: 'String file contents'
    }
  }
}).then((content) => {
  console.log('ID:', data.id);
});
```

#### .update(id, data)

Update a gist.

##### Example

```js
gist.update('50d1014b0e35be4675b6917719afb2de', {
  files: {
    'home.txt': null,
    'new_file.txt': {
      content: 'a new file'
    },
  }
}).then((data) => {
  console.log('Files:', data.files);
});
```

#### .delete(id)

Delete a gist.

##### Example

```js
gist.delete('50d1014b0e35be4675b6917719afb2de').then((deleted) => {
  console.log(deleted);
})
```

## License

MIT © [Tobias Herber](http://tobihrbr.com)

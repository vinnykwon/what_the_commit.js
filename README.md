# what_the_commit.js
Web-API for [whatthecommit.com](https://whatthecommit.com/) small Tornado application that generates random github commit messages

## Example
```JavaScript
async function main() {
	const { WhatTheCommit } = require("./what_the_commit.js")
	const whatTheCommit = new WhatTheCommit()
	const randomCommit = await whatTheCommit.getCommit()
	console.log(randomCommit)
}

main()
```

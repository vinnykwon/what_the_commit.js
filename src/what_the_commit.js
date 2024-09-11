class WhatTheCommit {
	constructor() {
		this.api = "https://whatthecommit.com"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getCommit() {
		const response = await fetch(
			`${this.api}/index.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {WhatTheCommit}

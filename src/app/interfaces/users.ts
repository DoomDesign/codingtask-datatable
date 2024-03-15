export type UserApiResponse = {
	info: unknown,
	results: SingleUser[]
}

export type SingleUser = {
	[key: string]: any
}

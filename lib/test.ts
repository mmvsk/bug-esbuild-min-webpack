const FooBar = ["foo", "bar"];

export class FooBarTester {
	public static isFooBar(word: string) {
		return FooBar.includes(word);
	}
}

export const isFooBar = FooBarTester.isFooBar;

export function isFooBar2(word: string) {
	return FooBarTester.isFooBar(word);
}

import { urlIsValid } from '../js/urlValidation';

describe('url validation test', () => {
    test('test an invalid url', () => {
        expect(urlIsValid('jestjs.io/docs/getting-started')).toBe(false);
    });

    test('test a valid url', () => {
        expect(urlIsValid('https://jestjs.io/docs/getting-started')).toBe(true);
    });
});

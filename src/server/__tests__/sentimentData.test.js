// the below 2 imports for handling the error
// ReferenceError: regeneratorRuntime is not defined
// usually to use babel-polyfill but its deprecated
// and using the new packages core-js/stable and regenerator-runtime/runtime
import "core-js/stable";
import "regenerator-runtime/runtime";
import { getSentimentData } from '../app';

describe('sentiment data test', () => {
    test('check that getSentimentData is defined ', () => {
        expect(getSentimentData).toBeDefined();
    });
});

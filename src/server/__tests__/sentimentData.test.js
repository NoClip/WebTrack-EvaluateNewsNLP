import "core-js/stable";
import "regenerator-runtime/runtime";
import { getSentimentData } from '../app';

describe('sentiment data test', () => {
    test('check that getSentimentData is defined ', () => {
        expect(getSentimentData).toBeDefined();
    });
});

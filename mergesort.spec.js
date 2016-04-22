describe('Merge Sort', function () {
    it('handles an empty array', function () {
        expect(mergeSort([])).toEqual([]);
    })
    it('handles an array with 1 element', function () {
        expect(mergeSort([10])).toEqual([10]);
    })
    it('handles an array with multiple elements', function () {
        expect(mergeSort([2, 4, 3, 6, 1])).toEqual([1, 2, 3, 4, 6]);
    })
});

describe('Merge', function () {
    it('handles empty arrays', function () {
        expect([].merge([])).toEqual([]);
    })
    it('merges an empty array', function () {
        expect([10].merge([])).toEqual([10]);
        expect([1, 2, 3].merge([])).toEqual([1, 2, 3]);
    })
    it('merges into an empty array', function () {
        expect([].merge([10])).toEqual([10]);
        expect([].merge([1, 2, 3])).toEqual([1, 2, 3]);
    })
    it('handles arrays with 1 element', function () {
        expect([2].merge([10])).toEqual([2, 10]);
    })
    it("sorts elements", function () {
        expect([5].merge([1])).toEqual([1, 5]);
    });
    it('handles an array with multiple elements', function () {
        expect([2, 3].merge([1, 4, 6])).toEqual([1, 2, 3, 4, 6]);
        expect([1, 2, 3, 4].merge([1, 4])).toEqual([1, 1, 2, 3, 4, 4]);
    })
});

describe('Split', function () {
    it('throws an error if the array\'s length is less than 2', function () {
        expect(function () {
            [].split()
        }).toThrow();
        expect(function () {
            [5].split()
        }).toThrow();
    });
    it('handles an array with multiple elements', function () {
        expect([2, 4, 3, 6, 1].split()).toEqual([
            [2, 4],
            [3, 6, 1]
        ]);
        expect([2, 4, 3, 6].split()).toEqual([
            [2, 4],
            [3, 6]
        ]);
    });
});

function findWordsMatchingRegex(words, regex) {
    const matchingWords = [];

    for (const word of words) {
        if (regex.test(word)) {
            matchingWords.push(word);
        }
    }

    return matchingWords;
}

function containingFoo() {
    const sampleWords = ["food", "football", "barfoo", "hello"];
    const wordsContainingFoo = findWordsMatchingRegex(sampleWords, /foo/);

    console.log("Words containing 'foo':", wordsContainingFoo);
}

function main() {

    containingFoo();
}

main()

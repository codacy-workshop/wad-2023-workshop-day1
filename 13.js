function getWordsContainingFoo() {
    const sampleWords = ["food", "football", "barfoo", "hello"];
    return findWordsMatchingRegex(sampleWords, /bar.*foo.*/);
}

function findWordsMatchingRegex(words, regex) {
    const matchingWords = [];

    for (const word of words) {
        if (regex.test(word)) {
            matchingWords.push(word);
        }
    }

    return matchingWords;
}

function cica() {
    console.log("Words containing 'foo':", getWordsContainingFoo());
}

cica()
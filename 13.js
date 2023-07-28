function findWordsMatchingRegex(words, regex) {
    const matchingWords = [];

    for (const word of words) {
        if (regex.test(word)) {
            matchingWords.push(word);
        }
    }

    return matchingWords;
}

function main() {
    var sampleWords = ["food", "football", "barfoo", "hello"];
    var wordsContainingFoo = findWordsMatchingRegex(sampleWords, /.*foo.*/);
    
    console.log("Words containing 'foo':", wordsContainingFoo);
}

main()
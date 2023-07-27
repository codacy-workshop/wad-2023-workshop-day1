function findWordsMatchingRegex(words) {
    const matchingWords = [];

    for (const word of words) {
        if (word.includes("foo")) {
            matchingWords.push(word);
        }
    }

    return matchingWords;
}

function main() {
    console.log("Words containing 'foo':", findWordsMatchingRegex(["food", "football", "barfoo", "hello"]));
}

main()

var findSubstring = function(s, words) {
    if (!words.length || !s.length) return [];

    const wordLen = words[0].length;
    const wordCount = words.length;
    const totalLen = wordLen * wordCount;
    const result = [];

    // Frequency map of words
    const freq = new Map();
    for (let w of words) {
        freq.set(w, (freq.get(w) || 0) + 1);
    }

    // Try each offset
    for (let i = 0; i < wordLen; i++) {
        let left = i;
        let count = 0;
        const seen = new Map();

        for (let right = i; right + wordLen <= s.length; right += wordLen) {
            const word = s.substring(right, right + wordLen);

            if (freq.has(word)) {
                seen.set(word, (seen.get(word) || 0) + 1);
                count++;

                // Too many of this word → shrink window
                while (seen.get(word) > freq.get(word)) {
                    const leftWord = s.substring(left, left + wordLen);
                    seen.set(leftWord, seen.get(leftWord) - 1);
                    left += wordLen;
                    count--;
                }

                // Valid window
                if (count === wordCount) {
                    result.push(left);

                    // Move left to find next window
                    const leftWord = s.substring(left, left + wordLen);
                    seen.set(leftWord, seen.get(leftWord) - 1);
                    left += wordLen;
                    count--;
                }
            } else {
                // Reset window
                seen.clear();
                count = 0;
                left = right + wordLen;
            }
        }
    }

    return result;
};

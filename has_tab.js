class Node {
    constructor(key = null, value = null) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class hashTable {
    constructor() {
        this.table = Array(71).fill(new Node());
    }

    hash(key) {
        const charCode = key.charCodeAt(0);
        return charCode % 71;
    }

    set(key, value) {
        const place = this.hash(key);
        let cur = this.table[place];

        while ((cur.next !== null)) {
            if (cur.key === key) {
                cur.value = value;
                return
            } else {
                cur = cur.next;
            }
        }
        cur.next = new Node(key, value);
    }

    get(key) {
        const place = this.hash(key);
        let cur = this.table[place];

        while (cur.next !== null) {
            cur = cur.next;
            if (cur.key === key) {
                return cur.value;
            }
        }
        return null
    }
}

const h = new hashTable();

function calculateLetterFrequencies(word) {
    // Iterate over each character in the word
    for (let i = 0; i < word.length; i++) {
        letter = word[i]
        // Increment the frequency count for the letter in the hash table
        if (h.get(letter)) {
            h.set(letter, h.get(letter) + 1);
        } else {
            h.set(letter, 1);
        }
    }

}

console.log(h.get("t"))




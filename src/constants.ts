import stubImageSrc from '../public/images/stub.jpg';

export const PATHS = {
    HOME: '/',
    MAP: '/map',
};

export enum ELanguage {
    ru = 'ru',
    ua = 'ua',
    en = 'en',
    kz = 'kz',
    de = 'de',
}

export type TLanguage = keyof typeof ELanguage;

/* eslint-disable prettier/prettier */
export const LEETCODE_ARTICLES = [
  {
    title: 'Valid parentheses',
    link: 'https://leetcode.com/problems/valid-parentheses/discuss/529582/JavaScript-Readable-O(n)-99-55',
    thumbnail: stubImageSrc.src,
  },
  {
    title: 'Roman to integer',
    link: 'https://leetcode.com/problems/roman-to-integer/discuss/529554/JavaScript-Easy-to-understand-O(n)-98-56-with-an-explanation-on-Medium',
    thumbnail: stubImageSrc.src,
  },
  {
    title: 'Two sum',
    link: 'https://leetcode.com/problems/two-sum/discuss/528937/JS-hashMap-O(n)-98-22-with-an-explanation-on-Medium',
    thumbnail: stubImageSrc.src,
  },
  {
    title: 'Longest common prefix',
    link: 'https://leetcode.com/problems/longest-common-prefix/discuss/598763/JavaScript-O(n2)',
    thumbnail: stubImageSrc.src,
  },
  {
    title: 'Reverse integer',
    link: 'https://leetcode.com/problems/reverse-integer/discuss/598602/JavaScript-Simple-O(n)',
    thumbnail: stubImageSrc.src,
  },
  {
    title: 'Palindrome number',
    link: 'https://leetcode.com/problems/palindrome-number/discuss/528999/JS-Simple-O(n)',
    thumbnail: stubImageSrc.src,
  },
];

export const HABR_ARTICLES = [
  {
    title: 'Что ты такое, Event Loop? Или как устроен цикл событий в браузере Chrome',
    link: 'https://habr.com/en/post/461401/',
    thumbnail: stubImageSrc.src,
  },
  {
    title: 'Что ты такое, Rendering Engine? Или как работает модуль отображения браузера',
    link: 'https://habr.com/en/post/459814/',
    thumbnail: stubImageSrc.src,
  },
  {
    title: 'Что ты такое, замыкания в JavaScript?',
    link: 'https://habr.com/en/post/459166/',
    thumbnail: stubImageSrc.src,
  },
];

export const MEDIUM_ARTICLES = [
  {
    title: 'JavaScript Algorithms: Verifying an Alien Dictionary (LeetCode)',
    link: 'https://javascript.plainenglish.io/javascript-algorithms-verifying-an-alien-dictionary-leetcode-4769a7605a2a',
    thumbnail: 'https://miro.medium.com/max/1104/0*MsAVWe6788HEoSL6',
  },
  {
    title: 'JavaScript Algorithms: Merge intervals (LeetCode)',
    link: 'https://medium.com/javascript-in-plain-english/javascript-algorithms-merge-intervals-leetcode-98da240805bc',
    thumbnail: 'https://miro.medium.com/max/1104/0*0sseZg20yTn5WwKA',
  },
  {
    title: 'JavaScript Algorithms: Number of Islands (LeetCode)',
    link: 'https://medium.com/javascript-in-plain-english/javascript-algorithms-number-of-islands-leetcode-6eff200bdf1',
    thumbnail: 'https://miro.medium.com/max/1104/0*XTGP7jYJsjWjtFc1',
  },
  {
    title: 'JavaScript Algorithms: Find All Duplicates in an Array (LeetCode)',
    link: 'https://medium.com/javascript-in-plain-english/javascript-algorithms-find-all-duplicates-in-an-array-leetcode-fb7b8c01a93a',
    thumbnail: 'https://miro.medium.com/max/1104/0*yH7sxLzc1bp5rFPo',
  },
  {
    title: 'JavaScript Algorithms: Meeting Rooms (LeetCode)',
    link: 'https://medium.com/javascript-in-plain-english/javascript-algorithms-meeting-rooms-leetcode-2385465b92f0',
    thumbnail: 'https://miro.medium.com/max/1104/0%2AHp_1AZzfgeYPeCzq',
  },
  {
    title: 'JavaScript Algorithms: Binary Tree Right Side View (LeetCode)',
    link: 'https://medium.com/swlh/javascript-algorithms-binary-tree-right-side-view-leetcode-2325895c9289',
    thumbnail: 'https://miro.medium.com/max/1104/0*Evyi_l8WBfMJ4Qz2',
  },
  {
    title: 'JavaScript Algorithms: Valid Parentheses (LeetCode)',
    link: 'https://medium.com/javascript-in-plain-english/javascript-algorithms-valid-parentheses-leetcode-71c5b2f61077',
    thumbnail: 'https://miro.medium.com/max/1104/0*243ViVGuthS455jo',
  },
  {
    title: 'LeetCode 110. Balanced Binary Tree [JavaScript]',
    link: 'https://medium.com/javascript-in-plain-english/leetcode-110-balanced-binary-tree-javascript-49ec9ddf9318',
    thumbnail: 'https://miro.medium.com/max/1104/0*02-ggkqLQ5NCRa64',
  },
  {
    title: 'JavaScript Algorithms: Integer to Roman (LeetCode)',
    link: 'https://medium.com/javascript-in-plain-english/leetcode-12-integer-to-roman-javascript-21459e45a0ee',
    thumbnail: 'https://miro.medium.com/max/1104/0*xEcDNJNfcYns8sbg',
  },
  {
    title: 'JavaScript Algorithms: Roman to Integer (LeetCode)',
    link: 'https://anatolii841993.medium.com/leetcode-13-roman-to-integer-javascript-9b8bf3c38773',
    thumbnail: 'https://miro.medium.com/max/1104/0*nCLahe_Y9gqQ2bNF',
  },
  {
    title: 'JavaScript Algorithms: Two Sum (LeetCode)',
    link: 'https://anatolii841993.medium.com/leetcode-1-two-sum-javascript-f6e12ba473a',
    thumbnail: 'https://miro.medium.com/max/1104/1*2DeOoXPMbZrE57MkYCdZ-w.jpeg',
  },
];
/* eslint-enable prettier/prettier */

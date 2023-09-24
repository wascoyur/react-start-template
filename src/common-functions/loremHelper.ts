const words = [
  'Got',
  'ability',
  'shop',
  'recall',
  'fruit',
  'easy',
  'dirty',
  'giant',
  'shaking',
  'ground',
  'weather',
  'lesson',
  'almost',
  'square',
  'forward',
  'bend',
  'cold',
  'broken',
  'distant',
  'adjective.',
];
function getRandomWord(firstLetterToUppercase = false) {
  const word = words[randomNumber(0, words.length - 1)];
  return firstLetterToUppercase ? word.charAt(0).toUpperCase() + word.slice(1) : word;
}
export function generateLoremIpsum(length = 10) {
  return (
    [...Array(length)]
      .map((_, i) => getRandomWord(i === 0))
      .join(' ')
      .trim() + '.'
  );
}
function randomNumber(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

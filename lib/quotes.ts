export const newYearQuotes = [
  {
    text: "Cheers to a new year and another chance for us to get it right.",
    author: "Oprah Winfrey"
  },
  {
    text: "Tomorrow is the first blank page of a 365-page book. Write a good one.",
    author: "Brad Paisley"
  },
  {
    text: "Every new beginning comes from some other beginning's end.",
    author: "Seneca"
  },
  {
    text: "New year—a new chapter, new verse, or just the same old story? Ultimately we write it. The choice is ours.",
    author: "Alex Morritt"
  },
  {
    text: "The magic in new beginnings is truly the most powerful of them all.",
    author: "Josiyah Martin"
  },
  {
    text: "May the New Year bring you courage to break your resolutions early!",
    author: "Aleister Crowley"
  },
  {
    text: "New Year, new feels, new chances. Same dreams, fresh starts.",
    author: "Unknown"
  },
  {
    text: "An optimist stays up until midnight to see the new year in. A pessimist stays up to make sure the old year leaves.",
    author: "Bill Vaughan"
  },
  {
    text: "This is a new year. A new beginning. And things will change.",
    author: "Taylor Swift"
  },
  {
    text: "Write it on your heart that every day is the best day in the year.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "May your coming year be filled with magic and dreams and good madness.",
    author: "Neil Gaiman"
  },
  {
    text: "The new year stands before us, like a chapter in a book, waiting to be written.",
    author: "Melody Beattie"
  },
  {
    text: "Here's to 2026! May it be filled with new adventures, great friends, and endless possibilities!",
    author: "Anonymous"
  },
  {
    text: "Let all your dreams come true in 2026 and beyond!",
    author: "Anonymous"
  },
  {
    text: "Wishing you 365 days of happiness, laughter, and success in 2026!",
    author: "Anonymous"
  }
];

export const getRandomQuote = () => {
  return newYearQuotes[Math.floor(Math.random() * newYearQuotes.length)];
};
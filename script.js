// variables

const quote = document.getElementById('quote');
const author = document.getElementById('author');
const button = document.getElementById('button').addEventListener('click', test);
let random;
const quotes = [
    {
        quote: "Once you make a decision, the universe conspires to make it happen.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "We are part of this universe; we are in this universe, but perhaps more important than both of those facts, is that the universe is in us.",
        author: "Neil Degrasse Tyson"
    },
    {
        quote: "Friendship with ones self is all important, because without it one cannot be friends with anyone else in the world.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Observe constantly that all things take place by change, and accustom thyself to consider that the nature of the Universe loves nothing so much as to change the things which are, and to make new things like them.",
        author: "Marcus Aurelius"
    },
    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson"
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison"
    },
    {
        quote: "Vulnerability is not knowing victory or defeat, it’s understanding the necessity of both; it’s engaging. It’s being all in.",
        author: "Brene Brown"
    }
];

function test() {
    random = Math.floor(Math.random() * quotes.length); // instead of * 16, target the length of the array by * array.length
    quote.textContent = quotes[random].quote;
    author.textContent = quotes[random].author;

    // access an array and print to console
    console.log(quotes[random].quote);
    console.log(quotes[random].author);
}
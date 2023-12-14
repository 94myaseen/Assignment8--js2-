 function generateQuote () {
    var array = [
        {
            "quote": "Be yourself; everyone else is already taken.",
            "author": "― Oscar Wilde"
        },
        {
            "quote": "I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.",
            "author": "― Marilyn Monroe"
        },
        {
            "quote": "Two things are infinite: the universe and human stupidity; and I am not sure about the universe.",
            "author": "― Albert Einstein"
        },

        {
            "quote": "So many books, so little time.",
            "author": "― Frank Zappa"
        },
        {
            "quote": "A room without books is like a body without a soul.",
            "author": "― Marcus Tullius Cicero"
        },
        {
            "quote": "Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.",
            "author": "― Bernard M. Baruch"
        },
        {
            "quote": "You only live once, but if you do it right, once is enough.",
            "author": "― Mae West"
        },
        {
            "quote": "In three words I can sum up everything I ve learned about life: it goes on.",
            "author": "― Robert Frost"
        },
        {
            "quote": "If you want to know what a man s like, take a good look at how he treats his inferiors, not his equals.",
            "author": "― J.K. Rowling, Harry Potter and the Goblet of Fire"
        },
        {
            "quote": "Dont walk in front of me… I may not follow Dont walk behind me… I may not lead Walk beside me… just be my friend",
            "author": "― Albert Camus"
        },
        {
            "quote": "If you tell the truth, you dont have to remember anything.",
            "author": "― Mark Twain"
        },
        {
            "quote": "Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . .",
            "author": "― C.S. Lewis, The Four Loves"
        },
        {
            "quote": "A friend is someone who knows all about you and still loves you.",
            "author": "― Elbert Hubbard"
        },

        {
            "quote": "Always forgive your enemies; nothing annoys them so much.",
            "author": "― Oscar Wilde"
        },

        {
            "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
            "author": "― Mahatma Gandhi"
        },
    ]

    
    let title = document.querySelector("#title");
    let author = document.querySelector("#author");
    let randomqut = Math.floor(Math.random() * array.length);
    title.innerHTML = array[randomqut].quote;
    author.innerHTML = array[randomqut].author;
    array.splice(randomqut, 1);
}
let buton = document.querySelector("#btn");
buton.addEventListener('click', function () {
    generateQuote();

})


const trigger = [
    //-1
    ["_"],
    //0 
    ["hi", "hey", "hello"],
    //1
    ["ask", "question", "anything", "else"],
    //2
    ["idol", "rolemodel", "admire", "superstar"],
    //3
    ["book", "read", "story"],
    //4
    ["tv", "serie", "netflix"],
    //5
    ["future", "plans", "dream", "goal"],
    //6
    ["dogs", "cats", "pet"],
    //7
    ["elon", "musk"],
    //8
    ["favorite", "song", "singing", "music", "listen", "listening", "radio"],
    //9
    ["favorite", "sunday", "activity"],
    //10
    ["cool", "nice", "thanks", "great", "awesome", "amazing", "right", "sounds", "oh", "okay", "ok", "haha", "no", "wrong"],
];

const reply = [
    //-1
    [
        "That's a secret!", 
        "This is to personal!", 
        "I don't want to talk about this!"
    ],
    //0 
    [
        "Hello!", 
        "Hi!", 
        "Hey!", 
        "Hi there!",
    ], 
    //1
    [
        "You could ask me about her idol.",
        "How about her favorite book?",
        "Is she a cats or a dogs person?",
        "How about her dreams and future plans?",
        "You could ask which TV-Series she prefers.",
    ],
    //2
    [
        "Tesla, SpaceX,... you know who I am talking about?",
        "She is a huge fan of Elon Musk!",
        "Have you heard of Elon Musk?"
      ],
    //3
    [
        "There are a lot... for example the biography about Edward Snowden",
        "She just finished the book 'How to win friends and influence people' and really liked it!",
        "She prefers biographies: Elon Musk, Edward Snowden, Michele Obama or Steve Jobs."
    ],
    //4
    [
        "Suits was actually pretty nice!", 
        "You need to watch How I Met Your Mother!",
        "Halt And Catch Fire is something nice for nerds!"
    ],
    //5
    [
        "Her biggest dream is to found a company!", 
        "She wants to lead her own company",
        "Maybe work for Elon Musk for a short time."
    ],
    //6
    [
        "She prefers cats over dogs!", 
        "She is a total cats-person!"
    ],
    //7
    [
        "He is a genius!",
        "She loves his work and his passion!",
        "He is really into changing the world and that's great!",
    ],
    //8
    [
        "I like the song Waves by Dean Lewis.",
        "Have you heard of the song 'Waves' by Dean Lewis?"
    ],
    //9
    [
        "Play piano, code and spend time with my family.",
        "Have a nice walk and enjoy the sun."
    ],
    //10
    [
        "Haha :)",
        "Yes!",
        "Thanks!",
    ],
];

const alternative = [
    "Same",
    "Go on...",
    "Try again",
    "I'm listening...",
    "Bro..."
];

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input")
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
    }
  });
});

function transformText(input) {
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

    return text;
}

function output(input) {
    let text = transformText(input);
    if (compare(text)) {
        product = compare(text);
    } else {
        product = alternative[Math.floor(Math.random() * alternative.length)];
    }

    //update DOM
    addChat(input, product);
}

function addChat(input, product) {
    const mainDiv = document.getElementById("chat");
    let userDiv = document.createElement("div");
    userDiv.className = "user";
    userDiv.innerHTML = `You: <span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    botDiv.className = "bot";
    botDiv.innerHTML = `Chatbot: <span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
  }
  

function compare(text) {
    let items = reply[0];
    let lastCounter = 0;
    for (let x = 0; x < trigger.length; x++) {
        let counter = 0;
        for (let y = 0; y < trigger[x].length; y++) {
            
            if (text.includes(trigger[x][y])) {
                counter++;
            }
        }
        if (counter > lastCounter) {
            lastCounter = counter;
            items = reply[x];
        }
    }
    let item = items[Math.floor(Math.random() * items.length)];
    return item;
  }
  


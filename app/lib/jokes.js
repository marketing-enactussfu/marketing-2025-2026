const jokes = [
  {
    setup: "Why did the entrepreneur bring a ladder to the pitch meeting?",
    punchline: "They heard the investors were looking for high growth.",
    category: "business",
  },
  {
    setup: "What do you call a social enterprise that only works on weekends?",
    punchline: "A side hustle with a mission statement.",
    category: "business",
  },
  {
    setup: "Why don't startups ever play hide and seek?",
    punchline: "Because good luck hiding when your burn rate is public.",
    category: "business",
  },
  {
    setup: "How many Enactus members does it take to change a lightbulb?",
    punchline: "One to change it, and twelve to turn it into a sustainable community initiative.",
    category: "enactus",
  },
  {
    setup: "What's an entrepreneur's favorite type of music?",
    punchline: "Scaling heights.",
    category: "business",
  },
  {
    setup: "Why did the computer go to therapy?",
    punchline: "It had too many bytes of emotional baggage.",
    category: "tech",
  },
  {
    setup: "What did the ocean say to the beach?",
    punchline: "Nothing — it just waved.",
    category: "general",
  },
  {
    setup: "Why couldn't the bicycle stand up by itself?",
    punchline: "It was two-tired.",
    category: "general",
  },
  {
    setup: "What do you call a fake noodle?",
    punchline: "An impasta.",
    category: "general",
  },
  {
    setup: "Why did the scarecrow win an award?",
    punchline: "He was outstanding in his field.",
    category: "general",
  },
  {
    setup: "What do you call a bear with no teeth?",
    punchline: "A gummy bear.",
    category: "general",
  },
  {
    setup: "Why did the coffee file a police report?",
    punchline: "It got mugged.",
    category: "general",
  },
  {
    setup: "What's the best thing about Switzerland?",
    punchline: "I don't know, but the flag is a big plus.",
    category: "general",
  },
  {
    setup: "Why don't scientists trust atoms?",
    punchline: "Because they make up everything.",
    category: "science",
  },
  {
    setup: "What did one wall say to the other?",
    punchline: "I'll meet you at the corner.",
    category: "general",
  },
  {
    setup: "Why did the marketer get kicked off the trampoline?",
    punchline: "They kept bouncing ideas without landing any.",
    category: "business",
  },
  {
    setup: "How does a project manager stay cool?",
    punchline: "They stand next to the deliverables.",
    category: "business",
  },
  {
    setup: "What do you call a sustainability report that's actually fun to read?",
    punchline: "Fiction.",
    category: "enactus",
  },
];

const greetings = [
  "Hey there! I'm JokeBot — your officially unofficial comedy agent. Want a laugh? Just ask!",
  "Welcome! I've got puns, one-liners, and the occasional entrepreneurial groaner. Hit me with a request!",
  "Greetings, fellow human! I'm powered by pure dad-joke energy. Ready when you are.",
];

const responses = {
  tellJoke: [
    "Here's one for you:",
    "Coming right up:",
    "You asked, I deliver:",
    "Brace yourself:",
  ],
  another: [
    "Another one? I like your style.",
    "Back for more? Respect.",
    "You have excellent taste in comedy requests.",
  ],
  unknown: [
    "I'm best at jokes! Try asking me to 'tell me a joke' or hit the button below.",
    "Hmm, I'm a specialist — jokes are my thing. Want one?",
    "I wish I could help with that, but my expertise is strictly comedic. Want a joke?",
  ],
  goodbye: [
    "Catch you later! May your day be pun-derful.",
    "Bye! Remember: laughter is the best ROI.",
    "See you soon! Don't forget to smile between meetings.",
  ],
};

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function getGreeting() {
  return pickRandom(greetings);
}

export function getRandomJoke(category = null, excludeSetup = null) {
  let pool = jokes;

  if (category && category !== "any") {
    pool = jokes.filter((joke) => joke.category === category);
  }

  if (excludeSetup) {
    const filtered = pool.filter((joke) => joke.setup !== excludeSetup);
    if (filtered.length > 0) pool = filtered;
  }

  if (pool.length === 0) pool = jokes;

  return pickRandom(pool);
}

export function getCategories() {
  return [...new Set(jokes.map((joke) => joke.category))];
}

export function parseUserMessage(message) {
  const text = message.toLowerCase().trim();

  if (!text) {
    return { intent: "empty" };
  }

  if (
    text.includes("bye") ||
    text.includes("goodbye") ||
    text.includes("see you")
  ) {
    return { intent: "goodbye" };
  }

  if (
    text.includes("another") ||
    text.includes("more") ||
    text.includes("again")
  ) {
    return { intent: "another" };
  }

  if (text.includes("joke") || text.includes("funny") || text.includes("laugh")) {
    const categoryMatch = getCategories().find((cat) => text.includes(cat));
    return { intent: "joke", category: categoryMatch || null };
  }

  if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
    return { intent: "greeting" };
  }

  return { intent: "unknown" };
}

export function buildAgentReply(intent, options = {}) {
  const { category = null, lastSetup = null } = options;

  switch (intent) {
    case "greeting":
      return { type: "text", content: getGreeting() };
    case "joke":
    case "another": {
      const intro =
        intent === "another"
          ? pickRandom(responses.another)
          : pickRandom(responses.tellJoke);
      const joke = getRandomJoke(category, lastSetup);
      return {
        type: "joke",
        content: intro,
        joke,
      };
    }
    case "goodbye":
      return { type: "text", content: pickRandom(responses.goodbye) };
    case "empty":
      return {
        type: "text",
        content: "Say something! Or just click the button — I don't judge.",
      };
    default:
      return { type: "text", content: pickRandom(responses.unknown) };
  }
}

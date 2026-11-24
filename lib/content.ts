// PLACEHOLDER CONTENT
// Larp has no real packs yet. Everything in this file is sample material
// written to demo the layout. Replace it with community-written packs.

export type Category = "Sports" | "Shows" | "Games" | "Music" | "Cars" | "Food & drink";

export const categories: Category[] = ["Sports", "Shows", "Games", "Music", "Cars", "Food & drink"];

export type Topic = {
  slug: string;
  name: string;
  category: Category;
  blurb: string;
};

export type Fact = { name: string; detail: string };
export type Slang = { phrase: string; meaning: string; use: string };
export type Take = { take: string; why: string; pushback: string };
export type DeepCut = { fact: string; drop: string };
export type Question = { q: string; options: string[]; answer: number; explain: string };

export type Pack = {
  slug: string;
  topic: string;
  title: string;
  tagline: string;
  minutes: number;
  placeholder: true;
  facts: Fact[];
  slang: Slang[];
  takes: Take[];
  deepCuts: DeepCut[];
  quiz: Question[];
};

export const topics: Topic[] = [
  { slug: "nba", name: "NBA", category: "Sports", blurb: "Pro basketball. Big names, bigger opinions." },
  { slug: "the-office", name: "The Office", category: "Shows", blurb: "The US mockumentary everyone still quotes." },
  { slug: "elden-ring", name: "Elden Ring", category: "Games", blurb: "The very hard, very beloved FromSoftware game." },
  { slug: "formula-1", name: "Formula 1", category: "Sports", blurb: "Open-wheel racing, team drama, tyre talk." },
  { slug: "premier-league", name: "Premier League", category: "Sports", blurb: "English football. Someone at the table supports Arsenal." },
  { slug: "taylor-swift", name: "Taylor Swift", category: "Music", blurb: "Eras, easter eggs and very online fans." },
  { slug: "pokemon", name: "Pokémon", category: "Games", blurb: "Games, cards, and the generation debate." },
  { slug: "wine", name: "Wine", category: "Food & drink", blurb: "Enough to order a bottle without panicking." },
  { slug: "classic-cars", name: "Classic cars", category: "Cars", blurb: "Car-show small talk for the non-car person." },
];

export const packs: Pack[] = [
  {
    slug: "nba-starter",
    topic: "nba",
    title: "NBA: the starter pack",
    tagline: "Enough to survive a watch party and maybe start an argument.",
    minutes: 5,
    placeholder: true,
    facts: [
      { name: "LeBron James", detail: "The NBA's all-time leading scorer and a four-time champion. Half of every GOAT debate." },
      { name: "Michael Jordan", detail: "Six titles with the Bulls, six Finals MVPs, never lost a Finals. The other half of every GOAT debate." },
      { name: "Stephen Curry", detail: "Warriors guard who made the long three-pointer the centre of the modern game. Four titles." },
      { name: "Nikola Jokić", detail: "Denver's centre. Passes like a point guard, wins MVPs, looks like he'd rather be with his horses." },
      { name: "Victor Wembanyama", detail: "“Wemby.” A seven-foot-plus French Spurs star who moves like a guard. Fans call him an alien, affectionately." },
      { name: "The season", detail: "82 games from October to April, then a play-in, then best-of-seven playoff rounds. The Finals are in June." },
    ],
    slang: [
      { phrase: "He's cooking", meaning: "A player is scoring whenever he wants.", use: "“Leave him in, he's cooking.”" },
      { phrase: "Bucket", meaning: "A made shot. Also a player who scores a lot.", use: "“Say what you want, that man is a bucket.”" },
      { phrase: "And-one", meaning: "Fouled while making the shot, so you get a free throw too.", use: "Yell it when the whistle goes and the ball drops." },
      { phrase: "Brick", meaning: "An ugly miss that clangs off the rim.", use: "“Oof. Brick.”" },
      { phrase: "Ring chasing", meaning: "A veteran joining a contender just to win a title.", use: "“He's not washed, he's ring chasing.”" },
      { phrase: "Load management", meaning: "Resting a healthy star to keep him fresh for the playoffs.", use: "Say it with a sigh when a star sits out." },
    ],
    takes: [
      {
        take: "Rings don't decide the GOAT debate.",
        why: "A title depends on teammates, injuries and luck, not just one player.",
        pushback: "If they say “count the rings,” ask them where Bill Russell ranks. He has eleven.",
      },
      {
        take: "Load management is killing the regular season.",
        why: "Fans pay to see stars who then sit out healthy.",
        pushback: "If they defend it, agree playoffs matter more, then complain about ticket prices.",
      },
      {
        take: "Jokić is the most skilled big man ever.",
        why: "A centre who runs the offence like a point guard has never been this good.",
        pushback: "If they say Shaq, say Shaq was the most dominant. Skilled is a different word.",
      },
    ],
    deepCuts: [
      { fact: "Wilt Chamberlain scored 100 points in a single game in 1962. There's no video of it.", drop: "Use it when someone calls a 50-point game “historic.”" },
      { fact: "In 2016 the Cavaliers came back from 3–1 down against a Warriors team that went 73–9.", drop: "“Blew a 3–1 lead” is still the internet's favourite jab." },
      { fact: "The 24-second shot clock came in 1954. Before it, teams could hold the ball forever.", drop: "Bring it up when a game gets slow in the fourth quarter." },
      { fact: "Kobe Bryant scored 81 against the Raptors in 2006, the second-highest single game ever.", drop: "Mention it, then let the Kobe fan at the table take over." },
    ],
    quiz: [
      { q: "Your friend yells “He's cooking!” What's happening?", options: ["A player keeps scoring", "The team called a timeout", "Someone got ejected", "The food arrived"], answer: 0, explain: "Cooking means a player is scoring at will." },
      { q: "Who is the NBA's all-time leading scorer?", options: ["Michael Jordan", "Kobe Bryant", "LeBron James", "Stephen Curry"], answer: 2, explain: "LeBron passed Kareem Abdul-Jabbar for the record in 2023." },
      { q: "A star sits out a game while healthy. The word for it?", options: ["Ring chasing", "Load management", "A brick", "The play-in"], answer: 1, explain: "Load management: resting healthy players to save them for the playoffs." },
      { q: "Someone says “count the rings.” Your best comeback?", options: ["“Jordan has eleven.”", "“Then Bill Russell is the GOAT?”", "“Rings are for hockey.”", "“Curry has none.”"], answer: 1, explain: "Russell won eleven titles. It's the classic counter." },
      { q: "Who scored 100 points in a single game?", options: ["Wilt Chamberlain", "Kobe Bryant", "Shaquille O'Neal", "Nikola Jokić"], answer: 0, explain: "Wilt, in 1962. No video exists." },
    ],
  },
  {
    slug: "the-office-starter",
    topic: "the-office",
    title: "The Office: the starter pack",
    tagline: "For when the group chat is 80% quotes and you haven't seen it.",
    minutes: 5,
    placeholder: true,
    facts: [
      { name: "Dunder Mifflin", detail: "A struggling paper company. The show follows its branch in Scranton, Pennsylvania." },
      { name: "Michael Scott", detail: "Regional manager, played by Steve Carell. Desperate to be loved, says the worst thing at the worst moment." },
      { name: "Dwight Schrute", detail: "Salesman, beet farmer, volunteer sheriff's deputy. Takes everything too seriously." },
      { name: "Jim and Pam", detail: "The salesman and the receptionist. Their slow-burn romance is the heart of the show." },
      { name: "The format", detail: "A mockumentary: characters talk to the camera in “talking head” interviews. Nine seasons, 2005 to 2013." },
      { name: "The original", detail: "It's a remake of the British series by Ricky Gervais and Stephen Merchant." },
    ],
    slang: [
      { phrase: "That's what she said", meaning: "Michael's go-to joke after any accidental double meaning.", use: "Only drop it if someone sets it up perfectly." },
      { phrase: "Bears. Beets. Battlestar Galactica.", meaning: "Jim impersonating Dwight. Shorthand for listing things in a Dwight voice.", use: "Use it to mock a very confident list." },
      { phrase: "I declare bankruptcy!", meaning: "Michael thinking yelling it makes it official.", use: "When the bill arrives. Works every time." },
      { phrase: "Assistant to the regional manager", meaning: "Dwight's real title, which he keeps upgrading to “assistant regional manager.”", use: "For anyone inflating their job title." },
      { phrase: "Identity theft is not a joke, Jim!", meaning: "Dwight, furious, while Jim is dressed as Dwight.", use: "When someone copies your outfit." },
    ],
    takes: [
      {
        take: "The show should have ended when Michael left.",
        why: "Michael's goodbye in season 7 is the natural finale. The later seasons drift.",
        pushback: "If they love season 9, agree the actual finale is great. It's the middle that sags.",
      },
      {
        take: "Jim is kind of the villain.",
        why: "Smug pranks, endless camera looks, and he stays at a job he says he hates.",
        pushback: "If they defend Jim, say Dwight is the one who actually loves his job.",
      },
      {
        take: "The US version beats the UK one.",
        why: "It found its own warmth after a rough first season instead of only cringe.",
        pushback: "If they're a UK purist, admit the original did it first and in fewer episodes.",
      },
    ],
    deepCuts: [
      { fact: "Steve Carell was nominated for an Emmy for playing Michael Scott six times and never won.", drop: "Fans still bring it up as a crime. Agree loudly." },
      { fact: "Creed Bratton plays a character named Creed Bratton, and was really in the 60s band The Grass Roots.", drop: "Use it when someone says Creed is the best character." },
      { fact: "Kevin dropping his chili is the cold open of “Casual Friday” in season 5.", drop: "Name the episode and you sound like a rewatcher." },
      { fact: "“Dinner Party” in season 4 is the episode fans call the most uncomfortable thing on TV.", drop: "Say “Dinner Party” with a wince. That's the whole bit." },
    ],
    quiz: [
      { q: "Where is the Dunder Mifflin branch the show follows?", options: ["Stamford", "Scranton", "Pittsburgh", "Nashua"], answer: 1, explain: "Scranton, Pennsylvania." },
      { q: "Dwight's actual job title?", options: ["Assistant regional manager", "Regional manager", "Assistant to the regional manager", "Head of sales"], answer: 2, explain: "Assistant to the regional manager. The “to” matters." },
      { q: "Someone yells “I declare bankruptcy!” Who are they quoting?", options: ["Michael", "Jim", "Kevin", "Stanley"], answer: 0, explain: "Michael, who thinks saying it out loud is enough." },
      { q: "The Office is a remake of a show from…", options: ["Australia", "Canada", "The UK", "Ireland"], answer: 2, explain: "The British original by Ricky Gervais and Stephen Merchant." },
      { q: "Which episode do fans call the most uncomfortable?", options: ["“Dinner Party”", "“Casual Friday”", "“Goodbye, Michael”", "“The Dundies”"], answer: 0, explain: "“Dinner Party,” season 4." },
    ],
  },
  {
    slug: "elden-ring-starter",
    topic: "elden-ring",
    title: "Elden Ring: the starter pack",
    tagline: "So you can nod when someone says they finally beat Malenia.",
    minutes: 5,
    placeholder: true,
    facts: [
      { name: "FromSoftware", detail: "The studio behind Dark Souls and Elden Ring, led by director Hidetaka Miyazaki. Known for punishing, fair difficulty." },
      { name: "The Lands Between", detail: "The open world you explore. You play a “Tarnished,” brought back to become Elden Lord." },
      { name: "George R. R. Martin", detail: "The Game of Thrones author wrote the world's ancient mythology. The game's story is FromSoftware's." },
      { name: "Malenia", detail: "An optional boss and the hardest fight in the base game for most players. Her Waterfowl Dance attack is infamous." },
      { name: "Torrent", detail: "Your spectral horse. He can double-jump. Fans love him more than most characters." },
      { name: "Shadow of the Erdtree", detail: "The big 2024 expansion. Harder than the base game, which is saying something." },
    ],
    slang: [
      { phrase: "Git gud", meaning: "Classic Souls advice: stop complaining and improve.", use: "Say it as a joke, never to someone actually struggling." },
      { phrase: "Soulslike", meaning: "Any game built like FromSoftware's: hard bosses, stamina, dying a lot.", use: "“It's basically a soulslike.”" },
      { phrase: "Let me solo her", meaning: "A legendary player who beat Malenia for others wearing only a jar on his head.", use: "Bring him up whenever Malenia does." },
      { phrase: "Try finger, but hole", meaning: "A famous joke message players leave for each other on the ground.", use: "Never explain it. Just say it and grin." },
      { phrase: "Spirit ashes", meaning: "Summons that fight beside you. Some players call using them cheating.", use: "“I used the Mimic Tear, sue me.”" },
    ],
    takes: [
      {
        take: "Using spirit ashes isn't cheating.",
        why: "They're in the game on purpose. Playing how you want is the point.",
        pushback: "If they're a purist, say you'll go no-summons on your second run. You won't.",
      },
      {
        take: "Malenia is unfair.",
        why: "Waterfowl Dance punishes almost every normal dodge and she heals when she hits you.",
        pushback: "If they say she's fair, ask how many tries it took them.",
      },
      {
        take: "The open world is the best thing FromSoftware has made.",
        why: "Riding into a field and finding a dragon beats any corridor.",
        pushback: "If they say the castles are the real game, agree Stormveil is perfect.",
      },
    ],
    deepCuts: [
      { fact: "The Tree Sentinel boss waits right outside the starting area. It's there to teach you to leave and come back later.", drop: "Mention it when someone says the game is too hard at the start." },
      { fact: "Patches, a recurring con-man character from older FromSoftware games, hides in Murkwater Cave.", drop: "“Classic Patches” is a nod that marks a long-time fan." },
      { fact: "Most bosses wind up their swings and pause before striking, which ruins panic dodges.", drop: "Complain about “delayed attacks” and every fan will agree." },
    ],
    quiz: [
      { q: "Which studio made Elden Ring?", options: ["Bethesda", "FromSoftware", "Naughty Dog", "CD Projekt Red"], answer: 1, explain: "FromSoftware, the studio behind Dark Souls." },
      { q: "What's Torrent?", options: ["A sword", "A boss", "Your horse", "A spell"], answer: 2, explain: "Torrent is your spectral horse. He can double-jump." },
      { q: "A friend says they used spirit ashes. What did they do?", options: ["Summoned helpers", "Changed difficulty", "Respawned", "Skipped a boss"], answer: 0, explain: "Spirit ashes summon allies to fight with you." },
      { q: "Who is “Let me solo her”?", options: ["A developer", "A boss", "A famous player", "A streamer's horse"], answer: 2, explain: "A player who beat Malenia for others wearing just a jar on his head." },
      { q: "What did George R. R. Martin write for the game?", options: ["The whole story", "The world's mythology", "The boss names", "Nothing"], answer: 1, explain: "The ancient mythology. FromSoftware wrote the game's story." },
    ],
  },
];

export function getTopic(slug: string) {
  return topics.find((t) => t.slug === slug);
}

export function getPack(slug: string) {
  return packs.find((p) => p.slug === slug);
}

export function packsForTopic(slug: string) {
  return packs.filter((p) => p.topic === slug);
}

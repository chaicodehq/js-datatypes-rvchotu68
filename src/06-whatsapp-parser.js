/**
 * 💬 WhatsApp Message Parser
 *
 * Chintu ek WhatsApp chat analyzer bana raha hai. Usse raw WhatsApp
 * exported message line parse karni hai aur usme se date, time, sender,
 * aur message alag alag extract karna hai.
 *
 * WhatsApp export format:
 *   "DD/MM/YYYY, HH:MM - Sender Name: Message text here"
 *
 * Rules:
 *   - Date extract karo: string ke start se pehle ", " (comma-space) tak
 *   - Time extract karo: ", " ke baad se " - " (space-dash-space) tak
 *   - Sender extract karo: " - " ke baad se pehle ": " (colon-space) tak
 *   - Message text extract karo: pehle ": " ke baad (after sender) sab kuch, trimmed
 *   - wordCount: message ke words count karo (split by space, filter empty strings)
 *   - Sentiment detection (case-insensitive check on message text):
 *     - Agar message mein "😂" ya ":)" ya "haha" hai => sentiment = "funny"
 *     - Agar message mein "❤" ya "love" ya "pyaar" hai => sentiment = "love"
 *     - Otherwise => sentiment = "neutral"
 *     - Agar dono match hote hain, "funny" gets priority
 *   - Hint: Use indexOf(), substring()/slice(), includes(), split(),
 *     trim(), toLowerCase()
 *
 * Validation:
 *   - Agar input string nahi hai, return null
 *   - Agar string mein " - " nahi hai ya ": " nahi hai (after sender), return null
 *
 * @param {string} message - Raw WhatsApp exported message line
 * @returns {{ date: string, time: string, sender: string, text: string, wordCount: number, sentiment: string } | null}
 *
 * @example
 *   parseWhatsAppMessage("25/01/2025, 14:30 - Rahul: Bhai party kab hai? 😂")
 *   // => { date: "25/01/2025", time: "14:30", sender: "Rahul",
 *   //      text: "Bhai party kab hai? 😂", wordCount: 5, sentiment: "funny" }
 *
 *   parseWhatsAppMessage("01/12/2024, 09:15 - Priya: I love this song")
 *   // => { date: "01/12/2024", time: "09:15", sender: "Priya",
 *   //      text: "I love this song", wordCount: 4, sentiment: "love" }
 */
export function parseWhatsAppMessage(message) {
  // Your code here
  if (typeof message !== "string") return null;

  if (!/-\s[a-zA-Z0-9\s]+\:/.test(message)) return null;

  const parse = {
    date: "",
    time: "",
    sender: "",
    text: "",
    wordCount: 0,
    sentiment: "",
  };

  if (/haha|😂|\:\)/i.test(message.split(" - ")[1])) parse.sentiment = "funny";
  else if (/❤|love|pyaar/i.test(message.split(" - ")[1]))
    parse.sentiment = "love";
  else parse.sentiment = "neutral";

  message = message.split(",");
  const date = message[0];
  message.shift();

  let remStr = message[0];

  remStr = remStr.split(" - ");

  const time = remStr[0];
  const secondPart = remStr[1];

  const idx = secondPart.indexOf(":");

  const sender = secondPart.slice(0, idx);
  const msg = secondPart.slice(idx + 1, secondPart.length);

  parse.sender = sender.trimStart().trimEnd();
  parse.date = date.trimStart().trimEnd();
  parse.text = msg.trimStart().trimEnd();
  parse.time = time.trimStart().trimEnd();

  // console.log(msg.split(" "));
  parse.wordCount = msg.split(" ").filter((item) => item !== "").length;
  console.log(parse);
  return parse;
}

parseWhatsAppMessage("10/01/2025, 10:00 - Amit: Time is 5:30 okay?");

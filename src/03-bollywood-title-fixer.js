/**
 * 🎬 Bollywood Movie Title Fixer
 *
 * Pappu ne ek movie database banaya hai lekin usne saare titles galat type
 * kar diye - kuch ALL CAPS mein, kuch all lowercase mein, kuch mein extra
 * spaces hain. Tu fix kar de titles ko proper Title Case mein!
 *
 * Rules:
 *   - Extra spaces hatao: leading, trailing, aur beech ke multiple spaces ko
 *     single space banao
 *   - Har word ka pehla letter uppercase, baaki lowercase (Title Case)
 *   - EXCEPTION: Chhote words jo Title Case mein lowercase rehte hain:
 *     "ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"
 *     LEKIN agar word title ka PEHLA word hai toh capitalize karo
 *   - Hint: Use trim(), split(), map(), join(), charAt(), toUpperCase(),
 *     toLowerCase(), slice()
 *
 * Validation:
 *   - Agar input string nahi hai, return ""
 *   - Agar string trim karne ke baad empty hai, return ""
 *
 * @param {string} title - Messy Bollywood movie title
 * @returns {string} Cleaned up Title Case title
 *
 * @example
 *   fixBollywoodTitle("  DILWALE   DULHANIA   LE   JAYENGE  ")
 *   // => "Dilwale Dulhania Le Jayenge"
 *
 *   fixBollywoodTitle("dil ka kya kare")
 *   // => "Dil ka Kya Kare"
 */

const avoid = [
  "ka",
  "ki",
  "ke",
  "se",
  "aur",
  "ya",
  "the",
  "of",
  "in",
  "a",
  "an",
];

export function fixBollywoodTitle(title) {
  // Your code here
  if (typeof title !== "string") return "";

  title = title.trimStart().trimEnd();
  if (title === "") return "";

  title = title.toLowerCase();

  let title_arr = title.split(" ");

  console.log(typeof title_arr);

  title_arr = title_arr.filter((title) => title !== " " && title !== "");

  console.log(title_arr);

  let updated_title = [];

  for (let i = 0; i < title_arr.length; i++) {
    if (
      !avoid.includes(title_arr[i]) ||
      (avoid.includes(title_arr[i]) && i === 0)
    ) {
      const modified_title =
        title_arr[i][0].toUpperCase() + title_arr[i].slice(1);
      updated_title.push(modified_title);
    } else updated_title.push(title_arr[i]);
  }

  return updated_title.join(" ");
}

console.log(fixBollywoodTitle("kabhi   khushi   kabhi   gham"));

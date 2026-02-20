/**
 * ☕ Raju ki Chai Dukaan - Menu Formatter
 *
 * Raju bhai ne apni chai dukaan ka menu digitize karna decide kiya hai.
 * Items ka array milega, aur tujhe ek formatted menu string banana hai
 * jisme har item ka naam UPPERCASE mein ho aur price ke saath likha ho.
 *
 * Rules:
 *   - items ek array hai of objects: [{ name: "masala chai", price: 15 }, ...]
 *   - Har item ka naam toUpperCase() karo
 *   - Format: "NAAM - Rs.PRICE" (e.g., "MASALA CHAI - Rs.15")
 *   - Saare formatted items ko " | " se join karo
 *   - Items jinka price 0 ya negative hai, unhe skip karo (filter out)
 *   - Items jinka naam empty string hai ya string nahi hai, unhe bhi skip karo
 *   - Hint: Use Array.isArray(), filter(), map(), join(), toUpperCase()
 *
 * Validation:
 *   - Agar items array nahi hai ya empty hai, return ""
 *
 * @param {Array<{name: string, price: number}>} items - Menu items
 * @returns {string} Formatted menu string
 *
 * @example
 *   formatChaiMenu([{ name: "masala chai", price: 15 }, { name: "samosa", price: 12 }])
 *   // => "MASALA CHAI - Rs.15 | SAMOSA - Rs.12"
 *
 *   formatChaiMenu([])
 *   // => ""
 */
export function formatChaiMenu(items) {
  // Your code here

  if (!Array.isArray(items) || items.length === 0) return "";

  items = items.filter(
    (item) =>
      item.price > 0 && typeof item.name === "string" && item.name.length > 0,
  );
  let menu = "";

  items.forEach((item) => {
    menu += `${item.name.toUpperCase()} - Rs.${item.price},`;
  });

  menu = menu
    .slice(0, menu.length - 1)
    .split(",")
    .join(" | ");

  return menu;
}

console.log(
  formatChaiMenu([
    { name: "chai", price: 10 },
    { name: "pani", price: 0 },
    { name: "samosa", price: 12 },
  ]),
);

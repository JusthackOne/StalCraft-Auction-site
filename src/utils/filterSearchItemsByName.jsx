import { languageTranslator } from "./languageTranslator";

export function filterSearchItemsByName(name, items) {
  let data = [];
  name = name.toLowerCase();
  for (let key in items) {
    let item = items[key];
    if (
      item.name.lines.ru.toLowerCase().includes(name) ||
      item.name.lines.en.toLowerCase().includes(name) ||
      item.name.lines.ru
        .toLowerCase()
        .includes(languageTranslator(name, "ru")) ||
      item.name.lines.en.toLowerCase().includes(languageTranslator(name, "en"))
    ) {
      let id = "";
      let itemReversed = item.data.replace(".json", "").split("").reverse();

      for (let char in itemReversed) {
        if (itemReversed[char] !== "/") {
          id += String(itemReversed[char]);
        } else break;
      }

      id = id.split("").reverse().join("");

      data.push({
        title: item.name.lines.ru,
        icon: item.icon,
        id: id,
      });
    }
  }

  return data;
}

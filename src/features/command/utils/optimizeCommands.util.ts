export const optimizeCommands = (input: string): string => {
  if (!input) return "";

  // Step 1: обычная свёртка подряд идущих символов (4Л2В3П...)
  let simple = "";
  let count = 1;

  for (let i = 1; i <= input.length; i++) {
    const current = input[i];
    const prev = input[i - 1];

    if (current === prev) {
      count++;
    } else {
      simple += (count > 1 ? count : "") + prev;
      count = 1;
    }
  }

  // Step 2: поиск повторяющихся шаблонов и сворачивание в N(...)
  // Пример: 3Л3Н3Л3Н → 2(3Л3Н)
  for (let len = 2; len <= Math.floor(simple.length / 2); len++) {
    for (let i = 0; i <= simple.length - 2 * len; i++) {
      const pattern = simple.substring(i, i + len);
      const next = simple.substring(i + len, i + 2 * len);

      if (pattern === next) {
        // сколько раз повторяется подряд
        let repeats = 2;
        while (simple.substring(i + repeats * len, i + (repeats + 1) * len) === pattern) {
          repeats++;
        }

        if (repeats > 1) {
          const compressed = `${repeats}(${pattern})`;
          simple = simple.substring(0, i) + compressed + simple.substring(i + repeats * len);
          i += compressed.length - 1; // перескочим вперёд
        }
      }
    }
  }

  return simple;
};

export const expandOptimizedCommand = (cmd: string): string[] => {
  const result: string[] = [];
  const regex = /(\d*)([ЛПВНОБ])/gi;

  let match;
  while ((match = regex.exec(cmd)) !== null) {
    const count = parseInt(match[1] || "1", 10);
    const char = match[2].toUpperCase();
    result.push(...Array(count).fill(char));
  }

  return result;
};

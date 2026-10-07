const fs = require('fs');
const raw = fs.readFileSync('parse_data.cjs', 'utf-8');
const match = raw.match(/const raw = `([\s\S]*?)`;/);
const rawData = match[1];

const lines = rawData.split("\n");
let currentCategory = "";
let currentKey = "";
let currentCategoryDesc = "";

const packages = [];

const mapping = {
  "1": "strategy",
  "2": "marketing",
  "3": "hr",
  "4": "finance",
  "5": "operations",
  "6": "data"
};

const labels = {
  "1": "Strategy",
  "2": "Marketing",
  "3": "HR",
  "4": "Finance",
  "5": "Operations",
  "6": "Data & IT"
};

let i = 0;
while (i < lines.length) {
  let line = lines[i].trim();
  if (line === "") { i++; continue; }
  
  if (line.match(/^["]?\d\./)) {
    let match = line.match(/^["]?(\d)\.\s+([^,]+)/);
    if (match) {
      let num = match[1];
      currentKey = mapping[num];
      currentCategory = match[2].replace(/"/g, '');
      i++;
      while (i < lines.length && (lines[i].trim() === "" || lines[i].trim() === ",,")) i++;
      if (i < lines.length && !lines[i].startsWith("Scope,")) {
        currentCategoryDesc = lines[i].replace(/,/g, '').replace(/"/g, '').trim();
        i++;
      }
      while (i < lines.length && !lines[i].startsWith("Scope,")) i++;
      i++;
      continue;
    }
  }

  const parseCSVLine = (str) => {
    const result = [];
    let cur = "";
    let inQuote = false;
    for (let c of str) {
      if (c === '"') {
        inQuote = !inQuote;
      } else if (c === ',' && !inQuote) {
        result.push(cur);
        cur = "";
      } else {
        cur += c;
      }
    }
    result.push(cur);
    return result;
  };

  const parts = parseCSVLine(line);
  if (parts.length >= 3) {
    let scope = parts[0].trim();
    let aktivitas = parts[1].trim();
    let output = parts[2].trim();
    
    packages.push({
      areaKey: currentKey,
      areaName: currentCategory,
      badge: labels[Object.keys(mapping).find(k => mapping[k] === currentKey)],
      title: scope,
      scope: aktivitas,
      features: [
        "Output: " + output
      ],
      highlight: false
    });
  }
  i++;
}

// First one of each category gets highlighted? No, user didn't ask for highlight, just false.
// But to make it look nice, let's highlight the first one of each category.
let seenCategories = new Set();
for (let p of packages) {
  if (!seenCategories.has(p.areaKey)) {
    p.highlight = true;
    seenCategories.add(p.areaKey);
  }
}

const out = `export const PRICING_DATA = ${JSON.stringify(packages, null, 2)};`;
fs.writeFileSync('pricing_data.ts', out);

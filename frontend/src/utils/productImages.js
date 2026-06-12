const PRODUCT_ART = {
  "organic tomatoes": {
    label: "Organic Tomatoes",
    background: "#fff1f1",
    accent: "#d9342b",
    secondary: "#2f8f46",
    shapes: `
      <circle cx="116" cy="96" r="34" fill="#e5483f"/>
      <circle cx="162" cy="100" r="39" fill="#c9312b"/>
      <circle cx="209" cy="96" r="33" fill="#f05b4f"/>
      <path d="M143 62l16-25 17 25" fill="#2f8f46"/>
      <path d="M104 61l13-20 13 20" fill="#2f8f46"/>
      <path d="M196 61l13-20 13 20" fill="#2f8f46"/>
    `,
  },
  "green chillies": {
    label: "Green Chillies",
    background: "#effaf0",
    accent: "#16833a",
    secondary: "#75b843",
    shapes: `
      <path d="M68 126c72-62 151-63 194-24-52 9-124 25-194 24z" fill="#188f3e"/>
      <path d="M84 93c56-38 126-37 164-6-42 4-99 14-164 6z" fill="#5aa832"/>
      <path d="M238 86c17-12 25-26 22-42" fill="none" stroke="#5c4326" stroke-width="8" stroke-linecap="round"/>
    `,
  },
  "farm fresh carrots": {
    label: "Farm Fresh Carrots",
    background: "#fff4e7",
    accent: "#ef7d22",
    secondary: "#2f8f46",
    shapes: `
      <path d="M90 72l38 116 34-116z" fill="#f37f24"/>
      <path d="M154 70l41 122 35-122z" fill="#df6a1d"/>
      <path d="M113 70c-8-18-22-27-39-27 14 15 23 24 27 36" fill="#2f8f46"/>
      <path d="M143 71c7-21 22-32 46-33-18 15-28 29-33 42" fill="#4ba85d"/>
      <path d="M197 68c8-19 24-30 48-30-18 15-29 28-34 41" fill="#2f8f46"/>
    `,
  },
  "organic potatoes": {
    label: "Organic Potatoes",
    background: "#f7efe2",
    accent: "#9b6a3e",
    secondary: "#c79a62",
    shapes: `
      <ellipse cx="112" cy="112" rx="45" ry="34" fill="#b87d45"/>
      <ellipse cx="171" cy="99" rx="50" ry="38" fill="#c58a52"/>
      <ellipse cx="205" cy="136" rx="47" ry="34" fill="#a96f3d"/>
      <circle cx="101" cy="105" r="4" fill="#754820"/>
      <circle cx="174" cy="91" r="4" fill="#754820"/>
      <circle cx="211" cy="142" r="4" fill="#754820"/>
    `,
  },
  "fresh spinach": {
    label: "Fresh Spinach",
    background: "#eef9ee",
    accent: "#1f7f3a",
    secondary: "#80b85b",
    shapes: `
      <path d="M160 42c-46 22-73 56-82 105 43-5 78-30 105-76-4-12-11-21-23-29z" fill="#2e9b4b"/>
      <path d="M172 52c37 21 59 53 68 96-38-3-70-24-96-65 4-14 13-24 28-31z" fill="#1f7f3a"/>
      <path d="M88 164c39-31 72-62 98-94" fill="none" stroke="#d8f0c8" stroke-width="5" stroke-linecap="round"/>
    `,
  },
  "organic red apples": {
    label: "Organic Red Apples",
    background: "#fff0f2",
    accent: "#c92335",
    secondary: "#4f9a4a",
    shapes: `
      <circle cx="125" cy="112" r="46" fill="#d93242"/>
      <circle cx="190" cy="112" r="46" fill="#b91f32"/>
      <path d="M158 70c2-21 11-33 28-39" fill="none" stroke="#6e4024" stroke-width="8" stroke-linecap="round"/>
      <path d="M181 42c25 0 39 10 45 30-25 2-39-8-45-30z" fill="#4f9a4a"/>
    `,
  },
  "fresh alphonso mangoes": {
    label: "Alphonso Mangoes",
    background: "#fff7df",
    accent: "#f0a316",
    secondary: "#2f8f46",
    shapes: `
      <path d="M112 63c53-31 109 4 105 63-2 38-30 68-70 69-39 1-61-24-60-60 1-26 10-53 25-72z" fill="#f5b12b"/>
      <path d="M150 52c20-10 44-10 69 2-19 16-41 22-69-2z" fill="#2f8f46"/>
      <path d="M126 80c34-19 71 3 70 44" fill="none" stroke="#ffd56a" stroke-width="10" stroke-linecap="round"/>
    `,
  },
  "green grapes": {
    label: "Green Grapes",
    background: "#f2fae9",
    accent: "#7aac35",
    secondary: "#4d8c2c",
    shapes: `
      <circle cx="139" cy="79" r="20" fill="#a8c94c"/>
      <circle cx="112" cy="111" r="21" fill="#91b83f"/>
      <circle cx="164" cy="112" r="22" fill="#b7d760"/>
      <circle cx="136" cy="146" r="23" fill="#9fc64d"/>
      <circle cx="190" cy="146" r="20" fill="#8daf3b"/>
      <path d="M154 58c10-19 26-28 48-27" fill="none" stroke="#6b4d2f" stroke-width="7" stroke-linecap="round"/>
    `,
  },
  "pure cow milk": {
    label: "Pure Cow Milk",
    background: "#edf7ff",
    accent: "#3f8fbe",
    secondary: "#ffffff",
    shapes: `
      <path d="M124 53h72l13 40v94h-98V93z" fill="#ffffff" stroke="#3f8fbe" stroke-width="5"/>
      <path d="M124 53h72l-10 29h-52z" fill="#d7ecfb"/>
      <rect x="129" y="106" width="62" height="43" rx="8" fill="#3f8fbe"/>
      <text x="160" y="134" text-anchor="middle" font-size="18" font-weight="700" fill="#ffffff">MILK</text>
    `,
  },
  "farm fresh eggs": {
    label: "Farm Fresh Eggs",
    background: "#fff7ea",
    accent: "#d99b56",
    secondary: "#f4d9b1",
    shapes: `
      <ellipse cx="117" cy="119" rx="29" ry="42" fill="#f4d7ad"/>
      <ellipse cx="162" cy="112" rx="31" ry="45" fill="#fff6e4"/>
      <ellipse cx="206" cy="121" rx="29" ry="42" fill="#e5b579"/>
      <path d="M77 158c46 24 116 25 169 0" fill="none" stroke="#d99b56" stroke-width="12" stroke-linecap="round"/>
    `,
  },
  "natural forest honey": {
    label: "Forest Honey",
    background: "#fff8df",
    accent: "#d99416",
    secondary: "#6f4517",
    shapes: `
      <rect x="109" y="76" width="101" height="101" rx="18" fill="#e2a128"/>
      <rect x="124" y="58" width="72" height="28" rx="8" fill="#6f4517"/>
      <path d="M125 122c20 15 48 15 69 0v28c-20 15-49 15-69 0z" fill="#ffd45a"/>
      <text x="160" y="146" text-anchor="middle" font-size="17" font-weight="700" fill="#6f4517">HONEY</text>
    `,
  },
  "turmeric powder": {
    label: "Turmeric Powder",
    background: "#fff5d9",
    accent: "#d99000",
    secondary: "#87551a",
    shapes: `
      <circle cx="160" cy="123" r="62" fill="#e7a31b"/>
      <path d="M86 155c45 20 104 21 150 0" fill="none" stroke="#87551a" stroke-width="9" stroke-linecap="round"/>
      <path d="M122 104c24-14 55-15 78 0" fill="none" stroke="#ffd76d" stroke-width="9" stroke-linecap="round"/>
      <path d="M130 72l58-15" stroke="#87551a" stroke-width="8" stroke-linecap="round"/>
    `,
  },
  "red lentils (masoor)": {
    label: "Red Lentils",
    background: "#fff0ea",
    accent: "#c95735",
    secondary: "#ef9a72",
    shapes: `
      <ellipse cx="160" cy="127" rx="83" ry="48" fill="#d76542"/>
      <circle cx="110" cy="114" r="11" fill="#ef9a72"/>
      <circle cx="139" cy="141" r="10" fill="#ef9a72"/>
      <circle cx="168" cy="111" r="11" fill="#ef9a72"/>
      <circle cx="198" cy="139" r="10" fill="#ef9a72"/>
      <circle cx="218" cy="113" r="9" fill="#ef9a72"/>
    `,
  },
  "golden wheat grains": {
    label: "Wheat Grains",
    background: "#fff7dc",
    accent: "#c9972e",
    secondary: "#7f5a1b",
    shapes: `
      <path d="M160 48v136" stroke="#7f5a1b" stroke-width="7" stroke-linecap="round"/>
      <path d="M160 75c-24-24-42-31-55-21 7 19 25 26 55 21z" fill="#d7a23a"/>
      <path d="M160 102c-27-20-47-24-60-12 10 18 31 22 60 12z" fill="#e2b44f"/>
      <path d="M160 129c-27-18-46-20-58-7 11 17 31 19 58 7z" fill="#c9972e"/>
      <path d="M160 75c24-24 42-31 55-21-7 19-25 26-55 21z" fill="#d7a23a"/>
      <path d="M160 102c27-20 47-24 60-12-10 18-31 22-60 12z" fill="#e2b44f"/>
      <path d="M160 129c27-18 46-20 58-7-11 17-31 19-58 7z" fill="#c9972e"/>
    `,
  },
};

const CATEGORY_ICONS = {
  vegetables: {
    label: "Fresh Vegetables",
    background: "#eef9ee",
    accent: "#1f7f3a",
    secondary: "#80b85b",
    shapes: `<path d="M160 40c-40 20-60 50-70 90 40-5 70-30 90-70-4-10-10-20-20-20z" fill="#2e9b4b"/><path d="M160 50c30 20 50 40 60 80-30-2-60-20-80-60 4-12 10-20 20-20z" fill="#1f7f3a"/>`
  },
  fruits: {
    label: "Fresh Fruits",
    background: "#fff0f2",
    accent: "#c92335",
    secondary: "#4f9a4a",
    shapes: `<circle cx="160" cy="110" r="50" fill="#d93242"/><path d="M160 60c5-20 15-30 30-30-20 10-30 20-30 30z" fill="#4f9a4a"/>`
  },
  dairy: {
    label: "Dairy Products",
    background: "#edf7ff",
    accent: "#3f8fbe",
    secondary: "#ffffff",
    shapes: `<rect x="130" y="60" width="60" height="100" rx="10" fill="#ffffff" stroke="#3f8fbe" stroke-width="4"/><path d="M130 70h60" stroke="#3f8fbe" stroke-width="4"/>`
  },
  grains: {
    label: "Grains & Pulses",
    background: "#fff7dc",
    accent: "#c9972e",
    secondary: "#7f5a1b",
    shapes: `<path d="M160 50v120" stroke="#7f5a1b" stroke-width="6" stroke-linecap="round"/><path d="M160 80c-20-20-40-20-40 0 20 20 40 20 40 0z" fill="#d7a23a"/><path d="M160 80c20-20 40-20 40 0-20 20-40 20-40 0z" fill="#d7a23a"/>`
  },
  other: {
    label: "Fresh Produce",
    background: "#f7efe2",
    accent: "#9b6a3e",
    secondary: "#c79a62",
    shapes: `<rect x="110" y="80" width="100" height="80" rx="10" fill="#b87d45"/><path d="M110 80l20-30h60l20 30" fill="#a96f3d"/>`
  }
};

const CATEGORY_ART = {
  vegetables: CATEGORY_ICONS.vegetables,
  fruits: CATEGORY_ICONS.fruits,
  dairy: CATEGORY_ICONS.dairy,
  grains: CATEGORY_ICONS.grains,
  other: CATEGORY_ICONS.other,
};

const normalize = (value = "") => value.toString().trim().toLowerCase();

const renderProductSvg = (art) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" aria-label="${art.label}">
      <rect width="320" height="220" fill="${art.background}"/>
      <circle cx="275" cy="38" r="46" fill="${art.accent}" opacity="0.12"/>
      <circle cx="45" cy="182" r="52" fill="${art.secondary}" opacity="0.12"/>
      ${art.shapes}
      <rect x="34" y="178" width="252" height="30" rx="15" fill="#ffffff" opacity="0.88"/>
      <text x="160" y="199" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700" fill="#243126">${art.label}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

export const getFallbackProductImage = (product = {}) => {
  const art = PRODUCT_ART[normalize(product.name)] || CATEGORY_ART[normalize(product.category)] || CATEGORY_ART.other;
  return renderProductSvg(art);
};

export const getProductImage = (product = {}) => {
  if (product.image_url) {
    console.log(`Using image_url for: ${product.name}`);
    return product.image_url;
  }

  if (product.image) {
    console.log(`Using image for: ${product.name}`);
    return product.image;
  }

  const normalizedName = normalize(product.name);
  const knownArt = PRODUCT_ART[normalizedName];

  if (knownArt) {
    console.log(`Using PRODUCT_ART for: ${product.name}`);
    return renderProductSvg(knownArt);
  }

  console.log(`Using fallback for: ${product.name}`);
  return getFallbackProductImage(product);
};

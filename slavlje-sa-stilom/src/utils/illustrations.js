// Deterministic line-art SVG generator used in place of product photography.
// Ported from the mockup's seeded-random drawing routine; each shape is drawn
// with plain SVG primitives so no image assets are needed.

let seed = 42;
function nextRandom() {
  seed = (seed * 1103515245 + 12345) % 2147483648;
  return seed / 2147483648;
}

function drawBalloon(x, y, r, color) {
  return (
    `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/>` +
    `<circle cx="${x - r * 0.3}" cy="${y - r * 0.34}" r="${r * 0.17}" fill="#fff" opacity="0.4"/>`
  );
}

const BACKGROUNDS = {
  number: '#FFF6D6',
  bouquet: '#FDE7F1',
  confetti: '#F1ECFD',
  giant: '#DFF4F3',
  arch: '#FDE7F1',
  backdrop: '#DFF4F3',
  table: '#F1ECFD',
  sign: '#FFF6D6',
  tableSet: '#FDE7F1',
  pinata: '#DFF4F3',
  poppers: '#FFF6D6',
  hats: '#F1ECFD',
  box: '#FFF6D6',
  basket: '#F1ECFD',
  candyBouquet: '#FDE7F1',
  card: '#DFF4F3',
};

function buildIllustration(type, colors, width = 320, height = 240) {
  const background = BACKGROUNDS[type] || '#F7F5FA';
  const cx = width / 2;
  const [a, b = a, c = a, d = b] = colors;
  let svg = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">`;
  svg += `<rect width="${width}" height="${height}" fill="${background}"/>`;

  switch (type) {
    case 'number':
      svg += `<path d="M${cx - 46} ${height * 0.32} q26 -34 52 0 v78 q-26 34 -52 0 z" fill="${a}"/>`;
      svg += `<ellipse cx="${cx - 20}" cy="${height * 0.56}" rx="16" ry="26" fill="${background}"/>`;
      svg += `<path d="M${cx + 30} ${height * 0.34} h30 v76" stroke="${b}" stroke-width="20" fill="none" stroke-linecap="round"/>`;
      svg += `<path d="M${cx - 20} ${height * 0.78} q10 22 -6 34" stroke="#191426" stroke-width="2" fill="none"/>`;
      break;

    case 'bouquet':
      for (let i = 0; i < 9; i++) {
        const ax = cx - 60 + (i % 3) * 60;
        const ay = height * 0.24 + Math.floor(i / 3) * 40 + nextRandom() * 10;
        svg += `<line x1="${ax}" y1="${ay}" x2="${cx}" y2="${height * 0.86}" stroke="#191426" stroke-width="1.2" opacity=".45"/>`;
      }
      for (let j = 0; j < 9; j++) {
        const bx = cx - 60 + (j % 3) * 60;
        const by = height * 0.24 + Math.floor(j / 3) * 40;
        svg += drawBalloon(bx, by, 23, [a, b, c][j % 3]);
      }
      svg += `<rect x="${cx - 14}" y="${height * 0.86}" width="28" height="18" rx="4" fill="#191426"/>`;
      break;

    case 'confetti':
      svg += `<circle cx="${cx}" cy="${height * 0.45}" r="62" fill="#fff" stroke="${a}" stroke-width="3"/>`;
      for (let k = 0; k < 22; k++) {
        const t = nextRandom() * Math.PI * 2;
        const rr = nextRandom() * 48;
        svg += `<rect x="${cx + Math.cos(t) * rr}" y="${height * 0.45 + Math.sin(t) * rr}" width="7" height="7" rx="1.5" fill="${k % 2 ? a : b}" transform="rotate(${nextRandom() * 90} ${cx} ${height * 0.45})"/>`;
      }
      svg += `<line x1="${cx}" y1="${height * 0.45 + 62}" x2="${cx}" y2="${height * 0.92}" stroke="#191426" stroke-width="1.6"/>`;
      break;

    case 'giant':
      svg += drawBalloon(cx, height * 0.44, 72, a);
      for (let m = 0; m < 10; m++) {
        svg += drawBalloon(cx - 70 + nextRandom() * 140, height * 0.2 + nextRandom() * 50, 7 + nextRandom() * 7, b);
      }
      break;

    case 'arch':
      for (let n = 0; n <= 22; n++) {
        const tt = Math.PI * (n / 22);
        const x2 = cx - Math.cos(tt) * 128 + (nextRandom() - 0.5) * 12;
        const y2 = height * 0.92 - Math.sin(tt) * 150 + (nextRandom() - 0.5) * 12;
        svg += drawBalloon(x2, y2, 11 + nextRandom() * 9, [a, b, c, d][n % 4]);
      }
      break;

    case 'backdrop':
      svg += `<rect x="${cx - 88}" y="${height * 0.16}" width="176" height="150" rx="10" fill="#fff" stroke="${a}" stroke-width="3"/>`;
      svg += `<rect x="${cx - 58}" y="${height * 0.34}" width="116" height="10" rx="5" fill="${a}"/>`;
      svg += `<rect x="${cx - 40}" y="${height * 0.46}" width="80" height="8" rx="4" fill="${b}"/>`;
      for (let q = 0; q < 7; q++) {
        svg += drawBalloon(cx - 88 + q * 12 + (q > 3 ? 150 : 0), height * 0.16 + q * 16, 12, q % 2 ? a : b);
      }
      break;

    case 'table':
      svg += `<rect x="${cx - 95}" y="${height * 0.62}" width="190" height="12" rx="6" fill="#191426"/>`;
      svg += `<rect x="${cx - 88}" y="${height * 0.74}" width="176" height="34" fill="#fff" opacity=".8"/>`;
      svg += `<rect x="${cx - 60}" y="${height * 0.46}" width="44" height="40" rx="5" fill="#fff"/>`;
      svg += `<rect x="${cx - 60}" y="${height * 0.46}" width="44" height="11" rx="5" fill="${a}"/>`;
      svg += `<circle cx="${cx + 30}" cy="${height * 0.55}" r="24" fill="#fff"/><circle cx="${cx + 30}" cy="${height * 0.55}" r="12" fill="${b}"/>`;
      for (let p = 0; p < 5; p++) {
        svg += drawBalloon(cx - 70 + p * 36, height * 0.2 + (p % 2 ? 14 : 0), 17, p % 2 ? a : b);
      }
      break;

    case 'sign': {
      svg += `<rect x="${cx - 96}" y="${height * 0.3}" width="192" height="86" rx="8" fill="${b}"/>`;
      const letters = [0, 1, 2, 3, 4];
      letters.forEach((_, i2) => {
        svg += `<rect x="${cx - 78 + i2 * 34}" y="${height * 0.38}" width="24" height="52" rx="4" fill="${a}"/>`;
      });
      for (let z = 0; z < 5; z++) {
        svg += `<circle cx="${cx - 66 + z * 34}" cy="${height * 0.44}" r="4" fill="#fff"/>`;
      }
      break;
    }

    case 'tableSet':
      svg += `<circle cx="${cx - 46}" cy="${height * 0.5}" r="40" fill="#fff"/><circle cx="${cx - 46}" cy="${height * 0.5}" r="27" fill="${a}"/>`;
      svg += `<path d="M${cx + 26} ${height * 0.34} h44 l-7 62 h-30 z" fill="${b}"/>`;
      svg += `<rect x="${cx + 18}" y="${height * 0.3}" width="6" height="70" rx="3" fill="${a}" transform="rotate(14 ${cx + 18} ${height * 0.3})"/>`;
      break;

    case 'pinata':
      svg += `<path d="M${cx - 54} ${height * 0.38} h108 l-16 74 h-76 z" fill="${a}"/>`;
      for (let w = 0; w < 5; w++) {
        svg += `<rect x="${cx - 54}" y="${height * 0.38 + w * 15}" width="108" height="6" fill="${b}" opacity=".85"/>`;
      }
      svg += `<line x1="${cx}" y1="${height * 0.14}" x2="${cx}" y2="${height * 0.38}" stroke="#191426" stroke-width="2"/>`;
      svg += `<rect x="${cx + 58}" y="${height * 0.5}" width="8" height="60" rx="4" fill="#191426" transform="rotate(18 ${cx + 58} ${height * 0.5})"/>`;
      break;

    case 'poppers':
      for (let pr = 0; pr < 4; pr++) {
        const px = cx - 54 + pr * 36;
        svg += `<rect x="${px}" y="${height * 0.5}" width="9" height="60" rx="4" fill="${b}"/>`;
        svg += `<path d="M${px + 4.5} ${height * 0.5} l-12 -30 M${px + 4.5} ${height * 0.5} l0 -38 M${px + 4.5} ${height * 0.5} l12 -30" stroke="${a}" stroke-width="3" stroke-linecap="round"/>`;
      }
      break;

    case 'hats':
      for (let kp = 0; kp < 3; kp++) {
        const kx = cx - 70 + kp * 70;
        svg += `<path d="M${kx} ${height * 0.68} l26 -76 l26 76 z" fill="${kp % 2 ? a : b}"/>`;
        svg += `<circle cx="${kx + 26}" cy="${height * 0.68 - 78}" r="7" fill="#fff"/>`;
      }
      break;

    case 'box':
      svg += `<rect x="${cx - 52}" y="${height * 0.55}" width="104" height="76" rx="6" fill="${a}"/>`;
      svg += `<rect x="${cx - 8}" y="${height * 0.55}" width="16" height="76" fill="${b}"/>`;
      for (let ku = 0; ku < 7; ku++) {
        svg += drawBalloon(cx - 56 + ku * 19, height * 0.34 - nextRandom() * 40, 11, ku % 2 ? b : '#E31C79');
      }
      break;

    case 'basket':
      svg += `<path d="M${cx - 58} ${height * 0.54} h116 l-12 68 h-92 z" fill="${a}"/>`;
      svg += `<path d="M${cx - 40} ${height * 0.54} a40 40 0 0 1 80 0" fill="none" stroke="${a}" stroke-width="6"/>`;
      svg += drawBalloon(cx + 2, height * 0.3, 22, b);
      svg += `<rect x="${cx - 44}" y="${height * 0.58}" width="34" height="26" rx="4" fill="#fff"/>`;
      break;

    case 'candyBouquet':
      svg += `<path d="M${cx - 20} ${height * 0.92} l14 -46 h12 l14 46 z" fill="#fff"/>`;
      for (let bs = 0; bs < 8; bs++) {
        const bx2 = cx - 52 + (bs % 4) * 35;
        const by2 = height * 0.3 + Math.floor(bs / 4) * 34;
        svg += `<circle cx="${bx2}" cy="${by2}" r="15" fill="${bs % 2 ? a : b}"/>`;
        svg += `<line x1="${bx2}" y1="${by2}" x2="${cx}" y2="${height * 0.7}" stroke="#191426" stroke-width="1" opacity=".35"/>`;
      }
      break;

    case 'card':
      svg += `<rect x="${cx - 56}" y="${height * 0.26}" width="112" height="120" rx="6" fill="#fff" stroke="${a}" stroke-width="2.5"/>`;
      svg += `<rect x="${cx - 36}" y="${height * 0.38}" width="72" height="9" rx="4.5" fill="${b}"/>`;
      svg += `<rect x="${cx - 36}" y="${height * 0.5}" width="52" height="7" rx="3.5" fill="${a}" opacity=".5"/>`;
      svg += `<rect x="${cx - 36}" y="${height * 0.6}" width="62" height="7" rx="3.5" fill="${a}" opacity=".5"/>`;
      break;

    default:
      svg += drawBalloon(cx, height * 0.5, 44, a);
  }

  svg += '</svg>';
  return svg;
}

const illustrationCache = new Map();

// Illustrations are generated from a shared pseudo-random sequence, so each
// one must be computed exactly once (and cached) instead of on every render.
export function getIllustration(cacheKey, type, colors, width, height) {
  if (!illustrationCache.has(cacheKey)) {
    illustrationCache.set(cacheKey, buildIllustration(type, colors, width, height));
  }
  return illustrationCache.get(cacheKey);
}

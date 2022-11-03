export function stringToColour(str: string) {
  let hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (var i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}

export function contrastingColor(color) {
  return luma(color) >= 165 ? '#000' : '#fff';
}
function luma(color) {
  // color can be a hx string or an array of RGB values 0-255
  const rgb = typeof color === 'string' ? hexToRGBArray(color) : color;
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]; // SMPTE C, Rec. 709 weightings
}
function hexToRGBArray(color) {
  if (color.length === 3) color = color.charAt(0) + color.charAt(0) + color.charAt(1) + color.charAt(1) + color.charAt(2) + color.charAt(2);
  else if (color.length !== 6) throw 'Invalid hex color: ' + color;
  const rgb = [];
  for (let i = 0; i <= 2; i++) rgb[i] = parseInt(color.substr(i * 2, 2), 16);
  return rgb;
}

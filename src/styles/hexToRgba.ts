/* eslint-disable no-bitwise, no-param-reassign */
export interface IRGB {
    r: number;
    g: number;
    b: number;
}

const RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

const parseHexString = (value: string): IRGB => {
    let hex: string | string[] = value;

    if (hex.match(RE_HEX)) {
        if (hex.length === 4 || hex.length === 7) {
            hex = hex.substr(1);
        }

        if (hex.length === 3) {
            hex = hex.split('');
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }

        const u = parseInt(hex, 16);
        const r = u >> 16;
        const g = (u >> 8) & 0xff;
        const b = u & 0xff;

        return { r, g, b };
    }

    throw new Error(`unknown hex color: ${hex}`);
};

const hexToRgba = (hex: string, alpha?: number): string => {
    const { r, g, b } = parseHexString(hex);

    if (alpha !== undefined) {
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    return `rgb(${r}, ${g}, ${b})`;
};

export default hexToRgba;

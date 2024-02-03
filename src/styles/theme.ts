import { breakpoints } from './mixins';

enum EColor {
    accent = 'accent',
    darkAccent = 'darkAccent',
    lightBlue = 'lightBlue',
    white = 'white',
    black = 'black',
    darkGrey = 'darkGrey',
    grey = 'grey',
    lightGrey = 'lightGrey',
}

enum EBreakpoint {
    mobileS = 'mobileS',
    mobileM = 'mobileM',
    mobileL = 'mobileL',
    tablet = 'tablet',
    laptop = 'laptop',
    laptopM = 'laptopM',
    laptopL = 'laptopL',
    fourK = 'fourK',
}

enum ETransition {
    duration = 'duration',
}

enum EZIndex {
    header = 'header',
    drawer = 'drawer',
    modal = 'modal',
}

enum EDimention {
    headerHeightMobile = 'headerHeightMobile',
    headerHeightDesktop = 'headerHeightDesktop',
}

export type TColor = Record<keyof typeof EColor, string>;
export type TBreakpoint = Record<keyof typeof EBreakpoint, number>;
export type TTransition = Record<keyof typeof ETransition, number>;
export type TDimention = Record<keyof typeof EDimention, number>;
export type TZIndex = Record<keyof typeof EZIndex, number>;

export type TTheme = {
    theme: {
        color: TColor;
        breakpoint: TBreakpoint;
        transition: TTransition;
        dimention: TDimention;
        zIndex: TZIndex;
    };
};

const theme: TTheme['theme'] = {
    color: {
        accent: '#03A9F4',
        darkAccent: '#0288D1',
        lightBlue: '#B3E5FC',
        white: '#FFFFFF',
        black: '#212121',
        darkGrey: '#757575',
        grey: '#9E9E9E',
        lightGrey: '#BDBDBD',
    },
    breakpoint: breakpoints,
    transition: {
        duration: 300,
    },
    dimention: {
        headerHeightMobile: 50,
        headerHeightDesktop: 80,
    },
    zIndex: {
        header: 1100,
        drawer: 1200,
        modal: 1300,
    },
};

export default theme;

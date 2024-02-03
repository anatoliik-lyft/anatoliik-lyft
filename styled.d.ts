// import original module declarations
import 'styled-components';

import type { TTheme, TColor, TBreakpoint, TTransition, TDimention, TZIndex } from './src/styles/theme';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        color: TColor;
        breakpoint: TBreakpoint;
        transition: TTransition;
        dimention: TDimention;
        zIndex: TZIndex;
    }
}

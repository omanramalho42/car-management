import 'styled-components'

declare module 'styled-components' {
    
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;

            effect: string;
            effect_secondary: string;

            input: string;
            input_effect:string;

            button: string;
            button_effect: string;

            text: string;
            text_dark: string;

            danger: string;
            success: string;
            warning: string;
            info: string;
        }
    } 
}


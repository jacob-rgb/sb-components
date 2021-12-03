/// <reference types="react" />
import './MyLabel.css';
export interface Props {
    /**
    * Mensaje a mostrar en la etiqueta
    */
    label: string;
    /**
    * Tamaño del componente
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalizar Texto
     */
    allCaps?: boolean;
    /**
    * Color del texto
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color del texto
     */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: Props) => JSX.Element;

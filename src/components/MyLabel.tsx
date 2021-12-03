import './MyLabel.css';

export interface Props {
    
     /**
     * Mensaje a mostrar en la etiqueta
     */
    label: string;

     /**
     * Tamaño del componente 
     */
    size?: 'normal'|'h1'|'h2'|'h3';

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

export const MyLabel = ( {label='No Label', size = 'normal', allCaps = false, color='primary', fontColor}: Props ) => {
    if(allCaps) label = label.toUpperCase();
    return (
        <span style={{color: fontColor}} className={ `label ${size} text-${color}` } >{label}</span>
    )
}

export default MyLabel;

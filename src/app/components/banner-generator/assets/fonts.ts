export interface Font {
    name: string;
    description: string;
    weights: number[];
    id: number;
}

export const FONTS: Font[] = [
    {
        id: 0,
        name: 'Poppins',
        description: "'Poppins', sans-serif",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    {
        id: 1,
        name: 'Montserrat',
        description: "'Montserrat', sans-serif",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    {
        id: 2,
        name: 'Roboto',
        description: "'Roboto', sans-serif",
        weights: [100, 300, 400, 500, 700, 900]
    },
    {
        id: 3,
        name: 'Open Sans',
        description: "'Open Sans', sans-serif",
        weights: [300, 400, 600, 700]
    },
    {
        id: 4,
        name: 'Lato',
        description: "'Lato', sans-serif",
        weights: [100, 300, 400, 700, 900]
    },
    {
        id: 5,
        name: 'Ubuntu',
        description: "'Ubuntu', sans-serif",
        weights: [300, 400, 500, 700]
    },
    {
        id: 6,
        name: 'Merriweather',
        description: "'Merriweather', serif",
        weights: [300, 400, 700, 900]
    },
    {
        id: 7,
        name: 'Playfair Display',
        description: "'Playfair Display', serif",
        weights: [400, 500, 600, 700, 800, 900]
    },
    {
        id: 8,
        name: 'Cormorant Garamond',
        description: "'Cormorant Garamond', serif",
        weights: [300, 400, 500, 600, 700]
    },
    {
        id: 9,
        name: 'Lora',
        description: "'Lora', serif",
        weights: [400, 500, 600, 700]
    },
    {
        id: 10,
        name: 'Bitter',
        description: "'Bitter', serif",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    {
        id: 11,
        name: 'Arvo',
        description: "'Arvo', serif",
        weights: [400, 700]
    }
]
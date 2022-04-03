export interface Wudtime {
    type: 'fun' | 'skills' | 'purpose' | ''
    subtype:
    {
        name:  string;
        activities: Array<{}>
    }
    activity: string | '' , // cañas y tapas, picnic,
    date: string | '' , // '2020-01-01'
    time: string | '' , // '12:00'
    duration: string | '' , // '1h'
    location: string | '' , // 'Casa'
    notes: string | '' , // 'Casa'
    userId: string | '' | undefined  // User firebase ID
}


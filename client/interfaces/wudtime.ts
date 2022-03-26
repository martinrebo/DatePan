export interface Wudtime {
    type: 'fun' | 'skills' | 'purpose' | ''
    subtype:
    {
        name:  string;
        activities: Array<{}>
    }
    activity: string | '' // cañas y tapas, picnic

}


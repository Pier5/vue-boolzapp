// Milestone 2
// ● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, 
// visualizzare tutti i
// messaggi relativi al contatto attivo all’interno del pannello della 
// conversazione


const app = new Vue ({
    el: '#app',
    data: {
        
        activeIndex: 0,
        usersList: [
            {
                name: 'Michele',
                img: 'avatar_1.jpg',
                text: 'Ultimo messaggio inviato',
                access: 'Ultimo accesso oggi alle',
                time: '12:00',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                    },
                ],
            },
            {
                name: 'Fabio',
                img: 'avatar_2.jpg',
                text: 'Ultimo messaggio inviato',
                time: '12:00',
                access: 'Ultimo accesso oggi alle',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao come va?',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto bene!',
                        status: 'received',
                    },
                ],

            },
            {
                name: 'Samuele',
                img: 'avatar_3.jpg',
                text: 'Ultimo messaggio inviato',
                time: '12:00',
                access: 'Ultimo accesso oggi alle',

            },
            {
                name: 'Alessandro B.',
                img: 'avatar_4.jpg',
                text: 'Ultimo messaggio inviato',
                time: '12:00',
                access: 'Ultimo accesso oggi alle',

            },
            {
                name: 'Alessandro L.',
                img: 'avatar_5.jpg',
                text: 'Ultimo messaggio inviato',
                time: '12:00',
                access: 'Ultimo accesso oggi alle',

            },
            {
                name: 'Claudia',
                img: 'avatar_6.jpg',
                text: 'Ultimo messaggio inviato',
                time: '12:00',
                access: 'Ultimo accesso oggi alle',

            },
            {
                name: 'Federico',
                img: 'avatar_7.jpg',
                text: 'Ultimo messaggio inviato',
                time: '12:00',
                access: 'Ultimo accesso oggi alle',

            },
            {
                name: 'Davide',
                img: 'avatar_8.jpg',
                text: 'Ultimo messaggio inviato',
                time: '12:00',
                access: 'Ultimo accesso oggi alle',

            },
        ],
        
    },
    methods: {
       getUser() {
           return this.usersList[this.activeIndex];
        },  
    },
   
})



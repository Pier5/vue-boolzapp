const app = new Vue ({
    el: '#app',
    data: {
        
        searchName: '',
        newMessage: '',
        activeIndex: 0,
        mainUser: [{
            name: 'Pier',
            img: 'avatar_8.jpg',
        }],
        usersList: [
            {
                name: 'Michele',
                img: 'avatar_1.jpg',
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
                time: '12:00',
                access: 'Ultimo accesso oggi alle',
                messages: [
                    {
                        date: '10/01/2020 13:41:09',
                        message: 'Ciao come va?',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 14:22:10',
                        message: 'Tutto bene!',
                        status: 'received',
                    },
                ],
            },
            {
                name: 'Samuele',
                img: 'avatar_3.jpg',
                time: '12:00',
                access: 'Ultimo accesso oggi alle',
                messages: [
                    {
                        date: '10/01/2020 08:12:55',
                        message: 'Dove sei?',
                        status: 'received',
                    },
                    {
                        date: '10/01/2020 12:50:00',
                        message: 'OH!!',
                        status: 'received',
                    },
                    {
                        date: '10/01/2020 18:12:11',
                        message: 'ischida!!',
                        status: 'received',
                    },
                ],
            },
            {
                name: 'Alessandro B.',
                img: 'avatar_4.jpg',
                time: '12:00',
                access: 'Ultimo accesso oggi alle',
                messages: [
                    {
                        date: '10/01/2020 10:00:21',
                        message: 'Calcetto alle 22?',
                        status: 'sent',
                    },
                ], 
            },
            {
                name: 'Alessandro L.',
                img: 'avatar_5.jpg',
                time: '12:00',
                access: 'Ultimo accesso oggi alle',
                messages: [
                    {
                        date: '10/01/2020 11:30:55',
                        message: 'Hai sentito Anto?',
                        status: 'received',
                    },
                    {
                        date: '10/01/2020 12:50:00',
                        message: 'chiamalo!!',
                        status: 'received',
                    },
                ],
            },
            {
                name: 'Claudia',
                img: 'avatar_6.jpg',
                time: '12:00',
                access: 'Ultimo accesso oggi alle',
                messages: [
                    {
                        date: '9/01/2020 11:30:55',
                        message: 'Per oggi non ce la faccio',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 12:50:00',
                        message: 'Domani come sei messa?',
                        status: 'sent',
                    },
                ],
            },
            {
                name: 'Federico',
                img: 'avatar_7.jpg',
                time: '12:00',
                access: 'Ultimo accesso oggi alle',
                messages: [
                    {
                        date: '10/01/2020 21:30:55',
                        message: 'Hai ordinato la pizza?',
                        status: 'received',
                    },
                    {
                        date: '10/01/2020 21:50:00',
                        message: 'Ancora no..',
                        status: 'sent',
                    },
                    {
                        date: '11/01/2020 22:15:22',
                        message: 'Aioooooooo',
                        status: 'received',
                    },
                ],
            },
        ],
        randomAnswers: [
            'Non posso',
            'Ho il covid!!',
            'Stasera alle 22',
            'Ho preso le birre..',
            'Penso domani',
            'Non importa se vinci di un pollice o di un miglio, vincere è vincere',
            'Sai che questa non è una gara di 10 secondi. “Non ho altro che tempo.',
            'Non giri le spalle alla famiglia, anche quando sono loro a farlo.',
            'Vivo la mia vita un quarto di miglio alla volta.',
        ]
        
    },
    methods: {
        getUser() {
            return this.usersList[this.activeIndex];
        },
        getTime(data){
            let date = new Date(data.date);
            return date.toLocaleString("it-IT", {timeStyle: 'short'});
        },
        sendMessage() {
            if(this.newMessage.trim() != '') {
                this.buildMessage(this.newMessage, 'sent');
                this.newMessage = '';
                this.messageAnswer();
            }
        },
        messageAnswer(){
            setTimeout( () => {
                let randomAnswer = Math.floor(Math.random() * this.randomAnswers.length);
                this.buildMessage(this.randomAnswers[randomAnswer], 'received');
            }, 1000)
        },
        buildMessage(message, status) {
            this.usersList[this.activeIndex].messages.push({
                date: new Date().toLocaleString("en-EN"),
                message: message, 
                status: status,
            });
        },
        filterList() {
            return this.usersList.filter(user => {
                return user.name.toLowerCase().includes(this.searchName.toLowerCase())
            })
        },
        deleteMessage(index) {
            this.usersList[this.activeIndex].messages.splice(index, 1);
        },
        getLastMsg(index) {    
            return this.usersList[index].messages.slice().reverse(); 
        },
    }, 
    
})



// - predisporre una lista di frasi e/o citazioni da utilizzare al posto della 
// risposta "ok:" quando il pc risponde, anziché scrivere "ok", scegliere una 
// frase random dalla lista e utilizzarla come testo del messaggio di risposta 
// del pc
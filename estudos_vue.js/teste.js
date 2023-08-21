const app = {
    data() {
        return {
            name: 'WALLECKS',
            lastName: ' ALENCAR ',
         
            
            products:[
                {
                    title: ' eu sou a lenda',
                    description: 'ultimo sobrevivente de um virus mortal',
                    image: './images/eusoualenda.jpg',
                },
                {
                    title: 'elysium',
                    description: 'uma vida fora da terra',
                    image: './images/elysium.jpeg',
                },

            ],

            carro: [], 
                
            
        }
    },
    methods: {
        addCarro(products){
            return this.carro.push(products) != -1
        }
    },
}
Vue.createApp(app).mount('#app')
 
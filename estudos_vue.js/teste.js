const app =
{
    data() {
        return {
            name: 'wallecks',
            lastName: 'alencar',
            product:
            {
                title:  'eu sou a lenda',
                description: 'um grande virus atacou a cidade de nova york...',
                image: './images/eusoualenda.jpg'
            }      
        }
    }

}

Vue.createApp(app).mount('#app')
 
const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inventory: 10
        }
    },
    methods: {
        checkStock() {
            if (this.inventory > 10) {
                return 'In Stock';
            } else if (this.inventory <= 10 && this.inventory > 0) {
                return `There are ${this.inventory} left, almost sold out!`;
            } else {
                return 'Out of Stock';
            }
        }
    }
})

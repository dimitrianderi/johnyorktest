import { text } from './seeders/text.js';
const App = {
    data() {
        return {
            images: [
                './img/John York-1.jpg',
                './img/John York-2.jpg',
                './img/John York-3.jpg',
                './img/John York-4.jpg',
                './img/John York-5.jpg',
                './img/John York-6.jpg',
                './img/John York-7.jpg',
                './img/John York-8.jpg',
            ],
            isLoading: false,
            isTextFull: false,
            isFullGallery: false,
            text,
            shortHeight: '',
            isOpenBurger: false
        }
    },
    methods: {
        addImages() {
            this.isLoading = true;
            setTimeout(() => {
                for (let i = 1; i <= 8; i++) {
                    this.images.push(`./img/John York-${this.images.length + 1}.jpg`);
                    if (this.images.length >= 40) {
                        this.isFullGallery = true
                        break
                    }
                }
                this.isLoading = false;
            }, 200);
        },
        toggleFull() {
            if (!this.isTextFull) {
                this.shortHeight = this.$refs['content'].clientHeight + 'px'
                this.$refs['content'].style.maxHeight = this.$refs['content'].scrollHeight + 'px'
            } else {
                this.$refs['content'].style.maxHeight = this.shortHeight
            }
            this.isTextFull = !this.isTextFull;
        },
        scrollToSection(e) {
            this.toggleBurger()
            const blockID = e.currentTarget.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        },
        toggleBurger() {
            this.isOpenBurger = !this.isOpenBurger
        }
    }
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {


        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

Vue.createApp(App).mount('#app')
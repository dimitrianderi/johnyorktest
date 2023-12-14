import { text } from './seeders/text.js';
const App = {
    data() {
        return {
            imagesJohn: [
                { src: './img/John/short/John York-1.jpg', href: './img/John/full/John York-1.jpg' },
                { src: './img/John/short/John York-2.jpg', href: './img/John/full/John York-2.jpg' },
                { src: './img/John/short/John York-3.jpg', href: './img/John/full/John York-3.jpg' },
                { src: './img/John/short/John York-4.jpg', href: './img/John/full/John York-4.jpg' },
                { src: './img/John/short/John York-5.jpg', href: './img/John/full/John York-5.jpg' },
                { src: './img/John/short/John York-6.jpg', href: './img/John/full/John York-6.jpg' },
                { src: './img/John/short/John York-7.jpg', href: './img/John/full/John York-7.jpg' },
                { src: './img/John/short/John York-8.jpg', href: './img/John/full/John York-8.jpg' },
            ],
            imagesTiffany: [
                { src: './img/Tiffany/short/Tiffany York-1.jpg', href: './img/Tiffany/full/Tiffany York-1.jpg' },
                { src: './img/Tiffany/short/Tiffany York-2.jpg', href: './img/Tiffany/full/Tiffany York-2.jpg' },
                { src: './img/Tiffany/short/Tiffany York-3.jpg', href: './img/Tiffany/full/Tiffany York-3.jpg' },
                { src: './img/Tiffany/short/Tiffany York-4.jpg', href: './img/Tiffany/full/Tiffany York-4.jpg' },
                { src: './img/Tiffany/short/Tiffany York-5.jpg', href: './img/Tiffany/full/Tiffany York-5.jpg' },
                { src: './img/Tiffany/short/Tiffany York-6.jpg', href: './img/Tiffany/full/Tiffany York-6.jpg' },
                { src: './img/Tiffany/short/Tiffany York-7.jpg', href: './img/Tiffany/full/Tiffany York-7.jpg' },
                { src: './img/Tiffany/short/Tiffany York-8.jpg', href: './img/Tiffany/full/Tiffany York-8.jpg' },
            ],
            isLoading: false,
            isTextFull: false,
            isFullGalleryJohn: false,
            isFullGalleryTiffany: false,
            text,
            shortHeight: '',
            isOpenBurger: false,
            isJohn: true
        }
    },
    methods: {
        addImagesJohn() {
            this.isLoading = true;
            setTimeout(() => {
                for (let i = 1; i <= 8; i++) {
                    const src = `./img/John/short/John York-${this.imagesJohn.length + 1}.jpg`
                    const href = `./img/John/full/John York-${this.imagesJohn.length + 1}.jpg`
                    this.imagesJohn.push({ src, href });
                    if (this.imagesJohn.length >= 45) {
                        console.log(src)
                        this.isFullGalleryJohn = true
                        break
                    }
                }
            }, 100);
            setTimeout(() => {
                this.isLoading = false;
            }, 400);
        },
        addImagesTiffany() {
            this.isLoading = true;
            setTimeout(() => {
                for (let i = 1; i <= 8; i++) {
                    const src = `./img/Tiffany/short/Tiffany York-${this.imagesTiffany.length + 1}.jpg`
                    const href = `./img/Tiffany/full/Tiffany York-${this.imagesTiffany.length + 1}.jpg`
                    this.imagesTiffany.push({ src, href });
                    if (this.imagesTiffany.length >= 29) {
                        this.isFullGalleryTiffany = true
                        break
                    }
                }
            }, 100);
            setTimeout(() => {
                this.isLoading = false;
            }, 400);
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
            if (this.isOpenBurger) {
                this.toggleBurger()
            }

            const blockID = e.currentTarget.getAttribute('href').substr(1)
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth'
            });
        },
        toggleBurger() {
            this.isOpenBurger = !this.isOpenBurger
            document.body.style.overflow = this.isOpenBurger ? 'hidden' : 'visible'
        },
        setTab(e) {
            const name = e.target.textContent.trim().split(' ').pop()

            this.isJohn = (name === 'John') ? true : false
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
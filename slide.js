        var slide = document.getElementById('slide')
        var x = 1

        change()

        function change(){
            switch (x) {
                case 1:
                slide.style.backgroundImage = "url(./i1.jpg)"
                    x = 2
                    break
                case 2:
                    slide.style.backgroundImage = "url(./i2.jpg)"
                    x = 3
                    break
                case 3:
                    slide.style.backgroundImage = "url(./i3.jpg)"
                    x = 4
                    break
                case 4:
                    slide.style.backgroundImage = "url(./i4.jpg)"
                    x = 1
                    break
            
                default:
                    x = 1
                    break
            }
        }

            window.setInterval(change, 3000)


            const image1 = () => {
                slide.style.backgroundImage = "url(./i1.jpg)"
                x = 2
            }

            const image2 = () => {
                slide.style.backgroundImage = "url(./i2.jpg)"
                x = 3
            }
            
            const image3 = () => {
                slide.style.backgroundImage = "url(./i3.jpg)"
                x = 4
            }

            const image4 = () => {
                slide.style.backgroundImage = "url(./i4.jpg)"
                x = 1
            }
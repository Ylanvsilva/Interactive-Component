const btns = document.querySelectorAll('.circle_btn')

btns.forEach((btn) =>
    btn.addEventListener('click', function(e) {
        const button = (e.currentTarget.textContent)
        const buttonId = (this.id)
        console.log(button)
        console.log(buttonId)
        
        if (button === buttonId) {
            btn.classList.add('circle_orange')
        }
    })
)
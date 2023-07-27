const btns = document.querySelectorAll('.circle_btn')

btns.forEach((btn) =>
    btn.addEventListener('click', function(e) {
        const button = (e.currentTarget.textContent)

        if (button === '1') {
            btn.classList.add("circle_orange")
            console.log('if')
        } else {
            button.classList.remove("circle_orange")
            console.log('else')
        }
    })
)
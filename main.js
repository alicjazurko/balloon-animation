document.addEventListener("DOMContentLoaded", function() {

    const animBg = new Animbg('.anim-bg')

    document.addEventListener('mousemove', (e) => animBg.listenCursorMove(e))
})

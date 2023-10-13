const cards = document.querySelectorAll('.card_item');
const form = document.querySelectorAll('.faq_limiter');

if (width <= 425) {
    ScrollReveal({ reset: true });

    cards.forEach((e, i) => {
        i++
        ScrollReveal().reveal(e,
            {
                distance: '60px',
                origin: 'right',
                duration: 1000
            });
    })

    ScrollReveal().reveal(form,
        {
            distance: '60px',
            origin: 'bottom',
            duration: 1000
        })
}



function app() {
    const buttons = document.querySelectorAll('.button')
    const cards = document.querySelectorAll('.card')

    function filter(category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category)
            const isShowAll = category.toLowerCase() === 'all'
            if (isItemFiltered && !isShowAll) {
                item.classList.add('blur')
            } else {
                item.classList.remove('blur')
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
            filter(currentCategory, cards)
            console.log(button.dataset.filter)
        })
    })
}
app()


let intervalId;
document.querySelectorAll('.dropdown-botton').forEach(e => {
    e.addEventListener('click', e => {
        let menu = e.currentTarget.dataset.path;
        document.querySelectorAll('.dropdown-menu').forEach(e => {
if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')){
     document.querySelector(`[data-target=${menu}]`).classList.add('menu-active');
     intervalId = setTimeout(() => {
            document.querySelector(`[data-target=${menu}]`).classList.add('open')
             }, 0)
         }

         if(document.querySelector(`[data-target=${menu}]`).classList.contains('open')){
            clearTimeout(intervalId);
            document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active')

            intervalId = setTimeout(() => {
            document.querySelector(`[data-target=${menu}]`).classList.remove('open')
         }, 0)
        }
        })
    })
})

function app() {
    const buttons = document.querySelectorAll('.button')
    const cards = document.querySelectorAll('.card')

    function filter(category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category)
            const isShowAll = category.toLowerCase() === 'all'
            if (isItemFiltered && !isShowAll) {
                item.classList.add('blur')
            } else {
                item.classList.remove('blur')
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
            filter(currentCategory, cards)
            console.log(button.dataset.filter)
        })
    })

    cards.forEach((card) => {
        card.ontrasitiones = function () {
            if (card.classList.contains('hide')) {
           card.ontrasitiones.add('hide')
        }
    }
})
}
app()

document.querySelectorAll('.accordeon-item-trigger').forEach((item) =>
item.addEventListener('click', () => {
    console.log('e')
   let parent = item.parentNode;
   parent.classList.toggle('accordeon-item--active')
})
)

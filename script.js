const d = document

const $form = d.getElementById('tickets')
const $total = d.querySelector('.total')

const TICKETPRICE = 200,
    STUDENTPERCENT = 0.80,
    TRAINEEPERCENT = 0.50,
    JUNIORPERCENT = 0.15,
    totalAmount = 0
let categorySelected = ''

eventListeners()

function eventListeners() {

    d.addEventListener('change', selectCategory)
    
    d.addEventListener('submit', calculateTotal)

    d.addEventListener('reset', () => {
        if(d.querySelector('.isActive')) {
            $total.classList.remove('isActive')
        }       
    })
}

function selectCategory(e) {
    if(e.target.matches('#categoria')) categorySelected = $form.categoria.value
}

function calculateTotal(e) {
    if(e.target === $form) {
        e.preventDefault()
        switch(categorySelected) {
            case 'Estudiante':
                calculateTotalPrice(e.target.cantidad.value, STUDENTPERCENT)
                break
            case 'Trainee':
                calculateTotalPrice(e.target.cantidad.value, TRAINEEPERCENT)
                break
            case 'Junior':
                calculateTotalPrice(e.target.cantidad.value, JUNIORPERCENT)
                break
            default:
                break    
        }
    }   
}

function calculateTotalPrice(cantidad, porcentaje) {
    
    const total = cantidad * TICKETPRICE * porcentaje

    $total.classList.add('isActive')
    $total.querySelector('p span').textContent = total
    
}
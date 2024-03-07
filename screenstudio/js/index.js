window.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    const closeModalBtn = document.querySelector('.close');
    const modal = document.querySelector('#myModal');
    const questions = document.querySelectorAll('.question');

    //Modal
    function modalFunctions(showModal) {
        if(showModal === true) {
            modal.style.display = 'block';
        }

        if(showModal === false) {
            modal.style.display = 'none';
        }
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modalFunctions(true);
        })
    });

    closeModalBtn.addEventListener('click', () => {
        modalFunctions(false);
    })

    window.addEventListener('keydown', (e) => {
        if(modal.style.display === 'block' && e.key === 'Escape') {
            modalFunctions(false);
        }
    });

    window.addEventListener('click', (e) => {
        if(e.target == modal) {
            modalFunctions(false);
        }
    });

    //Open question answer (simple)

    questions.forEach(q => {
        q.addEventListener('click', (e) => {
            let styles = window.getComputedStyle(q);
            if(styles.height === '32px') {
                q.style.height = 100 + 'px';
            }
            if(styles.height === '100px') {
                q.style.height = 32 + 'px';
            }
        })
    })

    console.log(questions);
})
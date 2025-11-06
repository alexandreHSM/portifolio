//navegação da pagina

const navLinks = document.querySelectorAll('header nav a')
const sections = document.querySelectorAll('section')

const activePage = () =>{
    const header = document.querySelector('header')
    const barsBox = document.querySelector('.bars-box')

    header.classList.remove('active');
    setTimeout(() => {
         header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active')
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
         barsBox.classList.add('active');
    }, 1100);

     sections.forEach(section => {
        section.classList.remove('active')
    });
}
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active')
            }, 1100);
        }
    })
});



const resumeBtns = document.querySelectorAll('.resume-btn')

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail')

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        })
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        })
        resumeDetails[idx].classList.add('active');
    })
})

//projeto navegação

const arrowRight = document.querySelector('.projeto-box .navigation .arrow-right')
const arrowLeft = document.querySelector('.projeto-box .navigation .arrow-left')

let index = 0

const activeProjeto = () => {
    const imgSlide = document.querySelector('.projeto-carrossel .img-slide');
    const projetoDetail = document.querySelectorAll('.projeto-detail')

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    projetoDetail.forEach(detail => {
        detail.classList.remove('active');
    })
    projetoDetail[index].classList.add('active')
}

arrowRight.addEventListener('click', () => {
    if(index < 1){
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 2;
        arrowRight.classList.add('disabled');   //mudar as configurações quando adicionar projeto para funcionar o carrossel, tem que ser um numero abaixo da quantidade de imagem/ projeto
    }

    activeProjeto();
})

arrowLeft.addEventListener('click', () => {
    if(index > 1){
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activeProjeto();
})


// copiar email//

  const botaoCopiar = document.getElementById('copiar-email');
  const emailText = document.getElementById('email-text');

  botaoCopiar.addEventListener('click', () => {
    // Cria uma área de texto temporária para copiar
    navigator.clipboard.writeText(emailText.textContent)
      .then(() => {
        botaoCopiar.textContent = 'Copiado!';
        botaoCopiar.style.background = '#16a34a'; // verde de sucesso

        setTimeout(() => {
          botaoCopiar.textContent = 'Copiar e-mail';
          botaoCopiar.style.background = 'var(--cor-principal)';
        }, 2000);
      })
      .catch(() => {
        botaoCopiar.textContent = 'Erro!';
      });
  });


// Menu Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Fechar menu ao clicar em um link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.style.display = 'none';
    });
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        
        // Fechar outros items
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });
        
        // Toggle current item
        faqItem.classList.toggle('active');
    });
});

// Formulário de Contato
const formContato = document.getElementById('formContato');

if (formContato) {
    formContato.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const empresa = document.getElementById('empresa').value;
        const servico = document.getElementById('servico').value;
        const mensagem = document.getElementById('mensagem').value;
        
        // Construir mensagem para envio
        const textoWhatsApp = `Olá! Meu nome é ${nome}.\n\n` +
            `Empresa: ${empresa}\n` +
            `E-mail: ${email}\n` +
            `Telefone: ${telefone}\n` +
            `Serviço: ${servico}\n\n` +
            `Mensagem: ${mensagem}`;
        
        // Redirecionar para WhatsApp
        const numeroWhatsApp = '5511999999999';
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWhatsApp)}`;
        
        window.open(urlWhatsApp, '_blank');
        
        // Resetar formulário
        formContato.reset();
        
        // Mostrar mensagem de sucesso
        alert('Formulário enviado! Você será redirecionado para o WhatsApp.');
    });
}

// Animação ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.servico-card, .beneficio, .passo').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease';
    observer.observe(element);
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Validação de formulário
const inputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');

inputs.forEach(input => {
    input.addEventListener('invalid', (e) => {
        e.preventDefault();
        input.style.borderColor = '#ef4444';
    });
    
    input.addEventListener('input', () => {
        if (input.validity.valid) {
            input.style.borderColor = '#10b981';
        } else {
            input.style.borderColor = '#ef4444';
        }
    });
});

// Formatação de telefone
const telefonInput = document.getElementById('telefone');
if (telefonInput) {
    telefonInput.addEventListener('input', (e) => {
        let valor = e.target.value.replace(/\D/g, '');
        if (valor.length > 11) {
            valor = valor.slice(0, 11);
        }
        if (valor.length > 6) {
            valor = valor.slice(0, 2) + ' ' + valor.slice(2, 7) + '-' + valor.slice(7);
        } else if (valor.length > 2) {
            valor = '(' + valor.slice(0, 2) + ') ' + valor.slice(2);
        }
        e.target.value = valor;
    });
}

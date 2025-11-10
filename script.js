document.addEventListener('DOMContentLoaded', () => {
    const depoimentosContainer = document.querySelector('.depoimentos-container');
    const metricsCarousel = document.querySelector('.metrics-carousel');
    let scrollAmount = 0;

    console.log('Contêineres encontrados:', depoimentosContainer, metricsCarousel); // Debug

    function scrollCarousel(container, direction) {
        const itemWidth = container.querySelector('.depoimento, .metric').offsetWidth + 20;
        scrollAmount += direction * itemWidth;
        if (scrollAmount < 0) scrollAmount = 0;
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (scrollAmount > maxScroll) scrollAmount = maxScroll;
        container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }

    // Adicionar botões para Depoimentos
    depoimentosContainer.insertAdjacentHTML('beforebegin', '<button class="nav-btn prev" onclick="scrollCarousel(depoimentosContainer, -1)">◄</button>');
    depoimentosContainer.insertAdjacentHTML('afterend', '<button class="nav-btn next" onclick="scrollCarousel(depoimentosContainer, 1)">►</button>');

    // Adicionar botões para Métricas
    metricsCarousel.insertAdjacentHTML('beforebegin', '<button class="nav-btn prev-metric" onclick="scrollCarousel(metricsCarousel, -1)">◄</button>');
    metricsCarousel.insertAdjacentHTML('afterend', '<button class="nav-btn next-metric" onclick="scrollCarousel(metricsCarousel, 1)">►</button>');

    // Estilizar botões
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.style.background = '#6A1B9A';
        btn.style.color = '#FFFFFF';
        btn.style.border = 'none';
        btn.style.padding = '10px';
        btn.style.borderRadius = '5px';
        btn.style.cursor = 'pointer';
        btn.style.transition = 'background 0.3s';
        btn.style.position = 'absolute';
        btn.style.top = '50%';
        btn.style.transform = 'translateY(-50%)';
        btn.style.zIndex = '10';
    });
    document.querySelector('.prev').style.left = '10px';
    document.querySelector('.next').style.right = '10px';
    document.querySelector('.prev-metric').style.left = '10px';
    document.querySelector('.next-metric').style.right = '10px';

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('mouseover', () => btn.style.background = '#8E24AA');
        btn.addEventListener('mouseout', () => btn.style.background = '#6A1B9A');
    });
});
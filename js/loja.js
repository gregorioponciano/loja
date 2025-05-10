        // Carrossel
        const carousel = document.querySelector('.carousel');
        const items = document.querySelectorAll('.carousel-item');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const dotsContainer = document.getElementById('dotsContainer');
        
        let currentIndex = 0;
        const itemWidth = 100; // 100% para mobile
        const totalItems = items.length;
        
        // Criar dots de navegação
        function createDots() {
            for (let i = 0; i < totalItems; i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToItem(i));
                dotsContainer.appendChild(dot);
            }
        }
        
        // Atualizar dots ativos
        function updateDots() {
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        
        // Mover para um item específico
        function goToItem(index) {
            // Ajustar para layout responsivo
            let itemsToShow = 1;
            if (window.innerWidth >= 768) itemsToShow = 2;
            if (window.innerWidth >= 992) itemsToShow = 3;
            
            // Garantir que o índice esteja dentro dos limites
            if (index < 0) {
                index = totalItems - itemsToShow;
            } else if (index > totalItems - itemsToShow) {
                index = 0;
            }
            
            currentIndex = index;
            const offset = -currentIndex * (100 / itemsToShow);
            carousel.style.transform = `translateX(${offset}%)`;
            
            updateDots();
        }
        
        // Event listeners para os botões
        prevBtn.addEventListener('click', () => goToItem(currentIndex - 1));
        nextBtn.addEventListener('click', () => goToItem(currentIndex + 1));
        
        // Touch events para mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, {passive: true});
        
        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, {passive: true});
        
        function handleSwipe() {
            const difference = touchStartX - touchEndX;
            if (difference > 50) {
                // Swipe para a esquerda
                goToItem(currentIndex + 1);
            } else if (difference < -50) {
                // Swipe para a direita
                goToItem(currentIndex - 1);
            }
        }
        
        // Modais
        function openModal(modalType) {
            const modal = document.getElementById(`${modalType}Modal`);
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
            
            // Adicionar evento para fechar com ESC
            document.addEventListener('keydown', handleEscape);
        }
        
        function closeModal() {
            const modals = document.querySelectorAll('.modal.show');
            modals.forEach(modal => {
                modal.classList.remove('show');
            });
            document.body.style.overflow = 'auto';
            
            // Remover evento do ESC
            document.removeEventListener('keydown', handleEscape);
        }
        
        function handleEscape(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        }
        
        // Fechar modal ao clicar fora
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                closeModal();
            }
        });
        
        // Inicialização
        createDots();
        
        // Ajustar carrossel na mudança de tamanho da tela
        window.addEventListener('resize', () => {
            goToItem(currentIndex);
        });
        
        // Animar elementos quando entram na viewport
        const animateElements = document.querySelectorAll('.animate, .animate-up');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    observer.unobserve(entry.target);
                }
            });
        }, {threshold: 0.1});
        
        animateElements.forEach(el => {
            el.style.opacity = 0;
            observer.observe(el);
        });
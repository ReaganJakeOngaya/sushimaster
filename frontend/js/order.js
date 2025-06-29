// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Cart functionality
let cart = [];

const cartEmpty = document.getElementById('cartEmpty');
const cartItems = document.getElementById('cartItems');
const orderSummary = document.getElementById('orderSummary');
const checkoutBtn = document.getElementById('checkoutBtn');
const cartCount = document.getElementById('cartCount');

// Category filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const categories = document.querySelectorAll('.category');

// Initialize category filtering
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        
        // Update active filter button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Show/hide categories
        categories.forEach(cat => {
            const catType = cat.dataset.category;
            if (category === 'all' || category === catType) {
                cat.style.display = 'block';
                cat.classList.remove('hidden');
            } else {
                cat.style.display = 'none';
                cat.classList.add('hidden');
            }
        });
        
        // Add animation effect
        btn.classList.add('pulse');
        setTimeout(() => btn.classList.remove('pulse'), 600);
    });
});

// Add event listeners to all add buttons
document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const menuItem = e.target.closest('.menu-item');
        const itemData = JSON.parse(menuItem.dataset.item);
        addToCart(itemData);
        
        // Add success animation to the menu item
        menuItem.classList.add('bounce');
        setTimeout(() => menuItem.classList.remove('bounce'), 1000);
    });
});

function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({...item, quantity: 1});
    }
    
    updateCart();
    showAddedFeedback(event.target);
}

function showAddedFeedback(btn) {
    const originalContent = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Added!';
    btn.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = originalContent;
        btn.style.background = 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)';
        btn.disabled = false;
    }, 1500);
}

function removeFromCart(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    updateCart();
}

function updateQuantity(itemName, change) {
    const item = cart.find(cartItem => cartItem.name === itemName);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemName);
        } else {
            updateCart();
        }
    }
}

function updateCart() {
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = itemCount;
    
    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartItems.style.display = 'none';
        orderSummary.style.display = 'none';
        checkoutBtn.disabled = true;
        return;
    }

    cartEmpty.style.display = 'none';
    cartItems.style.display = 'block';
    orderSummary.style.display = 'block';
    checkoutBtn.disabled = false;

    // Update cart items with enhanced styling
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item fade-in-up">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="updateQuantity('${item.name}', -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity('${item.name}', 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <button class="remove-btn" onclick="removeFromCart('${item.name}')" title="Remove item">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.085;
    const delivery = subtotal > 0 ? 3.99 : 0;
    const total = subtotal + tax + delivery;

    // Update summary with animation
    animateValue('subtotal', subtotal);
    animateValue('tax', tax);
    animateValue('delivery', delivery);
    animateValue('total', total);
}

function animateValue(elementId, newValue) {
    const element = document.getElementById(elementId);
    const currentValue = parseFloat(element.textContent.replace('$', '')) || 0;
    const increment = (newValue - currentValue) / 20;
    let current = currentValue;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= newValue) || (increment < 0 && current <= newValue)) {
            current = newValue;
            clearInterval(timer);
        }
        element.textContent = `$${current.toFixed(2)}`;
    }, 20);
}

// Enhanced checkout functionality
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;

    const total = parseFloat(document.getElementById('total').textContent.replace('$', ''));
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Show loading state
    checkoutBtn.classList.add('loading');
    checkoutBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    
    // Simulate processing time
    setTimeout(() => {
        checkoutBtn.classList.remove('loading');
        checkoutBtn.innerHTML = '<i class="fas fa-credit-card"></i> Proceed to Checkout';
        
        // Show success message
        showOrderConfirmation(itemCount, total);
        
        // Clear cart
        cart = [];
        updateCart();
    }, 2000);
});

function showOrderConfirmation(itemCount, total) {
    // Create custom modal
    const modal = document.createElement('div');
    modal.className = 'order-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h2>Order Confirmed! 🎉</h2>
            <p class="order-details">
                <strong>${itemCount} items</strong> for <strong>$${total.toFixed(2)}</strong>
            </p>
            <p class="delivery-info">
                <i class="fas fa-clock"></i>
                Expected delivery: <strong>25-35 minutes</strong>
            </p>
            <p class="thank-you">Thank you for choosing SushiKing!</p>
            <button class="close-modal" onclick="closeModal()">
                <i class="fas fa-times"></i>
                Close
            </button>
        </div>
    `;
    
    // Add modal styles
    const modalStyles = `
        <style>
            .order-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
                animation: fadeIn 0.3s ease;
            }
            
            .modal-content {
                background: white;
                padding: 3rem;
                border-radius: 20px;
                text-align: center;
                max-width: 500px;
                width: 90%;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                animation: slideUp 0.4s ease;
            }
            
            .success-icon {
                font-size: 4rem;
                color: #27ae60;
                margin-bottom: 1rem;
                animation: bounce 0.8s ease;
            }
            
            .modal-content h2 {
                color: var(--text-primary);
                margin-bottom: 1rem;
                font-family: var(--font-secondary);
            }
            
            .order-details {
                font-size: 1.2rem;
                margin-bottom: 1rem;
                color: var(--text-secondary);
            }
            
            .delivery-info {
                background: var(--bg-tertiary);
                padding: 1rem;
                border-radius: 10px;
                margin-bottom: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
            }
            
            .thank-you {
                color: var(--text-secondary);
                margin-bottom: 2rem;
                font-style: italic;
            }
            
            .close-modal {
                background: var(--primary-color);
                color: white;
                border: none;
                padding: 1rem 2rem;
                border-radius: 10px;
                cursor: pointer;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                margin: 0 auto;
                transition: var(--transition);
            }
            
            .close-modal:hover {
                background: var(--primary-dark);
                transform: translateY(-2px);
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideUp {
                from { transform: translateY(50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', modalStyles);
    document.body.appendChild(modal);
    
    // Add global close modal function
    window.closeModal = () => {
        modal.remove();
    };
    
    // Auto close after 5 seconds
    setTimeout(() => {
        if (document.body.contains(modal)) {
            closeModal();
        }
    }, 5000);
}

// Enhanced menu item interactions
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-btn') || e.target.closest('.add-btn')) return;
        
        // Add ripple effect
        const rect = item.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = 100;
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 107, 53, 0.2);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            transform: scale(0);
            animation: ripple 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            z-index: 1;
        `;
        
        item.style.position = 'relative';
        item.style.overflow = 'hidden';
        item.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 800);
    });
    
    // Add hover effects
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-4px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Add ripple animation to stylesheet
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    @keyframes ripple {
        to {
            transform: scale(6);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyles);

// Smooth scroll behavior for category navigation
function scrollToCategory(category) {
    const categoryElement = document.querySelector(`[data-category="${category}"]`);
    if (categoryElement) {
        categoryElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

// Initialize cart count
updateCart();

// Add loading animation for page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate menu items on load
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('fade-in-up');
        }, index * 100);
    });
});

// Performance optimization: Debounce cart updates
let cartUpdateTimeout;
function debounceCartUpdate() {
    clearTimeout(cartUpdateTimeout);
    cartUpdateTimeout = setTimeout(updateCart, 100);
}// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Cart functionality
let cart = [];

const cartEmpty = document.getElementById('cartEmpty');
const cartItems = document.getElementById('cartItems');
const orderSummary = document.getElementById('orderSummary');
const checkoutBtn = document.getElementById('checkoutBtn');
const cartCount = document.getElementById('cartCount');

// Category filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const categories = document.querySelectorAll('.category');

// Initialize category filtering
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        
        // Update active filter button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Show/hide categories
        categories.forEach(cat => {
            const catType = cat.dataset.category;
            if (category === 'all' || category === catType) {
                cat.style.display = 'block';
                cat.classList.remove('hidden');
            } else {
                cat.style.display = 'none';
                cat.classList.add('hidden');
            }
        });
        
        // Add animation effect
        btn.classList.add('pulse');
        setTimeout(() => btn.classList.remove('pulse'), 600);
    });
});

// Add event listeners to all add buttons
document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const menuItem = e.target.closest('.menu-item');
        const itemData = JSON.parse(menuItem.dataset.item);
        addToCart(itemData);
        
        // Add success animation to the menu item
        menuItem.classList.add('bounce');
        setTimeout(() => menuItem.classList.remove('bounce'), 1000);
    });
});

function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({...item, quantity: 1});
    }
    
    updateCart();
    showAddedFeedback(event.target);
}

function showAddedFeedback(btn) {
    const originalContent = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Added!';
    btn.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = originalContent;
        btn.style.background = 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)';
        btn.disabled = false;
    }, 1500);
}

function removeFromCart(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    updateCart();
}

function updateQuantity(itemName, change) {
    const item = cart.find(cartItem => cartItem.name === itemName);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemName);
        } else {
            updateCart();
        }
    }
}

function updateCart() {
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = itemCount;
    
    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartItems.style.display = 'none';
        orderSummary.style.display = 'none';
        checkoutBtn.disabled = true;
        return;
    }

    cartEmpty.style.display = 'none';
    cartItems.style.display = 'block';
    orderSummary.style.display = 'block';
    checkoutBtn.disabled = false;

    // Update cart items with enhanced styling
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item fade-in-up">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="updateQuantity('${item.name}', -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity('${item.name}', 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <button class="remove-btn" onclick="removeFromCart('${item.name}')" title="Remove item">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.085;
    const delivery = subtotal > 0 ? 3.99 : 0;
    const total = subtotal + tax + delivery;

    // Update summary with animation
    animateValue('subtotal', subtotal);
    animateValue('tax', tax);
    animateValue('delivery', delivery);
    animateValue('total', total);
}

function animateValue(elementId, newValue) {
    const element = document.getElementById(elementId);
    const currentValue = parseFloat(element.textContent.replace('$', '')) || 0;
    const increment = (newValue - currentValue) / 20;
    let current = currentValue;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= newValue) || (increment < 0 && current <= newValue)) {
            current = newValue;
            clearInterval(timer);
        }
        element.textContent = `$${current.toFixed(2)}`;
    }, 20);
}

// Enhanced checkout functionality
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;

    const total = parseFloat(document.getElementById('total').textContent.replace('$', ''));
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Show loading state
    checkoutBtn.classList.add('loading');
    checkoutBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    
    // Simulate processing time
    setTimeout(() => {
        checkoutBtn.classList.remove('loading');
        checkoutBtn.innerHTML = '<i class="fas fa-credit-card"></i> Proceed to Checkout';
        
        // Show success message
        showOrderConfirmation(itemCount, total);
        
        // Clear cart
        cart = [];
        updateCart();
    }, 2000);
});

function showOrderConfirmation(itemCount, total) {
    // Create custom modal
    const modal = document.createElement('div');
    modal.className = 'order-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h2>Order Confirmed! 🎉</h2>
            <p class="order-details">
                <strong>${itemCount} items</strong> for <strong>$${total.toFixed(2)}</strong>
            </p>
            <p class="delivery-info">
                <i class="fas fa-clock"></i>
                Expected delivery: <strong>25-35 minutes</strong>
            </p>
            <p class="thank-you">Thank you for choosing SushiKing!</p>
            <button class="close-modal" onclick="closeModal()">
                <i class="fas fa-times"></i>
                Close
            </button>
        </div>
    `;
    
    // Add modal styles
    const modalStyles = `
        <style>
            .order-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
                animation: fadeIn 0.3s ease;
            }
            
            .modal-content {
                background: white;
                padding: 3rem;
                border-radius: 20px;
                text-align: center;
                max-width: 500px;
                width: 90%;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                animation: slideUp 0.4s ease;
            }
            
            .success-icon {
                font-size: 4rem;
                color: #27ae60;
                margin-bottom: 1rem;
                animation: bounce 0.8s ease;
            }
            
            .modal-content h2 {
                color: var(--text-primary);
                margin-bottom: 1rem;
                font-family: var(--font-secondary);
            }
            
            .order-details {
                font-size: 1.2rem;
                margin-bottom: 1rem;
                color: var(--text-secondary);
            }
            
            .delivery-info {
                background: var(--bg-tertiary);
                padding: 1rem;
                border-radius: 10px;
                margin-bottom: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
            }
            
            .thank-you {
                color: var(--text-secondary);
                margin-bottom: 2rem;
                font-style: italic;
            }
            
            .close-modal {
                background: var(--primary-color);
                color: white;
                border: none;
                padding: 1rem 2rem;
                border-radius: 10px;
                cursor: pointer;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                margin: 0 auto;
                transition: var(--transition);
            }
            
            .close-modal:hover {
                background: var(--primary-dark);
                transform: translateY(-2px);
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideUp {
                from { transform: translateY(50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', modalStyles);
    document.body.appendChild(modal);
    
    // Add global close modal function
    window.closeModal = () => {
        modal.remove();
    };
    
    // Auto close after 5 seconds
    setTimeout(() => {
        if (document.body.contains(modal)) {
            closeModal();
        }
    }, 5000);
}

// Enhanced menu item interactions
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-btn') || e.target.closest('.add-btn')) return;
        
        // Add ripple effect
        const rect = item.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = 100;
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 107, 53, 0.2);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            transform: scale(0);
            animation: ripple 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            z-index: 1;
        `;
        
        item.style.position = 'relative';
        item.style.overflow = 'hidden';
        item.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 800);
    });
    
    // Add hover effects
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-4px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Add ripple animation to stylesheet
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    @keyframes ripple {
        to {
            transform: scale(6);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyles);

// Smooth scroll behavior for category navigation
function scrollToCategory(category) {
    const categoryElement = document.querySelector(`[data-category="${category}"]`);
    if (categoryElement) {
        categoryElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

// Initialize cart count
updateCart();

// Add loading animation for page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate menu items on load
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('fade-in-up');
        }, index * 100);
    });
});

// Performance optimization: Debounce cart updates
let cartUpdateTimeout;
function debounceCartUpdate() {
    clearTimeout(cartUpdateTimeout);
    cartUpdateTimeout = setTimeout(updateCart, 100);
}
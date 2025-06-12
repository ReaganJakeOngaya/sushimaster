 // Initialize AOS
        AOS.init({
            duration: 800,
            once: true
        });

        // Cart functionality
        let cart = [];
        
        const cartEmpty = document.getElementById('cartEmpty');
        const cartItems = document.getElementById('cartItems');
        const orderSummary = document.getElementById('orderSummary');
        const checkoutBtn = document.getElementById('checkoutBtn');

        // Add event listeners to all add buttons
        document.querySelectorAll('.add-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const menuItem = e.target.closest('.menu-item');
                const itemData = JSON.parse(menuItem.dataset.item);
                addToCart(itemData);
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
            
            // Add visual feedback
            const btn = event.target;
            const originalText = btn.textContent;
            btn.textContent = 'Added!';
            btn.style.background = 'linear-gradient(45deg, #4caf50, #8bc34a)';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = 'linear-gradient(45deg, #ff6b6b, #ffd93d)';
            }, 1000);
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

            // Update cart items
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                        <div class="quantity-controls">
                            <button class="qty-btn" onclick="updateQuantity('${item.name}', -1)">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity('${item.name}', 1)">+</button>
                        </div>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart('${item.name}')" title="Remove item">
                        ✕
                    </button>
                </div>
            `).join('');

            // Calculate totals
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const tax = subtotal * 0.085;
            const delivery = subtotal > 0 ? 3.99 : 0;
            const total = subtotal + tax + delivery;

            // Update summary
            document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
            document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
            document.getElementById('delivery').textContent = `$${delivery.toFixed(2)}`;
            document.getElementById('total').textContent = `$${total.toFixed(2)}`;
        }

        // Checkout functionality
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) return;

            const total = parseFloat(document.getElementById('total').textContent.replace('$', ''));
            const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
            
            alert(`🎉 Order Confirmed!\n\n${itemCount} items for $${total.toFixed(2)}\n\nThank you for choosing SushiKing!\nExpected delivery: 25-35 minutes`);
            
            // Clear cart
            cart = [];
            updateCart();
        });

        // Add click effect to menu items
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target.classList.contains('add-btn')) return;
                
                // Add ripple effect
                const rect = item.getBoundingClientRect();
                const ripple = document.createElement('span');
                const size = 60;
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    background: rgba(255, 107, 107, 0.3);
                    border-radius: 50%;
                    left: ${x}px;
                    top: ${y}px;
                    pointer-events: none;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                `;
                
                item.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });

        // Add ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        // Append style to head
        document.head.appendChild(style);
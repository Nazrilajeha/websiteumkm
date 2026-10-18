import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('umi_fika_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });

  useEffect(() => {
    try {
      localStorage.setItem('umi_fika_cart', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 2800);
  };

  const addToCart = (product, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, qty: item.qty + qty }
            : item
        );
      }
      return [...prev, { ...product, qty }];
    });
    showToast(`${qty}x ${product.title} ditambahkan ke keranjang!`);
  };

  const updateQuantity = (productId, delta) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item.id === productId) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const formatRupiah = (val) => {
    return "Rp " + (val || 0).toLocaleString('id-ID');
  };

  const checkoutWhatsApp = () => {
    if (cart.length === 0) {
      alert("Keranjang belanjamu masih kosong!");
      return;
    }

    let orderText = "Halo Umi Fika Bakery! Saya mau pesan:%0A%0A";
    cart.forEach((c, idx) => {
      const sub = c.price * c.qty;
      orderText += `${idx + 1}. *${c.title}* (${c.qty}x) = Rp ${sub.toLocaleString('id-ID')}%0A`;
    });

    orderText += `%0A*Total Belanja:* Rp ${totalPrice.toLocaleString('id-ID')}%0A`;
    orderText += "*Alamat Pengiriman:* [Mohon isi alamat]%0A";
    orderText += "*Catatan Pesanan:* [Tulis catatan jika ada]";

    const waUrl = `https://wa.me/6281234567890?text=${orderText}`;
    window.open(waUrl, '_blank');
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      isCartOpen,
      setIsCartOpen,
      toast,
      showToast,
      totalCount,
      totalPrice,
      formatRupiah,
      checkoutWhatsApp
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

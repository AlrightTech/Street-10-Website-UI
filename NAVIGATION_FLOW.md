# Street-10 Website Navigation Flow

## Complete Page Flow & Hierarchy

### 🏠 **Entry Points**

1. **Home Page** (`/`)
   - Main landing page
   - Links to: Bidding, E-commerce, Vendors (via header)
   - Car sliders link to: `/car-preview`
   - "Explore more" buttons link to: `/bidding` and `/e-commerce`

---

## 📋 **Main Navigation Flow**

### **1. Browsing & Discovery Flow**

```
Home (/) 
  ├─→ Car Slider Cards → Car Preview (/car-preview)
  ├─→ "Explore more" → Bidding (/bidding)
  └─→ "Explore more" → E-commerce (/e-commerce)

Bidding (/bidding)
  └─→ Car Cards → Car Preview (/car-preview)

E-commerce (/e-commerce)
  └─→ Car Cards → Car Preview (/car-preview)

Vendors (/vendors)
  └─→ Vendor Cards → Vendor Detail (/vendor)
```

### **2. Car Details & Bidding Flow**

```
Car Preview (/car-preview)
  ├─→ View car details
  ├─→ Place bid (if logged in)
  ├─→ Verify account (if needed)
  └─→ Pay deposit (if needed)
```

### **3. Purchase Flow (E-commerce)**

```
E-commerce (/e-commerce)
  ├─→ Browse cars
  ├─→ Click car card → Car Preview (/car-preview)
  └─→ Add to cart → Select Address (via Address component)
      └─→ Submit & Pay → Order Preview (/order-preview)
          └─→ Checkout → Payment (/payment)
              └─→ Complete → Order History (/order-history)
```

### **4. User Account Flow**

```
Profile (/profile)
  ├─→ Order History → Order History Page (/order-history)
  ├─→ Bidding History (future)
  ├─→ Profile Settings (future)
  └─→ Saved Items (future)
```

### **5. Authentication Flow**

```
Home (/)
  └─→ "Become a Vendor" → Create Account (/create-acount)
      └─→ OTP Verification (/otp2)
          └─→ Set Password (/set-password2)
              └─→ Select Interests (/select-interests2)
                  └─→ Complete Registration

Login (/login2)
  └─→ Password (/password2)
      └─→ Dashboard/Home
```

---

## 🔗 **Complete Link Map**

### **Header Navigation** (Available on all pages)
- **Home** → `/`
- **Auction** → `/bidding`
- **E-commerce** → `/e-commerce`
- **Vendors** → `/vendors`
- **Profile Icon** → `/profile`
- **Become a Vendor** (on home only) → `/create-acount`

### **Footer Navigation**
- **Bidding** → `/bidding`
- **E-commerce** → `/e-commerce`
- **Vendors** → `/vendors`

### **Car Cards** (Clickable on all pages)
- All car cards → `/car-preview`

### **Profile Page Links**
- **Order History** → `/order-history`
- **Bidding History** → (future)
- **Profile Settings** → (future)
- **Saved Items** → (future)

### **Checkout Flow Links**
- **Address Page** → "Submit & Pay" → `/order-preview`
- **Order Preview** → "Checkout" → `/payment`
- **Payment Page** → "Cancel" → `/order-preview`
- **Payment Page** → "Checkout" → `/order-history`

---

## 📊 **Page Hierarchy**

### **Level 1: Main Pages**
1. `/` - Home
2. `/bidding` - Bidding/Auction
3. `/e-commerce` - E-commerce
4. `/vendors` - Vendors List
5. `/profile` - User Profile

### **Level 2: Detail Pages**
6. `/car-preview` - Car Details
7. `/vendor` - Vendor Details
8. `/order-preview` - Order Review
9. `/order-history` - Order History

### **Level 3: Transaction Pages**
10. `/payment` - Payment Method Selection

### **Level 4: Authentication Pages**
11. `/login2` - Login
12. `/create-acount` - Create Account
13. `/otp2` - OTP Verification
14. `/password2` - Password Entry
15. `/set-password2` - Set Password
16. `/select-interests2` - Select Interests

---

## 🎯 **Key User Journeys**

### **Journey 1: Browse & Bid on Car**
```
Home → Bidding → Car Card → Car Preview → Place Bid → Verify → Pay Deposit → Bid
```

### **Journey 2: Purchase Car**
```
Home → E-commerce → Car Card → Car Preview → Add to Cart → 
Address → Order Preview → Payment → Order History
```

### **Journey 3: View Orders**
```
Home → Profile → Order History
```

### **Journey 4: Become Vendor**
```
Home → "Become a Vendor" → Create Account → OTP → Set Password → Select Interests
```

---

## ✅ **All Implemented Links**

### **✅ Working Links:**
- ✅ Header navigation (Home, Auction, E-commerce, Vendors)
- ✅ Profile icon → Profile page
- ✅ Car cards → Car preview (all pages)
- ✅ Profile → Order History
- ✅ Address → Order Preview
- ✅ Order Preview → Payment
- ✅ Payment → Order History
- ✅ "Explore more" buttons → Bidding/E-commerce
- ✅ Footer links → Bidding, E-commerce, Vendors
- ✅ "Become a Vendor" → Create Account

### **🔄 Navigation Features:**
- All car cards are clickable and link to car preview
- Hover effects on clickable elements
- Smooth transitions between pages
- Consistent navigation across all pages

---

## 📱 **Mobile Navigation**
- Mobile menu (hamburger) includes all main navigation links
- Same functionality as desktop
- Language selector in mobile menu

---

## 🎨 **Visual Flow Indicators**
- Hover effects on clickable cards
- Arrow icons on buttons indicating navigation
- Consistent button styling for actions
- Clear visual hierarchy

---

**Last Updated:** All navigation links are properly connected and functional.


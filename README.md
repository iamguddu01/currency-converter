# 💱 Currency Converter

A modern, responsive currency converter web application built with React and Vite. Convert between multiple currencies in real-time with a beautiful, user-friendly interface.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.4-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-teal)

## ✨ Features

- 🔄 **Real-time Currency Conversion** - Get up-to-date exchange rates
- 🌍 **Multiple Currencies** - Support for all major world currencies
- 💫 **Beautiful UI** - Modern design with a stunning background image
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ⚡ **Fast & Lightweight** - Built with Vite for optimal performance
- 🔁 **Swap Functionality** - Easily swap between source and target currencies
- 🎨 **Fixed Background** - Sticky background image that stays in place while scrolling

## 🛠️ Technologies Used

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Currency API** - [@fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api) for real-time exchange rates

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/currency-converter.git
   cd currency-converter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🚀 Usage

1. Enter the amount you want to convert in the "From" field
2. Select the source currency from the dropdown
3. Select the target currency from the "To" dropdown
4. Click the "Convert" button to see the result
5. Use the "Swap" button to quickly exchange the source and target currencies

## 📁 Project Structure

```
currency-converter/
├── src/
│   ├── components/
│   │   ├── InputBox.jsx      # Currency input component
│   │   └── index.js
│   ├── hooks/
│   │   ├── useCurrencyInfo.js # Hook to fetch currency rates
│   │   └── useCurrencyList.js # Hook to fetch all currencies
│   ├── App.jsx               # Main application component
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🔌 API Information

This project uses the [Currency API](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/) to fetch real-time exchange rates:

- **Base URL**: `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/`
- **Get Currency Rates**: `/currencies/{currency}.json`
- **Get All Currencies**: `/currencies.json`

The API is free and doesn't require an API key.

## 🎨 Features in Detail

### Currency Conversion
- Real-time exchange rates from a reliable API
- Support for all major currencies (USD, EUR, GBP, INR, JPY, etc.)
- Accurate calculations with up-to-date rates

### User Interface
- Clean and modern design
- Fixed background image for visual appeal
- Responsive layout that works on all screen sizes
- Intuitive controls and clear labels

### Performance
- Fast loading times with Vite
- Optimized React components
- Efficient API calls with proper error handling

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/currency-converter/issues).

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- [Currency API](https://github.com/fawazahmed0/currency-api) for providing free currency exchange rates
- [Pexels](https://www.pexels.com/) for the background image
- React and Vite communities for excellent documentation

---

⭐ If you found this project helpful, please consider giving it a star!

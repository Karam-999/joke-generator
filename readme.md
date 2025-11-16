# Random Silly Joke Generator 😁

A fun and interactive web application that fetches random jokes from an API and displays them with a clean, modern interface. Perfect for a quick laugh!

## ✨ Features

- 🎭 Fetches random jokes from the Official Joke API
- 📱 Fully responsive design (mobile, tablet, and desktop)
- 🎨 Clean and modern purple-themed UI
- ⚡ One-click joke generation
- 🚀 Automatic joke loading on page load
- 😂 Delayed punchline reveal for better comedic timing
- 🎯 Smooth animations and transitions

## Technologies Used 💻

- **HTML5** - Structure and content
- **CSS3** - Styling and responsive design
- **Vanilla JavaScript** - API calls using XMLHttpRequest
- **Official Joke API** - External joke data source

## 🚀 Live Demo

[View Live Demo](https://karam.is-a.dev/jokes-generator/)

## 📋 How to Use

1. Clone this repository or download the files
2. Open `index.html` in your browser
3. The app will automatically load a joke
4. Click the "Get Another One!" button to fetch a new random joke
5. Wait for the punchline to appear after 3 seconds
6. Enjoy the humor! 😄

## 💻 Installation

```bash
# Clone the repository
git clone https://github.com/Karam-999/jokes-generator.git

# Navigate to the project directory
cd jokes-generator

# Open index.html in your browser
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux
```

## API Used ⬇️

This project uses the [Official Joke API](https://official-joke-api.appspot.com/random_joke) to fetch random jokes in JSON format.

## 📂 File Structure

```
random-joke-generator/
│
├── index.html          # Main HTML file
├── script.js           # JavaScript logic for API calls and DOM manipulation
├── style.css           # Styling and responsive design
├── readme.md           # Project documentation
└── .gitignore          # Git ignore file
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Flexbox and media queries
- **Vanilla JavaScript** - XMLHttpRequest for API calls
- **Google Fonts** - Roboto font family
- **Responsive Design** - Mobile-first approach

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile devices (≤480px)
- 📱 Tablets (≤768px)
- 💻 Desktops (>768px)

## 🎯 Key Features

- **Setup & Punchline Separation**: Jokes are displayed with the punchline revealed after 3 seconds
- **Visual Feedback**: Punchline appears with highlighted background
- **Error Handling**: Graceful error messages if API fails
- **Auto-load**: First joke loads automatically on page load
- **Smooth UX**: Button animations and transitions

## 🔗 API Reference

This project uses the [Official Joke API](https://official-joke-api.appspot.com/)

**Endpoint**: `https://official-joke-api.appspot.com/random_joke`

**Response Format**:
```json
{
  "type": "general",
  "setup": "Why did the chicken cross the road?",
  "punchline": "To get to the other side!",
  "id": 1
}
```

## 👨‍💻 Developer

**Karam Sayed**  
Electronics & Computer Science Engineering Student

- 📧 Email: connect.with.karam25@gmail.com
- 🔗 GitHub: [@Karam-999](https://github.com/Karam-999)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Karam-999/jokes-generator/issues).

## 📝 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- Thanks to [Official Joke API](https://github.com/15Dkatz/official_joke_api) for providing free joke data
- Inspired by the need for daily humor 😄

---

⭐ Star this repo if you found it helpful!

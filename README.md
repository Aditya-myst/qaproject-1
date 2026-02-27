# 🧪 QA Automation Framework — SauceDemo E-Commerce

![CI](https://github.com/Aditya-myst/qaproject-1/actions/workflows/test.yml/badge.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![WebdriverIO](https://img.shields.io/badge/WebdriverIO-EA5906?style=flat&logo=webdriverio&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

Project Preview -
<img width="1911" height="1024" alt="image" src="https://github.com/user-attachments/assets/6cd22297-1685-4e19-8b39-84495aa2541a" />


A production-grade web automation testing framework built using **WebdriverIO**, 
**Mocha**, and **Page Object Model (POM)** design pattern with automated CI/CD 
pipeline via GitHub Actions.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| WebdriverIO v9 | Browser automation framework |
| Mocha | Test runner |
| Page Object Model | Design pattern for maintainable tests |
| Allure Reporter | Beautiful HTML test reports |
| GitHub Actions | CI/CD pipeline - auto runs on every push |
| Chrome | Browser for test execution |

---

## 📁 Project Structure
```
qaproject-1/
├── .github/
│   └── workflows/
│       └── test.yml        ← CI/CD pipeline
├── test/
│   ├── pageobjects/
│   │   ├── login.page.js   ← Login Page Object class
│   │   └── products.page.js← Products Page Object class
│   └── specs/
│       ├── login.test.js   ← Login feature tests
│       └── cart.test.js    ← Cart feature tests
├── wdio.conf.js            ← WebdriverIO configuration
└── package.json
```

---

## ✅ Test Coverage

### Login Feature (4 test cases)
- ✔ Valid login with correct credentials
- ✔ Invalid login with wrong password
- ✔ Empty fields validation
- ✔ Locked out user error handling

### Cart Feature (2 test cases)
- ✔ Add product to cart and verify count
- ✔ Navigate to cart page

---

## 🚀 How to Run Locally
```bash
# Clone the repo
git clone https://github.com/Aditya-myst/qaproject-1.git
cd qaproject-1

# Install dependencies
npm install

# Run all tests
npx wdio run wdio.conf.js

# Generate Allure report
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

---

## 🔄 CI/CD Pipeline

Tests run **automatically on every push** to main branch via GitHub Actions.

The pipeline:
1. Sets up Node.js environment
2. Installs all dependencies
3. Runs tests in headless Chrome
4. Generates Allure report
5. Uploads report as downloadable artifact

---

## 🎯 Key Concepts Demonstrated

- **Page Object Model** — locators and actions separated from test logic
- **Explicit Waits** — no hard sleeps, proper dynamic element handling
- **Negative Testing** — invalid credentials, empty fields, locked users
- **CI/CD Integration** — automated test execution on every code change
- **Cross-environment support** — headed locally, headless on CI

---

## 👨‍💻 Author

**Aditya Kumar Jha**  
[GitHub](https://github.com/Aditya-myst)



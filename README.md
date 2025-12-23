# Library Management (Vite + React + Tailwind)

Quick setup:

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

```bash
cmd /c npm run dev
```

The app entry is `src/main.jsx` and the main component is `src/App.jsx`.

# Credentials
Superbase: gY69yINd5WjjSjZ2

[Project URL](https://oqllcfiigycifckvchtu.supabase.co)
[project API KEY] sb_publishable_Os1L84cjI3TuEr0KywMNKA_Ac3oYZfS


N
# File Structure 4 Future Scalling 
LIBRARYMANAGEMENT/
├── node_modules/
├── public/                      # Static assets
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── assets/                  # Images, fonts, icons
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/              # Reusable UI components
│   │   ├── common/              # Shared across app
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Badge.jsx
│   │   │   └── Modal.jsx
│   │   │
│   │   ├── layout/              # Layout components
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── dashboard/           # Dashboard specific
│   │   │   ├── StatsCard.jsx
│   │   │   ├── WelcomeCard.jsx
│   │   │   └── QuickActions.jsx
│   │   │
│   │   ├── books/               # Books feature
│   │   │   ├── BookCard.jsx
│   │   │   ├── BookList.jsx
│   │   │   ├── BookForm.jsx
│   │   │   └── BookDetails.jsx
│   │   │
│   │   ├── members/             # Members feature
│   │   │   ├── MemberCard.jsx
│   │   │   ├── MemberList.jsx
│   │   │   └── MemberForm.jsx
│   │   │
│   │   └── issued/              # Issued books feature
│   │       ├── IssuedTable.jsx
│   │       ├── IssueForm.jsx
│   │       └── ReturnForm.jsx
│   │
│   ├── pages/                   # Full page components
│   │   ├── Dashboard.jsx
│   │   ├── BooksPage.jsx
│   │   ├── MembersPage.jsx
│   │   ├── IssuedBooksPage.jsx
│   │   ├── CalendarPage.jsx
│   │   └── SettingsPage.jsx
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── useBooks.js
│   │   ├── useMembers.js
│   │   ├── useIssued.js
│   │   └── useSupabase.js
│   │
│   ├── services/                # API calls & business logic
│   │   ├── supabase.js
│   │   ├── bookService.js
│   │   ├── memberService.js
│   │   └── issuedService.js
│   │
│   ├── utils/                   # Helper functions
│   │   ├── dateFormatter.js
│   │   ├── validators.js
│   │   └── constants.js
│   │
│   ├── context/                 # React Context (state management)
│   │   ├── AuthContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── LibraryContext.jsx
│   │
│   ├── styles/                  # CSS files
│   │   ├── globals.css
│   │   └── components/
│   │
│   ├── App.jsx                  # Main app (routing)
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
│
├── .env.local                   # Environment variables
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.cjs
├── vite.config.js
└── README.md
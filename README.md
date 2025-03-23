# Md Ranju Portfolio Next.js

## Overview

This is a provisional README file for the `sia-portfolio-nextjs` project. The project is currently under development, and functionalities are not yet complete.

## Project Structure

```
/e:/Sia-portfolio-nextjs/
├── src/
├─── api/
├─── app/
├─── components/
├─── config/
├─── data/
├─── lib/
├─── ui/   
├─── utils/   
├── README.md
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Getting Started

## Packages

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [React.js](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)

### Prerequisites

- Node.js
- npm or yarn
- Firebase account and project setup

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sahdasamier/portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd sia-portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Project

To start the development server, run:

```bash
npm run dev
```

or

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Data Migration

### Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database in your Firebase project
3. Update the Firebase configuration in `src/firebase/migrateToFirebase.js` with your project credentials:
   ```javascript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "your-sender-id",
     appId: "your-app-id",
     measurementId: "your-measurement-id"
   };
   ```

### Running the Migration

1. Install required dependencies:
   ```bash
   yarn add firebase
   ```

2. Run the migration script:
   ```bash
   node src/firebase/migrateToFirebase.js
   ```

The script will:
- Delete any existing documents in the 'projects' collection
- Upload all projects from `src/data/data.json` to Firebase
- Maintain the original order of projects
- Update image paths to match the public directory
- Add timestamps and order numbers to each project

### Verifying the Migration

After running the migration, you can verify the data in:
1. Firebase Console > Firestore Database > projects collection
2. Your application's projects page
3. Check that images are loading correctly
4. Verify that projects appear in the correct order

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please contact sahdasamier@gmail.com.

![Screenshot1](./public/home.jpeg)
![Screenshot2](./public/home2.jpeg)

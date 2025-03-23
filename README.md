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

# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Firebase.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Yarn package manager
- Firebase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sahdasamier/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
yarn install
```

3. Create a `.env.local` file in the root directory and add your Firebase configuration:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## 🛠️ Development

### Start Development Server
```bash
yarn dev
```
The site will be available at `http://localhost:3000`

### Build for Production
```bash
yarn build
```

### Preview Production Build
```bash
yarn start
```

## 📦 Deployment

### Deploy to Firebase

1. Install Firebase CLI globally (if not already installed):
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase (first time only):
```bash
firebase init
```
- Select Hosting
- Choose your project
- Set public directory to "out"
- Configure as single-page app: No
- Set up automatic builds: No

4. Build and Deploy:
```bash
yarn build && firebase deploy
```

### Manual Deployment Steps
1. Build the project:
```bash
yarn build
```

2. Deploy to Firebase:
```bash
firebase deploy
```

## 🔄 Git Workflow

### Creating a New Feature
1. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit:
```bash
git add .
git commit -m "feat: your commit message"
```

3. Push to remote:
```bash
git push origin feature/your-feature-name
```

### Merging Changes
1. Update main branch:
```bash
git checkout main
git pull origin main
```

2. Merge your feature branch:
```bash
git merge feature/your-feature-name
```

3. Push to remote:
```bash
git push origin main
```

### Important Commands

#### Development
```bash
# Start development server
yarn dev

# Build project
yarn build

# Start production server
yarn start

# Lint code
yarn lint

# Format code
yarn format
```

#### Firebase
```bash
# Deploy to Firebase
firebase deploy

# Deploy only hosting
firebase deploy --only hosting

# View Firebase hosting status
firebase hosting:list

# Test Firebase locally
firebase serve
```

#### Git
```bash
# Create new branch
git checkout -b branch-name

# Switch branch
git checkout branch-name

# View status
git status

# View commit history
git log

# Discard changes
git checkout -- file-name

# Stash changes
git stash
git stash pop
```

## 🔧 Troubleshooting

### Common Issues

1. **Chunk Load Error**
   - Clear the `.next` directory:
   ```bash
   rm -rf .next
   yarn build
   ```

2. **Image Optimization Error**
   - Ensure `next.config.js` has proper image configuration
   - Use static image imports for better compatibility

3. **Firebase Deploy Failed**
   - Check if you're logged in: `firebase login`
   - Verify project ID in `.firebaserc`
   - Ensure build directory is correct in `firebase.json`

### Maintenance

1. **Update Dependencies**
```bash
yarn upgrade-interactive --latest
```

2. **Clear Cache**
```bash
yarn cache clean
```

3. **Reset Local Environment**
```bash
rm -rf node_modules .next
yarn install
```

## 📝 Notes

- Always run `yarn build` before deploying
- Keep environment variables up to date
- Regularly update dependencies
- Follow the commit convention: `type(scope): message`
- Test thoroughly before deploying to production

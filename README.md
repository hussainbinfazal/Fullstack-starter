# 🚀 Express + Next.js Starter Kit

A modern full-stack web application starter kit with Express.js backend, Next.js frontend, Prisma ORM, and PostgreSQL database.

## 📋 What's Included

- **Backend**: Express.js API server
- **Frontend**: Next.js React application
- **Database**: PostgreSQL with Prisma ORM
- **Development**: Hot reloading for both frontend and backend

## 🛠️ Prerequisites

Before you start, make sure you have these installed on your computer:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Git](https://git-scm.com/)

## 📁 Project Structure

```
your-project/
├── backend/                 # Express.js API server
│   ├── prisma/             # Database schema and migrations
│   ├── src/                # Source code
│   └── package.json        # Backend dependencies
├── frontend/               # Next.js application
│   ├── src/                # React components and pages
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
└── README.md              # This file
```

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <your-project-name>
```

### 2. Set Up the Backend

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env
```

### 3. Configure Database

Edit the `.env` file in the backend folder:

```env
# Database connection
DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"

# Server configuration
PORT=3001
```

**Replace:**
- `username` with your PostgreSQL username
- `password` with your PostgreSQL password  
- `your_database_name` with your desired database name

### 4. Set Up Database

```bash
# Generate Prisma client
npx prisma generate

# Create and run database migrations
npx prisma migrate dev --name init

# (Optional) Seed the database with sample data
npx prisma db seed
```

### 5. Set Up the Frontend

```bash
# Open a new terminal and navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local
```

Edit the `.env.local` file in the frontend folder:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### 6. Start Development Servers

You need to run both servers simultaneously:

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### 7. Open Your Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

## 🗃️ Database Management

### View Your Database
```bash
cd backend
npx prisma studio
```
This opens a visual database browser at http://localhost:5555

### Make Database Changes
1. Edit `backend/prisma/schema.prisma`
2. Run migration:
```bash
npx prisma migrate dev --name your_change_description
```

### Reset Database
```bash
npx prisma migrate reset
```

## 📝 Common Commands

### Backend Commands
```bash
cd backend

# Start development server
npm run dev

# Start production server
npm start

# Run database migrations
npx prisma migrate dev

# View database
npx prisma studio
```

### Frontend Commands
```bash
cd frontend

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Project Configuration

### Adding New API Routes
1. Create new files in `backend/`
2. Import and use them in `backend/server.js`

### Adding New Pages
1. Create new files in `frontend/src/pages/` (Pages Router)
2. Or in `frontend/src/app/` (App Router)

### Database Schema Changes
1. Edit `backend/prisma/schema.prisma`
2. Run `npx prisma migrate dev --name description`

## 🚨 Troubleshooting

### Database Connection Issues
- Make sure PostgreSQL is running
- Check your DATABASE_URL in `.env`
- Verify database exists

### Port Already in Use
```bash
# Kill process using port 3000 or 3001
npx kill-port 3000
npx kill-port 3001
```

### Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -m 'Add feature'`
5. Push: `git push origin feature-name`
6. Submit a pull request

## 📚 Learn More

- [Express.js Documentation](https://expressjs.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⭐ Found This Useful?

If this starter kit helped you build something awesome, please consider:

- ⭐ **Star this repository** on GitHub
- 🍴 **Fork it** for your own projects
- 📢 **Share it** with other developers
- 🐛 **Report issues** or suggest improvements

Your support helps make this project better for everyone! 💙

[![GitHub stars](https://img.shields.io/github/stars/hussainbinfazal/Fullstack-starter?style=social)](https://github.com/hussainbinfazal/Fullstack-starter)

---

**Happy coding! 🎉**

If you run into any issues, don't hesitate to open an issue or ask for help!
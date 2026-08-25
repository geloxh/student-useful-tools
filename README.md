### STUDENT-USEFUL-TOOLS
Progressive, maintanable and scalable web and mobile app for students that offers productivity tools.

## Features:
- **Organization & Notes**
- **Writing & Research**
- **Focus & Time Management**
- **Collaboration**
- **Scientific Calculator**

```
student-useful-tools/
├── server/
│   ├── src/
│   │   ├── config/         # DB, env configs
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # Auth, validation, error handling
│   │   ├── models/         # Database schemas
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── utils/          # Helpers, validators
│   │   └── app.js          # Express app
│   ├── tests/
│   └── package.json
├── client/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── features/       # Feature-based modules
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API calls
│   │   ├── store/          # State management
│   │   ├── utils/          # Helper functions
│   │   └── App.tsx
│   └── package.json
├── shared/                 # Shared types/constants
├── docker-compose.yml
└── .github/workflows/      # CI/CD

```

```
Backend
server/
├── src/
│   ├── config/
│   │   ├── database.ts
│   │   └── env.ts
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   ├── note.controller.ts
│   │   ├── task.controller.ts
│   │   ├── session.controller.ts
│   │   └── calculation.controller.ts
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   ├── validate.middleware.ts
│   │   ├── error.middleware.ts
│   │   └── rateLimiter.middleware.ts
│   ├── models/
│   │   ├── User.model.ts
│   │   ├── Note.model.ts
│   │   ├── Task.model.ts
│   │   ├── Session.model.ts
│   │   └── Calculation.model.ts
│   ├── repositories/
│   │   ├── user.repository.ts
│   │   ├── note.repository.ts
│   │   ├── task.repository.ts
│   │   ├── session.repository.ts
│   │   └── calculation.repository.ts
│   ├── routes/
│   │   ├── auth.routes.ts
│   │   ├── note.routes.ts
│   │   ├── task.routes.ts
│   │   ├── session.routes.ts
│   │   ├── calculation.routes.ts
│   │   └── index.ts
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── note.service.ts
│   │   ├── task.service.ts
│   │   ├── session.service.ts
│   │   └── calculation.service.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   ├── jwt.util.ts
│   │   ├── response.util.ts
│   │   └── logger.util.ts
│   ├── validators/
│   │   ├── auth.validator.ts
│   │   ├── note.validator.ts
│   │   ├── task.validator.ts
│   │   ├── session.validator.ts
│   │   └── calculation.validator.ts
│   ├── app.ts
│   └── server.ts
├── tests/
│   └── setup.ts
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── tsconfig.json
├── jest.config.js
├── Dockerfile
├── docker-compose.yml
└── package.json
```

Backend Development Plan
minimal but scalable backend structure with:
Core Setup: Express server with TypeScript, environment config, database connection
Architecture: Controllers → Services → Repositories pattern
Models: User, Note, Task, Session, Calculation
Auth: JWT authentication with middleware
Security: Helmet, rate limiting, validation, CORS
API Routes: RESTful endpoints for all features
Error Handling: Centralized error middleware
Configuration: Docker, ESLint, Jest setup

### INSTALLATION

```bash
npm install express mongoose bcryptjs jsonwebtoken zod helmet cors express-rate-limit dotenv winston
```

## geloxh
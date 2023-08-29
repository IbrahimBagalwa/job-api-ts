# JOb-API

## Features

- **Database Connection**: Connect to MongoDB using `connect.ts`.
- **Environment Setup**: Create `.env` follow `.env.example`.
- **Routers**: Use `auth.ts` and `jobs.ts` for routes.
- **User Registration**: Validate and hash user data, generate tokens.
- **User Login**: Authenticate users, generate tokens.
- **Mongoose Errors**: Handle validation, duplicate email, and cast errors.
- **Security**: Implement `helmet`, CORS, `xss-clean`, `rate limiting`.
- **Documentation**: API endpoints documented with Swagger.

## Getting Started

1. Clone repository.
2. Install dependencies: `npm install`.
3. Create `.env` in root, follow `.env.example`.
4. Start server: `npm run dev`.

## Documentation

See Swagger documentation for API details [here](https://calm-teal-indri-gear.cyclic.cloud/).

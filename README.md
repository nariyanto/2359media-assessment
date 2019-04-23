# Node.js Booking Hotel API

2359Media assessment test.

## Highlights:
- RESTful API
- ES6 Classes
- Action based
- Service based
- SQL based (PostgreSQL with objection.js)
- Migrations(knex.js)
- Auth (JWT/Access-token/Refresh-token)
- Role based access control
- Request validation (Joi.js)
- CRUD(users, rooms resources)

## Key points:
### 0. Monolith first
its about monolith first approach.

### 1. Routing
Each entity have own router class that implement RESTful interface to work with it.

### 2. Action
It's a class that encapsulated request validation, permission verification and business logic. One file, one class, one REST operation.

### 3. Service
It's much more like utility layer thats provide some helpful promisfitated functions like check access, hash password or generate jwt's.

### 4. DAO
Implement data access methods.

## Development:

### Install global dependencies:
```
npm i -g knex nodemon
```
### Setup database:
1. Install PostgreSQL (https://postgresapp.com/downloads.html (for Mac OS))
2. Create some DB (https://eggerapps.at/postico/ (for Mac OS))

### Go ahead...
```
cd /2359media-assessment
```
- `cp .env.example .env`
- Set required credential in `.env` 

### Install dependencies:
```
npm install
```

Run migration to set base SQL schema
```
knex migrate:latest
knex seed:run
```

Run server
```
npm run start // prod mode
npm run dev // dev mode
```
# Profile Intelligence Service

A backend API that enriches names using external APIs (Genderize, Agify, Nationalize) and stores profiles in Supabase.

## Setup

```bash
npm install
npm start
```

Set environment variables: `SUPABASE_URL` and `SUPABASE_ANON_KEY`.

## API Endpoints

### POST `/api/profiles`
Create or retrieve a profile.

**Request:**
```json
{
  "name": "john"
}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "id": "uuid",
    "name": "john",
    "gender": "male",
    "gender_probability": 0.99,
    "sample_size": 1234,
    "age": 25,
    "age_group": "adult",
    "country_id": "US",
    "country_probability": 0.85,
    "created_at": "2026-04-17T10:00:00Z"
  }
}
```

### GET `/api/profiles/{id}`
Retrieve a profile by ID.

**Response:**
```json
{
  "status": "success",
  "data": { ... }
}
```

## Requirements

- Node.js
- Supabase account
- Dependencies: express, axios, cors, @supabase/supabase-js, uuid

## Deployment

Deploy to Railway or any Node.js hosting with environment variables.
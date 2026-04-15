# Gender Classification API

A simple API that classifies names by gender using the Genderize.io API.

## Setup

```bash
npm install
npm start
```

## API Endpoint

**GET `/api/classify?name=John`**

### Success Response
```json
{
  "status": "success",
  "data": {
    "name": "John",
    "gender": "male",
    "probability": 0.99,
    "sample_size": 1234,
    "is_confident": true,
    "processed_at": "2026-04-15T12:00:00Z"
  }
}
```

### Error Response
```json
{
  "status": "error",
  "message": "Name is required"
}
```

## Requirements

- Node.js
- Dependencies: express, axios, cors

## Deployment

Deploy to any Node.js hosting
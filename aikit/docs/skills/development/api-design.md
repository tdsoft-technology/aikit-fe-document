---
sidebar_position: 1
---

# API Design Skill

Use this skill when designing APIs, REST endpoints, GraphQL schemas, or interface contracts.

## Overview

The API Design skill guides you through creating well-structured, RESTful APIs that follow industry best practices for consistency, usability, and maintainability.

## When to Use

Use this skill when:
- Designing a new REST API
- Creating API endpoints for features
- Defining GraphQL schemas
- Specifying interface contracts
- Documenting API behavior

## Workflow

### Step 1: Understand Requirements

1. Identify use cases
2. Define resources and entities
3. Understand relationships
4. Identify operations needed

**Questions to ask:**
- What resources are we working with?
- What operations are needed (CRUD)?
- Who are the consumers?
- What are the constraints?

### Step 2: Design Resource Model

1. Identify resources (nouns)
2. Define resource relationships
3. Design data models
4. Consider versioning

**Principles:**
- Resources are nouns (users, posts, comments)
- Use plural nouns for collections
- Hierarchical resources: `/users/{id}/posts`
- Avoid deep nesting (>2 levels)

**Example:**
```
Users
├── User ID (primary key)
└── Posts (one-to-many)
    ├── Post ID
    └── Comments (one-to-many)
```

### Step 3: Design Endpoints

1. Map operations to HTTP methods
2. Design URL structure
3. Define request/response formats
4. Consider pagination, filtering, sorting

**RESTful Mapping:**
- `GET /resources` - List all resources
- `GET /resources/{id}` - Get specific resource
- `POST /resources` - Create new resource
- `PUT /resources/{id}` - Update entire resource
- `PATCH /resources/{id}` - Update partial resource
- `DELETE /resources/{id}` - Delete resource

**Best Practices:**
- Use nouns, not verbs in URLs
- Use HTTP status codes correctly
- Support filtering: `?status=active&limit=10`
- Support pagination: `?page=1&per_page=20`
- Use consistent naming (camelCase or snake_case)

### Step 4: Design Request/Response

1. Define request body structure
2. Define response structure
3. Design error responses
4. Consider content negotiation

**Response Format:**
```json
{
  "data": { ... },
  "meta": {
    "pagination": {
      "page": 1,
      "per_page": 20,
      "total": 100,
      "total_pages": 5
    }
  },
  "errors": [ ... ]
}
```

**Error Format:**
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input",
    "details": [
      { "field": "email", "message": "Invalid email format" }
    ]
  }
}
```

### Step 5: Document API

1. Write OpenAPI/Swagger spec
2. Document all endpoints
3. Provide examples
4. Document authentication

**Documentation includes:**
- Endpoint URLs and HTTP methods
- Request/response schemas
- HTTP status codes
- Authentication requirements
- Rate limits
- Usage examples

## Design Principles

### Consistency
- Same patterns throughout
- Consistent error handling
- Standard naming conventions
- Uniform response structures

### Simplicity
- Easy to understand and use
- Clear endpoint structure
- Minimal complexity
- Intuitive API

### Discoverability
- Self-documenting structure
- Consistent patterns
- Clear naming
- Logical organization

### Versioning
- Plan for breaking changes
- Use URL versioning (`/v1/...`)
- Support old versions
- Deprecation notices

### Security
- Authentication and authorization
- Input validation
- Rate limiting
- CORS configuration

### Performance
- Efficient queries
- Caching support
- Pagination for large datasets
- Optimized response sizes

## Anti-Patterns

❌ **Don't do:**
- Using verbs in URLs (`/getUsers`)
- Ignoring HTTP status codes
- Inconsistent naming conventions
- No error handling
- No versioning strategy
- Exposing internal database structure
- No rate limiting
- Returning excessive data

✅ **Do instead:**
- Use nouns (`/users`)
- Use proper HTTP codes
- Consistent naming
- Comprehensive error handling
- Version your API
- Abstract database structure
- Implement rate limiting
- Return only needed data

## Common Patterns

### Pagination
```typescript
GET /api/v1/users?page=1&per_page=20

Response:
{
  "data": [ ...users ],
  "meta": {
    "pagination": {
      "page": 1,
      "per_page": 20,
      "total": 100,
      "total_pages": 5
    }
  }
}
```

### Filtering
```typescript
GET /api/v1/users?status=active&role=admin

// Filter by status and role
```

### Sorting
```typescript
GET /api/v1/users?sort=created_at:desc

// Sort by creation date, descending
```

### Nested Resources
```typescript
GET /api/v1/users/{id}/posts

// Get posts for specific user
```

## Authentication

### JWT Authentication
```typescript
// Request
GET /api/v1/users/me
Headers: {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIs..."
}

// Response
{
  "data": { ...user }
}
```

### API Keys
```typescript
// Request
GET /api/v1/users/me
Headers: {
  "X-API-Key": "your-api-key"
}
```

## Error Handling

### HTTP Status Codes
| Code | Meaning | Usage |
|------|---------|-------|
| 200 | OK | Successful GET, PUT, PATCH |
| 201 | Created | Successful POST |
| 204 | No Content | Successful DELETE |
| 400 | Bad Request | Invalid input |
| 401 | Unauthorized | Missing or invalid auth |
| 403 | Forbidden | Auth but no permission |
| 404 | Not Found | Resource doesn't exist |
| 409 | Conflict | Resource already exists |
| 422 | Unprocessable Entity | Validation errors |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server error |

## Verification

- [ ] All endpoints documented
- [ ] OpenAPI spec created
- [ ] Examples provided
- [ ] Error handling defined
- [ ] Authentication documented
- [ ] Rate limiting configured
- [ ] Input validation implemented
- [ ] Consistent naming used
- [ ] Versioning strategy defined

## Related Skills

- [Component Design](../design/component-design.md) - API integration with UI
- [Database Design](../design/database-design.md) - API data layer
- [Error Handling](../development/error-handling.md) - API error handling
- [Test Driven Development](../testing/test-driven-development.md) - API testing

## Related Commands

- [Design Command](../../commands/research/design.md) - API architecture design
- [Research Command](../../commands/research/research.md) - Research API patterns

## Next Steps

- [Database Design](../design/database-design.md) - Design data layer
- [Test Driven Development](../testing/test-driven-development.md) - Write API tests
- [Documentation](../documentation/documentation.md) - Document API

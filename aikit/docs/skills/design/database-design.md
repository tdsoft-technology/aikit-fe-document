---
sidebar_position: 2
---

# Database Design Skill

Use this skill when designing database schema, relationships, or data models.

## Overview

Design efficient, normalized database schemas that support application requirements while maintaining data integrity.

## When to Use

Use this skill when:
- Designing a new database schema
- Creating database tables
- Defining relationships between entities
- Optimizing database performance

## Workflow

### Step 1: Understand Requirements

1. Identify entities
2. Identify relationships
3. Understand data access patterns
4. Consider scale requirements

**Questions:**
- What entities exist?
- How are they related?
- What queries will be common?
- What's the expected scale?
- What are the access patterns?

### Step 2: Design Entity Model

1. Identify entities (tables)
2. Define attributes (columns)
3. Choose data types
4. Define constraints

**Entity Design:**
- Each entity = one table
- Attributes = columns
- Choose appropriate types
- Add constraints (NOT NULL, UNIQUE)

### Step 3: Design Relationships

1. One-to-one relationships
2. One-to-many relationships
3. Many-to-many relationships
4. Foreign keys

**Relationship Types:**
- **1:1**: Rare, consider merging
- **1:Many**: Foreign key in "many" side
- **Many:Many**: Junction table

### Step 4: Normalize Database

1. First Normal Form (1NF)
2. Second Normal Form (2NF)
3. Third Normal Form (3NF)
4. Consider denormalization for performance

**Normalization:**
- **1NF**: Atomic values, no repeating groups
- **2NF**: 1NF + no partial dependencies
- **3NF**: 2NF + no transitive dependencies

### Step 5: Design Indexes

1. Primary keys
2. Foreign keys
3. Frequently queried columns
4. Composite indexes for multi-column queries

**Index Strategy:**
- Index primary keys (automatic)
- Index foreign keys
- Index frequently filtered columns
- Index columns in WHERE, JOIN, ORDER BY

### Step 6: Consider Performance

1. Denormalization where needed
2. Partitioning for large tables
3. Caching strategy
4. Query optimization

**Performance Considerations:**
- Denormalize for read-heavy workloads
- Partition large tables
- Use appropriate indexes
- Consider materialized views

### Step 7: Plan Migrations

1. Version control schema
2. Plan migration strategy
3. Handle data migration
4. Rollback strategy

## Design Principles

- **Normalization**: Reduce redundancy
- **Integrity**: Enforce constraints
- **Performance**: Optimize for queries
- **Scalability**: Plan for growth
- **Maintainability**: Clear structure

## Anti-Patterns

❌ **Don't do:**
- Over-normalization
- Under-normalization
- Missing indexes
- No foreign keys
- Storing computed values
- No migration strategy

✅ **Do instead:**
- Normalize appropriately
- Use indexes strategically
- Enforce referential integrity
- Use computed values in queries
- Plan migrations carefully

## Verification

- [ ] Schema normalized
- [ ] Relationships defined
- [ ] Indexes created
- [ ] Constraints added
- [ ] Migration plan ready

## Related Skills

- [API Design](../development/api-design.md) - API data layer
- [Performance Optimization](../development/performance-optimization.md) - Database performance

## Related Commands

- [Design Command](../../commands/research/design.md) - Design database architecture
- [Test Command](../../commands/quick/test.md) - Test database queries

## Next Steps

- [API Design](../development/api-design.md) - Design API layer
- [Performance Optimization](../development/performance-optimization.md) - Optimize database performance

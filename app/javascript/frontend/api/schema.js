import { normalize, denormalize, schema } from 'normalizr';

// for tests
window.normalize = normalize;
window.denormalize = denormalize;

// Define a users schema
const userSchema = new schema.Entity('users');

// Define your comments schema
const departmentSchema = new schema.Entity('departments');

// Define your article
const lead = new schema.Entity('leads', {
  user: userSchema,
  assigned_to: userSchema,
  department: departmentSchema
});

export const leadListSchema = [lead];
export const leadSchema = lead;

// const normalizedData = normalize(originalData, lead);
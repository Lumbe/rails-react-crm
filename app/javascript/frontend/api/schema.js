import { schema } from 'normalizr';

const userSchema = new schema.Entity('users');

const departmentSchema = new schema.Entity('departments');

const lead = new schema.Entity('leads', {
  user: userSchema,
  assigned_to: userSchema,
  department: departmentSchema
});

export const leadListSchema = [lead];
export const leadSchema = lead;

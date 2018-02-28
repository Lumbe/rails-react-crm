import { schema } from 'normalizr';

const departmentSchema = new schema.Entity('departments');

const userSchema = new schema.Entity('users');

const lead = new schema.Entity('leads', {
  user: userSchema,
  assigned_to: userSchema,
  department: departmentSchema
});

export const leadListSchema = [lead];
export const leadSchema = lead;

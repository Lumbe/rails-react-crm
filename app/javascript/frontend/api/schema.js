import { schema } from 'normalizr';

const departmentSchema = new schema.Entity('departments');

const user = new schema.Entity('users', {
  departments: [departmentSchema]
});

const lead = new schema.Entity('leads', {
  user: user,
  assigned_to: user,
  department: departmentSchema
});

const contact = new schema.Entity('contacts', {
  user: user,
  assigned_to: user,
  department: departmentSchema
});


export const userListSchema = [user];
export const userSchema = user;
export const leadListSchema = [lead];
export const leadSchema = lead;
export const contactListSchema = [contact];
export const contactSchema = contact;
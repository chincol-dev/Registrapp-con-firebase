export interface User {
  uid?: string; // Identificador único del usuario, opcional al crear
  email: string;
  password: string;
  name?: string;
  tipo?: 'profesor' | 'alumno'; // Especifica el rol del usuario
  asignaturas?: string[]; // Lista de IDs de asignaturas asociadas al usuario
}

export interface User {
  uid: string;
  email: string;
  password: string;
  name: string;
  tipo: string; // "profesor" o "alumno"
  asignaturas?: string[]; // Inicialmente vacío
}

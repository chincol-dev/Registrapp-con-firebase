// Modelo de Clase
export interface Clase {
  id: string;                       // ID de la clase, que será la referencia en Firestore
  nombre: string;                   // Nombre de la clase
  codigo: string;                   // Código de la clase, único
  profesorId: string;               // ID del profesor asociado
  profesorNombre: string;           // Nombre completo del profesor
  horario: string[];                // Horarios de la clase (ej.: ["Lunes 10:00 - 12:00"])
  alumnos: AlumnoRef[];            // Lista de referencias a los alumnos
  fechaCreacion: Date;             // Fecha de creación de la clase
}

// Modelo de referencia de alumno (simplificado para ser usado en la lista de clase)
export interface AlumnoRef {
  alumnoId: string;                 // ID del alumno
  nombre: string;                   // Nombre completo del alumno
}

// Modelo de Asistencia
export interface Asistencia {
  fecha: Date;                      // Fecha específica de la clase
  alumnos: AsistenciaAlumno[];      // Lista de alumnos con su estado de asistencia
}

export interface AsistenciaAlumno {
  alumnoId: string;                 // ID del alumno (referencia)
  nombre: string;                   // Nombre del alumno
  presente: boolean;                // Estado de asistencia (true/false)
}

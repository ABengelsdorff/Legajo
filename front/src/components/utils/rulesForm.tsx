export const ValidacionLegajo = {
  nombre: {
    required: "El nombre es obligatorio",
    pattern: {
      value: /^[A-ZÁÉÍÓÚÑ\s]+$/,
      message: "Solo se permiten letras en mayúsculas y espacios",
    },
  },
  apellido: {
    required: "El apellido es obligatorio",
    pattern: {
      value: /^[A-ZÁÉÍÓÚÑ\s]+$/,
      message: "Solo se permiten letras en mayúsculas y espacios",
    },
  },
  sexo: {
    required: "El sexo es obligatorio",
  },
  fechadeNacimiento: {
    required: "La fecha de nacimiento es obligatoria",
  },
  numeroDeDni: {
    required: "El número de DNI es obligatorio",
    pattern: {
      value: /^[0-9]{7,8}$/, // Asume un formato de DNI de 7 u 8 dígitos
      message: "El DNI debe ser un número válido de 7 u 8 dígitos",
    },
  },
  numeroDeCuil: {
    required: "El número de CUIL es obligatorio",
    pattern: {
      value: /^\d{2}-\d{8}-\d{1}$/, // Formato CUIL válido
      message: "El CUIL debe tener el formato XX-XXXXXXXX-X",
    },
  },
  grupoSanguineo: {
    required: "El grupo sanguíneo es obligatorio",
    minLength: {
      value: 2,
      message: "El grupo sanguíneo debe tener al menos 2 caracteres",
    },
    pattern: {
      value: /^[A-ZÁÉÍÓÚÑ0-9\s\W_]+$/,
      message:
        "Solo se permiten letras mayúsculas, números, espacios y símbolos",
    },
  },
  direccion: {
    required: "La dirección es obligatoria",
    pattern: {
      value: /^[A-ZÁÉÍÓÚÑ0-9\s\W_]+$/,
      message:
        "Solo se permiten letras mayúsculas, números, espacios y símbolos",
    },
  },
  codigoPostal: {
    required: "El código postal es obligatorio",
    pattern: {
      value: /^[A-Za-z0-9]{4,8}$/,
      message: "Debe tener entre 4 y 8 caracteres alfanuméricos",
    },
  },
  correoElectronico: {
    required: "El correo electrónico es obligatorio",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "El correo electrónico debe ser válido",
    },
  },
  correoInstitucional: {
    required: "El correo institucional es obligatorio",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "El correo institucional debe ser válido",
    },
  },
  cbu: {
    required: "El CBU es obligatorio",
    pattern: {
      value: /^[0-9]{22}$/, // Formato de CBU argentino (22 dígitos)
      message: "El CBU debe ser un número de 22 dígitos",
    },
  },
  numeroDeCelular: {
    required: "El número de celular es obligatorio",
    pattern: {
      value: /^[0-9]{10}$/, // Formato de número celular con 10 dígitos
      message: "El número de celular debe tener 10 dígitos",
    },
  },
  formacionAcademica: {
    required: "La formación académica es obligatoria",
  },
  estadoCivil: {
    required: "El estado civil es obligatorio",
  },
  destinadoEnLaUnidad: {
    required: "El campo 'Destinado en la Unidad' es obligatorio",
  },
  numeroDeIosfa: {
    required: "El número de IOSFA es obligatorio",
    pattern: {
      value: /^[0-9]{1,}$/, // Asegura que el número sea válido
      message: "El número de IOSFA debe ser válido",
    },
  },
  institutoDeFormacion: {
    required: "El instituto de formación es obligatorio",
  },
  escalafon: {
    required: "El escalafón es obligatorio",
    pattern: {
      value: /^[A-ZÁÉÍÓÚÑ0-9\s\W_]+$/,
      message:
        "Solo se permiten letras mayúsculas, números, espacios y símbolos",
    },
  },
  grado: {
    required: "El grado es obligatorio",
  },
  destinoJbGrupos: {
    required: "El destino en JB Grupos es obligatorio",
  },
  destinoInterno: {
    required: "El destino interno es obligatorio",
    pattern: {
      value: /^[A-ZÁÉÍÓÚÑ0-9\s\W_]+$/,
      message:
        "Solo se permiten letras mayúsculas, números, espacios y símbolos",
    },
  },
  cargo: {
    required: "El cargo es obligatorio",
  },
  especialidad: {
    required: "La especialidad es obligatoria",
    pattern: {
      value: /^[A-ZÁÉÍÓÚÑ0-9\s\W_]+$/,
      message:
        "Solo se permiten letras mayúsculas, números, espacios y símbolos",
    },
  },
  especialidadAvanzada: {
    required: "La especialidad avanzada es obligatoria",
    pattern: {
      value: /^[A-ZÁÉÍÓÚÑ0-9\s\W_]+$/,
      message:
        "Solo se permiten letras mayúsculas, números, espacios y símbolos",
    },
  },
  nivelDeIngles: {
    required: "El nivel de inglés es obligatorio",
    min: {
      value: 0,
      message: "El nivel de inglés no puede ser menor a 0%",
    },
    max: {
      value: 100,
      message: "El nivel de inglés no puede ser mayor a 100%",
    },
  },
  rti: {
    required: "El RTI es obligatorio",
    pattern: {
      value: /^[A-Za-z0-9]+$/, // Asegura que el RTI sea alfanumérico
      message: "El RTI debe ser válido",
    },
  },
  destinoAnterior: {
    required: "El destino anterior es obligatorio",
    pattern: {
      value: /^[A-ZÁÉÍÓÚÑ0-9\s\W_]+$/,
      message:
        "Solo se permiten letras mayúsculas, números, espacios y símbolos",
    },
  },
  usuarioGde: {
    required: "El usuario GDE es obligatorio",
    pattern: {
      value: /^[A-ZÁÉÍÓÚÑ0-9\s\W_]+$/,
      message:
        "Solo se permiten letras mayúsculas, números, espacios y símbolos",
    },
  },
  parentesco: {
    required: "El parentesco es obligatorio",
  },
  personalMilitar: {
    required: "El campo 'Personal Militar' es obligatorio",
  },
  observaciones: {
    required: "Las observaciones son obligatorias",
    pattern: {
      value: /^[A-ZÁÉÍÓÚÑ0-9\s\W_]+$/,
      message:
        "Solo se permiten letras mayúsculas, números, espacios y símbolos",
    },
  },
  cursosRealizados: {
    validate: (curso: string) =>
      (/^[A-ZÁÉÍÓÚÑ\s]+$/.test(curso) && curso.length >= 2) ||
      "Cada curso debe tener al menos 2 caracteres y estar en mayúsculas",
  },
  situacionDeRevista: {
    required: "La situación de revista es obligatoria",
  },
  numeroDeExpediente: {
    required: "El número de expediente es obligatorio",
  },
  afeccion: {
    required: "La afección es obligatoria",
    pattern: {
      value: /^[A-ZÁÉÍÓÚÑ0-9\s\W_]+$/,
      message:
        "Solo se permiten letras mayúsculas, números, espacios y símbolos",
    },
  },
  disponibilidadDesde: {
    required: "La fecha de inicio de disponibilidad es obligatoria",
  },
  disponibilidadHasta: {
    required: "La fecha de finalización de disponibilidad es obligatoria",
    validate: (value: string, context: { disponibilidadDesde: string }) =>
      new Date(value) >= new Date(context.disponibilidadDesde) ||
      "La fecha de finalización debe ser posterior a la de inicio",
  },
  pasivaDesde: {
    required: "La fecha de inicio de pasiva es obligatoria",
  },
  pasivaHasta: {
    required: "La fecha de finalización de pasiva es obligatoria",
    validate: (value: string, context: { pasivaDesde: string }) =>
      new Date(value) >= new Date(context.pasivaDesde) ||
      "La fecha de finalización debe ser posterior a la de inicio",
  },
  juntaMedicaMensaje: {
    required: "El mensaje aeronáutico es obligatorio",
    pattern: {
      value: /^[A-ZÁÉÍÓÚÑ0-9\s\W_]+$/,
      message:
        "Solo se permiten letras mayúsculas, números, espacios y símbolos",
    },
  },
  juntaMedicaTurnos: {
    required: "Debe seleccionar una fecha para la junta médica",
    validate: (value: string | Date | null) => {
      if (value === null || value === "") {
        return "La fecha no puede estar vacía";
      }
      const dateValue = new Date(value);
      return !isNaN(dateValue.getTime()) || "La fecha no es válida";
    },
  },
  juntaMedicaObservacion: {
    required: "La observación es obligatoria",
    pattern: {
      value: /^[A-ZÁÉÍÓÚÑ0-9\s\W_]+$/,
      message:
        "Solo se permiten letras mayúsculas, números, espacios y símbolos",
    },
  },
  juntaMedicaAfeccion: {
    required: "La afección es obligatoria",
    pattern: {
      value: /^[A-ZÁÉÍÓÚÑ0-9\s\W_]+$/,
      message:
        "Solo se permiten letras mayúsculas, números, espacios y símbolos",
    },
  },
  solicitudObservaciones: {
    required: "Las observaciones son obligatorias",
    pattern: {
      value: /^[A-ZÁÉÍÓÚÑ0-9\s\W_]+$/,
      message:
        "Solo se permiten letras mayúsculas, números, espacios y símbolos",
    },
  },
  solicitudNumeroDeExpediente: {
    required: "El número de expediente es obligatorio",
  },
  solicitudDesde: {
    required: "La fecha de inicio de solicitud es obligatoria",
  },
  inicioParteDeEnfermo: {
    required: "La fecha de inicio del parte de enfermo es obligatoria",
  },
  parteDeEnfermoObservaciones: {
    required: "Las observaciones son obligatorias",
    pattern: {
      value: /^[A-ZÁÉÍÓÚÑ0-9\s\W_]+$/,
      message:
        "Solo se permiten letras mayúsculas, números, espacios y símbolos",
    },
  },
  aptitudPsicofisicaEstado: {
    required: "El estado es obligatorio",
    pattern: {
      value: /^[A-ZÁÉÍÓÚÑ0-9\s\W_]+$/,
      message:
        "Solo se permiten letras mayúsculas, números, espacios y símbolos",
    },
  },
  aptitudPsicofisicaObservaciones: {
    required: "La observación es obligatoria",
    pattern: {
      value: /^[A-ZÁÉÍÓÚÑ0-9\s\W_]+$/,
      message:
        "Solo se permiten letras mayúsculas, números, espacios y símbolos",
    },
  },
  compromisoDeServicio: {
    required: "Debe indicar si hay compromiso de servicio",
  },

  ultimoAscenso: {
    required: "Debe ingresar la fecha del último ascenso",
  },

  fotoDeLegajo: {
    required: "Debe indicar si hay foto de legajo",
  },
};


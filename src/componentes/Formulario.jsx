import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio, { RadioProps } from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { MuiTelInput } from 'mui-tel-input';

const validationSchema = yup.object({

  nombreCompleto: yup
    .string('Introduce tu nombre completo')
    .required('El nombre es requerido'),
  apellidoPaterno: yup
    .string('Introduce tu apellido paterno')
    .required('El apellido paterno es requerido'),
  apellidoMaterno: yup
    .string('Introduce tu apellido materno')
    .required('El apellido materno es requerido'),
  email: yup
    .string('Introduce tu correo')
    .email('Introduzca un correo electrónico válido')
    .required('El correo electronico es requerido'),
});

const Formulario = () => {
  const [text, setText] = useState('');
  const [phone, setPhone] = React.useState('')

  const handleChange = (newPhone) => {
    setPhone(newPhone)
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      apellidoMaterno: '',
      apellidoPaterno: '',
      nombreCompleto: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='contenedor-formulario'>

      <div className='logo'></div>

      <div className='contenedor-encabezado'>
        <br></br>
        <h1>Seguimiento vacuna COVID-19</h1>
      </div>

      <div className='contenedor-datos'>

        <form onSubmit={formik.handleSubmit}>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '55ch' },
            }}
            noValidate
            autoComplete="off"
          >

            <TextField
              id="nombreCompleto"
              name="nombreCompleto"
              label="Nombre Completo*"
              value={formik.values.nombreCompleto}
              onChange={formik.handleChange}
              error={formik.touched.nombreCompleto && Boolean(formik.errors.nombreCompleto)}
              helperText={formik.touched.nombreCompleto && formik.errors.nombreCompleto}
            />

            <TextField
              id="apellidoPaterno"
              name="apellidoPaterno"
              label="Apellido Paterno*"
              value={formik.values.apellidoPaterno}
              onChange={formik.handleChange}
              error={formik.touched.apellidoPaterno && Boolean(formik.errors.apellidoPaterno)}
              helperText={formik.touched.apellidoPaterno && formik.errors.apellidoPaterno}
            />

            <TextField
              id="apellidoMaterno"
              name="apellidoMaterno"
              label="Apellido Materno*"
              value={formik.values.apellidoMaterno}
              onChange={formik.handleChange}
              error={formik.touched.apellidoMaterno && Boolean(formik.errors.apellidoMaterno)}
              helperText={formik.touched.apellidoMaterno && formik.errors.apellidoMaterno}
            />

            <MuiTelInput label="Teléfono(Opcional)" placeholder="+52" value={phone} onChange={handleChange} />

            <TextField
              placeholder="usuario@ejemplo.com"
              id="email"
              name="email"
              label="Correo Electrónico *"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Genero</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="masculino"
              >
                <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                <FormControlLabel value="femenino" control={<Radio />} label="Femenino" />
                <FormControlLabel value="otro" control={<Radio />} label="Prefiero No Decirlo" />
              </RadioGroup>
            </FormControl>

          </Box>

          <Button variant="contained" color="primary" type="submit">Enviar Datos</Button>
        </form>

      </div>

    </div>
  );
}

export default Formulario;
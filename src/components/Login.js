import React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import HttpsIcon from "@mui/icons-material/Https";
import Button from "@mui/material/Button";

const Login = () => {
  return (
    <Box
      sx={{
        width: 500,
        height: 200,
        display: "flex",
        flexDirection: "column",
        border: '2px solid #ccc', // Añade un contorno
        borderRadius: '8px', // Opcional: Añade bordes redondeados
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        "& > :not(style)": { m: 1 },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="input-with-sx"
          label="Correo o Celular"
          variant="standard"
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <HttpsIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          type="password"
          fullWidth
          id="input-with-sx"
          label="Contraseña"
          variant="standard"
        />
      </Box>
      <Button sx={{marginLeft: 'auto', marginRight: 'auto', display: 'block'}} variant="contained">
        Aceptar
      </Button>
    </Box>
  );
};
export default Login;

import Head from "next/head";
import { Box, Button, Dialog, DialogActions, Grid, Snackbar, TextField } from "@mui/material";
import React from "react";
import { NextPage } from "next";
import Lista from "../src/components/Lista";
import { useIndex } from "../src/hooks/useIndex";

const Home: NextPage = () => {
  let { listaProfessores, nome, setNome, email, setEmail, professorSelecionado, setProfessorSelecionado, marcarAula, setMensagem, mensagem } = useIndex();

  return (
    <div>
      <Head>
        <title>React Python</title>
        <meta name="description" content="Treinaweb semana react python" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ backgroundColor: "secondary.main" }}>
        <Lista 
          professores={listaProfessores} 
          onSelect={(professor) => setProfessorSelecionado(professor)}
        
        />
      </Box>


      <Dialog   onClose={() => setProfessorSelecionado(null)} open={professorSelecionado != null} fullWidth PaperProps={{ sx: { p: 5 } }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
                label="Digite o nome" 
                type="text" fullWidth 
                onChange={(e) => setNome(e.target.value)}    
            />
          </Grid>

          <Grid item xs={12}>
            <TextField 
                label="Digite o e-mail" 
                type="text" 
                fullWidth 
                onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{mt:5}}>
          <Button onClick={() => setProfessorSelecionado(null)}>Cancelar</Button>
          <Button onClick={() => marcarAula()}>Marcar</Button>
        </DialogActions>
      </Dialog>
      <Snackbar message={mensagem} open={mensagem.length > 0} autoHideDuration={2700} onClose={() => setMensagem('')}/>
    </div>
  );
};
export default Home;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MenuBar from "./component/MenuBar";
import { Box, Button, Container, Grid } from "@mui/material";
import StudentCard from "./component/StudentCard";
import jets from "./assets/jets.jpg";
import { mockStudent } from "./constants/mockdata";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <MenuBar />
        <Grid
          container
          sx={{
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 300,
          }}
        >
          <Grid
            xs={10}
            sx={{
              display: "flex",
              flexDirection: "row",
              p: 5,
              m: 5,
              bgcolor: "background.paper",
              borderRadius: 1,
              justifyContent: "center",
            }}
          >
            {mockStudent.map((student) => (
              <StudentCard
                description={student.description}
                image={student.image}
                title={student.title}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;

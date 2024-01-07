import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
interface StudentCardProps {
  title: string;
  description: string;
  image: string;
}
const StudentCard = (props: StudentCardProps) => {
  const [isAddToCart, setIsAddToCart] = useState(false);

  const handleAddToCart = () => {
    
    setIsAddToCart(!isAddToCart);
  };

  return (
    <Card sx={{  width:500, margin: 1,  }}>
      <CardMedia
        sx={{ height: 200 }}
        image={props.image}
    
      />
      <CardContent>
        
        <Typography sx={{height:50}} gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" onClick={handleAddToCart}>
          {isAddToCart ? "Added to Cart" : "Add to Cart"}</Button>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
};

export default StudentCard;

import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { getMultipleFiles } from "../api/api";

import CarouseCard from "./CarouseCard";

const Card = () => {
  const [cards, setCards] = useState([]);

  const getAllfiles = async () => {
    try {
      const files = await getMultipleFiles();
      setCards(files);
      console.log("cards", cards);
      console.log("files", files);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllfiles();
  }, []);

  return (
    <Box sx={{ mx: 2, bgcolor: " 	#ffffff", padding: "1%" }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((data) => {
          return (
            <Grid key={data.id} item xs={12} sm={6} md={6} lg={4}>
              <CarouseCard data={data} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Card;

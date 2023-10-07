import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function SpecialBanner({ specialItem }) {
  return (
    <Card
      variant="outlined"
      style={{ marginBottom: "2rem", border: "none", marginInline: "2rem" }}
    >
      {/* Display the image */}
      <div style={{ position: "relative" }}>
        <img
          src={specialItem.imageUrl}
          alt={specialItem.item_name}
          style={{
            width: "100%",
            height: "15rem",
            maxHeight: "40vh",
            objectFit: "cover",
            borderRadius: "18px",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            right: "0px",
            background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
            color: "white",
            padding: "16px 30px",
            paddingTop: "48px",
            borderRadius: "0 0 18px 18px",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            style={{
              fontSize: "1.125rem",
              fontWeight: "500",
            }}
          >
            {specialItem.item_name}
          </Typography>
          {specialItem.price && (
            <Typography
              variant="body2"
              style={{ fontSize: "32px", fontWeight: "700" }}
            >
              {specialItem.price}
            </Typography>
          )}
        </div>
      </div>
    </Card>
  );
}

export default SpecialBanner;

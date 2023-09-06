import { Box } from "@mui/material";

const ImageHolder = (props) => {
  const { width, height, src, alt, fontSize } = props;

  return (
    <Box
      sx={{
        width: width,
        height: height,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          fontSize: fontSize,
        }}
      />
    </Box>
  );
};

export default ImageHolder;

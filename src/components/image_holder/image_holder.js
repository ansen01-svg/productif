import { Box } from "@mui/material";

const ImageHolder = (props) => {
  const { width, height, src, alt, fontSize } = props;

  return (
    <Box>
      <img
        src={src}
        alt={alt}
        style={{
          width: width,
          height: height,
          objectFit: "cover",
          objectPosition: "center",
          fontSize: fontSize,
        }}
      />
    </Box>
  );
};

export default ImageHolder;

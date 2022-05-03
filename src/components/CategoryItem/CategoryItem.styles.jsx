import styled from "@emotion/styled/macro";

const BackgroundImage = styled.div((props) => ({
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `url(${props.imageUrl})`,
}));

const CategoryItemBody = styled.div({
  height: "90px",
  padding: "0 25px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid black",
  background: "white",
  opacity: "0.7",
  position: "absolute",
  borderRadius: "2px",
});

const Title = styled.h2({
  fontWeight: "bold",
  textTransform: "uppercase",
  margin: "0 6px 0",
  fontSize: "22px",
  color: "#4a4a4a",
});

const Description = styled.p({
  fontWeight: "lighter",
  fontSize: "16px",
});

const CategoryItemContainer = styled.div({
  minWidth: "30%",
  height: "240px",
  flex: "1 1 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid black",
  margin: "0 7.5px 15px",
  overflow: "hidden",
  "&:hover": {
    cursor: "pointer",
    [BackgroundImage]: {
      transform: "scale(1.1)",
      transition: "transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)",
    },
    [CategoryItemBody]: {
      opacity: "0.9",
    },
  },
});

export {
  CategoryItemContainer,
  BackgroundImage,
  CategoryItemBody,
  Title,
  Description,
};

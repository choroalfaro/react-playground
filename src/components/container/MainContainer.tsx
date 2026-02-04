import React from 'react'
import Container from "@mui/material/Container"

type ContainerProps = {
    children: React.ReactNode
}

const style = {
    colorScheme: "light dark",
    color: "rgba(255, 255, 255, 0.87)",
    backgroundColor: "#242424"
}
const MainContainer: React.FC<ContainerProps> = ({ children }) => {
    return <Container sx={style}>{children}</Container>
}

export default MainContainer
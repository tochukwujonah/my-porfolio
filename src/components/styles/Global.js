import { createGlobalStyle } from "styled-components";
import { colors } from "../../colors";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap');

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Space Grotesk', sans-serif;
}

body {
  background: ${colors.primary};
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  color: ${colors.body_text};
}

p {
  font-size: 1.6rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

h1 {
  margin-top: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3.2rem;
  font-weight: 400;
}

h2 {
  font-size: 2.441rem;
}

h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: ${colors.white};
}

h4 {
  font-size: 1.8rem;
  font-weight: 400;
}

h5 {
  font-size: 1.6rem;
}

h6 {
    font-size: 1.5rem;
    font-family: 'Inter', sans-serif;
}

small {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    line-height: 21px;
    color: ${colors.body_text};
}

a {
    text-decoration: none;
}

ul {
    list-style-type: none;
    padding: 0;
}

br  {
    content: "";
    display: block;
    margin: 20px 0;
    }
`;

export {GlobalStyles};
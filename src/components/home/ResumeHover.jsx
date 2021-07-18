import React, {useState} from 'react';
import { Container, Button, Link, darkColors, lightColors } from 'react-floating-action-button';

const ResumeHover = ({ icons, resume, resumeIcon }) => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 620 ? setVisible(true) : setVisible(false);
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    (visible) ? (
      <Container className="floating-button" >
        {
          icons?.map(icon => (
            <Link
              key={icon.description}
              href={icon.url}
              tooltip={icon.description}
              icon={`fab ${icon.image} fa-2x socialicons`}
              styles={{
                backgroundColor: darkColors.grey,
                color: lightColors.darkerGrey
              }}
            />
          ))
        }
        <Button
          tooltip={resumeIcon.description}
          icon={`fas ${resumeIcon.image} fa-2x`}
          onClick={() => window.open(resume)}
          rotate={true}
          styles={{
            backgroundColor: darkColors.orange,
            color: darkColors.white
          }}
        />
      </Container>
    ) : null
  );
}

export default ResumeHover;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { TeamItemProps } from '.';
import './TeamItemDesktop.scss';

const TeamItemDesktop: React.FC<TeamItemProps> = ({ member }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`team-desktop ${show ? 'active' : ''}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {show && (
        <>
          <h4>
            {member.name}
          </h4>
          <h5>
            {member.role}
          </h5>
          <div className='social'>
            {member.linkedin && <FontAwesomeIcon icon={faLinkedin} onClick={() => window.open(member.linkedin)} />}
            {member.github && <FontAwesomeIcon icon={faGithub} onClick={() => window.open(member.github)} />}
          </div>
        </>
      )}
    </div>
  );
}

export default TeamItemDesktop;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { TeamItemProps } from '.';
import './TeamItemMobile.scss';

const TeamItemMobile: React.FC<TeamItemProps> = ({ member }) => {
  return (
    <div className='team-mobile'>
      <div className='info'>
        <h4>{member.name}</h4>
        <h5>{member.role}</h5>
        <div className='social'>
          {member.linkedin && <FontAwesomeIcon icon={faLinkedin} onClick={() => window.open(member.linkedin)} />}
          {member.github && <FontAwesomeIcon icon={faGithub} onClick={() => window.open(member.github)} />}
        </div>
      </div>
    </div>
  );
}

export default TeamItemMobile;

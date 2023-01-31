import React from 'react';
import Tilt from 'react-parallax-tilt';
import TeamItemMobile from './TeamItemMobile';
import TeamItemDesktop from './TeamItemDesktop';
import './TeamItem.scss';

export interface TeamMember {
  id: string;
  image: string;
  name: string;
  role: string;
  linkedin: string;
  github?: string;
}

export interface TeamItemProps {
  member: TeamMember;
}

const TeamItem: React.FC<TeamItemProps> = ({ member }) => {
  return (
    <Tilt>
      <div className='team-item shadow'>
        <img src={member.image} alt={member.name} />
        <TeamItemMobile member={member} />
        <TeamItemDesktop member={member} />
      </div>
    </Tilt>
  )
}

export default TeamItem;

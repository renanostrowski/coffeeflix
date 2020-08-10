import React from 'react';
import { WrapperThumb, Thumb, Avatar } from './styles';

interface Props {
  src: string;
  alt: string;
  avatar: string;
  channelname: string;
}

function ThumbCoffee({src, alt, avatar, channelname} : Props) {
  return (
    <WrapperThumb>
      <Thumb src={src} alt={alt} />
      <Avatar src={avatar} alt={channelname} />
    </WrapperThumb>
  )
}

export default ThumbCoffee;
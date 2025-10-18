// src/components/MemberCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaInstagram } from "react-icons/fa";

interface MemberCardProps {
  imgSrc: string;
  name: string;
  position: string;
  linkedinUrl?: string;
  instagramUrl?: string;
}

function MemberCard({ imgSrc, name, position, linkedinUrl, instagramUrl }: MemberCardProps) {
  return (
    <div className="member-card w-72 rounded-xl hover:shadow-[0_0_26px_2px_rgba(234,179,8,0.55)] transition-[transform,box-shadow] hover:scale-105 overflow-hidden bg-zinc-800 text-white">
      <Image
        src={imgSrc}
        alt={name}
        className="member-img w-full h-72 object-cover"
        width={288}
        height={288}
      />
      <div className="member-info p-5 text-center">
        <h3 className="member-name text-xl font-semibold mb-2">{name}</h3>
        <p className="member-position text-yellow-500 font-medium">{position}</p>
        <div className="member-social flex justify-center gap-3 mt-2">
          {linkedinUrl && (
            <Link href={linkedinUrl} className="social-icon flex items-center justify-center w-8 h-8 rounded-full bg-zinc-700 hover:scale-125 hover:bg-[#0077b5] hover:text-white transition-transform" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
          {instagramUrl && (
            <Link href={instagramUrl} className="social-icon flex items-center justify-center w-8 h-8 rounded-full bg-zinc-700 hover:scale-125 hover:bg-gradient-to-r from-[#f09433] to-[#bc1888] hover:text-white transition-transform" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
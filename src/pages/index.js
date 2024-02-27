import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, Typography } from "@material-tailwind/react";
import NavbarC from "@/components/Navbar";
import Me from '../../public/Me.svg'
import Gradient from '../../public/Gradient.svg'

import Profile from "@/components/profile";
import Projects from "@/components/Projects";
import Technology from "@/components/Technology";
import Git from "@/components/Git";
import Aboutme from "@/components/Aboutme";
import Contactme from "@/components/Contactme";

export default function Home() {
  return (
    <div >
<NavbarC />
<div className="bg-bg p-4 md:p-6">
<Profile/>
<Projects />
<Git/>
<Technology/>
<Aboutme />
<Contactme />
</div>
    </div>
  );
}

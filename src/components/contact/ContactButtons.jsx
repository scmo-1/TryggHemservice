import React from "react";
import AppLink from "../ui/AppLink";
import { motion } from "motion/react";
import AppButton from "../ui/AppButton";
import { Phone, Mail } from "lucide-react";

function ContactButtons({ content }) {
  return (
    <div className="flex flex-col gap-4">
      <AppButton color="white">
        <Mail className="h-6 w-6" /> {content.email}
      </AppButton>
      <AppButton color="white">
        <Phone className="h-6 w-6" /> {content.phone}
      </AppButton>
    </div>
  );
}

export default ContactButtons;

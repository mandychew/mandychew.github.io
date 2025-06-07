import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import MyImage from "../assets/picture.jpg";

interface ProfileSectionProps {
  name?: string;
  tagline?: string;
  linkedInUrl?: string;
  profileImageUrl?: string;
}

const ProfileSection = ({
  name = "Mandy Chew",
  tagline = "Computing, Law & Digital Business Student at Singapore Management University",
  linkedInUrl = "https://www.linkedin.com/in/mandy-chew/",
  profileImageUrl = MyImage,
}: ProfileSectionProps) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full flex-grow">
      <div className="w-full h-full md:w-1/3 bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex items-center justify-center">
        <Avatar className="h-48 w-48 rounded-full border-4 border-white shadow-lg">
          <AvatarImage src={profileImageUrl} alt={name} />
          <AvatarFallback className="text-4xl">{name.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-full h-full md:w-2/3 p-8 flex flex-col justify-center space-y-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {name}
          </h1>
          <p className="mt-2 text-lg text-gray-600">{tagline}</p>
        </div>

        <div className="pt-4">
          <p className="text-gray-700 mb-4">
            Check out my LinkedIn profile for my experiences and certifications
          </p>
          <Button
            variant="outline"
            className="flex items-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            onClick={() => window.open(linkedInUrl, "_blank")}
          >
            <ExternalLink size={16} />
            LinkedIn Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;

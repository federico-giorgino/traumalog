import { Icons } from "@/components/ui/icons";
export type Area = {
  title: string;
  description: string;
  slug: string;
  icon: any;
};

export const MAIN_AREAS: Area[] = [
  {
    title: "Trauma",
    slug: "trauma",
    description: "Comprehensive care for injuries and fractures.",
    icon: Icons.trauma,
  },
  {
    title: "Prosthetic",
    slug: "prosthetic",
    description: "Advanced solutions for limb replacement and rehabilitation.",
    icon: Icons.prostethic,
  },
  {
    title: "Arthroscopy",
    slug: "arthroscopy",
    description:
      "Joint inspection and treatment using minimally invasive techniques.",
    icon: Icons.arthroscopy,
  },
];

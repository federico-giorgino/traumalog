import { Area } from "@/lib/data";
import { NavigationMenuLink } from "./ui/navigation-menu";

interface NavigationItemItemProps {
  area: Area;
}

export function NavigationItem({ area }: NavigationItemItemProps) {
  const { title, description, slug, icon: Icon } = area;
  return (
    <li>
      <NavigationMenuLink asChild>
        <a className="flex select-none space-x-4 rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer items-center">
          <Icon className="text-primary size-10" />
          <div>
            <p className="mb-1 font-bold leading-none text-foreground">
              {title}
            </p>
            <p className="line-clamp-2 text-muted-foreground text-sm">
              {description}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

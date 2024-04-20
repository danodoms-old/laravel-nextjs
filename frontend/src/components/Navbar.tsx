import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./ui/mode-toggle";

export default function Navbar() {
  return (
    <nav className="flex flex-auto w-full fixed top-0 backdrop-blur border-b px-4 py-2 z-10">
      <div className="flex mr-auto gap-4">
        <p className="font-semibold text-sm content-center">/timesync.</p>
        <a
          href="/schedule"
          className="font-semibold text-sm opacity-75 content-center"
        >
          Schedule
        </a>
      </div>

      <div className="flex ml-auto gap-4">
        <div className="flex size-10">
          <ModeToggle />
        </div>

        <Avatar className="flex flex-initial ml-auto">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}

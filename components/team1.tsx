import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import avatar1 from "@/app/img/cathie.jpg";
import avatar2 from "@/app/img/uche-2.png";
import avatar3 from "@/app/img/eti.jpg";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

interface Team1Props {
  heading?: string;
  subheading?: string;
  description?: string;
  members?: TeamMember[];
  className?: string;
}

const Team1 = ({
  heading = "Meet Our Team",
  description = "A passionate team of coaches, creators, and community builders dedicated to helping beginners earn online and thrive.",
  members = [
    {
      id: "member-1",
      name: "Catherine Anthony Ikono",
      role: "Lead Coach & Founder",
      avatar: avatar1.src,
    },
    {
      id: "member-2",
      name: "Uche Godswill",
      role: "Web Developer",
      avatar: avatar2.src,
    },
    {
      id: "member-3",
      name: "Amaka Osei",
      role: "Community Manager",
      avatar: avatar3.src,
    },
    {
      id: "member-4",
      name: "Tolu Adeyemi",
      role: "Graphics & Design Coach",
      avatar: avatar1.src,
    },
    {
      id: "member-5",
      name: "Ngozi Uche",
      role: "Content & VA Coach",
      avatar: avatar1.src,
    },
    {
      id: "member-6",
      name: "Emeka Okafor",
      role: "Social Media Coach",
      avatar: avatar1.src,
    },
  ],
  className,
}: Team1Props) => {
  return (
    <section
      id="team"
      className={cn(
        "py-16 md:py-20 lg:py-24 flex flex-col items-center",
        className,
      )}
    >
      <div className="container flex flex-col items-center text-center">
        <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
          {heading}
        </h2>
        <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
          {description}
        </p>
      </div>
      <div className="container mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <Avatar className="mb-4 size-20 border md:mb-5 lg:size-24">
              <AvatarImage src={member.avatar} />
              <AvatarFallback>{member.name}</AvatarFallback>
            </Avatar>
            <p className="text-center font-medium">{member.name}</p>
            <p className="text-center text-muted-foreground">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Team1 };

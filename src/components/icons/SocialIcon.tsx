type SocialType =
  | "email"
  | "linkedin"
  | "whatsapp"
  | "instagram"
  | "github"
  | "location";

const ICONS: Record<SocialType, string> = {
  email: "/Logo_Email.png",
  linkedin: "/Logo_linkedin.png",
  whatsapp: "/Logo_Whatsapp.png",
  instagram: "/Logo_Instagram.png",
  github: "/github_logo_icon_229278.webp",
  location: "/Lokasi.png",
};

interface SocialIconProps {
  type: SocialType;
  size?: number;
  variant?: "default" | "circle";
  className?: string;
}

export function SocialIcon({
  type,
  size,
  variant = "default",
  className = "",
}: SocialIconProps) {
  const dimensionProps =
    size != null ? { width: size, height: size } : {};

  const variantClass =
    variant === "circle"
      ? "h-full w-full rounded-full object-cover"
      : "object-contain";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={ICONS[type]}
      alt=""
      {...dimensionProps}
      className={`${variantClass} ${className}`}
      aria-hidden="true"
      draggable={false}
    />
  );
}

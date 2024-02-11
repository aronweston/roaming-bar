import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Button, ButtonProps } from "./ui/button";

type LinkProps = ButtonProps & NextLinkProps;

const MainLink = ({ size, href, variant, className, children, ...rest }: LinkProps) => {
  return (
    <Button asChild variant={variant ?? "link"} size={size} className={className}>
      <NextLink href={href}>{children}</NextLink>
    </Button>
  );
};

MainLink.displayName = "MainLink";

export default MainLink;

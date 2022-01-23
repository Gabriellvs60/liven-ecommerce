import {
  Breadcrumbs as MuiBreadcrumbs,
  BreadcrumbsProps as MuiBreadcrumbsProps,
  Typography,
} from "@mui/material";
import React from "react";
import { useIntl } from "react-intl";
import MuiLink from "../../atoms/MuiLink";

type BreadcrumbLinkProps = {
  href: string;
  labelId: string;
};

type CustomProps = {
  links: BreadcrumbLinkProps[];
};

type BreadcrumbsProps = CustomProps & MuiBreadcrumbsProps;

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  links,
}: BreadcrumbsProps) => {
  const { formatMessage } = useIntl();

  return (
    <MuiBreadcrumbs>
      {links.map((link) => (
        <MuiLink href={link.href}>
          <Typography variant="h6" textTransform="uppercase">
            {formatMessage({ id: link.labelId })}
          </Typography>
        </MuiLink>
      ))}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;

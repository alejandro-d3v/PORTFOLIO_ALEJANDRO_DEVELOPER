/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

interface IconAppProps {
  name: string;
  size?: string;
  color?: string;
  className?: string;
  [key: string]: any;
}

export default function IconApp({ name = '', size = 'w-6 h-6', color = 'currentColor', className = '', ...props }: IconAppProps) {
  const [IconComponent, setIconComponent] = React.useState<React.ComponentType<React.SVGProps<SVGSVGElement>> | null>(null);

  React.useEffect(() => {
    import(`../../public/assets/icons/${name}.svg`)
      .then((module) => setIconComponent(() => module.default))
      .catch(() => setIconComponent(null));
  }, [name]);

  if (!IconComponent) {
    return <span>Icono no encontrado</span>;
  }

  return (
    <IconComponent
      className={`${size} ${color} ${className}`}
      {...props}
    />
  );
}

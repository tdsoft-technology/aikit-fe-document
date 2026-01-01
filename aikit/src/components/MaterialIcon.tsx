import clsx from 'clsx';
import type {CSSProperties, HTMLAttributes} from 'react';

type MaterialIconProps = {
  name: string;
  className?: string;
  size?: number;
  color?: string;
};

const BASE_CLASSES = 'material-symbols-outlined';

export default function MaterialIcon({
  name,
  className,
  size = 24,
  color,
  ...rest
}: MaterialIconProps & Omit<HTMLAttributes<HTMLElement>, 'className'>) {
  const style: CSSProperties = {
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48",
    fontSize: `${size}px`,
  };

  if (color) {
    style.color = color;
  }

  return (
    <i className={clsx(BASE_CLASSES, className)} style={style} aria-hidden="true" {...rest}>
      {name}
    </i>
  );
}

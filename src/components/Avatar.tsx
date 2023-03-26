import style from "./Avatar.module.css";

interface AuthorProps{
  hasBorder?: boolean,
  src: string,
  alt?: string;
}


function Avatar({hasBorder = true, src, alt }: AuthorProps) {
  return (
    <img
      className={hasBorder ? style.avatarWithBorder : style.avatar}
      src={src}
      alt={alt}
    />
  );
}

export default Avatar;

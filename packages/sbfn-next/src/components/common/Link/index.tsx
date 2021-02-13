import NextLink from 'next/link';

export const Link = (props) => {
  const { children, ...restProps } = props;
  return (
    <NextLink {...restProps}>
      <a>{children}</a>
    </NextLink>
  );
};

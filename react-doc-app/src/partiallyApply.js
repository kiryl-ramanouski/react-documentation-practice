export const Button = (props) => {
  return (
    <>
      <button
        style={{
          backgroundColor: props.backgroundColor,
          width: '300px',
          minHeight: '200px',
        }}
      >
        Press
      </button>
    </>
  );
};

const partiallyApply = (Component, partialProps) => {
  return (props) => {
    return <Component {...props} {...partialProps} />;
  };
};

export const DangerButton = partiallyApply(Button, { backgroundColor: 'red' });

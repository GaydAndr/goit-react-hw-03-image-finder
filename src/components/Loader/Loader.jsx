import { Grid } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Grid
      height="80"
      width="80"
      color="#00BFFF"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 200,
      }}
    />
  );
};

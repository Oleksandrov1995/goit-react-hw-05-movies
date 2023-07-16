
import {ThreeDots} from 'react-loader-spinner'
export const LoadingIndicator = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <ThreeDots
      height={80}
      width={80}
      radius={9}
      color="blue"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  </div>
  );
};


import { useRoutes } from 'react-router-dom';
import appRoutes from './app';

const Routes = () => {
  return useRoutes([appRoutes])
}

export default Routes
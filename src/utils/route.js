import { matchPath } from 'react-router';

const isCurrent = function (currentPath, routePath, exact) {
  const match = matchPath(currentPath, {
    path: routePath,
    exact: exact
  });

  return match !== null;
};

export { isCurrent };

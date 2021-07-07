import { override, addLessLoader, addWebpackAlias } from 'customize-cra';
// import { addLessLoader } from 'customize-cra-less-loader';
// const { override, addLessLoader, addWebpackAlias } = require('customize-cra');
import {path} from 'path';


export default override(
    addLessLoader({
        lessLoaderOptions: {
            lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                    '@primary-color': '#2b4acb'
                }
            }
        }
    }),
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src')
    })
);
// export default override(
//     fixBabelImports('import', {
//         libraryName: 'antd',
//         libraryDirectory: 'es',
//         style: true,
//     }),
//     addLessLoader({
//     javascriptEnabled: true,
//     modifyVars: { '@primary-color': '#1DA57A' },
//     }),
// );
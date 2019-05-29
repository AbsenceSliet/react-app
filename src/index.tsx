import { LocaleProvider } from 'antd'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './styles/index.scss';

import RouterMap from './router'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <LocaleProvider locale={zhCN}>
        <RouterMap />
    </LocaleProvider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();

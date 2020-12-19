import React from 'react';
import styles from './CSSModule.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CSSModule = () => {
    yar
    return (
        <div className={cx('wrapper', 'inverted')}>
            안녕하세요, 저는 <span className="something">CSS module</span>
        </div>
    );
};

export default CSSModule;
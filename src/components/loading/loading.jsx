import React from 'react';
import styles from './loading.module.css';
import './loading.css';
import { Spin, Alert } from 'antd';

const Loading = (props) => {

    return (
        <section className={styles.loadingBack}>
            <div className={styles.loading}>
                <Spin tip="Loading...">
                    <div className={styles.none}>
                        <Alert
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="info"
                        />
                    </div>
                </Spin>
            </div>
        </section>
    )
}

export default Loading;
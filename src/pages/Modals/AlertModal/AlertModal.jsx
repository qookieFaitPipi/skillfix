import React, {useEffect} from "react";
import styles from './AlertModal.module.scss';

// redux
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { setAlertModalState } from './../../../redux/slices/modalSlice';

const AlertModal = (props) => {
  const {alertModalState} = useSelector((state) => state.modalSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if(alertModalState == true) {
      setTimeout(() => {
        dispatch(setAlertModalState({alertModalState: false}));
      }, 6 * 1000);
    }
  }, [alertModalState]);

  return(
    <div className={alertModalState ? styles.active : styles.alertModal} onClick={() => dispatch(setAlertModalState({alertModalState: false}))}>
      <div className={styles.alertModalContent}>
        <div className={styles.alertModalInfoBlock}>
          <div className={styles.alertModalInfoText}>{'alertModalText'}</div>
        </div>
        <div className={styles.alertModalDartBlock}>
          <div className={styles.alertModalDart} onClick={() => dispatch(setAlertModalState({alertModalState: false}))}>&times;</div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(AlertModal);
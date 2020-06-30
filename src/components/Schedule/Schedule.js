import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './Schedule.module.scss';
import CurrentTimeLine from './CurrentTimeline';
import Program from './Program';
import { fetchFromResourceApi } from '../../utils/bluethink-resourcefile-api';

const Slideshow = () => {
  const [currentSchedule, setCurrentSchedule] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(0);
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().split('T')[0],
  );

  useEffect(() => {
    let ignore = false;
    async function fetchSchedule() {
      const apiResponse = await fetchFromResourceApi(
        `/site-info/livestream-schedules/${process.env.GATSBY_UID}/${currentDate}.json`,
      );
      if (!apiResponse || !apiResponse.data) {
        return;
      }
      setCurrentSchedule(apiResponse.data);
    }
    if (!ignore) {
      setCurrentDate(new Date().toISOString().split('T')[0]);
      fetchSchedule();
    }
    return () => {
      ignore = true;
    };
  }, [currentDate]);

  useEffect(() => {
    let ignore = false;
    let timer;
    function updateCurrrentEvent() {
      if (typeof currentSchedule === 'undefined') {
        return;
      }
      let i = 0;
      let elemStartTime;
      let elemStopTime;
      const now = new Date();
      while (i < currentSchedule.length) {
        elemStartTime = new Date(Date.parse(currentSchedule[i].start_time));
        elemStopTime = new Date(Date.parse(currentSchedule[i].stop_time));
        if (elemStartTime < now && elemStopTime > now) {
          const eventDuration = elemStopTime.getTime() - now.getTime();
          timer = setTimeout(() => {
            updateCurrrentEvent();
          }, eventDuration);
          setCurrentEvent(i);
          return;
        }
        i += 1;
      }
      setCurrentEvent(undefined);
    }
    if (!ignore) {
      updateCurrrentEvent();
    }
    return () => {
      clearTimeout(timer);
      ignore = true;
    };
  }, [currentSchedule]);

  return (
    <section className={classNames(styles.scheduleWrapper)}>
      <CurrentTimeLine
        heading={
          <h3 className={styles.timeline__heading}>Currently streaming</h3>
        }
        event={currentSchedule[currentEvent]}
        className={classNames(styles.currentTimeline)}
      />
      <Program
        events={currentSchedule.slice(currentEvent + 1)}
        heading="Upcoming events"
        className={classNames(styles.program)}
      />
    </section>
  );
};

export default Slideshow;

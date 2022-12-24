"use strict";
class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (time === null || callback === undefined) {
            throw new Error("Отсутствуют обязательные аргументы");
        }

        //if (time in this.alarmCollection)
        if (this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время')
        }

        this.alarmCollection.push({time, callback, canCall: true});
    }

    removeClock(time) {           //удаляет звонок с определенным временем time
        this.alarmCollection = this.alarmCollection.filter(removedClock => removedClock.time !== time);
    }
    
    getCurrentFormattedTime(){  //возвращает текущее время как строку "ЧЧ:ММ"
        let fmt = t => ("" + t).padStart(2, '0');
        return fmt(new Date().getHours()) + ":" + fmt(new Date().getMinutes());
    }

    start() {
        /*function checkClock() {
            let clockTime = this.alarmCollection[time];
            if (getCurrentFormattedTime() === clockTime) {
                this.callback();
            }*/

        if (this.intervalId !== null) {
                return; 
        }
        let func = this.alarmCollection.forEach(alarm => {
            if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                this.alarm.canCall = false;
                this.alarm.callback = callback();
            }
        });
        this.intervalId = setInterval(func, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
        //let clock = new AlarmClock();
        //for (this.alarmCollection.canCall in this.alarmCollection) {
          // this.alarmCollection.canCall = true;
        //}
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
        /*if (this.time === null) {
            throw new Error ("Время не было передано");
        }*/
    }


}
    


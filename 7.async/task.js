"use strict";
class AlarmClock {
    constructor(alarmCollection = [], intervalId = null) {
        this.alarmCollection = alarmCollection;
        this.intervalId = intervalId;
    }

    addClock(time, callback) {
        this.time = time;
        
        if (this.time === null || callback === undefined) {
            throw new Error("Отсутствуют обязательные аргументы");
        }

        if (time in this.alarmCollection) {
            console.warn('Уже присутствует звонок на это же время')
        }

        this.alarmCollection.push({time: time, callback: callback, canCall: true});
    }

    removeClock(time) {           //удаляет звонок с определенным временем time
        this.alarmCollection = this.alarmCollection.filter(removedClock => removedClock.time !== time);
    }
    
    getCurrentFormattedTime(){  //возвращает текущее время как строку "ЧЧ:ММ"
        let fmt = t => ("" + t).padStart(2, '0');
        let currFormattedTime = fmt(new Date().getHours()) + ":" + fmt(new Date().getMinutes());
        return currFormattedTime;
    }

    start() {
        /*function checkClock() {
            let clockTime = this.alarmCollection[time];
            if (getCurrentFormattedTime() === clockTime) {
                this.callback();
            }*/

        if (this.intervalId !== undefined) {
                return; 
            }
        this.intervalId = setInterval(this.alarmCollection.forEach(time => {
            if (this.alarmCollection.time === getCurrentFormattedTime() && this.alarmCollection.canCall) {
                this.alarmCollection.canCall = false;
                callback();
            }}), 1000)

    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.canCall.forEach(canCall => canCall = true);
    }

    clearAlarms() {
        this.stop;
        this.alarmCollection = [];
        if (this.time === null) {
            throw new Error ("Время не было передано");
        }
    }


}
    

